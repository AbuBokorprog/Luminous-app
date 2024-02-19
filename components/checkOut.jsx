"use client";
import { useCartGetByUserQuery } from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

const CheckOut = () => {
  const { currentUser } = useContext(authContext);
  const {
    data: cart,
    isLoading: cartLoading,
    isError,
    refetch,
    error: cartError,
  } = useCartGetByUserQuery(currentUser?._id);

  const totalPrice = cart?.reduce((total, item) => {
    const itemPrice = (item.discountPrice || item.price) * item.quantity;
    return total + itemPrice;
  }, 0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-3xl font-semibold">BILLING & SHIPPING</h2>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 item-center gap-4">
          <div>
            <label
              htmlFor="displayName"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your name"
              {...register("displayName", { required: true })}
              aria-invalid={errors.displayName ? "true" : "false"}
            />
            {errors.displayName?.type === "required" && (
              <p role="alert">Name is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Your Phone
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your phone"
              type="number"
              {...register("phone", { required: true })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone?.type === "required" && (
              <p role="alert">Phone is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Your email(optional)
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your email"
              type="email"
              {...register("email")}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 item-center gap-4">
          <div>
            <label
              htmlFor="district"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              District
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your district"
              {...register("district", { required: true })}
              aria-invalid={errors.district ? "true" : "false"}
            />
            {errors.district?.type === "required" && (
              <p role="alert">District is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="area"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Area (optional)
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your area"
              {...register("area")}
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your email"
              {...register("address", { required: true })}
              aria-invalid={errors.district ? "true" : "false"}
            />
            {errors.address?.type === "required" && (
              <p role="alert">Address is required</p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="notes"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Order Notes (optional)
          </label>
          <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Type your order notes"
            {...register("notes")}
          />
        </div>
        <div className="mt-20">
          <h3 className="text-3xl font-semibold">YOUR ORDER</h3>
          <div className="md:flex my-8 justify-between gap-10 items-center mx-auto">
            <div className="w-1/2">
              <h3 className="text-2xl font-semibold">Choose Shipping Method</h3>
              <div className="flex justify-between items-center">
                <div className="my-3">
                  <input
                    type="radio"
                    id="Delivery outside Dhaka"
                    value="Delivery outside Dhaka"
                    {...register("outside")}
                  />
                  <label className="ps-2" htmlFor="Delivery outside Dhaka">
                    Delivery outside Dhaka
                  </label>
                </div>
                <p>$ 49.00</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="my-3">
                  <input
                    type="radio"
                    id="Delivery inside Dhaka"
                    value="Delivery inside Dhaka"
                    {...register("inside")}
                  />
                  <label className="ps-2" htmlFor="Delivery inside Dhaka">
                    Delivery inside Dhaka
                  </label>
                </div>
                <p>$ 49.00</p>
              </div>
              <div className="lg:flex my-4 justify-between items-center mx-auto">
                <h5 className="text-xl font-semibold">Cart Total:</h5>
                <p className="text-xl font-semibold">${totalPrice}</p>
              </div>
              <hr />
              <div className="lg:flex text-primary-500 my-4 justify-between items-center mx-auto">
                <h5 className="text-xl font-semibold">Grand Total</h5>
                <p className="text-xl font-semibold">${totalPrice + 49}</p>
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="text-2xl font-semibold">Choose Payment Method</h3>

              <div className="my-3">
                <input
                  type="radio"
                  id="Online Payment"
                  value="Online Payment"
                  {...register("onlinePay")}
                />
                <label className="ps-2" htmlFor="Online Payment">
                  Online Payment
                </label>
              </div>
              <div className="my-3">
                <input
                  type="checkbox"
                  id="terms"
                  value="terms"
                  {...register("terms", { required: true })}
                />
                <label htmlFor="terms" className="text-xl ps-2">
                  I’ve read and accept the{" "}
                  <span className="text-Red">terms & conditions</span> and{" "}
                  <span className="text-Red">Refund & Return Policy </span>*
                </label>
              </div>

              <button className="bg-primary-400 px-6 py-4 text-lg rounded-lg">
                Place To Order
              </button>
            </div>
          </div>
        </div>
        {/* {isLoading ? (
          <button
            type="submit"
            className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Loading....
          </button>
        ) : (
          <button
            type="submit"
            className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Registered
          </button>
        )} */}
      </form>
    </div>
  );
};

export default CheckOut;
