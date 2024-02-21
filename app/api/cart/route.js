import Cart from "@/models/cart";
import Products from "@/models/products";
import { database } from "@/utils/database/database";

import { NextResponse } from "next/server";

database();
export async function POST(req, res) {
  const { userId, productId } = await req.json();
  try {
    const product = await Products.findById(productId);

    if (!product) {
      return NextResponse.json({
        error: "Product not found",
        status: false,
      });
    }

    const { name, images, price, discountPrice } = product;

    let cart = await Cart.findOne({ userId, productId });

    if (cart) {
      cart.quantity += 1;
    } else {
      cart = new Cart({
        userId,
        productId,
        name,
        image: images[0],
        price,
        discountPrice,
        quantity: 1,
      });
    }

    const result = await cart.save();

    return NextResponse.json({
      success: "Added to cart successfully",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      error: `Add to cart failed: ${error.message}`,
      status: false,
    });
  }
}

export async function GET() {
  try {
    const cart = await Cart.find();
    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json({
      error: `${error.message}`,
      status: false,
    });
  }
}
