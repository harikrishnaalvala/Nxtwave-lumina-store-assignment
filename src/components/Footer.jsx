import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-360 mx-auto px-5 lg:p-15 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-[#284754] font-bold">Lumina Store</h1>
            </div>
            <p className="text-sm text-gray-600">
              Your one-stop destination for premium modern goods. We source the
              finest materials to bring you quality products.
            </p>
          </div>
          <div>
            <h2 className="text-gray-900 mb-4">COMPANY</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Store Locations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-gray-900 mb-4">SUPPORT</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-gray-900 mb-4">CONNECT</h2>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter size={20} />
              </a>
            </div>

            <h3 className="text-gray-900 mb-4">PAYMENT</h3>
            <div className="flex gap-3">
              <div className="px-3 py-2 border border-gray-200 rounded text-xs text-gray-700">
                VISA
              </div>
              <div className="px-3 py-2 border border-gray-200 rounded text-xs text-gray-700">
                MC
              </div>
              <div className="px-3 py-2 border border-gray-200 rounded text-xs text-gray-700">
                PP
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2024 Lumina Store Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="hover:text-gray-900">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
