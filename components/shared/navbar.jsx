"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { authContext } from "@/utils/provider/auth_provider";
import {
  useCartGetByUserQuery,
  useGetProductQuery,
} from "@/redux/feature/counter/api";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user, currentUser, logout, isLoading, refetch } =
    useContext(authContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const logoutHandler = () => {
    fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          refetch();
          logout()
            .then(() => {
              toast.success("Logged out");
            })
            .catch((error) => {});
        } else {
          toast.error("Logout request failed");
        }
      })
      .catch((error) => {
        toast.error("Error during logout:", error?.message);
      });
  };
  const {
    data: product,
    isLoading: searchLoading,
    isError: searchError,
    error,
  } = useGetProductQuery();
  const searchHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = product?.filter((p) =>
    p.name.toLowerCase().includes(searchQuery?.toLowerCase())
  );
  const {
    data: cart,
    isLoading: cartLoading,
    isError,
    error: cartError,
  } = useCartGetByUserQuery(currentUser?._id);
  const totalQuantity = cart?.reduce((total, item) => total + item.quantity, 0);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <Toaster />
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
          <Link
            href={"/"}
            className="text-xl font-bold dark:text-white text-black"
          >
            Luminous
          </Link>
          <div></div>
        </div>
        {isOpen && (
          <aside className="fixed top-0 text-black dark:bg-gray-900 dark:text-white bg-white left-0 z-40 w-64 h-screen lg:hidden block transition-transform translate-x-0 origin-right">
            <div className="h-full flex justify-between px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <div className="space-y-2 flex-col dark:text-white text-black font-medium">
                <div className="relative mt-10">
                  <button
                    onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                    className=" px-4 py-2 rounded-full"
                  >
                    <FaRegUserCircle className="w-6 h-6" />
                  </button>
                  {isOpenDropdown && (
                    <div
                      onClick={() => setIsOpenDropdown(false)}
                      className=" lg:hidden absolute right-0 w-28 top-10 block bg-primary-50 divide-y divide-gray-100 rounded-lg shadow dark:bg-dark-700"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {isLoading ? (
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:bg-gray-600 dark:text-white">
                            Loading....
                          </p>
                        ) : (
                          <>
                            {currentUser?.role === "admin" ? (
                              <li>
                                <Link
                                  href={"/admin"}
                                  className="block px-4 py-2 hover:bg-gray-100 dark:bg-gray-600 dark:text-white"
                                >
                                  Dashboard
                                </Link>
                              </li>
                            ) : currentUser?.role === "manager" ? (
                              <li>
                                <Link
                                  href={"/manager"}
                                  className="block px-4 py-2 hover:bg-gray-100 dark:bg-gray-600 dark:text-white"
                                >
                                  Dashboard
                                </Link>
                              </li>
                            ) : currentUser?.role === "user" ? (
                              <li>
                                <Link
                                  href={"/users"}
                                  className="block px-4 py-2 hover:bg-gray-100 dark:bg-gray-600 dark:text-white"
                                >
                                  Dashboard
                                </Link>
                              </li>
                            ) : (
                              <></>
                            )}
                          </>
                        )}
                        {user?.email ? (
                          <li>
                            <button
                              onClick={logoutHandler}
                              className="block px-4 py-2 hover:bg-gray-100 dark:bg-gray-600 dark:text-white"
                            >
                              Logout
                            </button>
                          </li>
                        ) : (
                          <li>
                            <Link
                              href="/login"
                              className="block px-4 py-2 hover:bg-gray-100 dark:bg-gray-600 dark:text-white"
                            >
                              Login
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
                <div>
                  <Link href={"/product_category/makeup"}>Makeup</Link>
                </div>
                <div>
                  <Link href={"/product_category/skin"}>Skin</Link>
                </div>
                <div>
                  <Link href={"/product_category/hair"}>Hair</Link>
                </div>
                <div>
                  <Link href={"/product_category/personal_care"}>
                    Personal care
                  </Link>
                </div>
                <div>
                  <Link href={"/product_category/mom_baby"}>Mom & Baby</Link>
                </div>
                <div>
                  <Link href={"/product_category/fragrance"}>Fragrance</Link>
                </div>
                <div>
                  <Link href={"/product_category/undergarments"} className="">
                    Undergarments
                  </Link>
                </div>
                <div>
                  <Link href={"/product_category/buy1get1"} className="">
                    Buy 1 GET 1
                  </Link>
                </div>
                <div>
                  <Link href={"/product_category/clearance_sell"} className="">
                    Clearance Sell
                  </Link>
                </div>
                <div>
                  <Link href={"/product_category/men"} className="">
                    Men
                  </Link>
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
        <div className="bg-white relative dark:bg-gray-900 border-b lg:hidden block border-gray-200 dark:border-gray-600 p-2">
          <div className="flex justify-center items-center">
            <input
              type="search"
              className="p-2 w-72 border-2 dark:text-white border-primary-500 text-sm bg-gray-100 dark:bg-gray-700 rounded-3xl"
              onChange={searchHandler}
              placeholder="Search for products..."
            />
          </div>
          <div className="">
            {searchQuery.trim !== "" && searchError && (
              <p>Error: {error?.message}</p>
            )}
            {searchQuery.trim() !== "" && filteredProducts && (
              <div className=" absolute z-50 text-center bg-white mx-1 left-1 p-2">
                {filteredProducts?.slice(0, 6)?.map((product) => (
                  <div
                    key={product._id}
                    className="bg-dark-200 grid my-2 grid-cols-2 gap-1 items-center px-1 py-2 justify-center rounded-md"
                  >
                    <img
                      src={product?.images[0]}
                      alt={product.name}
                      className="w-12 rounded-xl"
                    />
                    <div className="text-lg font-bold">
                      {product.name.slice(0, 20)}
                    </div>
                  </div>
                ))}
              </div>
            )}
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
            <div className="flex relative items-center gap-6">
              <div>
                <input
                  type="search"
                  name="search"
                  onChange={searchHandler}
                  className="p-2 w-96 border-2 dark:bg-gray-700 dark:text-white bg-gray-100  text-black border-primary-500 text-sm rounded-3xl"
                  placeholder="Search for products..."
                  id=""
                />
                <div className="">
                  {searchQuery.trim() !== "" && filteredProducts && (
                    <div className=" absolute z-50 text-center bg-white p-2">
                      {filteredProducts?.slice(0, 6)?.map((product) => (
                        <div
                          key={product._id}
                          className="bg-dark-200 grid my-2 grid-cols-2 gap-1 items-center px-1 py-2 justify-center rounded-md"
                        >
                          <img
                            src={product?.images[0]}
                            alt={product.name}
                            className="w-12 rounded-xl"
                          />
                          <div className="text-lg font-bold">
                            {product.name.slice(0, 20)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-4 items-center relative">
                <button
                  onClick={toggleSidebar}
                  className="flex text-lg items-center gap-2 px-4 py-2 bg-primary-400 rounded-full"
                >
                  <FaBagShopping className="w-5 h-5" />{" "}
                  <span>({totalQuantity})</span>
                </button>
                <button
                  onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                  className="bg-Beige dark:bg-gray-800 dark:text-white text-black  px-4 py-2 rounded-full"
                >
                  My Account
                </button>
                {isOpenDropdown && (
                  <div
                    onClick={() => setIsOpenDropdown(false)}
                    className="z-10 hidden absolute right-0 w-32 top-10 lg:block bg-primary-50 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-900 dark:text-white"
                  >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      {isLoading ? (
                        <p className="block px-4 py-2 hover:bg-gray-100 dark:bg-gray-600 dark:text-white">
                          Loading....
                        </p>
                      ) : (
                        <>
                          {currentUser?.role === "admin" ? (
                            <li>
                              <Link
                                href={"/admin"}
                                className="block text-center w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-900 text-black dark:bg-gray-800 dark:text-white"
                              >
                                Dashboard
                              </Link>
                            </li>
                          ) : currentUser?.role === "manager" ? (
                            <li>
                              <Link
                                href={"/manager"}
                                className="block text-center w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-900 text-black dark:bg-gray-800 dark:text-white"
                              >
                                Dashboard
                              </Link>
                            </li>
                          ) : currentUser?.role === "user" ? (
                            <li>
                              <Link
                                href={"/users"}
                                className="block text-center w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-900 text-black dark:bg-gray-800 dark:text-white"
                              >
                                Dashboard
                              </Link>
                            </li>
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                      {user?.email ? (
                        <li>
                          <button
                            onClick={logoutHandler}
                            className="block text-center w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-900 text-black dark:bg-gray-800 dark:text-white"
                          >
                            Logout
                          </button>
                        </li>
                      ) : (
                        <li>
                          <Link
                            href="/login"
                            className="block text-center w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-900 text-black dark:bg-gray-800 dark:text-white"
                          >
                            Login
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 bg-white dark:bg-gray-900 md:gap-2 xl:gap-8 justify-center flex items-center uppercase font-medium dark:text-white text-black">
          <Link href={"/product_category/makeup"}>Makeup</Link>
          <Link href={"/product_category/skin"}>Skin</Link>
          <Link href={"/product_category/hair"}>Hair</Link>
          <Link href={"/product_category/personal_care"}>Personal care</Link>
          <Link href={"/product_category/mom_baby"}>Mom & Baby</Link>
          <Link href={"/product_category/fragrance"}>Fragrance</Link>
          <Link
            href={"/product_category/undergarments"}
            className="xl:px-4 py-1 rounded-full text-white bg-SubBlue"
          >
            Undergarments
          </Link>
          <Link
            href={"/product_category/buy1get1"}
            className="xl:px-4 py-1 rounded-full text-white bg-Coral"
          >
            Buy 1 GET 1
          </Link>
          <Link
            href={"/product_category/clearance_sell"}
            className=" xl:px-4 py-1 rounded-full text-white bg-green"
          >
            Clearance
          </Link>
          <Link
            href={"/product_category/men"}
            className=" xl:px-4 py-1 rounded-full text-white bg-Gold"
          >
            Men
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
