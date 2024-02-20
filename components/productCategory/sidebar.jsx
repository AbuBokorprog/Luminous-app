"use client";
import Link from "next/link";
import { useState } from "react";

const ProductSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const handleCategoryClick = (index) => {
    setActiveCategory(index === activeCategory ? null : index);
  };
  const categories = [
    {
      title: "Makeup",
      subcategories: [
        "Face",
        "Body",
        "Sun Care",
        "Eye Care",
        "Hand & Feet",
        "Lip Balms/Lip Care",
        "K-Beauty",
      ],
    },
    {
      title: "Skincare",
      subcategories: [
        "Face",
        "Body",
        "Sun Care",
        "Eye Care",
        "Hand & Feet",
        "Lip Balms/Lip Care",
        "K-Beauty",
      ],
    },
    {
      title: "Makeup",
      subcategories: [
        "Foundation",
        "Lipstick",
        "Mascara",
        "Eyeliner",
        "Blush",
        "Eyeshadow",
      ],
    },
    // Add more categories with their subcategories as needed
  ];
  return (
    <div className="relative">
      {/* Mobile menu button */}
      <button
        className="fixed bottom-0 z-50 w-full sm:hidden p-2 bg-gray-400 shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter By
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 bg-dark-200 left-0 z-40 w-64 h-screen block transition-transform origin-right ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:static sm:translate-x-0 shadow-lg`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {/* Static sidebar links */}
            <li>
              <Link
                href="/dashboard"
                className="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="text-gray-900 dark:text-white">Dashboard</span>
              </Link>
            </li>
            {/* Dynamic sidebar links */}
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  href={"/product_category/makeup"}
                  onClick={() => handleCategoryClick(index)}
                  className="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="text-gray-900 dark:text-white">
                    {category.title}
                  </span>
                </Link>
                {activeCategory === index && (
                  <ul className="ml-4 space-y-2">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={`/products?category=${encodeURIComponent(
                            subcategory
                          )}`}
                          className="hover:text-gray-700 dark:hover:text-white"
                        >
                          <span>{subcategory}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {/* Add more static sidebar links here */}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default ProductSidebar;
