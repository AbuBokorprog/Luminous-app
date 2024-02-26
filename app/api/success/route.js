// success/route.js

import { NextResponse } from "next/server";

export async function POST(req, _) {
  try {
    // Log the data
    const data = await req.json();
    console.log("Data received:", data);

    // Construct the complete URL for redirection
    const redirectUrl = `http://${req.headers.host}/check_out/success?id=${data.tran_id}`;

    // Redirect to the success page
    return NextResponse.redirect(redirectUrl, { status: 303 });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.error("An error occurred.");
  }
}
