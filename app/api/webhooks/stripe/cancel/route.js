import User from "@/app/model/User";
import dbConnect from "@/app/utils/db";
import { sendMail } from "@/app/utils/funcs";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

// The library needs to be configured with your account's secret key.
// Ensure the key is kept out of any version control system you might be using.
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
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: `Webhook Error: ${err.message}`,
      },
      { status: 400 }
    );
  }

  const invoicePaymentFailed = event.data.object;
  const user = User.findOne({ cusId: invoicePaymentFailed.customer });
  // Handle the event
  switch (event.type) {
    case "invoice.payment_failed":
      user.subscribed = false;
      user.planName = null;
      user.subId = null;
      await user.save();
      // Then define and call a function to handle the event invoice.payment_failed
      break;
    // ... handle other event types
    case "charge.failed":
      user.subscribed = false;
      user.planName = null;
      user.subId = null;
      await user.save();
      break;
    case "payment_intent.payment_failed":
      user.subscribed = false;
      user.planName = null;
      user.subId = null;
      await user.save();
      break;
      break;
    // ... handle other event types
    default:
      return NextResponse.json({
        success: false,
        message: `Unhandled event type ${event.type}`,
      });
  }
  const htmlContent = `
  <div style="max-width: 600px; margin: auto; width: 100%;">
      <a href="https://www.wigroupllc.com/" style="text-decoration: none;">
          <img style="width: 35%; max-width: 300px; display: block; margin: 24px auto;" src="https://www.wigroupllc.com/assets/logo-1.png" alt="Logo Wigroup">
      </a>
      <div style="background: #f9f9f9; color: rgb(85, 85, 85); line-height: 150%; font-family: 'Georgia', 'Times', 'Times New Roman', 'serif'; text-align: center; padding: 16px 12px;">
          <p style="text-align: center; margin: 0px; line-height: 21px;">
              <span style="font-size: 24px;">Payment Failed</span>
          </p>
          <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
              Was it something we said&nbsp;
              <img style="width: 20px;" data-emoji="🥺" class="an1" alt="🥺" aria-label="🥺" draggable="false" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f97a/72.png" loading="lazy">
          </p>
          <br/>
          <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
        Your subscription is in canceled due to payment failed. 
          </p>
          <br/>
          <p style="text-align: center; margin: 0px; line-height: 18px;">
              <span style="font-size: 14px;"><b><i>WIN Support Team</i></b></span>
          </p>
      </div>
  </div>
  `;
  await sendMail(user.email, "Payment Failed", htmlContent);
  return NextResponse.json({
    success: true,
    message: "Payment failed subscription cancelled",
  });
}
