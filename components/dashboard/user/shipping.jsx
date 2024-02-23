"use client";
import React, { useContext } from "react";
import AddressForm from "./address";
import {
  useGetShippingAddressByUserIdQuery,
  usePostShippingAddressMutation,
  useUpdateBillingAddressMutation,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";

const Shipping = () => {
  const { currentUser } = useContext(authContext);
  const [postShipping, { error }] = usePostShippingAddressMutation();
  const [updateShipping, {}] = useUpdateBillingAddressMutation();
  const { data: shippingAddressData, refetch } =
    useGetShippingAddressByUserIdQuery(currentUser?._id);

  return (
    <div>
      <AddressForm
        refetch={refetch}
        addressData={shippingAddressData}
        post={postShipping}
        update={updateShipping}
      />
    </div>
  );
};

export default Shipping;
