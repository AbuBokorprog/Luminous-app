"use client";
import LoadingSpinner from "@/components/loadingSpinner";
import { useUpdateCurrentUserByEmailMutation } from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import { updatePassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
const Profile = () => {
  const { currentUser, refetch, updateUser, updateUserPassword, isLoading } =
    useContext(authContext);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit } = useForm();
  const [updateCurrentUser, { isLoading: updateIsLoading }] =
    useUpdateCurrentUserByEmailMutation();
  const onSubmit = async (data) => {
    const displayName = data.name;
    const email = data.email;
    const confirmPassword = data.confirmPassword;
    const currentPassword = data.currentPassword;
    const newPassword = data.newPassword;
    const photoURL = data.photoURL;

    const user = {
      displayName,
      newPassword,
      photoURL,
    };

    // if (newPassword !== confirmPassword) {
    //   setConfirmPasswordError("Passwords do not match");
    // } else {
    //   setConfirmPasswordError("");
    //   setIsEditing(false);
    //   try {
    //     const result = await updateCurrentUser({ email, user: user });
    //     console.log(result);
    //     if (result?.data?.success) {
    //       toast.success(result.data.success);
    //       refetch();
    //       updateUser(displayName, photoURL)
    //         .then(() => {
    //           updateUserPassword(newPassword);
    //         })
    //         .catch((error) => {
    //           toast.error(error.message);
    //         });
    //     }
    //   } catch (error) {
    //     toast.error(error.message);
    //   }
    // }
  };

  return (
    <div className="px-4 lg:px-0">
      <Toaster />
      {isLoading && updateIsLoading && <LoadingSpinner />}
      <h2 className="lg:text-4xl my-2 text-2xl font-bold text-center">
        Profile
      </h2>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              htmlFor="image"
            >
              Image URL:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="text"
              {...register("image")}
              defaultValue={currentUser?.photoURL}
            />
          </div>
          <div>
            <label
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="text"
              {...register("name")}
              defaultValue={currentUser?.displayName}
            />
          </div>
          <div>
            <label
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="text"
              {...register("email")}
              value={currentUser?.email}
            />
          </div>
          <div>
            <label
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              htmlFor="currentPassword"
            >
              Current Password:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="password"
              {...register("currentPassword", {
                required: true,
              })}
            />
          </div>
          <div>
            <label
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              htmlFor="newPassword"
            >
              New Password:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="password"
              {...register("newPassword", { required: true })}
            />
          </div>
          <div>
            <label
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="password"
              {...register("confirmPassword", { required: true })}
            />
            {confirmPasswordError && (
              <p className="text-Red">{confirmPasswordError}</p>
            )}
          </div>
          <div className="text-center my-4">
            <button
              type="submit"
              className="w-full text-black dark:text-white bg-primary-400 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <img
            src={currentUser?.photoURL}
            alt="User"
            className="mx-auto w-60 h-60 my-2 rounded-full"
          />
          <p className="text-xl">Name: {currentUser?.displayName}</p>
          <p className="text-xl">Email: {currentUser?.email}</p>
        </div>
      )}
      <div className="text-center my-6">
        <button
          disabled
          className=" text-white bg-green hover:bg-green focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green dark:hover:bg-green dark:focus:ring-green"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
