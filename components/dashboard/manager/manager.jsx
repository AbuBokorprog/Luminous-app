"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authContext } from "@/utils/provider/auth_provider";
const ManagerDashboard = () => {
  const router = useRouter();
  const { currentUser, isLoading } = useContext(authContext);

  useEffect(() => {
    if (!currentUser && currentUser?.role !== "manager") {
      router.push("/login");
    }
  }, [currentUser, router]);

  return (
    <div className="bg-dark-100 text-black dark:text-white dark:bg-gray-900 lg:h-96 p-2">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="text-4xl font-medium text-center mx-auto">Manager</h2>
        </div>
      )}
    </div>
  );
};

export default ManagerDashboard;
