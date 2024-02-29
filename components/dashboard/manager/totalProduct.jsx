"use client";
import {
  useDeleteProductMutation,
  useGetProductByUserIdQuery,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import Image from "next/image";
import swal from "sweetalert";
import Modal from "@/components/modal";
import Link from "next/link";
import LoadingSpinner from "@/components/loadingSpinner";
import { useRouter } from "next/navigation";
const TotalProduct = () => {
  const router = useRouter();
  const { currentUser } = useContext(authContext);

  // useEffect(() => {

  // }, [currentUser, router]);

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

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState();
  const deleteHandler = async (id) => {
    try {
      const willDelete = await swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this product!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });

      if (willDelete) {
        const result = await deleteProduct({ id });
        if (result.data?.message === "Product deleted") {
          refetch();
          swal(`${result?.data?.message}`, {
            icon: "success",
          });
        }
      } else {
        swal("Your product is safe!");
      }
    } catch (error) {
      swal("Error:", error.message, {
        icon: "error",
      });
    }
  };

  useEffect(() => {
    const lowStockProducts = product?.filter(
      (product) => product.lowStockMessage
    );

    lowStockProducts?.map((p) => {
      swal("warning", p?.lowStockMessage, {
        icon: "warning",
      });
    });

    if (!currentUser && currentUser?.role !== "manager") {
      router.push("/login");
    }
  }, [product, currentUser, router]);

  const modalHandler = (id) => {
    setIsOpen(!isOpen);
    setSelectedProductId(id);
  };

  return (
    <>
      {isLoading || deleteIsLoading ? (
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
                  <Link href={`/product/${p?._id}`}>
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
                    </div>
                  </Link>
                  <div className="flex px-4 justify-between items-center">
                    <button onClick={() => modalHandler(p?._id)}>
                      <MdEditDocument className="w-4 h-4 text-primary-500" />
                    </button>
                    <button
                      className="p-2"
                      onClick={() => deleteHandler(p?._id)}
                    >
                      <FaTrash className="w-4 h-4 text-primary-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {isOpen && (
              <Modal
                id={selectedProductId}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TotalProduct;
