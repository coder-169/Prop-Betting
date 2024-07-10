import User from "@/app/model/User";
import dbConnect from "@/app/utils/db";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =
  "whsec_eacd913532943657221a87a1f77e17501fcfbdb91d862624ff6a1f915a32a864";
export async function POST(request, response) {
  await dbConnect();
  const body = await request.json();
  const headerList = headers();
  const sig = headerList.get("stripe-signature");
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: `Webhook Error: ${err.message}`,
    });
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntentSucceeded = event.data.object;
      const user = User.findOne({ cusId: paymentIntentSucceeded.customer });
      if (paymentIntentSucceeded.subtotal === 1499) {
        // Package is Standard
        user.credits = -50;
        user.subscribed = true;
        user.planName = "STANDARD";
      }
      if (paymentIntentSucceeded.subtotal === 899) {
        // Package is Standard
        user.credits += 3;
        user.subscribed = true;
        user.planName = "BASIC";
      }
      if (paymentIntentSucceeded.subtotal === 4999) {
        // Package is Standard
        user.credits = -100;
        user.subscribed = true;
        user.planName = "PREMIUM";
      }
      await user.save();
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      return NextResponse.json({
        success: true,
        message: `Unhandled event type ${event.type}`,
      });
  }

  return NextResponse.json({ success: true, message: "credits added" });
}
