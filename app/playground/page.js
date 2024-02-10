"use client";
import React, { useState } from "react";

const categories = [
  {
    label: "Makeup",
    subcategories: [
      { label: "Face", value: "makeup-face" },
      { label: "Eyes", value: "makeup-eyes" },
      { label: "Lips", value: "makeup-lips" },
      { label: "Nails", value: "makeup-nails" },
      { label: "Tools & Brushes", value: "makeup-tools" },
      { label: "Top Brands", value: "makeup-brands" },
    ],
  },
  {
    label: "Skin",
    subcategories: [
      { label: "Face", value: "skin-face" },
      { label: "K-beauty", value: "skin-kbeauty" },
      { label: "Hand & Feet", value: "skin-handfeet" },
      { label: "Body", value: "skin-body" },
      { label: "Eye Care", value: "skin-eyecare" },
      { label: "Shop by Concern", value: "skin-concerns" },
    ],
  },
  // ... other categories and their subcategories
];

const concerns = [
  { label: "Acne", value: "concern-acne" },
  { label: "Anti aging", value: "concern-antiaging" },
  { label: "Oil Control", value: "concern-oilcontrol" },
  { label: "Pore", value: "concern-pore" },
  // ... other concerns
];

function ProductCategorySelection() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedConcern, setSelectedConcern] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedConcern(""); // Reset concern on category change
  };

  const handleConcernChange = (event) => {
    setSelectedConcern(event.target.value);
  };

  const getSubcategories = () => {
    return (
      categories.find((category) => category.label === selectedCategory)
        ?.subcategories || []
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div>
      <h1>Select Product Category and Concern</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Please Select</option>
            {categories.map((category) => (
              <option key={category.label} value={category.label}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        {selectedCategory && (
          <div>
            <label htmlFor="concern">Concern (optional):</label>
            <select
              id="concern"
              name="concern"
              value={selectedConcern}
              onChange={handleConcernChange}
            >
              <option value="">None</option>
              {getSubcategories().map((subcategory) => (
                <option key={subcategory.value} value={subcategory.value}>
                  {subcategory.label}
                </option>
              ))}
              {selectedCategory === "Skin" && ( // Optionally show concerns only for Skin category
                <optgroup label="Other Concerns">
                  {concerns.map((concern) => (
                    <option key={concern.value} value={concern.value}>
                      {concern.label}
                    </option>
                  ))}
                </optgroup>
              )}
            </select>
          </div>
        )}
        <button>add</button>
      </form>

      {/* You can display selected category and concern values here */}
    </div>
  );
}

export default ProductCategorySelection;
