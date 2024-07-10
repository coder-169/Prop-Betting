import User from "@/app/model/User";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
  try {
    const body = await req.json();
    const user = await User.findById(body.id);
    if (!user)
      return NextResponse.json({
        success: false,
        message: "Invalid Id User not found",
      });
    const { country, city, line1, postal_code, state } = body;

    user.address = { country, city, line1, postal_code, state };
    await user.save();
    return NextResponse.json({
      success: true,
      message: "Address updated successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
