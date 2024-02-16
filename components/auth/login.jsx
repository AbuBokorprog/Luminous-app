"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authContext } from "@/utils/provider/auth_provider";
import { useLoginUserMutation } from "@/redux/feature/counter/api";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { signIn } = useContext(authContext);
  const [loginUser, { isError, isLoading, isSuccess }] = useLoginUserMutation();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    try {
      const login = await loginUser({ email, password });
      if (login?.data?.message === "Login success") {
        signIn(email, password)
          .then((result) => {
            const loggedIn = result.user;
            router.push("/");
            reset();
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    } catch (error) {
      console.log("login failed");
    }
  };
  return (
    <div className="mx-auto flex justify-center my-10 lg:my-20 ">
      <div className="w-full max-w-lg p-4 border bg-primary-100 border-dark-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-dark-800 dark:border-dark-700">
        <h5 className="text-3xl text-center font-medium text-dark-900 dark:text-white">
          Login
        </h5>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your name"
              type="email"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p role="alert">Email is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your password"
              {...register("password", { required: true })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password?.type === "required" && (
              <p role="alert">Password is required</p>
            )}
          </div>
          <div className="">
            <a
              href="#"
              className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forget Password?
            </a>
          </div>
          {isLoading ? (
            <button
              type="submit"
              className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Loading ...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          )}

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?
            <Link
              href="/sign_up"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
