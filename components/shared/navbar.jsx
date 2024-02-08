"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  return (
    <>
      {/* mobile */}
      <div>
        <div className="bg-white lg:hidden sm:block dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center p-2">
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6 dark:text-white text-gray-400"
              >
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
              </svg>
            ) : (
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
            )}
          </button>
          <h2 className="text-xl font-bold dark:text-white text-black">
            Luminous
          </h2>
          <div></div>
        </div>
        {isOpen && (
          <aside
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen lg:hidden block transition-transform translate-x-0 origin-right"
          >
            <div className="h-full flex justify-between px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <div className="space-y-2 flex-col dark:text-white text-black font-medium">
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
                  <button className="">Undergarments</button>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-8 h-8 dark:text-white text-black"
                onClick={() => setIsOpen(false)}
              >
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
              </svg>
            </div>
          </aside>
        )}

        {/* Search bar centered */}
        <div className="bg-white dark:bg-gray-900 border-b lg:hidden block border-gray-200 dark:border-gray-600 p-2">
          <div className="flex justify-center">
            <input
              type="search"
              className="p-2 w-72 border-2 border-primary-500 text-sm bg-gray-100 rounded-3xl"
              placeholder="Search for products..."
            />
          </div>
        </div>
      </div>
      {/* Laptop */}
      <div className="hidden lg:block">
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-between mx-auto p-2 lg:gap-52">
            <Link
              href={"/"}
              className="w-80 dark:text-white text-black uppercase lg:text-5xl font-bold"
            >
              Luminous
            </Link>
            <div className="flex items-center gap-6">
              <div>
                <input
                  type="search"
                  name=""
                  className="p-2 w-96 border-2 bg-gray-100 dark:bg-gray-50 text-black dark:text-white border-primary-500 text-sm rounded-3xl"
                  placeholder="Search for products..."
                  id=""
                />
              </div>
              <div className="flex gap-4 items-center relative">
                <button className="bg-primary-400 px-4 py-2 text-white rounded-full">
                  My Bag
                </button>
                <button
                  onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                  className="bg-Beige dark:bg-gray-50 text-black  px-4 py-2 rounded-full"
                >
                  My Account
                </button>
                {isOpenDropdown && (
                  <div className="z-10 hidden absolute -right-4 w-36 top-10 lg:block bg-primary-50 divide-y divide-gray-100 rounded-lg shadow dark:bg-dark-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <Link
                          href={"/dashboard"}
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/login"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Logout
                        </button>
                      </li>
                      <li>
                        <Link
                          href="/sign_up"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign Up
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 bg-white dark:bg-gray-900 gap-12 justify-center flex items-center uppercase font-medium dark:text-white text-black">
          <button>Makeup</button>
          <button>Skin</button>
          <button>Hair</button>
          <button>Personal care</button>
          <button>Mom & Baby</button>
          <button>Fragrance</button>
          <button className="px-4 py-1 rounded-full text-white bg-SubBlue">
            Undergarments
          </button>
          <button className="px-4 py-1 rounded-full text-white bg-Coral">
            Buy 1 GET 1
          </button>
          <button className="px-4 py-1 rounded-full text-white bg-green">
            Clearance Sell
          </button>
          <button className="px-4 py-1 rounded-full text-white bg-Gold">
            Men
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
