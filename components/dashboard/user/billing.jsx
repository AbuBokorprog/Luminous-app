"use client";
import React, { useContext, useEffect } from "react";
import AddressForm from "./address";
import {
  useGetBillingAddressByUserIdQuery,
  usePostBillingAddressMutation,
  useUpdateBillingAddressMutation,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import { useRouter } from "next/navigation";

const Billing = () => {
  const router = useRouter();
  const { currentUser } = useContext(authContext);
  useEffect(() => {
    if (!currentUser && currentUser?.role !== "user") {
      router.push("/login");
    }
  }, [currentUser, router]);
  const { data: billingAddressData, refetch } =
    useGetBillingAddressByUserIdQuery(currentUser?._id);
  const [postBill, { error }] = usePostBillingAddressMutation();
  const [updateBill, {}] = useUpdateBillingAddressMutation();

  return (
    <div>
      <AddressForm
        refetch={refetch}
        addressData={billingAddressData}
        post={postBill}
        update={updateBill}
      />
    </div>
  );
};

export default Billing;
