import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
  description: "This is a Cosmetics E-Commerce",
};
export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Terms & Conditions
        </h1>
        <div className="prose">
          <p>
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern [Your Company Name]'s relationship with you in
            relation to this website.
          </p>
          <p>
            The term 'Luminous' or 'us' or 'we' refers to the owner of the
            website. The term 'you' refers to the user or viewer of our website.
          </p>
          <p>
            The use of this website is subject to the following terms of use:
          </p>
          <ul>
            <li>
              {" "}
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.{" "}
            </li>
            <li>
              {" "}
              This website uses cookies to monitor browsing preferences. If you
              do allow cookies to be used, the following personal information
              may be stored by us for use by third parties.{" "}
            </li>
            <li>
              {" "}
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.{" "}
            </li>
            <li>
              {" "}
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services or information available through this website meet your
              specific requirements.{" "}
            </li>
            <li>
              {" "}
              This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice, which forms
              part of these terms and conditions.{" "}
            </li>
          </ul>
          <p>
            Your use of this website and any dispute arising out of such use of
            the website is subject to the laws of [Your Country].
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
