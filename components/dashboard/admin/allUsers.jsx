"use client";
import {
  useDeleteUserMutation,
  useGetUserQuery,
} from "@/redux/feature/counter/api";
import Image from "next/image";
import { authContext } from "@/utils/provider/auth_provider";
import React, { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
const AllUsers = () => {
  const { data, isError, isLoading, refetch } = useGetUserQuery();
  const { userDelete } = useContext(authContext);
  const [deleteUser, { error }] = useDeleteUserMutation();
  const deleteHandler = async (id) => {
    console.log(id);
    const result = await deleteUser(id);
    alert(result?.data?.message);
    if (result.data?.message === "User deleted successfully") {
      refetch();
    }
  };
  return (
    <>
      {isLoading ? (
        <p className="h-screen text-center">Loading....</p>
      ) : (
        <div>
          <h2 className="text-4xl font-medium text-center mx-auto">
            All Users
          </h2>

          <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-dark-700 uppercase bg-dark-50 dark:bg-dark-700 dark:text-dark-400">
                <tr>
                  <th scope="col" className="px-6 text-md py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 text-md py-3">
                    UserName
                  </th>
                  <th scope="col" className=" text-md px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className=" text-md px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className=" text-md px-6 py-3">
                    Action
                  </th>
                  <th scope="col" className=" text-md px-6 py-3">
                    Remove
                  </th>
                </tr>
              </thead>
              {data?.map((u) => (
                <tbody key={u?._id}>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="rounded-full"
                        src={u?.photoURL}
                        alt="user Profile"
                        width={60}
                        height={60}
                      />
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {u?.displayName}
                    </th>
                    <td className="px-6 py-4">{u?.email}</td>
                    <td className="px-6 py-4">{u?.role}</td>
                    <td className="px-6 py-4">
                      {u?.role === "user" ? (
                        <button>Make Manager</button>
                      ) : u?.role === "manager" ? (
                        <button>Make Admin</button>
                      ) : (
                        <button>Make Manager</button>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-center">
                        <button
                          onClick={() => deleteHandler(u?._id)}
                          className="hover:text-primary-500 p-2"
                        >
                          <FaTrash className="w-4 h-4 mx-auto" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AllUsers;
