"use client";
import { useGetOrderByUserIdQuery } from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import React, { useContext } from "react";

const Order = () => {
  const { currentUser } = useContext(authContext);

  const { data: orderHistory, isLoading } = useGetOrderByUserIdQuery(
    currentUser?._id
  );

  return (
    <>
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl font-medium text-center mx-auto">
            ALL Orders
          </h2>
          {orderHistory.length > 0 ? (
            <>
              {orderHistory?.map((order) => (
                <div className="my-6">
                  <div className="flex flex-col items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
                        Order Id {order?._id}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        total Price: {order?.price}
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        total Price: {order?.createdAt}
                      </p>
                      {/* <button>View Details</button> */}
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div>
              <p>Order History is Empty</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Order;
