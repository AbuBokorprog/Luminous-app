import React from "react";

const SingleSkeleton = () => {
  return (
    <div className="grid grid-cols-1 px-2 lg:px-0 lg:grid-cols-4 gap-4 items-start">
      <div className="col-span-1 animate-pulse">
        <div className="h-80 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="col-span-2 px-2">
        <h2 className="text-2xl font-bold mb-4 h-8 bg-gray-300 rounded"></h2>
        <div className="my-2">
          <p className="mb-1 h-6 bg-gray-300 rounded"></p>
          <p className="mb-1 h-6 bg-gray-300 rounded"></p>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex gap-10 items-center">
                <p className="h-8 bg-gray-300 rounded"></p>
                <p className="h-8 bg-gray-300 rounded"></p>
              </div>
            </div>
            <div>
              <span className="h-6 w-24 bg-gray-300 rounded-full"></span>
              <span className="h-6 w-12 bg-gray-300 rounded"></span>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-4">
            <div>
              <button className="w-10 h-10 bg-gray-300 rounded-full"></button>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 bg-gray-300 rounded-full"></button>
            </div>
          </div>
          <div className="border p-2 my-4 border-gray-200 rounded-lg shadow bg-gray-100">
            <p className="h-24 bg-gray-300 rounded mb-4"></p>
            <p className="h-6 bg-gray-300 rounded"></p>
            <ul className="my-4">
              <p className="h-8 bg-gray-300 rounded"></p>
              <li className="h-6 bg-gray-300 rounded"></li>
              <li className="h-6 bg-gray-300 rounded"></li>
            </ul>
          </div>
          <button className="h-12 w-full bg-gray-300 rounded-full mb-4"></button>
          <div>
            <p className="my-1">
              Categories: <span className="h-6 bg-gray-300 rounded"></span>
            </p>
            <p className="my-1">
              Brand: <span className="h-6 bg-gray-300 rounded"></span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1 animate-pulse">
        <div className="h-80 my-4 bg-gray-300 rounded-lg"></div>
        <div className="h-80 my-4 bg-gray-300 rounded-lg"></div>
        <div className="h-80 my-4 bg-gray-300 rounded-lg"></div>
        <div className="h-80 my-4 bg-gray-300 rounded-lg"></div>
        <div className="h-80 my-4 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default SingleSkeleton;
