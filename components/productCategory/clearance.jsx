"use client";
import React from "react";
import Image from "next/image";
import clearance from "@/public/images/pageBanner/Nirvana-Color-Category-Banner.webp";
import { useGetProductQuery } from "@/redux/feature/counter/api";
const Clearance = () => {
  const { data: products, isLoading, isError, error } = useGetProductQuery();
  const clearanceProducts = products?.filter((p) => p.category === "clearance");

  return (
    <div>
      <h4 className="text-lg py-8 bg-dark-200 text-center">Clearance Sell</h4>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          {clearanceProducts?.length > 0 ? (
            <div className="my-6 grid grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-4 mx-auto items-center md:gap-4 lg:gap-2">
              {clearanceProducts?.map((p) => (
                <div key={p._id}>
                  <div className="w-full text-center lg:w-72 my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img
                      className="rounded-t-lg lg:h-44 w-full"
                      src={p?.images[0]}
                      alt={p?.name}
                    />
                    <div className="p-2">
                      <h2 className="mb-2 text-center text-xl font-bold tracking-tight text-dark-900 dark:text-white">
                        {p?.name.slice(0, 30)}
                      </h2>

                      <p className="text-lg font-normal text-primary-500 ">
                        ${p?.price}
                      </p>
                    </div>
                    <button className="uppercase text-xl rounded-b-lg py-4 text-white w-full bg-primary-400">
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

export default Clearance;
