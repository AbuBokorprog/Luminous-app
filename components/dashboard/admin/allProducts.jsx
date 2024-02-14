"use client";
import { useGetProductQuery } from "@/redux/feature/counter/api";
import React from "react";

const AllProducts = () => {
  const { data, isLoading, isError, refetch, error } = useGetProductQuery();
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="text-4xl font-medium text-center mx-auto">
            All Products
          </h2>
          <div className="mt-4"></div>
        </div>
      )}
    </>
  );
};

export default AllProducts;
