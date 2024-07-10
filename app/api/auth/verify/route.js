import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/app/utils/db";
import User from "@/app/models/User";

export async function POST(req, res) {
  try {
    await dbConnect();
    const body = await req.json();
    const { code, hashedCode, email } = body;
    const user = await User.findOne({ email: { $regex: body.email, $options: "i" }  });
    if (!user)
      return NextResponse.json(
        {
          success: false,
          message: `We couldn't find your account may be email is incorrect!`,
        },
        {
          status: 200,
        }
      );
    const check = await bcrypt.compare(code, hashedCode);
    if (!check)
      return NextResponse.json(
        { success: false },
        {
          status: 200,
        }
      );

    user.isVerified = true;
    await user.save();
    return NextResponse.json(
      { success: true, message: "verification successful" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      {
        status: 500,
      }
    );
  }

  //   const user = await User.create({ email, user, password });
}
