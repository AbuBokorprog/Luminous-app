"use client";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "@/redux/feature/counter/api";
import swal from "sweetalert";
import { authContext } from "@/utils/provider/auth_provider";
import React, { useContext } from "react";
import Image from "next/image";
import LoadingSpinner from "@/components/loadingSpinner";

const AllProducts = () => {
  const { currentUser } = useContext(authContext);
  const { data: product, isLoading, refetch, error } = useGetProductQuery();

  const [updateProduct, { isError }] = useUpdateProductMutation();

  const pendingHandler = async (id) => {
    const newData = { status: "pending" };
    try {
      const response = await updateProduct({ id, data: newData });
      if (response) {
        alert("Product updated");
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const approvedHandler = async (id) => {
    const newData = { status: "approved" };
    try {
      const response = await updateProduct({ id, data: newData });
      if (response) {
        alert("Product updated");
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const declinedHandler = async (id) => {
    const newData = { status: "declined" };
    try {
      const response = await updateProduct({ id, data: newData });
      if (response) {
        alert("Product updated");
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const pendingProducts = product?.filter((p) => p.status === "pending");

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h2 className="text-4xl font-medium text-center mx-auto">
            All Products ({product.length})
          </h2>
          <div className="mt-4 grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 mx-auto items-center md:gap-4 lg:gap-2">
            {product?.map((p) => (
              <div key={p._id}>
                <div className="w-full lg:w-72 my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Image
                    className="rounded-t-lg lg:h-44 w-full"
                    src={p?.images[0]}
                    alt={p?.name}
                    width={400}
                    height={400}
                  />
                  <div className="p-2">
                    <h2 className="mb-2 text-xl font-bold tracking-tight text-dark-900 dark:text-white">
                      {p?.name.slice(0, 25)}
                    </h2>

                    <p className="mb-3 font-normal text-primary-500 ">
                      Price: {p?.price}
                    </p>
                    <div className="grid grid-cols-3 gap-3 mx-auto items-center">
                      {p?.status === "pending" ? (
                        <button
                          disabled
                          className=" px-2 py-2 text-sm font-medium text-center text-white bg-dark-700 rounded-lg hover:bg-dark-800 focus:ring-4 focus:outline-none focus:ring-dark-300 dark:bg-dark-600 dark:hover:bg-dark-700 dark:focus:ring-dark-800"
                        >
                          Pending
                        </button>
                      ) : (
                        <button
                          onClick={() => pendingHandler(p?._id)}
                          className=" px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Pending
                        </button>
                      )}
                      {p?.status === "approved" ? (
                        <button
                          disabled
                          className=" px-3 py-2 text-sm font-medium text-center text-white bg-dark-700 rounded-lg hover:bg-dark-800 focus:ring-4 focus:outline-none focus:ring-dark-300 dark:bg-dark-600 dark:hover:bg-dark-700 dark:focus:ring-dark-800"
                        >
                          Approved
                        </button>
                      ) : (
                        <button
                          onClick={() => approvedHandler(p?._id)}
                          className=" px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Approved
                        </button>
                      )}

                      {p?.status === "declined" ? (
                        <button className="px-3 py-2 text-sm font-medium text-center text-white bg-dark-700 rounded-lg hover:bg-dark-800 focus:ring-4 focus:outline-none focus:ring-dark-300 dark:bg-dark-600 dark:hover:bg-dark-700 dark:focus:ring-dark-800">
                          Declined
                        </button>
                      ) : (
                        <button
                          onClick={() => declinedHandler(p?._id)}
                          className=" px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Declined
                        </button>
                      )}
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

export default AllProducts;
