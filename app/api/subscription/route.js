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
    const subId = headerList.get("subId");
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "customer Id not found",
      });
    }
    if(subId){
      const sub = await stripe.subscriptions.cancel(subId);
      return NextResponse.json({
        success: true,
        message: "subscription cancelled successfully",
      });
    }
    const subscriptions = await stripe.subscriptions.list({
      customer: user.cusId,
      limit: 1,
    });
    if (subscriptions.data.length === 0) {
      return NextResponse.json({
        success: false,
        message: "no subscription found",
      });
    }
    if (subscriptions.data.length > 1) {
      return NextResponse.json({
        success: false,
        message: "subscription not found with given id",
      });
    }
    const subscription = await stripe.subscriptions.cancel(
      subscriptions.data[0].id
    );
    if (subscription && subscription.status === "canceled") {
      user.subscribed = false;
      user.planName = null;
      user.subId = null;
      user.cusId = null;
      user.credits = 0;
      await user.save();
      const htmlContent = `
      <div style="max-width: 600px; margin: auto; width: 100%;">
          <a href="https://www.wigroupllc.com/" style="text-decoration: none;">
              <img style="width: 35%; max-width: 300px; display: block; margin: 24px auto;" src="https://www.wigroupllc.com/assets/logo-1.png" alt="Logo Wigroup">
          </a>
          <div style="background: #f9f9f9; color: rgb(85, 85, 85); line-height: 150%; font-family: 'Georgia', 'Times', 'Times New Roman', 'serif'; text-align: center; padding: 16px 12px;">
              <p style="text-align: center; margin: 0px; line-height: 21px;">
                  <span style="font-size: 24px;">Subscription Cancelled</span>
              </p>
              <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
                  Was it something we said&nbsp;
                  <img style="width: 20px;" data-emoji="🥺" class="an1" alt="🥺" aria-label="🥺" draggable="false" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f97a/72.png" loading="lazy">
              </p>
              <br/>
              <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
            Your subscription has been cancelled. When you're ready, let's continue this journey together. 
              </p>
              <br/>
              <p style="text-align: center; margin: 0px; line-height: 18px;">
                  <span style="font-size: 14px;"><b><i>WIN Support Team</i></b></span>
              </p>
          </div>
      </div>
      `;
      await sendMail(user.email, "Subscription Cancelled", htmlContent);
      return NextResponse.json({
        success: true,
        message: "subscription cancelled successfully",
      });
    }

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
export async function POST(req, res) {
  try {
    const body = await req.json();
    const { name, pack, email } = body;
    const user = await User.findOne({ $or: [{ name }, { email }] });
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "account not found invalid name or email",
      });
    }
    if (!user.isVerified) {
      return NextResponse.json({
        success: false,
        message: "sorry you need to verify account!",
      });
    }
    let customer = null;
    if (user.cusId) {
      customer = { id: user.cusId };
    } else {
      customer = await stripe.customers.create({
        name,
        email,
      });
      user.cusId = customer.id;
    }
    await user.save();
    if (!customer) {
      return NextResponse.json({
        success: false,
        message: "customer not created",
      });
    }
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.id,
      limit: 1,
    });
    if (
      subscriptions.data.length === 1 &&
      subscriptions.data[0].status === "active"
    ) {
      return NextResponse.json({
        success: false,
        message: "there is an active subscription already",
      });
    }
    if (
      subscriptions.data.length === 1 &&
      subscriptions.data[0].status !== "active"
    ) {
      user.cusId = null;
      user.subscribed = false;
      user.planName = null;
      user.subId = null;
      await user.save();
    }
    let price = null;
    if (pack.toLowerCase() === "basic") {
      price = process.env.BASIC;
    }
    if (pack.toLowerCase() === "standard") {
      price = process.env.STANDARD;
    }
    if (pack.toLowerCase() === "premium") {
      const payment = await stripe.paymentIntents.create({
        amount: 49.99 * 100,
        currency: "usd",
        payment_method_types: ["card"],
        receipt_email: email,
        customer: customer.id,
        metadata: {
          name,
          receipt_email: email,
          company: "Win Investments",
        },
        description: "Win Investments One Time sub payment",
      });
      // 2. Extract the PaymentIntent ID from the subscription's latest invoice
      return NextResponse.json({
        success: true,
        client_secret: payment.client_secret,
        customer,
        plan: pack,
        message: "Payment Processing",
      });
    } else {
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        currency: "USD",
        payment_behavior: "default_incomplete",
        items: [
          {
            price,
          },
        ],

        payment_settings: {
          payment_method_types: ["card"],
        },
        expand: ["latest_invoice.payment_intent"], // Expand the latest invoice's payment intent to get the PaymentIntent ID
      });
      // 2. Extract the PaymentIntent ID from the subscription's latest invoice
      const paymentIntentId = subscription.latest_invoice.payment_intent.id;
      const clientSecret =
        subscription.latest_invoice.payment_intent.client_secret;
      return NextResponse.json({
        success: true,
        paymentIntentId,
        client_secret: clientSecret,
        subscription,
        customer,
        plan: pack,
        message: "Payment Processing",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
