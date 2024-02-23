import BillingAddress from "@/models/billingAddress";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();

export async function GET(_, { params }) {
  const { userId } = params;
  try {
    const billingAddress = await BillingAddress.findOne({ userId: userId });
    return NextResponse.json(billingAddress);
  } catch (error) {
    return NextResponse.json({
      error: `userId by billing address get failed: ${error.message}`,
      status: false,
    });
  }
}
