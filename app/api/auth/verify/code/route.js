import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/app/utils/db";
export async function POST(req, res) {
  try {
    const body = await req.json();
    const { code, hashedCode } = body;
    if (!code || !hashedCode)
      return NextResponse.json(
        { success: true, message: "invalid request" },
        {
          status: 200,
        }
      );
    const check = await bcrypt.compare(code, hashedCode);
    if (check)
      return NextResponse.json(
        { success: true },
        {
          status: 200,
        }
      );

    return NextResponse.json(
      { success: false },
      {
        status: 400,
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
