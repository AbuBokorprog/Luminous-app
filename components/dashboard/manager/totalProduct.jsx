"use client";
import {
  useDeleteProductMutation,
  useGetProductByUserIdQuery,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
const TotalProduct = () => {
  const { currentUser } = useContext(authContext);
  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductByUserIdQuery(currentUser?._id);
  const [
    deleteProduct,
    { isLoading: deleteIsLoading, isError: deleteIsError, error: deleteError },
  ] = useDeleteProductMutation();

  const deleteHandler = async (id) => {
    console.log(id);
    try {
      const result = await deleteProduct({ id });
      refetch();
      alert(result?.data?.message);
    } catch (error) {
      alert(error?.message);
    }
  };
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

                    <p className=" font-normal text-primary-500 ">
                      Price: {p?.price}
                    </p>
                    <p>Status: {p?.status}</p>
                    <div className="flex justify-between items-center">
                      <button>Edit</button>
                      <button
                        className="p-2"
                        onClick={() => deleteHandler(p?._id)}
                      >
                        <FaTrash className="w-4 h-4 text-primary-500" />
                      </button>
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
