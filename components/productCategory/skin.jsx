"use client";
import { useGetProductQuery } from "@/redux/feature/counter/api";
import React, { useState } from "react";
import Image from "next/image";
import banner from "@/public/images/pageBanner/SkinCafe-Category-Banner.webp";
const Skin = () => {
  const { data: products, isLoading, isError, error } = useGetProductQuery();
  const skinProducts = products?.filter((p) =>
    p.category.some((sub) => sub === "Skin")
  );

  const [selectedCategory, setSelectedCategory] = useState("SkinCare");

  const filterProductsByCategory = (category) => {
    return skinProducts?.filter((p) =>
      p.sub_category.some((sub) => sub === category)
    );
  };

  const filteredProducts = filterProductsByCategory(selectedCategory);

  return (
    <div>
      <Image
        className="w-full h-28"
        src={banner}
        alt="Skin banner"
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
                <button onClick={() => setSelectedCategory("SkinCare")}>
                  Skin
                </button>
                <div className="ps-5 flex flex-col justify-start items-start">
                  <button onClick={() => setSelectedCategory("face")}>
                    Face
                  </button>
                  <button onClick={() => setSelectedCategory("body")}>
                    Body
                  </button>
                  <button onClick={() => setSelectedCategory("sunCare")}>
                    Sun Care
                  </button>
                  <button
                    onClick={() => setSelectedCategory("LipBalms/LipCare")}
                  >
                    Lip Balms/Lip Care
                  </button>
                  <button onClick={() => setSelectedCategory("Hair Care")}>
                    Hair Care
                  </button>
                  <button onClick={() => setSelectedCategory("Hands&feet")}>
                    Hand & Feet
                  </button>
                  <button onClick={() => setSelectedCategory("eyeCare")}>
                    Eye Care
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
          {filteredProducts.length > 0 ? (
            <div className="my-6 w-2/3 grid grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-3 mx-auto items-center md:gap-4 lg:gap-2">
              {filteredProducts?.map((p) => (
                <div key={p._id}>
                  <div className="w-full text-center lg:w-64 my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    <button className="uppercase text-xl rounded-b-lg py-4 text-white w-full bg-violet hover:bg-primary-400">
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

export default Skin;
