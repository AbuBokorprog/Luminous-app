"use client";
import {
  useCartGetByUserQuery,
  useCartPostMutation,
  useDeleteUserWishlistByProductIdMutation,
  useGetProductByIdQuery,
  useGetReviewByProductIdQuery,
  useGetWishlistByUserIdQuery,
  usePostReviewMutation,
  usePostWishlistMutation,
} from "@/redux/feature/counter/api";
import StarRatings from "react-star-ratings";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import React, { useContext, useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { authContext } from "@/utils/provider/auth_provider";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../loadingSpinner";
import Link from "next/link";
import Recommended from "./recomended";
import Tabs from "../tabs";
const SingleProduct = ({ id }) => {
  const [rating, setRating] = useState(0);
  const [ratingError, setRatingError] = useState("");
  const [hoverRating, setHoverRating] = useState(0);
  const { currentUser } = useContext(authContext);
  const router = useRouter();
  const { data, isLoading } = useGetProductByIdQuery(id);

  const [
    postCart,
    { isLoading: cartIsLoading, isError: cartIsError, error: cartError },
  ] = useCartPostMutation();
  const { refetch } = useCartGetByUserQuery(currentUser?._id);
  const [wishlistPost, { isLoading: isLoadingPostWishlist }] =
    usePostWishlistMutation();
  const {
    data: userWishlist,
    refetch: wishlistRefetch,
    isLoading: isLoadingGetWishlist,
  } = useGetWishlistByUserIdQuery(currentUser?._id);

  const isWishlist = userWishlist?.filter((w) => w.productId === data?._id);

  const [deleteWishlist, { isLoading: isLoadingDeleteWishlist }] =
    useDeleteUserWishlistByProductIdMutation();
  const addToCart = async (id) => {
    const userId = currentUser?._id;
    const productId = id;
    const cart = { userId, productId };
    try {
      if (currentUser?.email) {
        const response = await postCart(cart);
        if (response?.data?.success) {
          refetch();
          toast.success(response?.data?.success);
        }
      } else {
        router.push("/login");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleRatingHover = (hoveredRating) => {
    setHoverRating(hoveredRating);
  };

  const {
    data: reviews,
    isLoading: isLoadingReviews,
    refetch: reviewsReFetch,
  } = useGetReviewByProductIdQuery(data?._id);
  const [postReview, { isLoading: isLoadingPostReview }] =
    usePostReviewMutation();

  const rate = reviews?.reduce((total, review) => {
    return total + review.rating;
  }, 0);
  const length = reviews?.length;
  const averageRate = rate / length;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (form) => {
    const userId = currentUser?._id;
    const productId = data?._id;
    const name = form.name;
    const email = form.email;
    const review = form.review;
    const rate = rating;
    const reviews = { userId, productId, name, email, review, rate };

    if (rate > 0) {
      setRatingError("");
      const result = await postReview(reviews);
      if (result?.data?.success) {
        reviewsReFetch();
        reset();
      }
    } else {
      setRatingError("Please rate ");
    }
  };
  const wishlistHandle = async (id) => {
    const userId = currentUser?._id;
    const productId = id;
    const productDetails = data;

    const wishlist = { userId, productId, productDetails };

    try {
      const result = await wishlistPost(wishlist);
      if (result?.data.success) {
        wishlistRefetch();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteWishlistHandler = async (id) => {
    const userId = currentUser?._id;
    try {
      const result = await deleteWishlist({ userId, id });
      if (result?.data.success) {
        wishlistRefetch();
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <>
      <Toaster />
      <title>{data?.name}</title>
      {isLoading ||
      isLoadingDeleteWishlist ||
      isLoadingGetWishlist ||
      isLoadingPostWishlist ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 px-2 lg:px-0 lg:grid-cols-4 gap-4 items-start">
            <Image
              src={data?.images[0]}
              width={500}
              height={500}
              alt={data?.name}
            />
            <div className="col-span-2 px-2">
              <h2 className="text-2xl font-bold">{data?.name.slice()}</h2>
              <div className="my-2">
                {data?.ml && <p className="my-1">({data?.ml})</p>}
                {data?.weight && <p className="my-1">({data?.weight})</p>}

                <div className="flex justify-between items-center">
                  <div>
                    {data?.discountPrice ? (
                      <div className="flex gap-10 items-center">
                        <p className="my-1 text-Red text-2xl font-semibold">
                          {data?.discountPrice}Taka
                        </p>
                        <p className="my-1 line-through text-xl">
                          {data?.price}Taka
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="my-1">{data?.price}Taka</p>
                      </div>
                    )}
                  </div>
                  <Link href={"#rate"}>
                    {reviews?.length > 0 ? (
                      <StarRatings
                        rating={averageRate}
                        starRatedColor="gold"
                        starEmptyColor="gray"
                        starDimension="20px"
                        starSpacing="1px"
                      />
                    ) : (
                      <StarRatings
                        rating={0}
                        starRatedColor="gold"
                        starEmptyColor="gray"
                        starDimension="20px"
                        starSpacing="1px"
                      />
                    )}{" "}
                    <span>Reviews {reviews?.length}</span>
                  </Link>
                </div>
                <div className="flex items-center gap-5">
                  <div>
                    {isWishlist?.length > 0 ? (
                      <button
                        onClick={() =>
                          deleteWishlistHandler(isWishlist[0]?._id)
                        }
                      >
                        <FaHeart className="w-10 h-10 text-Red" />
                      </button>
                    ) : (
                      <button onClick={() => wishlistHandle(data?._id)}>
                        <FaRegHeart className="w-10 h-10 text-Red" />
                      </button>
                    )}
                  </div>

                  {data?.quantity > 0 ? (
                    <>
                      {cartIsLoading ? (
                        <button className="uppercase text-xl my-4 rounded-lg py-4 text-white w-full lg:w-1/3 bg-violet hover:bg-primary-400">
                          Loading...
                        </button>
                      ) : (
                        <button
                          onClick={() => addToCart(data?._id)}
                          className="uppercase text-xl my-4 rounded-lg py-4 text-white w-full lg:w-1/3 bg-violet hover:bg-primary-400"
                        >
                          Add To Card
                        </button>
                      )}
                    </>
                  ) : (
                    <button className="uppercase text-xl my-4 rounded-lg py-4 text-white w-1/3 bg-violet hover:bg-primary-400">
                      Out of stock
                    </button>
                  )}
                </div>
                <div className=" border p-2 my-4 border-gray-200 rounded-lg shadow md:flex-row bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  {data?.description.length > 0 && <p>{data?.description}</p>}
                  <p className="mt-4">Quantity: {data?.quantity}</p>
                  {data?.benefits[0] && (
                    <ul className="my-4">
                      <p className="text-xl">Benefits:</p>
                      {data?.benefits?.map((c) => (
                        <li key={c}>- {c}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <button>Delivery & Return</button>
                <div>
                  <p className="my-1">
                    Categories:{" "}
                    <>
                      {data?.category?.map((c) => (
                        <span key={c}>{c}, </span>
                      ))}
                      {data?.concern?.map((c) => (
                        <span key={c}>{c}, </span>
                      ))}
                      {data?.sub_category?.map((c) => (
                        <span key={c}>{c}, </span>
                      ))}
                    </>
                  </p>
                  <p className="my-1">Brand: {data?.brands}</p>
                </div>
              </div>
            </div>
            <div className="">
              <Recommended
                category={data?.sub_category[1]}
                category2={data?.sub_category[0]}
              />
            </div>
          </div>
          <Tabs
            ingredients={
              <>
                {data?.ingredients ? (
                  <div>
                    <p>Ingredients</p>
                  </div>
                ) : (
                  <div>
                    <p>There is no Ingredients details</p>
                  </div>
                )}
              </>
            }
            useCase={
              <>
                {data?.useCase ? (
                  <div>
                    <p>Use Case</p>
                  </div>
                ) : (
                  <div>
                    <p>There is no use case</p>
                  </div>
                )}
              </>
            }
            review={
              <>
                <div id="rate" className="my-20 px-2 lg:px-0">
                  <h2 className=" text-3xl mb-8 lg:text-4xl font-semibold">
                    Reviews
                  </h2>
                  {reviews?.length > 0 ? (
                    <div>
                      {reviews?.map((r) => (
                        <div key={r?._id}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <h5>{r?.name}</h5>
                              <h5>{r?.date}</h5>
                            </div>
                            <div>
                              {r?.rating === 5 ? (
                                <p className="flex items-center gap-1">
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                </p>
                              ) : r?.rating === 4 ? (
                                <p className="flex items-center gap-1">
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-gray-300" />
                                </p>
                              ) : r?.rating === 3 ? (
                                <p className="flex items-center gap-1">
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-gray-300" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-gray-300" />
                                </p>
                              ) : r?.rating === 2 ? (
                                <p className="flex items-center gap-1">
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-gray-300" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-gray-300" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-gray-300" />
                                </p>
                              ) : (
                                <p className="flex items-center gap-1">
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-Gold" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-gray-300" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-gray-300" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-gray-300" />
                                  <FaStar className="w-4 lg:w-6 h-4 lg:h-6 text-gray-300" />
                                </p>
                              )}
                            </div>
                          </div>
                          <p>{r?.review}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>There is no Reviews</p>
                  )}
                </div>
                <div className="my-10 px-2 lg:px-0">
                  <h3 className="text-2xl lg:text-3xl font-medium uppercase">
                    Add a Review
                  </h3>
                  <p className="text-xl">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div className="flex gap-2 my-4 items-center">
                    <p className="text-xl">Your Rating</p>
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <div key={index}>
                          <FaStar
                            key={index}
                            className="star"
                            color={
                              ratingValue <= (hoverRating || rating)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            size={25}
                            onClick={() => handleRatingClick(ratingValue)}
                            onMouseEnter={() => handleRatingHover(ratingValue)}
                            onMouseLeave={() => handleRatingHover(0)}
                          />
                        </div>
                      );
                    })}
                    {ratingError !== "" && (
                      <p className="text-Red">{ratingError}</p>
                    )}
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <label
                        htmlFor="review"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        Review:
                      </label>
                      <textarea
                        id="review"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("review", { required: true })}
                        rows={4}
                        cols={50}
                        placeholder="Write your review here..."
                      ></textarea>
                      {errors.review && <p>This field is required</p>}
                    </div>
                    <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 gap-4 items-center">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                        >
                          Name:
                        </label>
                        <input
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          {...register("name", { required: true })}
                          type="text"
                          defaultValue={currentUser?.displayName}
                          placeholder="Enter your name"
                        />
                        {errors.name && <p>This field is required</p>}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                        >
                          Email:
                        </label>
                        <input
                          id="email"
                          defaultValue={currentUser?.email}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          {...register("email", {
                            required: true,
                          })}
                          type="email"
                          placeholder="Enter your email"
                        />
                        {errors.email && <p>Please enter a valid email</p>}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="my-4 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Submit Review
                    </button>
                  </form>
                </div>
              </>
            }
          />
          {/* Review section */}
        </>
      )}
    </>
  );
};

export default SingleProduct;
