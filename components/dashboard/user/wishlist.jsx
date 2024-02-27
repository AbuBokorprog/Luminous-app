import { useGetWishlistByUserIdQuery } from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import React, { useContext } from "react";

const Wishlist = () => {
  const { currentUser } = useContext(authContext);
  const { data: wishlist, isLoading } = useGetWishlistByUserIdQuery(
    currentUser?._id
  );
  return (
    <div>
      <h2>Wishlist</h2>
    </div>
  );
};

export default Wishlist;
