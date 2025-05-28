import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import logo from "../../../../src/assets/logo.png"
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
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
  <div>
    <img className="h-16 w-16" src={logo} alt="" />
  </div>
  <div className="flex flex-col">
    <span className="text-2xl font-semibold">Modern Homeo Pharmacy</span>
    <span className="text-left">Saidpur</span>
  </div>
</div>


        {/* Nav Links */}
        <nav className="flex space-x-6 text-lg font-medium">
          {/* <div className="relative group">
            <a href="#" className="text-black hover:text-red-500">
              Home
            </a>
            <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-green-900"></div>
          </div> */}
          <div className="relative group">
            <a href="#" className="text-green-800 hover:text-black">
              Shop
            </a>
            <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-green-900"></div>
          </div>
          <a href="#" className="text-green-800 hover:text-black">
            Hand Care
          </a>
          <a href="#" className="text-green-800 hover:text-black">
            Pain & Fever
          </a>
          <a href="#" className="text-green-800 hover:text-black">
            Vitamins
          </a>
          <div className="relative group">
            <a href="#" className="text-green-800 hover:text-black">
              Pages
            </a>
          </div>
          <a href="#" className="text-green-800 hover:text-black">
            News
          </a>
          <div className="relative group">
            <a href="#" className="text-green-800 hover:text-black">
              Blog
            </a>
          </div>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-2xl text-gray-700">
           
          <span className="cursor-pointer"><FaCartPlus className='text-black hover:text-green-700'/></span>
          <span className="cursor-pointer"><GoPeople className='text-green-700 hover:text-black'/></span>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Navbar;