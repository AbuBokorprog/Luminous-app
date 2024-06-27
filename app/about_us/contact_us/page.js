"use client";
import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmitForm = async (data) => {
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      <Head>
        <title>Contact Us - YourWebsiteName</title>
        <meta
          name="description"
          content="Contact us for any queries or feedback."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        {isSubmitted ? (
          <p className="text-green-600 mb-4">
            Thank you for reaching out! We'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit(onSubmitForm)} className="">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-400"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-400"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={4}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-400 text-white rounded-md shadow-md hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-400"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default ContactPage;
