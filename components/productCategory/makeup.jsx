"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import makeup from "@/public/images/pageBanner/Nirvana-Color-Category-Banner.webp";
import {
  useCartGetByUserQuery,
  useCartPostMutation,
  useGetProductQuery,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
const Makeup = () => {
  const { currentUser } = useContext(authContext);
  const { data: products, isLoading, isError, error } = useGetProductQuery();
  const [
    postCart,
    { isLoading: cartIsLoading, isError: cartIsError, error: cartError },
  ] = useCartPostMutation();
  const { refetch } = useCartGetByUserQuery(currentUser?._id);
  const makeupProducts = products?.filter((p) =>
    p.category.some((sub) => sub === "Makeup")
  );
  const [selectedCategory, setSelectedCategory] = useState("Makeup");

  // Function to filter products by category
  const filterProductsByCategory = (category) => {
    return makeupProducts?.filter((p) =>
      p.sub_category.some((sub) => sub === category)
    );
  };
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
  const filteredProducts = filterProductsByCategory(selectedCategory);
  return (
    <div>
      <Image
        className="w-full h-28"
        src={makeup}
        alt="makeup banner"
        width={2000}
        height={500}
      />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          {filteredProducts?.length > 0 ? (
            <div className=" grid grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-3 mx-auto items-center lg:gap-8">
              {filteredProducts?.map((p) => (
                <div key={p._id}>
                  <div className="w-full text-center lg:w-72 my-2 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Image
                      className="rounded-t-lg lg:h-44 w-full"
                      src={p?.images[0]}
                      alt={p?.name}
                      width={300}
                      height={300}
                    />
                    <div className="p-2">
                      <h2 className="mb-2 h-12 text-center text-xl font-bold tracking-tight text-dark-900 dark:text-white">
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

export default Makeup;
