import Products from "@/models/products";
import { database } from "@/utils/database/database";

import { NextResponse } from "next/server";

database();
export async function GET(req, { params }) {
  const { userId } = params;
  try {
    const product = await Products.find({ userId: userId });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({
      error: "Couldn't find product",
      status: false,
    });
  }
}
