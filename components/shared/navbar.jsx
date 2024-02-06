"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        {/* Navbar top line with hamburger menu and website name centered */}
        <div className="bg-white lg:hidden sm:block dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center p-2">
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {/* Hamburger menu icon */}
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Website name */}
          <h2 className="text-xl font-bold">Luminous</h2>
          {/* Placeholder for any additional elements */}
          <div></div>
        </div>

        {/* Sidebar */}
        {isOpen && (
          <aside
            id="default-sidebar"
            className="fixed left-0 z-40 w-64 h-screen lg:hidden block transition-transform translate-x-0 origin-right"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <div className="space-y-2 flex-col font-medium">
                <div>
                  <button>Makeup</button>
                </div>
                <div>
                  <button>Skin</button>
                </div>
                <div>
                  <button>Hair</button>
                </div>
                <div>
                  <button>Personal care</button>
                </div>
                <div>
                  <button>Mom & Baby</button>
                </div>
                <div>
                  <button>Fragrance</button>
                </div>
                <div>
                  <button>Undergarments</button>
                </div>
                <div>
                  <button>Buy 1 GET 1</button>
                </div>
                <div>
                  <button>Clearance Sell</button>
                </div>
                <div>
                  <button>Men</button>
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* Search bar centered */}
        <div className="bg-white dark:bg-gray-900 border-b lg:hidden block border-gray-200 dark:border-gray-600 p-2">
          <div className="flex justify-center">
            <input
              type="search"
              className="p-2 w-72 border-2 border-pink-500 text-sm bg-gray-100 rounded-3xl"
              placeholder="Search for products..."
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-between mx-auto p-2 lg:gap-52">
            <h2 className="w-80 uppercase lg:text-5xl font-bold">Luminous</h2>
            <div className="flex items-center gap-6">
              <div>
                <input
                  type="search"
                  name=""
                  className="p-2 w-96 border-2 border-pink-500 text-sm bg-gray-100 rounded-3xl"
                  placeholder="Search for products..."
                  id=""
                />
              </div>
              <div className="flex gap-4 items-center">
                <button className="bg-gray-100 px-4 py-2 rounded-full">
                  My Account
                </button>
                <button className="bg-pink-400 px-4 py-2 text-white rounded-full">
                  My Bag
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 bg-white text-black gap-12 justify-center flex items-center uppercase">
          <button>Makeup</button>
          <button>Skin</button>
          <button>Hair</button>
          <button>Personal care</button>
          <button>Mom & Baby</button>
          <button>Fragrance</button>
          <button className="px-4 py-1 rounded-full text-white bg-blue-500">
            Undergarments
          </button>
          <button className="px-4 py-1 rounded-full text-white bg-purple-500">
            Buy 1 GET 1
          </button>
          <button className="px-4 py-1 rounded-full text-white bg-cyan-500">
            Clearance Sell
          </button>
          <button className="px-4 py-1 rounded-full text-white bg-green-500">
            Men
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
