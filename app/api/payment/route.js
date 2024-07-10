import Stripe from "stripe";
import { NextResponse } from "next/server";
import User from "@/app/model/User";
import { headers } from "next/headers";
import dbConnect from "@/app/utils/db";
import { sendMail } from "@/app/utils/funcs";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
  try {
    await dbConnect();
    const body = await req.json();
    const { plan, customer, subId, address } = body;
    const user = await User.findOne({ cusId: customer });
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "customer Id not found",
      });
    }
    const subscription = await stripe.subscriptions.retrieve(subId);
    if (subscription.status !== "active") {
      user.cusId = null;
      user.subId = null;
      await user.save();
      await stripe.subscriptions.cancel(subId);
      return NextResponse.json({
        success: false,
        message: "Subscription Failed Resubscribe",
      });
    }
    user.subscribed = true;
    user.subId = subId;
    user.planName = plan;
    user.subscribedOn = Date.now();
    if (plan.toLowerCase() === "basic") {
      if (user.credits >= 0) {
        user.credits += 3;
      } else {
        user.credits = 3;
      }
    }
    if (plan.toLowerCase() === "premium") {
      user.credits = -100;
    }
    if (plan.toLowerCase() === "standard") user.credits = -50;
    user.address = address;
    await user.save();
    const htmlContent = `
    <div style="max-width: 600px; margin: auto; width: 100%;">
        <a href="https://www.wigroupllc.com/" style="text-decoration: none;">
            <img style="width: 35%; max-width: 300px; display: block; margin: 24px auto;" src="https://www.wigroupllc.com/assets/logo-1.png" alt="Logo Wigroup">
        </a>
        <div style="background: #f9f9f9; color: rgb(85, 85, 85); line-height: 150%; font-family: 'Georgia', 'Times', 'Times New Roman', 'serif'; text-align: center; padding: 16px 12px;">
            <p style="text-align: center; margin: 0px; line-height: 21px;">
                <span style="font-size: 24px;">Subscription Active</span>
            </p>
            <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
                Thank you for joining us&nbsp;
<img style="width:20px" data-emoji="☺️" class="an1" alt="☺️" aria-label="☺️" draggable="false" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/263a_fe0f/72.png" loading="lazy">            </p>
            <br/>
            <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
Your subscription is now active. Let's get started!            </p>
            <br/>
            <p style="text-align: center; margin: 0px; line-height: 18px;">
                <span style="font-size: 14px;"><b><i>WIN Support Team</i></b></span>
            </p>
        </div>
    </div>
    `;
    await sendMail(user.email, "Subscription Active", htmlContent);
    return NextResponse.json({
      success: true,
      message: "Subscription Successful",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
export async function GET(req, res) {
  try {
    const headerList = headers();
    const id = headerList.get("id");
    const user = await User.findOne({ cusId: id });
    if (!user) {
      return NextResponse.json({
        success: true,
        transactions: { data: [] },
        message: "Transactions fetched successfully",
      });
    }
    const transactions = await stripe.paymentIntents.list({ customer: id });
    return NextResponse.json({
      success: true,
      transactions,
      message: "Transactions fetched successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
