"use client";
import React, { useContext, useEffect } from "react";
import AddressForm from "./address";
import {
  useGetShippingAddressByUserIdQuery,
  usePostShippingAddressMutation,
  useUpdateBillingAddressMutation,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import { useRouter } from "next/navigation";

const Shipping = () => {
  const { currentUser } = useContext(authContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser && currentUser?.role !== "user") {
      router.push("/login");
    }
  }, [currentUser, router]);
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
