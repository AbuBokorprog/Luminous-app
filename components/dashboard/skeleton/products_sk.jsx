import React from "react";

const ProductsSkeleton = () => {
  return (
    <div>
      <div className="my-6 grid grid-cols-1 dark:bg-gray-900 justify-center md:grid-cols-3 lg:grid-cols-3 mx-auto items-center md:gap-4 lg:gap-2">
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <div className="w-full text-center lg:w-72 my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 animate-pulse">
              <div className="h-44 w-full bg-gray-300 rounded-t-lg"></div>
              <div className="p-2">
                <div className="h-12 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-8 bg-gray-300 w-24 mb-2"></div>
                <div className="h-8 bg-gray-300 w-24"></div>
              </div>
              <div className="h-16 bg-gray-300 rounded-b-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSkeleton;
