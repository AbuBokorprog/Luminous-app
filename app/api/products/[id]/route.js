import Products from "@/models/products";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";
database();
export async function GET(req, { params }) {
  const { id } = params;
  try {
    const updateProduct = await Products.findById({ _id: id });
    return NextResponse.json(updateProduct);
  } catch (error) {
    return NextResponse.json({
      error: "Couldn't find updateProduct",
      status: false,
    });
  }
}
export async function PUT(req, { params }) {
  const { id } = params;
  const { quantity, images, status, offer, price, discountPrice } =
    await req.json();
  try {
    const updateProduct = await Products.findOneAndUpdate(
      { _id: id },
      {
        quantity: quantity,
        price: price,
        discountPrice: discountPrice,
        status: status,
        images: images,
        offer: offer,
      },
      { new: true, runValidators: true }
    );
    if (!updateProduct) {
      return NextResponse.json({
        error: "Product not found",
        status: false,
      });
    }

    if (updateProduct?.quantity < 9) {
      updateProduct.lowStockMessage = `Your updateProduct ${updateProduct.name} is going out of stock. You need to restock.`;
    } else {
      updateProduct.lowStockMessage = null;
    }
    await updateProduct.save();
    return NextResponse.json({
      success: `Your updateProduct ${updateProduct.name} update`,
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      error: `Couldn't update updateProduct ${error.message}`,
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
        error: "Couldn't find updateProduct",
        status: false,
      });
    }
    return NextResponse.json({
      message: "Product deleted",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      error: `Couldn't delete updateProduct ${error.message}`,
      status: false,
    });
  }
}
