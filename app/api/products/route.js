import Products from "@/models/products";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function POST(req, res) {
  const {
    name,
    price,
    discountPrice,
    weight,
    description,
    userId,
    images,
    benefits,
    category,
    sub_category,
    concern,
    offer,
    brands,
    quantity,
  } = await req.json();
  try {
    const products = new Products({
      name,
      price,
      discountPrice,
      weight,
      description,
      benefits,
      userId,
      images,
      category,
      sub_category,
      concern,
      offer,
      brands,
      quantity,
    });
    const result = await products.save();
    return NextResponse.json({
      message: "Product saved successfully",
      status: true,
      products: result,
    });
  } catch (error) {
    return NextResponse.json({
      message: `${error.message}`,
      status: false,
    });
  }
}
export async function GET(req, res) {
  try {
    const products = await Products.find();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({
      message: "Product not found",
      status: false,
    });
  }
}
