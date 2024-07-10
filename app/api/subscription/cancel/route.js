import Stripe from "stripe";
import { NextResponse } from "next/server";
import User from "@/app/model/User";
import { headers } from "next/headers";
import dbConnect from "@/app/utils/db";
import { sendMail } from "@/app/utils/funcs";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function DELETE(req, res) {
  try {
    await dbConnect();
    const headerList = headers();
    const id = headerList.get("userId");
    const user = await User.findById(id);
    if (!user) {
        return NextResponse.json({
            success: false,
            message: "customer Id not found",
        });
    }
    const subscriptions = await stripe.subscriptions.list({
      id: user.cusId,
      limit: 1,
    });
    const subscription = await stripe.subscriptions.cancel(
      subscriptions.data[0].id
    );

    return NextResponse.json({
      success: true,
      status: subscription.status,
      message: "some error occurred",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
