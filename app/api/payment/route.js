import BillingAddress from "@/models/billingAddress";
import Cart from "@/models/cart";
import Order from "@/models/order";
import ShippingAddress from "@/models/shippingAddress";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";
database();
export async function POST(req, _) {
  const {
    displayName,
    phone,
    email,
    area,
    district,
    address,
    totalPrice,
    userId,
    delivery,
    tran_id,
  } = await req.json();
  let price = 0;
  if (delivery === "Delivery inside Dhaka") {
    price = totalPrice + 49;
  } else {
    price = totalPrice + 100;
  }

  const cart = await Cart.find({ userId: userId });
  const totalQuantity = cart?.reduce((total, item) => total + item.quantity, 0);

  const {
    firstName,
    lastName,
    companyName,
    country: shippingCountry,
    postcode: shippingPostcode,
  } = await ShippingAddress.findOne({ userId: userId });
  const { country, postcode } = await BillingAddress.findOne({
    userId: userId,
  });
  try {
    const init_url = "https://sandbox.sslcommerz.com/gwprocess/v3/api.php";

    const formData = new FormData();
    formData.append("store_id", "absta65daa3a82fce8");
    formData.append("store_passwd", "absta65daa3a82fce8@ssl");
    formData.append("total_amount", `${price}`);
    formData.append("currency", "BDT");
    formData.append("userId", `${userId}`);
    formData.append("tran_id", `${tran_id}`);
    formData.append(
      "success_url",
      `http://localhost:3000/api/success?id=${tran_id}`
    );
    formData.append("fail_url", `http://localhost:3000/api/fail?id=${tran_id}`);
    formData.append(
      "cancel_url",
      `http://localhost:3000/api/cancel?id=${tran_id}`
    );
    formData.append("ipn_url", `http://localhost:3000/api/ipn?id=${tran_id}`);
    formData.append("cus_name", `${displayName}`);
    formData.append("cus_email", `${email}`);
    formData.append("cus_add1", `${address}`);
    formData.append("cus_add2", `${address}`);
    formData.append("cus_city", `${area}`);
    formData.append("cus_state", `${district}`);
    formData.append("cus_postcode", `${postcode}`);
    formData.append("cus_country", `${country}`);
    formData.append("cus_phone", `${phone}`);
    formData.append("cus_fax", "01701063280");
    formData.append("shipping_method", "YES");
    formData.append("ship_name", `${displayName}`);
    formData.append("ship_add1", `${address}`);
    formData.append("ship_add2", `${address}`);
    formData.append("ship_city", `${area}`);
    formData.append("ship_state", `${district}`);
    formData.append("ship_country", `${shippingCountry}`);
    formData.append("ship_postcode", `${shippingPostcode}`);
    formData.append("product_name", "product_name");
    formData.append("product_category", "category");
    formData.append("product_profile", "profile");
    formData.append("product_amount", `${totalQuantity}`);

    const requestOptions = { method: "POST", body: formData };
    let SSLRes = await fetch(init_url, requestOptions);

    let SSLResJSON = await SSLRes.json();

    return NextResponse.json({ SSLResJSON });
  } catch (e) {
    return NextResponse.json({ data: e.message });
  }
}
