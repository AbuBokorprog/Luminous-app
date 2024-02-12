import Products from "@/models/products";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";
database();
export async function GET(req, { params }) {
  const { id } = params;
  try {
    const product = await Products.findById({ _id: id });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({
      error: "Couldn't find product",
      status: false,
    });
  }
}
export async function PUT(req, { params }) {
  const { id } = params;
  const { quantity, status, image1, image2, image3, image4, offer } =
    await req.json();
  try {
    const product = await Products.findOneAndUpdate(
      { _id: id },
      {
        quantity: quantity,
        status: status,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        offer: offer,
      },
      { new: true, runValidators: true }
    );
    if (!product) {
      return NextResponse.json({
        error: "Product not found",
        status: false,
      });
    }
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({
      error: "Couldn't update product",
      status: false,
    });
  }
}
export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const deletedProduct = await Products.findOneAndDelete({ _id: id });
    if (!deletedProduct) {
      return NextResponse.json({
        error: "Couldn't find product",
        status: false,
      });
    }
    return NextResponse.json({
      message: "Product deleted",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Couldn't delete product",
      status: false,
    });
  }
}
