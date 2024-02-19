"use client";
import {
  useGetProductQuery,
  usePostProductMutation,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useFieldArray, useForm } from "react-hook-form";
const AddProduct = () => {
  const { currentUser } = useContext(authContext);

  const router = useRouter();
  if (currentUser?.role !== "manager") {
    router.push("/");
  }
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
      label: "Body",
    },
    {
      label: "Men",
    },
    {
      label: "Fragrance",
    },
    {
      label: "Natural",
    },
    {
      label: "Undergarments",
    },
    {
      label: "Clothing & More",
    },
    {
      label: "Tools & Accessories",
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
    { label: "Makeup kits", value: "makeupKits" },
    { label: "Body", value: "body" },
    { label: "Sun Care", value: "sunCare" },
    { label: "Eye Care", value: "eyeCare" },
    { label: "Hair care", value: "haircare" },
    { label: "Hair Styling", value: "Hairstyling" },
    { label: "Tools & accessories", value: "Tools_&_accessories" },
    { label: "Bath & shower", value: "bath&shower" },
    { label: "Bath & Body", value: "Bath & Body" },
    { label: "Feminine Hygience", value: "FeminineHygience" },
    { label: "Feminine Care", value: "FeminineCare" },
    { label: "Home Care", value: "HomeCare" },
    { label: "Moisturizers", value: "Moisturizers" },
    { label: "Face wash", value: "FaceWash" },
    { label: "Bra", value: "Bra" },
    { label: "Panty", value: "Panty" },
    { label: "Lip Balms/Lip Care", value: "LipBalms/LipCare" },
    { label: "Hands & Feet", value: "Hands&Feet" },
    { label: "Wellness", value: "Wellness" },
    { label: "Sexual Wellness", value: "Sexual Wellness" },
    { label: "Oral Care", value: "Oral Care" },
    { label: "Baby Products", value: "BabyProducts" },
    { label: "Creams & Moisturizers", value: "Creams&Moisturizers" },
    { label: "Lotion", value: "Lotion" },
    { label: "Oil", value: "Oil" },
    { label: "Powder", value: "Powder" },
    { label: "Wipes", value: "Wipes" },
    { label: "Loofahs & Sponges", value: "Loofahs & Sponges" },
    { label: "Bath Time", value: "Bath Time" },
    { label: "Sunscreen", value: "Sunscreen" },
    { label: "Baby care", value: "Baby care" },
    { label: "Bath & body", value: "Bath&body" },
    { label: "Hair Care", value: "HairCare" },
    { label: "Shaving", value: "Shaving" },
    { label: "Shaving and Hair Removal", value: "Shaving and Hair Removal" },
    { label: "Shaving Cream", value: "Shaving Cream" },
    { label: "Foam & gel", value: "Foam & gel" },
    { label: "Skin Care", value: "SkinCare" },
    { label: "Shampoo", value: "Shampoo" },
    { label: "Soap & Body wash", value: "Soap & Body wash" },
    { label: "Deodorants/Roll-Ons", value: "Deodorants/Roll-Ons" },
    { label: "Body mist/Spray", value: "BodyMist/Spray" },
    { label: "Perfumes", value: "Perfumes" },
    { label: "Masks & Peels", value: "masks&peels" },
    { label: "Hair Oils", value: "HairOils" },
    { label: "Serums", value: "Serums" },
    { label: "cleansing Oils / cleanser", value: "cleansing Oils / cleanser" },
    { label: "Shower Gels & Body Wash", value: "Shower Gels & Body Wash" },
    { label: "Shampoo & Conditioner", value: "Shampoo & Conditioner" },
    { label: "Scrubs & Exfoliators", value: "Scrubs & Exfoliators" },
    { label: "Hair Mask", value: "Hair Mask" },
    { label: "Toner & astringents", value: "Toner & astringents" },
    { label: "Sheet Mask", value: "Sheet Mask" },
    { label: "Body Butter", value: "Body Butter" },
    { label: "Sleeping Mask", value: "Sleeping Mask" },
    { label: "Essence", value: "Essence" },
    { label: "Shop By Hair Type", value: "Shop By Hair Type" },
    { label: "Shop By Concern", value: "Shop By Concern" },
    { label: "Creams, lotion and oils", value: "Creams, lotion and oils" },
    { label: "Oils", value: "Oils" },
    { label: "Leggings", value: "Leggings" },
    { label: "Trousers", value: "Trousers" },
    { label: "Fragrance", value: "Fragrance" },
  ];

  const concerns = [
    { label: "Acne", value: "Acne" },
    { label: "Anti aging", value: "Anti aging" },
    { label: "Oil Control", value: "Oil Control" },
    { label: "Pore", value: "pore" },
    { label: "Dandruff", value: "Dandruff" },
    { label: "Dry Skin", value: "DrySkin" },
    { label: "Spot", value: "Spot" },
    { label: "Dull Skin Treatment", value: "Dull Skin Treatment" },
    { label: "Skin Lightening", value: "Skin Lightening" },
    { label: "Pore Care", value: "Pore Care" },
    { label: "Hair Fall", value: "Hair Fall" },
    { label: "Pigmentation", value: "Pigmentation" },
    { label: "Acne Treatment", value: "Acne Treatment" },
    { label: "Tan Removal", value: "Tan Removal" },
    { label: "Hair Removal", value: "Hair Removal" },
    { label: "Dry Skin Remedy", value: "Dry Skin Remedy" },
    { label: "Cold Protection", value: "Cold Protection" },
    { label: "Sun Protection", value: "Sun Protection" },
    { label: "Dry & Frizzy Hair", value: "Dry & Frizzy Hair" },
    { label: "Hair fall Thinning", value: "Hair fall Thinning" },
    { label: "Split Ends", value: "Split Ends" },
    { label: "Sun Burn", value: "Sun Burn" },
    { label: "Color protection", value: "Color protection" },
  ];
  const [postProduct, { isLoading, isError, error }] = usePostProductMutation();
  const { refetch } = useGetProductQuery();
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
    const name = data.name;
    const userId = currentUser?._id;
    const images = data.images;
    const benefits = data.benefits;
    const price = data.price;
    const discountPrice = data.discountPrice;
    const weight = data.weight;
    const description = data.description;
    const category = data.category;
    const sub_category = data.sub_category;
    const concern = data.concern;
    const offer = data.offer;
    const brands = data.brands;
    const quantity = data.quantity;
    const made = data.made;
    const size = data.size;
    const product = {
      name,
      userId,
      images,
      benefits,
      price,
      discountPrice,
      weight,
      description,
      category,
      sub_category,
      concern,
      offer,
      brands,
      quantity,
      made,
      size,
    };
    try {
      const result = await postProduct(product);
      alert(result?.data?.message);
      refetch();
      reset();
    } catch (error) {
      alert(error.message);
    }
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
              {...register("discountPrice")}
            />
          </div>
          <div>
            <label
              htmlFor="weight"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Weight
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your product weight"
              {...register("weight")}
            />
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
              multiple
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
              multiple
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
              multiple
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              {...register("offer")}
            >
              <option value="">Select Offer</option>
              <option value="Top Selling">Top Selling</option>
              <option value="Top Brands">Top Brands</option>
              <option value="Free Delivery">Free Delivery</option>
              <option value="Buy1GET1">Buy 1 GET 1</option>
              <option value="ClearanceSale">Clearance sale</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="concern"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Concern
            </label>
            <select
              multiple
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              {...register("concern")}
              aria-invalid={errors.concern ? "true" : "false"}
            >
              <option value="">Select Concern</option>
              <option value="shopByConcern">Shop By Concern</option>
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
              placeholder="Type product quantity"
              {...register("quantity", { required: true })}
              aria-invalid={errors.quantity ? "true" : "false"}
            />
            {errors.quantity?.type === "required" && (
              <p role="alert">Quantity is required</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-4 items-center">
          <div>
            <label
              htmlFor="made"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Made
            </label>
            <input
              placeholder="Type which country made in"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              {...register("made")}
            />
          </div>
          <div>
            <label
              htmlFor="size"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Size
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type products size"
              {...register("size")}
            />
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
            placeholder="Type description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            {...register("description")}
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
