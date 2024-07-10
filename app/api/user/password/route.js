import User from "@/app/model/User";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function PUT(req, res) {
  try {
    const headerList = headers();
    const id = headerList.get("id");
    const body = await req.json();
    const user = await User.findById(id);
    if (!user)
      return NextResponse.json({
        success: false,
        message: "user not found",
      });
      
    const check = await bcrypt.compare(body.oldPassword, user.password);
    if (check) {
      const newHash = await bcrypt.hash(body.newPassword, 10);
      user.password = newHash;
      await user.save();
      return NextResponse.json({
        success: true,
        user,
        message: "Password updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Old Password is incorrect",
      });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
