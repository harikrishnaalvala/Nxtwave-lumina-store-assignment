import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

export function Header({ onSearch }) {
  const [searchInput, setsearchInput] = useState("");
  const onSearch1 = () => {
    onSearch(searchInput);
  };
  return (
    <header className="bg-transparent border-b-[0.8px] border-gray-300 h-17.5 flex flex-col justify-center">
      <div className="w-screen px-5 lg:px-15">
        <div className="flex items-center justify-between">
          <h1 className="text-[#284754] text-xl font-bold">Lumina Store</h1>

          <nav className="items-center gap-8 hidden lg:flex">
            <a href="#" className="text-[#284754] hover:text-gray-900">
              Shop
            </a>
            <a href="#" className="text-[#284754] hover:text-gray-900">
              Account
            </a>
            <a href="#" className="text-[#284754] hover:text-gray-900">
              Contact Us
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-gray-900">
              <Search size={20} className="text-[#284754]" />
            </button>
            <button className="text-gray-700 hover:text-gray-900 relative">
              <ShoppingCart size={20} className="text-[#284754]" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-coral-500 text-white text-xs bg-red-600 flex items-center justify-center"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
