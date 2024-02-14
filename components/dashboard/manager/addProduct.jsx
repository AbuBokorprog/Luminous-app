"use client";
import { usePostProductMutation } from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import React, { useContext } from "react";
import { useFieldArray, useForm } from "react-hook-form";
const AddProduct = () => {
  const { currentUser } = useContext(authContext);

  const categories = [
    {
      label: "Makeup",
    },
    {
      label: "Skin",
    },
    {
      label: "Hair",
    },
    {
      label: "Personal Care",
    },
    {
      label: "Mom & Baby",
    },
    {
      label: "Men",
    },
    {
      label: "Fragrance",
    },
  ];

  const subcategories = [
    { label: "Face", value: "face" },
    { label: "Eyes", value: "eyes" },
    { label: "Lips", value: "lips" },
    { label: "Nails", value: "nails" },
    { label: "Tools & Brushes", value: "tools&Brush" },
    { label: "Top Brands", value: "topBrands" },
    { label: "K-beauty", value: "kBeauty" },

    { label: "Body", value: "body" },
    { label: "Eye Care", value: "eyeCare" },
    { label: "Hair care", value: "haircare" },
    { label: "Hair Styling", value: "Hairstyling" },
    { label: "Tools & accessories", value: "Tools_&_accessories" },
    { label: "Bath & shower", value: "bath&shower" },
    { label: "Feminine Hygience", value: "FeminineHygience" },

    { label: "Hands & Feet", value: "Hands&Feet" },
    { label: "Wellness", value: "Wellness" },
    { label: "Oral Care", value: "Oral Care" },
    { label: "Baby Products", value: "BabyProducts" },
    { label: "Creams & Moisturizers", value: "Creams&Moisturizers" },
    { label: "Lotion", value: "Lotion" },
    { label: "Oil", value: "Oil" },
    { label: "Powder", value: "Powder" },
    { label: "Wipes", value: "Wipes" },
    { label: "Bath Time", value: "Bath Time" },
    { label: "Sunscreen", value: "Sunscreen" },
    { label: "Baby care", value: "Baby care" },
    { label: "Bath & body", value: "Bath&body" },
    { label: "Hair Care", value: "HairCare" },
    { label: "Shaving", value: "Shaving" },
    { label: "Skin Care", value: "SkinCare" },
    { label: "Shampoo", value: "Shampoo" },
    { label: "Soap & Bodywash", value: "Soap & Bodywash" },
    { label: "Deodorants/Roll-Ons", value: "Deodorants/Roll-Ons" },
    { label: "Body mist/Spray", value: "BodyMist/Spray" },
    { label: "Perfumes", value: "Perfumes" },
    { label: "High-end Perfume", value: "HighEndPerfume" },
  ];

  const concerns = [
    { label: "Acne", value: "Acne" },
    { label: "Anti aging", value: "Anti aging" },
    { label: "Oil Control", value: "Oil Control" },
    { label: "Pore", value: "pore" },
    { label: "Dandruff", value: "Dandruff" },
    { label: "Dry Skin", value: "DrySkin" },
    { label: "Spot", value: "Spot" },
    { label: "Hair Thinning", value: "Hair Thinning" },
  ];
  const [postProduct, { isLoading, isError, error }] = usePostProductMutation();
  const {
    register,
    reset,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const {
    fields: benefitsField,
    append: benefitsAppend,
    remove: benefitsRemove,
  } = useFieldArray({
    control,
    name: "benefits",
  });
  const {
    fields: imagesField,
    append: imagesAppend,
    remove: imagesRemove,
  } = useFieldArray({
    control,
    name: "images",
  });

  const onSubmit = async (data) => {
    // console.log(data);
    const name = data.name;
    const userId = currentUser?._id;
    const images = data.images;
    const benefits = data.benefits;
    const price = data.price;
    const discountPrice = data.discountPrice;
    const ml = data.ml;
    const description = data.description;
    const category = data.category;
    const sub_category = data.sub_category;
    const concern = data.concern;
    const offer = data.offer;
    const brands = data.brands;
    const quantity = data.quantity;
    const product = {
      name,
      userId,
      images,
      benefits,
      price,
      discountPrice,
      ml,
      description,
      category,
      sub_category,
      concern,
      offer,
      brands,
      quantity,
    };
    const result = await postProduct(product);
    alert(result?.data?.message);
    if (isError) {
      alert(error);
    }
    reset();
  };
  return (
    <div className="py-4 px-2">
      <div>
        <h2 className="text-3xl font-medium text-center">Add Product Form</h2>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Type your product name"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.type === "required" && (
            <p role="alert">Name is required</p>
          )}
        </div>
        <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-4 items-center">
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your product price"
              {...register("price", { required: true })}
              aria-invalid={errors.price ? "true" : "false"}
            />
            {errors.price?.type === "required" && (
              <p role="alert">Price is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="discountPrice"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Discount Price
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your product discount price"
              {...register("discountPrice", { required: true })}
              aria-invalid={errors.discountPrice ? "true" : "false"}
            />
            {errors.discountPrice?.type === "required" && (
              <p role="alert">Discount Price is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="ml"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              ML
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your product ML"
              {...register("ml", { required: true })}
              aria-invalid={errors.price ? "true" : "false"}
            />
            {errors.ml?.type === "required" && (
              <p role="alert">ML is required</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-4 items-center">
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              {...register("category", { required: true })}
              aria-invalid={errors.category ? "true" : "false"}
            >
              <option value="">Select category</option>
              {categories.map((c) => (
                <option key={c.label} value={c.label}>
                  {c.label}
                </option>
              ))}
            </select>
            {errors.category?.type === "required" && (
              <p role="alert">Category is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="sub_category"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Sub-category
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              {...register("sub_category", { required: true })}
              aria-invalid={errors.sub_category ? "true" : "false"}
            >
              <option value="">Select sub-category</option>
              {subcategories.map((sc) => (
                <option key={sc.label} value={sc.value}>
                  {sc.label}
                </option>
              ))}
            </select>
            {errors.sub_category?.type === "required" && (
              <p role="alert">Sub-category is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="offer"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Offer/Events
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              {...register("offer")}
              aria-invalid={errors.offer ? "true" : "false"}
            >
              <option value="">Select Offer</option>
              <option value="ValentineSale">Valentine Sale</option>
              <option value="Buy1GET1">Buy 1 GET 1</option>
              <option value="ClearanceSale">Clearance sale</option>
            </select>
            {errors.offer?.type === "required" && (
              <p role="alert">offer is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="concern"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Concern
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              {...register("concern")}
              aria-invalid={errors.concern ? "true" : "false"}
            >
              <option value="">Select Concern</option>
              {concerns.map((sc) => (
                <option key={sc.label} value={sc.label}>
                  {sc.label}
                </option>
              ))}
            </select>
            {errors.concern?.type === "required" && (
              <p role="alert">Concern is required</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-4 items-center">
          <div>
            <label
              htmlFor="brands"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Brands
            </label>
            <input
              placeholder="Type Brands name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              {...register("brands", { required: true })}
              aria-invalid={errors.brands ? "true" : "false"}
            />
            {errors.brands?.type === "required" && (
              <p role="alert">Brands is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your name"
              {...register("quantity", { required: true })}
              aria-invalid={errors.quantity ? "true" : "false"}
            />
            {errors.quantity?.type === "required" && (
              <p role="alert">Quantity is required</p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="benefits"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Benefits
          </label>
          {benefitsField.map((benefitsField, index) => (
            <div key={benefitsField.id}>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                {...register(`benefits.${index}`)}
                defaultValue={benefitsField.value} // Set default value if needed
              />
              <button
                type="button"
                className="px-2 py-1 my-2 rounded-md border-2 "
                onClick={() => benefitsRemove(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="px-2 py-1 rounded-md border-2 "
            type="button"
            onClick={() => benefitsAppend("")}
          >
            Add Benefit
          </button>
        </div>
        <div>
          <label
            htmlFor="images"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Images
          </label>
          {imagesField.map((imagesField, index) => (
            <div key={imagesField.id}>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                {...register(`images.${index}`)}
                defaultValue={imagesField.value}
              />
              <button
                type="button"
                className="px-2 py-1 my-2 rounded-md border-2 "
                onClick={() => imagesRemove(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="px-2 py-1 rounded-md border-2 "
            type="button"
            onClick={() => imagesAppend("")}
          >
            Add Image
          </button>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            rows={5}
            maxLength={150}
            placeholder="Type description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            {...register("description", { required: true })}
            aria-invalid={errors.description ? "true" : "false"}
          />
          {errors.description?.type === "required" && (
            <p role="alert">Description is required</p>
          )}
        </div>
        <div>
          {isLoading ? (
            <button
              type="submit"
              className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Product
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
