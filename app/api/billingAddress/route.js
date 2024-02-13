import BillingAddress from "@/models/billingAddress";
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
    const billingAddress = new BillingAddress({
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
    const result = await billingAddress.save();
    return NextResponse.json(billingAddress);
  } catch (error) {
    return NextResponse.json({
      error: `billingAddress saved failed ${error.message}`,
      status: false,
    });
  }
}
export async function GET(req, res) {
  try {
    const billingAddress = await BillingAddress.find();
    return NextResponse.json(billingAddress);
  } catch (error) {
    return NextResponse.json({
      error: "billingAddress get failed",
      status: false,
    });
  }
}
