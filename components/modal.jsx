"use client";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "@/redux/feature/counter/api";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpinner from "./loadingSpinner";
import { useFieldArray, useForm } from "react-hook-form";

export default function Modal({ isOpen, setIsOpen, id }) {
  const {
    data: product,
    isLoading: productLoading,
    error,
    refetch,
  } = useGetProductByIdQuery(id);

  const [update, { isLoading }] = useUpdateProductMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const {
    fields: imagesField,
    append: imagesAppend,
    remove: imagesRemove,
  } = useFieldArray({
    control,
    name: "images",
  });

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = async (data) => {
    const images = data.images;
    const quantity = data.quantity;
    const offer = data.offer;
    const price = data.price;
    const discountPrice = data.discountPrice;
    const details = { images, quantity, offer, price, discountPrice };

    try {
      const result = await update({ id, data: details });
      if (result?.data.success) {
        toast.success(result.data.success);
        refetch();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Toaster />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Product update form
                  </Dialog.Title>
                  <div className="mt-2">
                    {productLoading ? (
                      <LoadingSpinner />
                    ) : (
                      <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div>
                            <label
                              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                              htmlFor="quantity"
                            >
                              Quantity:
                            </label>
                            <input
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              type="number"
                              {...register("quantity", {
                                required: "Quantity is required",
                              })}
                            />
                            {errors.quantity && (
                              <span>{errors.quantity.message}</span>
                            )}
                          </div>

                          {/* <div>
                            <label
                              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                              htmlFor="status"
                            >
                              Status:
                            </label>
                            <select
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              {...register("status", {
                                required: "Status is required",
                              })}
                            >
                              <option value="">Select status</option>
                              <option value="available">Available</option>
                              <option value="out_of_stock">Out of stock</option>
                            </select>
                            {errors.status && (
                              <span>{errors.status.message}</span>
                            )}
                          </div> */}

                          <div>
                            <label
                              htmlFor="images"
                              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                            >
                              Images *:
                            </label>
                            {imagesField.map((imagesField, index) => (
                              <div key={imagesField.id}>
                                <input
                                  type="text"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  {...register(`images.${index}`)}
                                  defaultValue={imagesField.value}
                                />
                                <button
                                  type="button"
                                  className="px-2 py-1 my-2 rounded-md border-2 "
                                  onClick={() => imagesRemove(index)}
                                >
                                  Remove
                                </button>
                              </div>
                            ))}
                            <button
                              className="px-2 py-1 rounded-md border-2 "
                              type="button"
                              onClick={() => imagesAppend("")}
                            >
                              Add Image
                            </button>
                          </div>

                          <div>
                            <label
                              htmlFor="offer"
                              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                            >
                              Offer/Events:
                            </label>
                            <select
                              multiple
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              {...register("offer")}
                            >
                              <option value="">Select Offer</option>
                              <option value="Top Selling">Top Selling</option>
                              <option value="Top Brands">Top Brands</option>
                              <option value="Bogo Offer">Bogo Offer</option>
                              <option value="Free Delivery">
                                Free Delivery
                              </option>
                              <option value="Buy1GET1">Buy 1 GET 1</option>
                              <option value="ClearanceSale">
                                Clearance sale
                              </option>
                            </select>
                          </div>

                          <div>
                            <label
                              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                              htmlFor="price"
                            >
                              Price:
                            </label>
                            <input
                              type="number"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              {...register("price", {})}
                            />
                          </div>

                          <div className="my-2">
                            <label
                              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                              htmlFor="discountPrice"
                            >
                              Discount Price:
                            </label>
                            <input
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              type="number"
                              {...register("discountPrice")}
                            />
                          </div>

                          <div>
                            {isLoading ? (
                              <button
                                type="submit"
                                className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                              >
                                Loading...
                              </button>
                            ) : (
                              <button
                                type="submit"
                                className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                              >
                                Add Product
                              </button>
                            )}
                          </div>
                        </form>
                      </>
                    )}
                  </div>

                  {/* <div className="mt-4"></div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
