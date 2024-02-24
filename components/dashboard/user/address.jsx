"use client";
import { authContext } from "@/utils/provider/auth_provider";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const AddressForm = ({ post, update, addressData, refetch }) => {
  const { currentUser } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (data) => {
    const userId = currentUser?._id;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const companyName = data.companyName;
    const phone = data.phone;
    const state = data.state;
    const postcode = data.postcode;
    const town = data.town;
    const street = data.street;
    const address = {
      firstName,
      lastName,
      userId,
      email,
      companyName,
      phone,
      state,
      postcode,
      town,
      street,
    };
    if (addressData) {
      try {
        const updateResult = await update({
          _id: addressData?._id,
          data: address,
        });
        console.log(updateResult.data);
        toast.success("update");
        refetch();
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      try {
        const result = await post(address);
        console.log(result);
        toast.success("save!");
        refetch();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="w-full">
      <Toaster />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mb-6">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            defaultValue={addressData?.firstName}
            {...register("firstName", { required: true })}
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
          />
          {errors.firstName && (
            <span className="text-red-500">First Name is required</span>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            defaultValue={addressData?.lastName}
            {...register("lastName", { required: true })}
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
          />
          {errors.lastName && (
            <span className="text-red-500">Last Name is required</span>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            defaultValue={addressData?.companyName}
            {...register("companyName")}
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            defaultValue={addressData?.email}
            {...register("email", { required: true })}
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="street"
            className="block text-sm font-medium text-gray-700"
          >
            Street
          </label>
          <input
            type="text"
            id="street"
            defaultValue={addressData?.street}
            {...register("street", { required: true })}
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
          />
          {errors.street && (
            <span className="text-red-500">Street is required</span>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            defaultValue={addressData?.phone}
            {...register("phone", { required: true })}
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
          />
          {errors.phone && (
            <span className="text-red-500">Phone is required</span>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="postcode"
            className="block text-sm font-medium text-gray-700"
          >
            Postcode
          </label>
          <input
            type="number"
            id="postcode"
            defaultValue={addressData?.postcode}
            {...register("postcode")}
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="town"
            className="block text-sm font-medium text-gray-700"
          >
            Town
          </label>
          <input
            type="text"
            id="town"
            defaultValue={addressData?.town}
            {...register("town", { required: true })}
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
          />
          {errors.town && (
            <span className="text-red-500">Town is required</span>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            defaultValue={addressData?.state}
            {...register("state", { required: true })}
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
          />
          {errors.state && (
            <span className="text-red-500">State is required</span>
          )}
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          type="submit"
          className="bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-500"
        >
          Save Address
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
