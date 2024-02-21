"use client";
import React from "react";
import Image from "next/image";
import men from "@/public/images/pageBanner/Men-Catagory-Banner.webp";
import { useGetProductQuery } from "@/redux/feature/counter/api";
const BathBody = () => {
  const { data: products, isLoading, isError, error } = useGetProductQuery();
  const menProducts = products?.filter((p) =>
    p.category.some((sub) => sub === "Men")
  );

  const bathBodyProducts = menProducts?.filter((p) =>
    p.sub_category.some((sub) => sub === "Bath & Body")
  );

  return (
    <div>
      <Image
        className="w-full h-28"
        src={men}
        alt="men banner"
        width={2000}
        height={500}
      />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          {bathBodyProducts?.length > 0 ? (
            <div className="my-6 grid grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-3 mx-auto items-center md:gap-4 lg:gap-2">
              {bathBodyProducts?.map((p) => (
                <div key={p._id}>
                  <div className="w-full text-center lg:w-72 my-2 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Image
                      className="rounded-t-lg lg:h-44 w-full"
                      src={p?.images[0]}
                      alt={p?.name}
                      width={400}
                      height={400}
                    />
                    <div className="p-2">
                      <h2 className="mb-2 text-center h-12 text-xl font-bold tracking-tight text-dark-900 dark:text-white">
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
            <div className=" text-center py-10">
              <p>Empty</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BathBody;
