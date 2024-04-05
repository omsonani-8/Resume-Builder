import React, { useState } from "react";
import Profile from "./profile";


export const Header = (props) => {
  return (
    <nav id="menu" className="fixed top-0 w-full z-50 bg-gray-800">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#page-top" className="text-white font-bold text-xl">
            Resume Builder
          </a>
          <div className="hidden md:flex space-x-4 items-center mt-2">
            <a href="/" className="text-white   hover:text-gray-300">
              Home
            </a>
            <a href="/profile" className="text-white hover:text-gray-300">
              Resume
            </a>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact
            </a>

            <a
            href="/login"
            className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:shadow-outline-blue transition ease-in-out duration-150"
          >
            Login
          </a>
            <a
              href="/signUp"
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-blue-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150"
            >
              Signin
            </a>          
            
          </div>
          <div className="md:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0  0  20  20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0  3h20v2H0V3zm0  6h20v2H0V9zm0  6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
