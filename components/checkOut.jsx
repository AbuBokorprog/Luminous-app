"use client";
import {
  useCartGetByUserQuery,
  useGetOrderByUserIdQuery,
  useGetShippingAddressByUserIdQuery,
  usePostOrderMutation,
  usePostPaymentMutation,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

const CheckOut = () => {
  const router = useRouter();
  const { currentUser } = useContext(authContext);
  const {
    data: cart,
    isLoading: cartLoading,
    isError,
    refetch: cartRefetch,
    error: cartError,
  } = useCartGetByUserQuery(currentUser?._id);
  const { data: orderHistory, refetch: orderRefetch } =
    useGetOrderByUserIdQuery(currentUser?._id);
  const totalPrice = cart?.reduce((total, item) => {
    const itemPrice = (item.discountPrice || item.price) * item.quantity;
    return total + itemPrice;
  }, 0);

  const { data: shippingAddressData, isLoading: shippingLoading } =
    useGetShippingAddressByUserIdQuery(currentUser?._id);
  const [postPayment, { error }] = usePostPaymentMutation();
  // const [orderPost, {}] = usePostOrderMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (currentUser?.email) {
      router.push("/login");
    }
    const displayName = data.displayName;
    const phone = data.phone;
    const email = data.email;
    const area = data.area;
    const address = data.address;
    const notes = data.notes;
    const delivery = data.delivery;
    const inside = data.inside;
    const onlinePayment = data.onlinePayment;
    const district = data.district;
    const userId = currentUser?._id;
    const tran_id = Math.floor(100000 + Math.random() * 900000).toString();

    const paymentData = {
      displayName,
      phone,
      email,
      area,
      district,
      address,
      notes,
      userId,
      delivery,
      tran_id,
    };

    try {
      const result = await postPayment(paymentData);
      if (result.data.SSLResJSON.GatewayPageURL) {
        window.location.href = result.data.SSLResJSON.GatewayPageURL;
      } else {
        console.error("Gateway URL not found in the response");
        // Handle the error or display a message to the user
      }
    } catch (error) {
      console.error("Error processing payment:", error.message);
      // Handle the error or display a message to the user
    }
  };
  return (
    <>
      {cartLoading && shippingLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="px-2 lg:px-0">
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
                  type="tel"
                  defaultValue={shippingAddressData?.phone}
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
                  defaultValue={shippingAddressData?.email}
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
                  defaultValue={shippingAddressData?.state}
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
                  Area
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  defaultValue={shippingAddressData?.town}
                  placeholder="Type your area"
                  {...register("area", { required: true })}
                />
                {errors.area?.type === "required" && (
                  <p role="alert">area is required</p>
                )}
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
                  defaultValue={shippingAddressData?.street}
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
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-semibold">
                    Choose Shipping Method
                  </h3>
                  <div className="flex justify-between items-center">
                    <div className="my-3">
                      <input
                        type="radio"
                        id="Delivery outside Dhaka"
                        defaultValue="Delivery outside Dhaka"
                        {...register("delivery")}
                      />
                      <label className="ps-2" htmlFor="delivery">
                        Delivery outside Dhaka
                      </label>
                    </div>
                    <p>$ 100.00</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="my-3">
                      <input
                        type="radio"
                        id="Delivery inside Dhaka"
                        defaultValue="Delivery inside Dhaka"
                        {...register("delivery")}
                      />
                      <label className="ps-2" htmlFor="delivery">
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
                    <p className="text-xl font-semibold">
                      ${totalPrice} + Shipping Charge
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-semibold">
                    Choose Payment Method
                  </h3>

                  <div className="my-3">
                    <input
                      type="radio"
                      id="Online Payment"
                      defaultValue="Online Payment"
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
                      defaultValue="terms"
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
      )}
    </>
  );
};

export default CheckOut;
