import User from "@/app/models/User";
import dbConnect from "@/app/utils/db";
import { sendMail } from "@/app/utils/funcs";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConnect();
    const { email, name, subject, message, id } = body;
    if (!email || !name || !subject || !message) {
      return NextResponse.json({
        success: false,
        message: "All fields are required",
      });
    }
    const user = await User.findOne({ $or: [{ email: { $regex:email, $options: "i" }  }, { name: { $regex: name, $options: "i" }  }] });
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" });
    }
 
    if (!user.subscribed) {
      return NextResponse.json({
        success: false,
        message: "Sorry you are not subscribed",
      });
    }
    if (user.credits === -50) {
      const resp = await sendMail(
        process.env.EMAIL,
        'Crypto Inquiry',
        `Name: ${name} \nEmail: ${email}\nSubject: ${subject} \nMessage: ${message}`
      );
      if (!resp.success) {
        return NextResponse.json({ message: resp.message, success: false });
      } else {
        return NextResponse.json({
          success: true,
          message:
            "mail sent successfully you will get replied soon. We typically reply in 24 hours.",
        });
      }
    } else {
      if (user.credits <= 0) {
        return NextResponse.json({ success: false, message: "you don't have enough credits please subscribe to continue" });
      } else {
        const resp = await sendMail(
          process.env.EMAIL,
          'Crypto Inquiry',
          `Name: ${name} \nEmail: ${email}\nSubject: ${subject} \nMessage: ${message}`
        );
        if (!resp.success) {
          return NextResponse.json({ message: resp.message, success: false });
        } else {
          user.credits -= 1;
          await user.save()
          return NextResponse.json({
            success: true,
            message:
              "mail sent successfully you will get replied soon. We typically reply in 24 hours.",
          });
        }
      }
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
