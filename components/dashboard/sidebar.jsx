"use client";
import { authContext } from "@/utils/provider/auth_provider";
import Link from "next/link";
import { useContext } from "react";

const Sidebar = () => {
  const { user, currentUser } = useContext(authContext);

  return (
    <>
      <div
        className={`dark:bg-gray-900 dark:text-white text-black bg-dark-50 h-screen py-4 rounded-lg px-4`}
      >
        {currentUser?.email === user?.email && (
          <ul>
            {currentUser?.role === "manager" ? (
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
                  <Link
                    className="lg:text-lg mx-auto"
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
            ) : currentUser?.role === "user" ? (
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
