"use client";
import React, { useState } from "react";

const Tabs = ({ review, useCase, ingredients }) => {
  const [activeTab, setActiveTab] = useState(3);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className="text-center flex justify-center gap-20 items-center">
        <button
          onClick={() => handleTabClick(3)}
          className={` text-xl my-4 rounded-lg py-4 px-6 text-white ${
            activeTab === 3 ? "  bg-primary-400" : "bg-gray-400"
          }`}
        >
          Reviews
        </button>
        <button
          onClick={() => handleTabClick(1)}
          className={` text-xl my-4 rounded-lg py-4 px-6 text-white ${
            activeTab === 1 ? "  bg-primary-400" : "bg-gray-400"
          }`}
        >
          How to use
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={` text-xl my-4 rounded-lg py-4 px-6 text-white ${
            activeTab === 2 ? "  bg-primary-400" : "bg-gray-400"
          }`}
        >
          Ingredients
        </button>
      </div>

      <div>
        {activeTab === 1 && useCase}
        {activeTab === 2 && ingredients}
        {activeTab === 3 && review}
      </div>
    </div>
  );
};

export default Tabs;
