import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Privacy Policy",
  description: "This is a Cosmetics E-Commerce",
};
export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          This Privacy Policy governs the manner in which Your Website Name
          collects, uses, maintains and discloses information collected from
          users (each, a "User") of the Luminous ("Site"). This privacy policy
          applies to the Site and all products and services offered by Your
          Website Name.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          Personal identification information
        </h2>
        <p className="mb-4">
          We may collect personal identification information from Users in a
          variety of ways, including, but not limited to, when Users visit our
          site, register on the site, place an order, fill out a form, respond
          to a survey, and in connection with other activities, services,
          features or resources we make available on our Site. Users may be
          asked for, as appropriate, name, email address, mailing address, phone
          number, credit card information. Users may, however, visit our Site
          anonymously. We will collect personal identification information from
          Users only if they voluntarily submit such information to us. Users
          can always refuse to supply personally identification information,
          except that it may prevent them from engaging in certain Site related
          activities.
        </p>
        <div className="mt-12 text-center">
          <Link href="/" className="text-primary-500 hover:underline">
            Return to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
