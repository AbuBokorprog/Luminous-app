import ShippingAddress from "@/models/shippingAddress";
import { database } from "@/utils/database/database";

import { NextResponse } from "next/server";

database();
export async function POST(req, res) {
  const {
    firstName,
    lastName,
    userId,
    companyName,
    country,
    street,
    state,
    town,
    postCode,
    phone,
    email,
  } = await req.json();

  try {
    const shippingAddress = new ShippingAddress({
      firstName,
      lastName,
      userId,
      companyName,
      country,
      street,
      state,
      town,
      postCode,
      phone,
      email,
    });
    const result = await shippingAddress.save();
    return NextResponse.json(shippingAddress);
  } catch (error) {
    return NextResponse.json({
      error: `shippingAddress saved failed ${error.message}`,
      status: false,
    });
  }
}
export async function GET(req, res) {
  try {
    const shippingAddress = await ShippingAddress.find();
    return NextResponse.json(shippingAddress);
  } catch (error) {
    return NextResponse.json({
      error: "shippingAddress get failed",
      status: false,
    });
  }
}
