"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authContext } from "@/utils/provider/auth_provider";
import { useGetCurrentUserQuery } from "@/redux/feature/counter/api";
const UserDashboard = () => {
  const router = useRouter();
  const { user } = useContext(authContext);
  const { data, isLoading } = useGetCurrentUserQuery(user?.email);
  useEffect(() => {
    if (data?.user[0]?.role !== "user") {
      router.push("/");
    }
  }, []);
  return (
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className="bg-dark-100 lg:h-96 p-2">
          <h2 className="text-2xl font-md">
            Hello {data?.user[0]?.displayName} (not {data?.user[0]?.displayName}
            ? Please Logout)
          </h2>
          <p className="text-md my-2">
            From your account dashboard you can view your recent orders, manage
            your shipping and billing addresses, and edit your password and
            account details.
          </p>
          <p className="mt-10 text-4xl">Account Information</p>
          <p>{data?.user[0]?.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
