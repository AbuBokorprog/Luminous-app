import Cart from "@/models/cart";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function GET(_, { params }) {
  const { id } = params;
  try {
    const cart = await Cart.findById({ _id: id });
    if (!cart) {
      return NextResponse.json({
        error: "Cart not found",
        status: 404,
      });
    }
    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json({
      error: `Cart ${error.message}`,
      status: false,
    });
  }
}
export async function PUT(req, { params }) {
  const { id } = params;
  const { quantity } = await req.json();
  try {
    const cart = await Cart.findOneAndUpdate(
      { _id: id },
      { quantity: quantity },
      { new: true, runValidators: true }
    );
    if (!cart) {
      return NextResponse.json({
        error: "Cart not found",
        status: 404,
      });
    }
    return NextResponse.json({
      success: "Cart updated successfully",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      error: `Cart ${error.message}`,
      status: false,
    });
  }
}
export async function DELETE(_, { params }) {
  const { id } = params;
  try {
    const cart = await Cart.findOneAndDelete({ _id: id });
    if (!cart) {
      return NextResponse.json({
        error: "Cart not found",
        status: 404,
      });
    }
    return NextResponse.json({
      success: "Cart successfully deleted",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      error: `Cart ${error.message}`,
      status: false,
    });
  }
}
