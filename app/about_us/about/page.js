"use client";
import Head from "next/head";
import { FaHeart, FaGem, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Image from "next/image";

const AboutPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitNewsletterForm = async (data) => {
    reset();
  };

  return (
    <>
      <Head>
        <title>About - Luminous</title>
        <meta
          name="description"
          content="Learn more about Luminous - Your one-stop destination for beauty products."
        />
      </Head>
      <div className="container mx-auto px-4 py-8 bg-white">
        <h1 className="text-3xl font-bold text-center mb-4">About Luminous</h1>
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="md:w-1/2 mr-4">
            <img
              src="https://img.freepik.com/free-photo/people-writing-new-project_23-2147656739.jpg?t=st=1709119708~exp=1709123308~hmac=996ae009bd19cb4a4407f7d669dab211eb48a2f27b9451181263157229e671eb&w=900"
              alt="Luminous Logo"
              width={500}
              height={300}
            />
          </div>
          <div className="md:w-1/2">
            <p className="mb-4">
              Luminous is your one-stop destination for all things beauty. We
              provide a curated collection of premium beauty products to enhance
              your natural beauty and elevate your skincare routine. Our mission
              is to empower individuals to feel confident and radiant in their
              own skin.
            </p>
            <p className="mb-4">
              Our product range includes skincare essentials, makeup must-haves,
              luxurious bath and body treats, and much more. We carefully select
              each product to ensure it meets our high standards of quality and
              efficacy.
            </p>
            <p className="mb-4">
              At Luminous, we're committed to sustainability and ethical
              practices. We partner with brands that share our values and
              prioritize eco-friendly packaging, cruelty-free formulations, and
              fair trade sourcing.
            </p>
            <p className="mb-4">
              Whether you're a beauty enthusiast looking to explore the latest
              trends or someone seeking skincare solutions tailored to your
              needs, Luminous has something for everyone. Join us on our journey
              to beauty and self-care!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <FaHeart className="text-4xl text-[#c084fc] mb-2" />
            <h2 className="text-xl font-semibold mb-2">Quality Products</h2>
            <p className="text-gray-600">
              We source only the finest ingredients and materials to ensure the
              highest quality for our products.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaGem className="text-4xl text-SubBlue mb-2" />
            <h2 className="text-xl font-semibold mb-2">Luxurious Experience</h2>
            <p className="text-gray-600">
              Indulge in a luxurious beauty experience with our premium
              collection of skincare and makeup products.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaUser className="text-4xl text-primary-500 mb-2" />
            <h2 className="text-xl font-semibold mb-2">
              Customer Satisfaction
            </h2>
            <p className="text-gray-600">
              Your satisfaction is our top priority. We strive to exceed your
              expectations with every purchase.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r mt-10 from-[#c084fc] via-[#ec4899] to-[#ef4444]">
          <div className=" p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <form
              onSubmit={handleSubmit(onSubmitNewsletterForm)}
              className="flex items-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="mr-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring text-gray-800"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 uppercase bg-primary-500 text-white rounded-md shadow-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
