"use client";
import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex sm:px-4 lg:px-0 flex-col items-center justify-center h-screen">
      <i className="fas fa-exclamation-triangle text-red-500 text-5xl mb-4"></i>
      <img
        className="w-96"
        src="https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1921.jpg?t=st=1709120013~exp=1709123613~hmac=3c6b20bff005fd3a871154e612d2a29b7cd98b7f798246f57d24dce0bb189d74&w=900"
        alt=""
      />
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-8">
        We apologize for the inconvenience. Please try again later.
      </p>
      <button
        className="px-4 py-2 text-black bg-primary-500 dark:text-white rounded-md shadow-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
