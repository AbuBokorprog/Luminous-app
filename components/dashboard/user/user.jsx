"use client";
import React, { useContext, useEffect } from "react";
import { authContext } from "@/utils/provider/auth_provider";
import LoadingSpinner from "@/components/loadingSpinner";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
  const router = useRouter();
  const { currentUser, isLoading } = useContext(authContext);
  useEffect(() => {
    if (!currentUser && currentUser?.role !== "user") {
      router.push("/login");
    }
  }, [currentUser, router]);
  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="bg-dark-100 text-black dark:text-white dark:bg-gray-900 lg:h-96 p-2">
          <h2 className="text-2xl font-md">
            Hello {currentUser?.displayName} (not {currentUser?.displayName}?
            Please Logout)
          </h2>
          <p className="text-md my-2">
            From your account dashboard you can view your recent orders, manage
            your shipping and billing addresses, and edit your password and
            account details.
          </p>
          <p className="mt-10 text-4xl">Account Information</p>
          <p>{currentUser?.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
