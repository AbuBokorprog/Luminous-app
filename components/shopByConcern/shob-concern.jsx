"use client";
import React, { useContext } from "react";
import {
  useCartGetByUserQuery,
  useCartPostMutation,
  useGetProductQuery,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
const ShopByConcern = () => {
  const { currentUser } = useContext(authContext);
  const { data: products, isLoading, isError, error } = useGetProductQuery();
  const acneProducts = products?.filter((p) =>
    p.concern.some((sub) => sub === "shopByConcern")
  );
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
      const response = await postCart(cart);
      if (response?.data?.success) {
        refetch();
        alert(response?.data?.success);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <h4 className="text-lg py-8 bg-dark-200 text-center">Shop By Concern</h4>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          {acneProducts?.length > 0 ? (
            <div className="my-6 grid grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-3 mx-auto items-center md:gap-4 lg:gap-2">
              {acneProducts?.map((p) => (
                <div key={p._id}>
                  <div className="w-full text-center lg:w-72 my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img
                      className="rounded-t-lg lg:h-44 w-full"
                      src={p?.images[0]}
                      alt={p?.name}
                    />
                    <div className="p-2">
                      <h2 className="mb-2 text-center h-12 text-xl font-bold tracking-tight text-dark-900 dark:text-white">
                        {p?.name.slice(0, 30)}
                      </h2>

                      <p className="text-lg font-normal text-primary-500 ">
                        ${p?.price}
                      </p>
                    </div>
                    <button
                      onClick={() => addToCart(p?._id)}
                      className="uppercase text-xl rounded-b-lg py-4 text-white w-full bg-violet hover:bg-primary-400"
                    >
                      Add To Card
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className=" text-center py-10">
              <p>Empty</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShopByConcern;
