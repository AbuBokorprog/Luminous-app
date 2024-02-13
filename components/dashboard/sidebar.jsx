// components/Sidebar.js
"use client";
import { useGetCurrentUserQuery } from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import Link from "next/link";
import { useContext, useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(authContext);
  const { data, isLoading, isError } = useGetCurrentUserQuery(user?.email);

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
          {data?.user[0]?.email === user?.email && (
            <ul>
              {/* users */}

              {data?.user[0]?.role === "user" ? (
                <>
                  <h2 className="text-xl font-bold p-4">User dashboard</h2>
                  <li className="py-2 px-4 my-1 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full">
                    <Link href="/users" className="lg:text-lg mx-auto">
                      Dashboard Home
                    </Link>
                  </li>
                  <li className="py-2 px-4 my-1 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full">
                    <Link className="lg:text-lg mx-auto" href="/users/orders">
                      Orders
                    </Link>
                  </li>
                  <li className="py-2 px-4 my-1 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full">
                    <Link className="lg:text-lg mx-auto" href="/users/address">
                      Address
                    </Link>
                  </li>
                </>
              ) : data?.user[0]?.role === "admin" ? (
                <>
                  {/* manager */}
                  <h2 className="text-xl font-bold p-4">Manager dashboard</h2>
                  <li className="py-2 px-4 my-1 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full">
                    <Link className="lg:text-lg mx-auto" href="/manager">
                      Dashboard Home
                    </Link>
                  </li>
                  <li className="py-2 px-4 my-1 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full">
                    <Link
                      className="lg:text-lg mx-auto"
                      href="/manager/addProduct"
                    >
                      Add Product
                    </Link>
                  </li>
                  <li className="py-2 px-4 my-1 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full">
                    <Link className="lg:text-lg mx-auto" href="/dashboard">
                      Total Product
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {/* Admin */}
                  <h2 className="text-xl font-bold p-4">Admin dashboard</h2>
                  <li className="py-2 px-4 my-1 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full">
                    <Link className="lg:text-lg mx-auto" href="/admin">
                      Dashboard Home
                    </Link>
                  </li>
                  <li className="py-2 px-4 my-1 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full">
                    <Link className="lg:text-lg mx-auto" href="/admin/allUsers">
                      All Users
                    </Link>
                  </li>
                  <li className="py-2 px-4 my-1 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full">
                    <Link className="lg:text-lg mx-auto" href="/admin/product">
                      Products
                    </Link>
                  </li>
                </>
              )}

              {/* common */}
              <hr className="" />
              <li className="py-2 px-4 my-1 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full">
                <Link className="lg:text-lg mx-auto" href="/dashboard/profile">
                  Profile
                </Link>
              </li>
              <li className="py-2 px-4 my-1 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full">
                <Link className="lg:text-lg mx-auto" href="/settings">
                  Settings
                </Link>
              </li>
              <li className="py-2 px-4 my-1 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full">
                <Link className="lg:text-lg mx-auto" href="/profile">
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      )}

      <div
        className={`bg-gray-900 text-black bg-Beige h-screen py-4 rounded-lg px-4 hidden lg:block`}
      >
        {data?.user[0]?.email === user?.email && (
          <ul>
            {data?.user[0]?.role === "manager" ? (
              <>
                {/* manager */}
                <h2 className="text-xl font-bold p-4">Manager dashboard</h2>
                <li className="py-2 px-4 my-4 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full text-center">
                  <Link className="lg:text-lg mx-auto" href="/manager">
                    Dashboard Home
                  </Link>
                </li>
                <li className="py-2 px-4 my-4 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full text-center">
                  <Link
                    className="lg:text-lg mx-auto"
                    href="/manager/addProduct"
                  >
                    Add Product
                  </Link>
                </li>
                <li className="py-2 px-4 my-4 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full text-center">
                  <Link className="lg:text-lg mx-auto" href="/dashboard">
                    Total Product
                  </Link>
                </li>
              </>
            ) : data?.user[0]?.role === "admin" ? (
              <>
                {/* Admin */}
                <h2 className="text-xl font-bold p-4">Admin dashboard</h2>
                <li className="py-2 px-4 my-4 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full text-center">
                  <Link className="lg:text-lg mx-auto" href="/admin">
                    Dashboard Home
                  </Link>
                </li>
                <li className="py-2 px-4 my-4 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full text-center">
                  <Link className="lg:text-lg mx-auto" href="/admin/allUsers">
                    All Users
                  </Link>
                </li>
                <li className="py-2 px-4 my-4 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full text-center">
                  <Link className="lg:text-lg mx-auto" href="/admin/product">
                    Products
                  </Link>
                </li>
              </>
            ) : data?.user[0]?.role === "user" ? (
              <>
                {/* users */}
                <h2 className="text-xl font-bold p-4">User dashboard</h2>
                <li className="py-2 px-4 my-4 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full text-center">
                  <Link href="/users" className="lg:text-lg mx-auto">
                    Dashboard Home
                  </Link>
                </li>
                <li className="py-2 px-4 my-4 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full text-center">
                  <Link className="lg:text-lg mx-auto" href="/users/orders">
                    Orders
                  </Link>
                </li>
                <li className="py-2 px-4 my-4 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full text-center">
                  <Link
                    className="lg:text-lg mx-auto"
                    href="/users/address/editAddress"
                  >
                    Address
                  </Link>
                </li>
              </>
            ) : (
              <p>Loading.....</p>
            )}

            {/* common */}
            <hr className="border-2 mt-44" />
            <li className="py-2 px-4 my-4 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full text-center">
              <Link className="lg:text-lg mx-auto" href="/dashboard/profile">
                Profile
              </Link>
            </li>
            <li className="py-2 px-4 my-4 hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full text-center">
              <Link className="lg:text-lg mx-auto" href="/settings">
                Settings
              </Link>
            </li>
            <li className="py-2 px-4 my-4 text-center hover:text-white hover:bg-dark-800 bg-primary-200 rounded-full">
              <Link className="lg:text-lg mx-auto" href="/profile">
                Logout
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Sidebar;
