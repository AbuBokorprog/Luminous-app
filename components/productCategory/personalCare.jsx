"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import makeup from "@/public/images/pageBanner/Rajkonna-catagory-web-banner.webp";
import {
  useCartGetByUserQuery,
  useCartPostMutation,
  useGetProductQuery,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
const PersonalCare = () => {
  const { currentUser } = useContext(authContext);
  const { data: products, isLoading, isError, error } = useGetProductQuery();
  const personalCareProducts = products?.filter((p) =>
    p.category.some((sub) => sub === "Personal Care")
  );
  const [selectedCategory, setSelectedCategory] = useState("Personal Care");

  const filterProductsByCategory = (category) => {
    return personalCareProducts?.filter((p) =>
      p.sub_category.some((sub) => sub === category)
    );
  };

  const filteredProducts = filterProductsByCategory(selectedCategory);
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
                <button onClick={() => setSelectedCategory("Personal Care")}>
                  Personal Care
                </button>
                <div className="ps-5 flex flex-col justify-start items-start">
                  <button onClick={() => setSelectedCategory("bath&shower")}>
                    Bath & Shower
                  </button>
                  <button onClick={() => setSelectedCategory("Bath & Body")}>
                    Bath & Body
                  </button>
                  <button
                    onClick={() => setSelectedCategory("FeminineHygience")}
                  >
                    Feminine Hygiene
                  </button>
                  <button onClick={() => setSelectedCategory("FeminineCare")}>
                    Feminine Care
                  </button>
                  <button onClick={() => setSelectedCategory("HomeCare")}>
                    Home Care
                  </button>
                  <button onClick={() => setSelectedCategory("Wellness")}>
                    Wellness
                  </button>
                  <button
                    onClick={() => setSelectedCategory("Sexual Wellness")}
                  >
                    Sexual Wellness
                  </button>
                  <button
                    onClick={() => setSelectedCategory("Shop By Concern")}
                  >
                    Shop By Concern
                  </button>
                </div>
              </div>
            </div>
          </div>
          {filteredProducts?.length > 0 ? (
            <div className="my-6 grid grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-3 w-2/3 mx-auto items-center md:gap-4 lg:gap-2">
              {filteredProducts?.map((p) => (
                <div key={p._id}>
                  <div className="w-full text-center lg:w-64 my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Image
                      className="rounded-t-lg lg:h-44 w-full"
                      src={p?.images[0]}
                      alt={p?.name}
                      width={400}
                      height={400}
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
            <div>
              <p>Empty</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PersonalCare;
