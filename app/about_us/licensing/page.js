import React from "react";
import Link from "next/link";

export const metadata = {
  title: "License",
  description: "This is a Cosmetics E-Commerce",
};
export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Licensing Information
        </h1>
        <div className="prose">
          <p>
            Thank you for choosing our products! Here you can find information
            about the licensing terms and usage rights.
          </p>
          <p>
            Our products are licensed under the terms of the{" "}
            <a href="#" className="text-primary-500 hover:underline">
              Creative Commons Attribution 4.0 International License
            </a>
            .
          </p>
          <p>This means you are free to:</p>
          <ul>
            <li>
              {" "}
              Share: Copy and redistribute the material in any medium or format{" "}
            </li>
            <li> Adapt: Remix, transform, and build upon the material </li>
          </ul>
          <p>Under the following terms:</p>
          <ul>
            <li>
              {" "}
              Attribution: You must give appropriate credit, provide a link to
              the license, and indicate if changes were made. You may do so in
              any reasonable manner, but not in any way that suggests the
              licensor endorses you or your use.{" "}
            </li>
            <li>
              {" "}
              No additional restrictions: You may not apply legal terms or
              technological measures that legally restrict others from doing
              anything the license permits.{" "}
            </li>
          </ul>
          <p>
            Please refer to the{" "}
            <a href="#" className="text-primary-500 hover:underline">
              full license text
            </a>{" "}
            for details.
          </p>
          <p>
            If you have any questions or need further clarification, feel free
            to{" "}
            <a href="#" className="text-primary-500 hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
        <div className="mt-12 text-center">
          <Link href="/" className="text-primary-500 hover:underline">
            Return to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
