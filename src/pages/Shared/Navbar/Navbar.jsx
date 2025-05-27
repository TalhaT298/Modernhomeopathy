import React from 'react';

const Navbar = () => {
    return (
        <div>
          <div className="w-full border-b">
      {/* Top Alert Bar */}
      <div className="flex items-center justify-between bg-white px-6 py-2 text-sm border-b">
        <div className="flex items-center space-x-4">
          <div className="bg-indigo-600 text-white font-semibold px-3 py-1 rounded">
            COVID-19 ALERT!
          </div>
          <span className="text-gray-700">
            We are open with limited hours and staff.
          </span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-700">
          <div className="flex items-center space-x-1">
            <span className="text-orange-500">📞</span>
            <span>(+08) – 1850 – 1865</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-orange-500">✉️</span>
            <span>hello@modeltheme.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-3xl text-red-500 font-bold">➕</div>
          <span className="text-2xl font-semibold">Farmacie</span>
        </div>

        {/* Nav Links */}
        <nav className="flex space-x-6 text-sm font-medium">
          <div className="relative group">
            <a href="#" className="text-black hover:text-red-500">
              Home
            </a>
            <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-500"></div>
          </div>
          <div className="relative group">
            <a href="#" className="text-black hover:text-red-500">
              Shop
            </a>
          </div>
          <a href="#" className="text-black hover:text-red-500">
            Hand Care
          </a>
          <a href="#" className="text-black hover:text-red-500">
            Pain & Fever
          </a>
          <a href="#" className="text-black hover:text-red-500">
            Vitamins
          </a>
          <div className="relative group">
            <a href="#" className="text-black hover:text-red-500">
              Pages
            </a>
          </div>
          <a href="#" className="text-black hover:text-red-500">
            News
          </a>
          <div className="relative group">
            <a href="#" className="text-black hover:text-red-500">
              Blog
            </a>
          </div>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-2xl text-gray-700">
          <span className="cursor-pointer">🤍</span>
          <span className="cursor-pointer">🛒</span>
          <span className="cursor-pointer">👤</span>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Navbar;