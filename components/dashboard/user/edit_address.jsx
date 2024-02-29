"use client";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { authContext } from "@/utils/provider/auth_provider";
import {
  useGetBillingAddressByUserIdQuery,
  useGetShippingAddressByUserIdQuery,
} from "@/redux/feature/counter/api";
import { useRouter } from "next/navigation";
const EditAddress = () => {
  const router = useRouter();
  const { currentUser } = useContext(authContext);

  useEffect(() => {
    if (!currentUser && currentUser?.role !== "user") {
      router.push("/login");
    }
  }, [currentUser, router]);

  const { data: shippingAddressData } = useGetShippingAddressByUserIdQuery(
    currentUser?._id
  );
  const { data: billingAddressData } = useGetBillingAddressByUserIdQuery(
    currentUser?._id
  );

  return (
    <div className="edit-address lg:px-4">
      <h2 className="text-lg font-medium my-4 text-gray-500">
        The following addresses will be used on the checkout page by default:
      </h2>

      <div className="address-section my-8">
        <div className="flex justify-between border-b-2 border-gray-400">
          <h3 className="text-lg font-bold mb-2">BILLING ADDRESS</h3>

          <Link
            href={"/users/address/editAddress/billing"}
            className="edit-button text-SubBlue"
          >
            Edit
          </Link>
        </div>

        <div className="address-details">
          {billingAddressData ? (
            <div>
              <h2>
                {billingAddressData?.firstName} {billingAddressData?.lastName}
              </h2>
              <h3>{billingAddressData?.street}</h3>
              <h4>{billingAddressData?.town}</h4>
              <h4>{billingAddressData?.state}</h4>
              <h5>{billingAddressData?.postcode}</h5>
            </div>
          ) : (
            <div>
              <p>You have not set up this type of billing address yet.</p>
            </div>
          )}
        </div>
      </div>

      <div className="address-section my-8">
        <div className="flex justify-between border-b-2 border-gray-400">
          <h3 className="text-lg font-bold mb-2 ">SHIPPING ADDRESS</h3>
          <Link
            href={"/users/address/editAddress/shipping"}
            className="edit-button text-SubBlue"
          >
            Edit
          </Link>
        </div>

        <div className="address-details">
          {shippingAddressData ? (
            <div>
              <h2>
                {shippingAddressData?.firstName} {shippingAddressData?.lastName}
              </h2>
              <h3>{shippingAddressData?.street}</h3>
              <h4>{shippingAddressData?.town}</h4>
              <h4>{shippingAddressData?.state}</h4>
              <h5>{shippingAddressData?.postcode}</h5>
            </div>
          ) : (
            <div>
              <p>You have not set up this type of billing address yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditAddress;
