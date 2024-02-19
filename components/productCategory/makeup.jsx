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
        <div className="flex gap-10 my-6">
          <div className="w-1/4">
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                Product Categories
              </h3>
              <hr />
              <div className="my-2 text-xl  text-gray-500">
                <button onClick={() => setSelectedCategory("Makeup")}>
                  Makeup
                </button>
                <div className="ps-5 flex flex-col justify-start items-start">
                  <button onClick={() => setSelectedCategory("face")}>
                    Face
                  </button>
                  <button onClick={() => setSelectedCategory("lips")}>
                    Lips
                  </button>
                  <button onClick={() => setSelectedCategory("eyes")}>
                    Eyes
                  </button>
                  <button onClick={() => setSelectedCategory("nails")}>
                    Nails
                  </button>
                  <button
                    onClick={() => setSelectedCategory("Tools_&_accessories")}
                  >
                    Tools & Accessories
                  </button>
                  <button onClick={() => setSelectedCategory("Top Brands")}>
                    Top Brands
                  </button>
                  <button onClick={() => setSelectedCategory("makeupKits")}>
                    Makeup Kits
                  </button>
                </div>
              </div>
            </div>
          </div>
          {filteredProducts?.length > 0 ? (
            <div className=" w-2/3 grid grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-3 mx-auto items-center lg:gap-8">
              {filteredProducts?.map((p) => (
                <div key={p._id}>
                  <div className="w-full text-center lg:w-64 my-2 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
        </div>
      )}
    </div>
  );
};

export default Makeup;
