"use client";
import {
  useCartDeleteMutation,
  useCartGetByUserQuery,
  useCartUpdateMutation,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import React, { useState, useEffect, useRef, useContext } from "react";
import { FaShoppingBag, FaTrash } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";

const CartButton = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const { currentUser } = useContext(authContext);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const {
    data: cart,
    isLoading: cartLoading,
    isError,
    refetch,
    error: cartError,
  } = useCartGetByUserQuery(currentUser?._id);
  const [cartDelete, { isLoading: deleteIsLoading }] = useCartDeleteMutation();
  const totalQuantity = cart?.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart?.reduce((total, item) => {
    const itemPrice = (item.discountPrice || item.price) * item.quantity;
    return total + itemPrice;
  }, 0);

  const [cartUpdate, { isLoading }] = useCartUpdateMutation();

  const increaseQuantity = async (id, quantity) => {
    const increaseQuantity = { quantity: quantity + 1 };
    try {
      const response = await cartUpdate({ id, data: increaseQuantity });

      if (response.data.success) {
        refetch();
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const decreaseQuantity = async (id, quantity) => {
    const decreaseQuantity = { quantity: quantity - 1 };
    try {
      const response = await cartUpdate({ id, data: decreaseQuantity });

      if (response.data.success) {
        refetch();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const response = await cartDelete(id);
      if (response?.data?.success) {
        refetch();
        alert(response.data.success);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <div
      className={`relative  ${
        isSidebarOpen ? "shadow-xl shadow-dark-500" : ""
      }`}
    >
      <div className="bg-black w-14 md:w-16 text-center p-1 rounded-xl">
        <button
          className="text-white mx-auto "
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaShoppingBag className="w-8 h-8" />
        </button>

        <p className=" text-white">{totalQuantity} Item</p>
      </div>

      {isSidebarOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 right-0 bottom-0 bg-white w-64 lg:w-1/3 p-2 transition-transform duration-300 transform translate-x-0"
        >
          <button
            className="mb-2 lg:mb-5"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <MdOutlineCancel className="w-8 h-8" />
          </button>
          <div className="">
            <div>
              {cartLoading ? (
                <div>
                  <p>loading...</p>
                </div>
              ) : (
                <>
                  {cart?.length > 0 ? (
                    <div>
                      <h2 className="text-2xl text-center">
                        Your Cart {cart?.length}
                      </h2>
                      <div className="overflow-y-scroll">
                        {cart?.map((item) => (
                          <div
                            key={item?._id}
                            className="flex w-full my-2 p-1 bg-dark-100 items-center gap-4"
                          >
                            <div>
                              <img
                                src={item?.image}
                                alt=""
                                className="w-14 lg:w-28 rounded-xl"
                              />
                            </div>
                            <div className="w-80 md:w-full">
                              <h4>{item?.name.slice(0, 20)}</h4>
                              <div className="w-10 text-Red">
                                {item?.discountPrice == null ? (
                                  <p>{item?.price * item?.quantity}</p>
                                ) : (
                                  <p>{item?.discountPrice * item?.quantity}</p>
                                )}
                              </div>
                            </div>
                            <div className="flex gap-1 items-center">
                              <button
                                onClick={() =>
                                  decreaseQuantity(item?._id, item?.quantity)
                                }
                                className="p-2 text-xl hover:text-Red"
                              >
                                -
                              </button>
                              <p className="font-medium">{item?.quantity}</p>
                              <button
                                onClick={() =>
                                  increaseQuantity(item?._id, item?.quantity)
                                }
                                className="p-2 text-xl hover:text-Red"
                              >
                                +
                              </button>
                            </div>
                            <div>
                              <button onClick={() => deleteHandler(item?._id)}>
                                <FaTrash className="text-Red w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                        <div className="bg-dark-100 py-4 ">
                          <p className="text-center text-xl text-Red">
                            Total Price: ${totalPrice}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p>Your cart is empty</p>
                    </>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Link
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              href={"/check_out"}
              className=" text-center bottom-2 absolute w-full lg:w-96 rounded-lg text-xl py-3 hover:bg-primary-400 shadow-lg text-white bg-green"
            >
              Proceed
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartButton;
