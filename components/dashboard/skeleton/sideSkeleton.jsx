import { useContext } from "react";
import { authContext } from "@/utils/provider/auth_provider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarSkeleton = () => {
  const pathname = usePathname();
  const { currentUser } = useContext(authContext);

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white text-black bg-dark-50 h-screen py-4 rounded-lg px-4">
        <ul>
          {/* Manager Role */}
          {currentUser?.role === "manager" && (
            <>
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
              {/* Add more menu items for manager role */}
            </>
          )}

          {/* Admin Role */}
          {currentUser?.role === "admin" && (
            <>
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
            </>
          )}

          {/* User Role */}
          {currentUser?.role === "user" && (
            <>
              <h2 className="text-xl font-bold p-4">User dashboard</h2>
              <li className="py-2 text-black px-4 my-4 hover:text-white hover:bg-dark-700 bg-primary-200 dark:bg-gray-800 dark:text-white rounded-full text-center">
                <Link
                  className={`link lg:text-lg mx-auto${
                    pathname === "/users" ? "text-primary-500" : ""
                  }`}
                  href="/users"
                >
                  Dashboard Home
                </Link>
              </li>
            </>
          )}

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
            <Link className="lg:text-lg mx-auto" href="/profile">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarSkeleton;
