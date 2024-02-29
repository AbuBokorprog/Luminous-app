"use client";
import { authContext } from "@/utils/provider/auth_provider";
import Link from "next/link";
import { useContext } from "react";
import LoadingSpinner from "../loadingSpinner";
import { usePathname } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
const Sidebar = () => {
  const pathname = usePathname();
  const { user, currentUser, logout } = useContext(authContext);
  const logoutHandler = () => {
    fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          logout()
            .then(() => {})
            .catch((error) => {});
        } else {
          toast.error("Logout request failed");
        }
      })
      .catch((error) => {
        toast.error("Error during logout:", error?.message);
      });
  };
  return (
    <>
      <Toaster />
      <div
        className={`dark:bg-gray-900 dark:text-white text-black bg-dark-50 h-screen py-4 rounded-lg px-4`}
      >
        {currentUser?.email === user?.email && (
          <ul>
            {currentUser?.role === "manager" ? (
              <>
                {/* manager */}
                <h2 className="text-xl font-bold p-4">Manager dashboard</h2>
                <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
                  <Link
                    className={`link lg:text-lg mx-auto${
                      pathname === "/manager" ? "text-primary-500" : ""
                    }`}
                    href="/manager"
                  >
                    Dashboard Home
                  </Link>
                </li>
                <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
                  <Link
                    className={`link lg:text-lg mx-auto${
                      pathname === "/manager/addProduct"
                        ? "text-primary-500"
                        : ""
                    }`}
                    href="/manager/addProduct"
                  >
                    Add Product
                  </Link>
                </li>
                <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
                  <Link
                    className={`link lg:text-lg mx-auto${
                      pathname === "/manager/totalProduct"
                        ? "text-primary-500"
                        : ""
                    }`}
                    href="/manager/totalProduct"
                  >
                    Total Product
                  </Link>
                </li>
              </>
            ) : currentUser?.role === "admin" ? (
              <>
                {/* Admin */}
                <h2 className="text-xl font-bold p-4">Admin dashboard</h2>
                <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
                  <Link
                    className={`link lg:text-lg mx-auto${
                      pathname === "/admin" ? "text-primary-500" : ""
                    }`}
                    href="/admin"
                  >
                    Dashboard Home
                  </Link>
                </li>
                <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
                  <Link
                    className={`link lg:text-lg mx-auto${
                      pathname === "/admin/allUsers" ? "text-primary-500" : ""
                    }`}
                    href="/admin/allUsers"
                  >
                    All Users
                  </Link>
                </li>
                <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
                  <Link
                    className={`link lg:text-lg mx-auto${
                      pathname === "/admin/product" ? "text-primary-500" : ""
                    }`}
                    href="/admin/product"
                  >
                    Products
                  </Link>
                </li>
              </>
            ) : currentUser?.role === "user" ? (
              <>
                {/* users */}
                <h2 className="text-xl font-bold p-4">User dashboard</h2>
                <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
                  <Link
                    href="/users"
                    className={`link lg:text-lg mx-auto${
                      pathname === "/users" ? "text-primary-500" : ""
                    }`}
                  >
                    Dashboard Home
                  </Link>
                </li>
                <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
                  <Link
                    className={`link lg:text-lg mx-auto${
                      pathname === "/users/orders" ? "text-primary-500" : ""
                    }`}
                    href="/users/orders"
                  >
                    Orders
                  </Link>
                </li>
                <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
                  <Link
                    className={`link lg:text-lg mx-auto${
                      pathname === "/users/wishlist" ? "text-primary-500" : ""
                    }`}
                    href="/users/wishlist"
                  >
                    Wishlist
                  </Link>
                </li>
                <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
                  <Link
                    className={`link lg:text-lg mx-auto${
                      pathname === "/users/address/editAddress"
                        ? "text-primary-500"
                        : ""
                    }`}
                    href="/users/address/editAddress"
                  >
                    Address
                  </Link>
                </li>
              </>
            ) : (
              <LoadingSpinner />
            )}

            {/* common */}
            <hr className="border-2 mt-32" />
            <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
              <Link className="lg:text-lg mx-auto" href="/profile">
                Profile
              </Link>
            </li>
            <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
              <Link className="lg:text-lg mx-auto" href="/">
                Home
              </Link>
            </li>
            <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
              <Link
                onClick={logoutHandler}
                className="lg:text-lg mx-auto"
                href="/profile"
              >
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
