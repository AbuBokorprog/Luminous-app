"use client";
import LoadingSpinner from "@/components/loadingSpinner";
import { useGetOrderByIdQuery } from "@/redux/feature/counter/api";
import React from "react";

const SingleOrder = ({ id }) => {
  const { data: order, isLoading, isError } = useGetOrderByIdQuery(id);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="px-2">
          <h2 className="text-xl font-bold my-2">Order #{id}</h2>
          <p className="font-medium">{order?.createdAt.slice(0, 10)}</p>
          <div className="my-6">
            <h3 className="text-2xl my-2">Your Products Details:</h3>
            <>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-dark-700 uppercase bg-dark-50 dark:bg-dark-700 dark:text-dark-400">
                  <tr>
                    <th scope="col" className="px-6 text-md py-3">
                      Products Name
                    </th>
                    <th scope="col" className="px-6 text-md py-3">
                      Quantity
                    </th>
                    <th scope="col" className=" text-md px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                {order?.productDetails?.map((p) => (
                  <tbody key={p?._id}>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td
                        scope="row"
                        className="px-2 py-4 whitespace-nowrap font-medium text-gray-900  dark:text-white"
                      >
                        {p?.name.slice(0, 30)}
                      </td>
                      <td className="px-6 py-4">{p?.quantity}</td>
                      <td className="px-6 py-4">{p?.price}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </>
            <div className="my-6">
              <div className="flex items-center gap-20">
                <p className="text-xl font-semibold">Total Price:</p>
                <p className="text-xl">{order?.price} BDT</p>
              </div>
            </div>
            <div className="lg:flex my-6 items-center justify-center">
              <div className="lg:w-1/2">
                <h2 className="text-xl font-semibold">Billing Address</h2>
                <p>{order?.customerName}</p>
                <p>{order?.shippingAddress.address}</p>
                <p>
                  {order?.shippingAddress.city}, {order?.shippingAddress.state}
                </p>
                <p>{order?.customerEmail}</p>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-xl font-semibold">Shipping Address</h2>
                <p>{order?.customerName}</p>
                <p>{order?.shippingAddress.address}</p>
                <p>
                  {order?.shippingAddress.city}, {order?.shippingAddress.state}
                </p>
                <p>{order?.customerEmail}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleOrder;
