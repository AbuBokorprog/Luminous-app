// components/Sidebar.js
"use client";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="lg:hidden absolute top-0 block ml-4 my-3 text-black"
        onClick={toggleSidebar}
      >
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
      {isOpen && (
        <div
          className={`bg-gray-900 bg-white text-black h-screen ${
            isOpen ? "w-44" : "hidden lg:block"
          }`}
        >
          <h2 className="text-xl font-bold p-4">Dashboard</h2>
          <ul>
            <li className="py-2 px-4 hover:bg-gray-800">
              <Link href="/dashboard">Dashboard Home</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-800">
              <Link href="/dashboard/profile">Profile</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-800">
              <Link href="/dashboard/settings">Settings</Link>
            </li>
            {/* Add more sidebar links as needed */}
          </ul>
        </div>
      )}
      <div
        className={`bg-gray-900 text-black border border-black bg-white w-64 h-96 hidden lg:block`}
      >
        <h2 className="text-xl font-bold p-4">Dashboard</h2>
        <ul>
          <li className="py-2 px-4 hover:bg-gray-800">
            <Link href="/dashboard">Dashboard Home</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-800">
            <Link href="/dashboard/profile">Profile</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-800">
            <Link href="/dashboard/settings">Settings</Link>
          </li>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
