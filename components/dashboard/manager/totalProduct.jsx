"use client";
import { useGetProductByUserIdQuery } from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const TotalProduct = () => {
  const router = useRouter();
  const { currentUser } = useContext(authContext);
  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductByUserIdQuery(currentUser?._id);

  if (currentUser?.role !== "manager") {
    router.push("/");
  }
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="text-4xl font-medium text-center mx-auto">
            All Products ({product.length})
          </h2>
          <div className="mt-4 grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 mx-auto items-center md:gap-4 lg:gap-2">
            {product?.map((p) => (
              <div key={p._id}>
                <div className="w-full lg:w-72 my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="rounded-t-lg lg:h-44 w-full"
                    src={p?.images[0]}
                    alt={p?.name}
                  />
                  <div className="p-2">
                    <h2 className="mb-2 text-xl font-bold tracking-tight text-dark-900 dark:text-white">
                      {p?.name.slice(0, 25)}
                    </h2>

                    <p className=" font-normal text-primary-500 ">
                      Price: {p?.price}
                    </p>
                    <p>Status: {p?.status}</p>
                    <div className="flex justify-between items-center">
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TotalProduct;
