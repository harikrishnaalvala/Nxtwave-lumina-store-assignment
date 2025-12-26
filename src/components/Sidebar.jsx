import { ListFilter } from "lucide-react";
import { useState } from "react";

export function Sidebar({ onFilterChange, onSortChange }) {
  const [selectedFilter, setSelectedFilter] = useState("All Products");

  const fitlterObject = {
    "All Products": "All Products",
    "men's clothing": "Men's clothing",
    "women's clothing": "Women's clothing",
    electronics: "Electronics",
    jewelery: "Jewelery",
  };
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <aside className="w-full md:w-64 bg-transparent px-5 lg:px-0 py-5 lg:py-0">
      <div className="flex items-center gap-2 mb-6 justify-start md:justify-start ">
        <ListFilter size={20} className="text-orange-700 font-extrabold" />
        <h2 className="text-[#284754] text-2xl font-bold">Filters</h2>
      </div>

      <div className="mb-8">
        {[
          "All Products",
          "men's clothing",
          "women's clothing",
          "electronics",
          "jewelery",
        ].map((filter) => (
          <label
            key={filter}
            className="
              flex items-center gap-3 mb-4 cursor-pointer group
              px-3 py-3 rounded-2xl bg-white
               md:justify-start
              text-center md:text-left border-gray-300 border-[0.7px]
            "
          >
            <input
              type="radio"
              name="category"
              checked={selectedFilter === filter}
              onChange={() => handleFilterChange(filter)}
              className="
                w-4 h-4 rounded-full
                appearance-none
                border-2
                checked:border-3 border-black
                bg-white
                checked:border-orange-700
                checked:ring-
                checked:ring-offset-2
              "
            />

            <span
              className={`text-sm transition-colors ${
                selectedFilter === filter
                  ? "text-gray-900 font-medium"
                  : "text-gray-600"
              } group-hover:text-gray-900`}
            >
              {fitlterObject[filter]}
            </span>
          </label>
        ))}
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-gray-900 mb-4 font-semibold">Sort By</h3>
        <select
          onChange={(e) =>
            onSortChange(e.target.value === "featured" ? "" : e.target.value)
          }
          className="
            w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600
            focus:outline-none focus:ring-2 focus:ring-orange-700 focus:border-transparent
          "
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </aside>
  );
}
