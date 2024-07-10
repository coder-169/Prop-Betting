import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/app/utils/db";
import User from "@/app/model/User";
import { generateCode, sendMail } from "@/app/utils/funcs";
export async function POST(req, res) {
  try {
    await dbConnect();
    const body = await req.json();
    const user = await User.findOne({
      $or: [
        { email: { $regex: body.email, $options: "i" } },
      ],
    });
    if (!user)
      return NextResponse.json({
        message: "Please login to verify account",
        success: false,
      });
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
                <span style="font-size: 24px;">Verify Account</span>
            </p>
            <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
Your account was created successfully &nbsp;<img data-emoji="🥳" style="width: 20px" class="an1" alt="🥳" aria-label="🥳" draggable="false" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f973/72.png" loading="lazy">
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
    const resp = await sendMail(body.email, "Verify Account", htmlContent);
    if (!resp.success) {
      return NextResponse.json({ message: resp.message, success: false });
    } else {
      return NextResponse.json({
        success: true,
        hashedCode,
        expireTime,
        message: "Mail Sent",
      });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
