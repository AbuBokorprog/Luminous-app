"use client";

import {
  useCartGetByUserQuery,
  useCartPostMutation,
  useGetProductByIdQuery,
} from "@/redux/feature/counter/api";
import React, { useContext } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { authContext } from "@/utils/provider/auth_provider";
import { useRouter } from "next/navigation";

const SingleProduct = ({ id }) => {
  const { currentUser } = useContext(authContext);
  const router = useRouter();
  const { data, isLoading } = useGetProductByIdQuery(id);
  console.log(data);

  const [
    postCart,
    { isLoading: cartIsLoading, isError: cartIsError, error: cartError },
  ] = useCartPostMutation();
  const { refetch } = useCartGetByUserQuery(currentUser?._id);
  const addToCart = async (id) => {
    const userId = currentUser?._id;
    const productId = id;
    const cart = { userId, productId };
    try {
      if (currentUser?.email) {
        const response = await postCart(cart);
        if (response?.data?.success) {
          refetch();
          toast.success(response?.data?.success);
        }
      } else {
        router.push("/login");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Toaster />
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
          <Image src={data?.images[0]} width={500} height={500} />
          <div className="col-span-2">
            <h2 className="text-2xl font-bold">{data?.name.slice()}</h2>
            <div className="my-2">
              {data?.ml && <p className="my-1">({data?.ml})</p>}
              {data?.weight && <p className="my-1">({data?.weight})</p>}

              <div>
                {data?.discountPrice ? (
                  <div className="flex gap-10 items-center">
                    <p className="my-1 text-Red text-2xl font-semibold">
                      {data?.discountPrice}Taka
                    </p>
                    <p className="my-1 line-through text-xl">
                      {data?.price}Taka
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="my-1">{data?.price}Taka</p>
                  </div>
                )}
              </div>
              {data?.quantity > 0 ? (
                <button
                  onClick={() => addToCart(data?._id)}
                  className="uppercase text-xl my-4 rounded-lg py-4 text-white w-1/3 bg-violet hover:bg-primary-400"
                >
                  Add To Card
                </button>
              ) : (
                <button className="uppercase text-xl my-4 rounded-lg py-4 text-white w-1/3 bg-violet hover:bg-primary-400">
                  Out of stock
                </button>
              )}
              <div className=" border p-2 my-4 border-gray-200 rounded-lg shadow md:flex-row bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p>{data?.description}</p>
                <p>Quantity: {data?.quantity}</p>
                {data?.benefits && (
                  <ul className="my-4">
                    <p className="text-xl">Benefits:</p>
                    {data?.benefits?.map((c) => (
                      <li key={c}>- {c}</li>
                    ))}
                  </ul>
                )}
              </div>
              <button>Delivery & Return</button>
              <div>
                <p className="my-1">
                  Categories:{" "}
                  <>
                    {data?.category?.map((c) => (
                      <span key={c}>{c}, </span>
                    ))}
                    {data?.concern?.map((c) => (
                      <span key={c}>{c}, </span>
                    ))}
                    {data?.sub_category?.map((c) => (
                      <span key={c}>{c}, </span>
                    ))}
                  </>
                </p>
                <p className="my-1">Brand: {data?.brands}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
