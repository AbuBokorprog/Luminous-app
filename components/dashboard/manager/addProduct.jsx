"use client";
import {
  useGetProductQuery,
  usePostProductMutation,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
const AddProduct = () => {
  const router = useRouter();
  const { currentUser } = useContext(authContext);

  useEffect(() => {
    if (!currentUser && currentUser?.role !== "manager") {
      router.push("/login");
    }
  }, [currentUser, router]);
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
    // makeup
    { label: "Face", value: "face" },
    { label: "Eyes", value: "eyes" },
    { label: "Lips", value: "lips" },
    { label: "Nails", value: "nails" },
    { label: "Makeup", value: "Makeup" },
    { label: "Tools & Brushes", value: "tools&Brush" },
    { label: "Makeup kits", value: "makeupKits" },
    // skin
    { label: "Skin Care", value: "SkinCare" },
    { label: "Body", value: "body" },
    { label: "Face wash", value: "FaceWash" },
    { label: "Sun Care", value: "sunCare" },
    { label: "K-beauty", value: "kBeauty" },
    { label: "Lip Balms/Lip Care", value: "LipBalms/LipCare" },
    { label: "Hands & Feet", value: "Hands&Feet" },
    { label: "Hair Care", value: "HairCare" },
    { label: "Eye Care", value: "eyeCare" },
    { label: "Serums", value: "Serums" },
    { label: "cleansing Oils / cleanser", value: "cleansing Oils / cleanser" },
    // hair
    { label: "Top Brands", value: "Top Brands" },
    { label: "Shop By Hair Type", value: "Shop By Hair Type" },
    { label: "Hair Styling", value: "Hairstyling" },
    { label: "Tools & accessories", value: "Tools_&_accessories" },
    { label: "Hair Oils", value: "HairOils" },
    { label: "Shampoo & Conditioner", value: "Shampoo & Conditioner" },
    { label: "Hair Mask", value: "Hair Mask" },

    //personal care
    { label: "Personal Care", value: "Personal Care" },
    { label: "Bath & shower", value: "bath&shower" },
    { label: "Bath & Body", value: "Bath & Body" },
    { label: "Shower Gels & Body Wash", value: "Shower Gels & Body Wash" },
    { label: "Feminine Hygiene", value: "FeminineHygiene" },
    { label: "Feminine Care", value: "FeminineCare" },
    { label: "Home Care", value: "HomeCare" },
    { label: "Wellness", value: "Wellness" },
    { label: "Sexual Wellness", value: "Sexual Wellness" },

    // undergarments
    { label: "Bra", value: "Bra" },
    { label: "Panty", value: "Panty" },

    //mom & baby
    { label: "Mom & Baby", value: "Mom & Baby" },
    { label: "Oral Care", value: "Oral Care" },
    { label: "Baby Products", value: "BabyProducts" },
    { label: "Baby care", value: "Baby care" },
    { label: "Bath Time", value: "Bath Time" },
    { label: "Creams & Moisturizers", value: "Creams&Moisturizers" },
    { label: "Moisturizers", value: "Moisturizers" },
    { label: "Shampoo", value: "Shampoo" },
    { label: "Lotion", value: "Lotion" },
    { label: "Oil", value: "Oil" },
    { label: "Powder", value: "Powder" },
    { label: "Wipes", value: "Wipes" },
    { label: "Sunscreen", value: "Sunscreen" },
    { label: "Bath & body", value: "Bath&body" },
    { label: "Soap & Body wash", value: "Soap & Body wash" },
    { label: "Creams, lotion and oils", value: "Creams, lotion and oils" },

    //tools & accessories
    { label: "Tools & Accessories", value: "Tools_&_accessories" },
    { label: "Loofahs & Sponges", value: "Loofahs & Sponges" },

    //men
    { label: "Shaving", value: "Shaving" },
    { label: "Shaving and Hair Removal", value: "Shaving and Hair Removal" },
    { label: "Shaving Cream", value: "Shaving Cream" },
    { label: "Foam & gel", value: "Foam & gel" },

    // fragrance
    { label: "Deodorants/Roll-Ons", value: "Deodorants/Roll-Ons" },
    { label: "Body mist/Spray", value: "BodyMist/Spray" },
    { label: "Perfumes (EDT/EDP)", value: "Perfumes (EDT/EDP)" },
    { label: "High-end Perfume", value: "High-end Perfume" },

    { label: "Masks & Peels", value: "masks&peels" },

    { label: "Scrubs & Exfoliators", value: "Scrubs & Exfoliators" },

    { label: "Toner & astringents", value: "Toner & astringents" },
    { label: "Sheet Mask", value: "Sheet Mask" },
    { label: "Body Butter", value: "Body Butter" },
    { label: "Sleeping Mask", value: "Sleeping Mask" },
    { label: "Essence", value: "Essence" },

    { label: "Shop By Concern", value: "Shop By Concern" },
    { label: "Leggings", value: "Leggings" },
    { label: "Trousers", value: "Trousers" },
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
    const ingredients = data.ingredients;
    const useCase = data.useCase;
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
      ingredients,
      useCase,
    };
    try {
      const result = await postProduct(product);
      toast.success(result?.data?.message);
      refetch();
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="py-4 px-2">
      <Toaster />
      <div>
        <h2 className="text-3xl font-medium text-center">Add Product Form</h2>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Product Name *:
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              Price *:
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              Discount Price:
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your product discount price"
              {...register("discountPrice")}
            />
          </div>
          <div>
            <label
              htmlFor="weight"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Weight:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              Category *:
            </label>
            <select
              multiple
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              Sub-category *:
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              Offer/Events:
            </label>
            <select
              multiple
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              {...register("offer")}
            >
              <option value="">Select Offer</option>
              <option value="Top Selling">Top Selling</option>
              <option value="Top Brands">Top Brands</option>
              <option value="Bogo Offer">Bogo Offer</option>
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
              Concern:
            </label>
            <select
              multiple
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              Brands *:
            </label>
            <input
              placeholder="Type Brands name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              Quantity *:
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              Made:
            </label>
            <input
              placeholder="Type which country made in"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              {...register("made")}
            />
          </div>
          <div>
            <label
              htmlFor="size"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Size:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
            Benefits:
          </label>
          {benefitsField.map((benefitsField, index) => (
            <div key={benefitsField.id}>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
            Images *:
          </label>
          {imagesField.map((imagesField, index) => (
            <div key={imagesField.id}>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
            Description *:
          </label>
          <textarea
            rows={5}
            placeholder="Type description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            {...register("description")}
            aria-invalid={errors.description ? "true" : "false"}
          />
          {errors.description?.type === "required" && (
            <p role="alert">Description is required</p>
          )}
        </div>
        <div>
          <label
            htmlFor="ingredients"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Ingredients *:
          </label>
          <textarea
            rows={5}
            placeholder="Type description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            {...register("ingredients")}
            aria-invalid={errors.ingredients ? "true" : "false"}
          />
          {errors.ingredients?.type === "required" && (
            <p role="alert">Ingredients is required</p>
          )}
        </div>
        <div>
          <label
            htmlFor="useCase"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Use Case *:
          </label>
          <textarea
            rows={5}
            placeholder="Type description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            {...register("useCase")}
            aria-invalid={errors.useCase ? "true" : "false"}
          />
          {errors.useCase?.type === "required" && (
            <p role="alert">Use Case is required</p>
          )}
        </div>
        <div>
          {isLoading ? (
            <button
              type="submit"
              className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
