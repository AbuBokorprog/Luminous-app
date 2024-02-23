"use client";
import React, { useContext } from "react";
import AddressForm from "./address";
import {
  useGetBillingAddressByUserIdQuery,
  usePostBillingAddressMutation,
  useUpdateBillingAddressMutation,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";

const Billing = () => {
  const { currentUser } = useContext(authContext);
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
