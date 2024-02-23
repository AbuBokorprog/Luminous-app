import BillingAddress from "@/models/billingAddress";
import { database } from "@/utils/database/database";

import { NextResponse } from "next/server";

database();
export async function GET(_, { params }) {
  const { id } = params;
  try {
    const billingAddress = await BillingAddress.findById({ _id: id });
    return NextResponse.json(billingAddress);
  } catch (error) {
    return NextResponse.json({
      error: `Specific billing address get failed: ${error.message}`,
      status: false,
    });
  }
}
export async function PUT(req, { params }) {
  const { id } = params;
  const {
    firstName,
    lastName,
    userId,
    companyName,
    street,
    state,
    town,
    postcode,
    phone,
    email,
  } = await req.json();
  try {
    const updateBillingAddress = await BillingAddress.findOneAndUpdate(
      { _id: id },
      {
        firstName: firstName,
        lastName: lastName,
        userId: userId,
        companyName: companyName,
        street: street,
        state: state,
        town: town,
        postcode: postcode,
        phone: phone,
        email: email,
      },
      { new: true, runValidators: true }
    );
    if (!updateBillingAddress) {
      return NextResponse.json({
        error: "Could not find billing address",
        status: false,
      });
    }
    return NextResponse.json({
      message: "billing address updated successfully",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      error: `Could not update billing address ${error.message}`,
      status: false,
    });
  }
}

export async function DELETE(_, { params }) {
  const { id } = params;
  try {
    const deleteBillingAddress = await BillingAddress.findOneAndDelete({
      _id: id,
    });
    if (!deleteBillingAddress) {
      return NextResponse.json({
        error: `Could not find Billing address`,
        status: false,
      });
    }

    return NextResponse.json({
      message: `Billing address deleted successfully`,
      status: true,
      deleteBillingAddress,
    });
  } catch (error) {
    return NextResponse.json({
      error: `Billing address deleted failed: ${error.message}`,
      status: false,
    });
  }
}
