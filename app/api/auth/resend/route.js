import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/app/models/User";
import dbConnect from "@/app/utils/db";
import { generateCode, sendMail } from "@/app/utils/funcs";

export async function POST(req, res) {
  try {
    await dbConnect();
    const body = await req.json();
    const { email } = body;
    if (!email)
      return NextResponse.json(
        { success: false, message: "Email is required" },
        {
          status: 400,
        }
      );
    const user = await User.findOne({
      email: { $regex: body.email, $options: "i" },
    });
    if (!user)
      return NextResponse.json(
        { success: false, message: "User not found" },
        {
          status: 404,
        }
      );

    const code = await generateCode();
    const hashedCode = await bcrypt.hash(code, 10);
    // const expireTime = new Date().getTime() + 1000;
    const expireTime = new Date().getTime() + 10 * 60 * 1000;
    const htmlContent = `
    <div style="max-width: 600px; margin: auto; width: 100%;">
        <a href="https://www.wigroupllc.com/" style="text-decoration: none;">
            <img style="width: 35%; max-width: 300px; display: block; margin: 24px auto;" src="https://www.wigroupllc.com/assets/logo-1.png" alt="Logo Wigroup">
        </a>
        <div style="background: #f9f9f9; color: rgb(85, 85, 85); line-height: 150%; font-family: 'Georgia', 'Times', 'Times New Roman', 'serif'; text-align: center; padding: 16px 12px;">
            <p style="text-align: center; margin: 0px; line-height: 21px;">
                <span style="font-size: 24px;">Successful Registration</span>
            </p>
            <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
Your account has been opened &nbsp;<img data-emoji="🥳" style="width: 20px" class="an1" alt="🥳" aria-label="🥳" draggable="false" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f973/72.png" loading="lazy">
            </p>
            <br/>
            <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
Here is your verification code. Please verify your account within 10 minutes.          </p>
            <br/>
                      <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
                ${code}
            </p>
            <br/>
            <p style="text-align: center; margin: 0px; line-height: 18px;">
                <span style="font-size: 14px;"><b><i>WIN Support Team</i></b></span>
            </p>
        </div>
    </div>
    `;
    const resp = await sendMail(email, "Account Verification", htmlContent);
    if (!resp.success) {
      throw new Error(resp.message);
    } else {
      return NextResponse.json(
        { success: true, message: "code resent" },
        {
          status: 200,
          hashedCode,
          expireTime,
        }
      );
    }
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
