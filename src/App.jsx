import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import ProductCard from "./components/ProductCard";

export default function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All Products");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortType, setSortType] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const normalized = data.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          price: item.price,
          rating: item.rating.rate,
          category: item.category,
          image: item.image,
        }));
        setProducts(normalized);
      });
  }, []);

  let filteredProducts = [...products];

  if (category !== "All Products") {
    filteredProducts = filteredProducts.filter((p) => p.category === category);
  }

  filteredProducts = filteredProducts.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  if (sortType === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortType === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const searchFilter = (searchInput) => {
    const res = products.filter((each) => each.title.includes(searchInput));
    setProducts(res);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onSearch={searchFilter} />

      <div className="pt-6 px-5 lg:px-15">
        <h1 className="mb-2 text-[#284754] font-bold text-3xl lg:text-4xl mt-2">
          Discover Our Products
        </h1>
        <h2 className="text-lg lg:text-xl text-gray-400">
          Browse our latest collection of premium goods designed for the modern
          style.
        </h2>
      </div>

      <div className="flex-1 flex flex-col md:flex-row lg:px-15 py-10 lg:py-12">
        <Sidebar
          onFilterChange={(c) => {
            setCategory(c);
            setVisibleCount(6);
          }}
          onPriceChange={(r) => {
            setPriceRange(r);
            setVisibleCount(6);
          }}
          onSortChange={setSortType}
        />

        <main className="flex-1 px-5 lg:pl-10 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {visibleCount < filteredProducts.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleCount((v) => v + 6)}
                className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full"
              >
                Load More Products
              </button>
            </div>
          )}

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-12">
              No products found.
            </p>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
