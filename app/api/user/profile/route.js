import User from "@/app/model/User";
import { sendMail } from "@/app/utils/funcs";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export async function PUT(req, res) {
  try {
    const headerList = headers();
    const id = headerList.get("id");
    const body = await req.json();
    await User.findByIdAndUpdate(id, body);
    const user = await User.findById(id);
    if (user)
      return NextResponse.json({
        success: true,
        user,
        message: "Profile updated successfully",
      });

    return NextResponse.json({
      success: false,
      user,
      message: "User not found!",
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
export async function DELETE(req, res) {
  try {
    const headerList = headers();
    const id = headerList.get("id");
    const user = await User.findByIdAndDelete(id);
    if (!user)
      return NextResponse.json({
        success: false,
        message: "Invalid user Id!",
      });

    if (user.cusId) {
      const subscriptions = await stripe.subscriptions.list({
        customer: user.cusId,
        limit: 1,
      });
      if (subscriptions.data.length === 1) {
        const subscription = await stripe.subscriptions.cancel(
          subscriptions.data[0].id
        );
        if (subscription && subscription.status === "canceled") {
          const htmlContent = `
          <div style="max-width: 600px; margin: auto; width: 100%;">
              <a href="https://www.wigroupllc.com/" style="text-decoration: none;">
                  <img style="width: 35%; max-width: 300px; display: block; margin: 24px auto;" src="https://www.wigroupllc.com/assets/logo-1.png" alt="Logo Wigroup">
              </a>
              <div style="background: #f9f9f9; color: rgb(85, 85, 85); line-height: 150%; font-family: 'Georgia', 'Times', 'Times New Roman', 'serif'; text-align: center; padding: 16px 12px;">
                  <p style="text-align: center; margin: 0px; line-height: 21px;">
                      <span style="font-size: 24px;">Account Deleted</span>
                  </p>
                  <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
                      We're sorry to see you go &nbsp;
                      <img style="width: 20px;" data-emoji="🥺" class="an1" alt="🥺" aria-label="🥺" draggable="false" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f97a/72.png" loading="lazy">
                  </p>
                  <br/>
                  <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
    Your account has been deleted successfully and your subscription has been cancelled.               </p>
                  <br/>
                  <p style="text-align: center; margin: 0px; line-height: 18px;">
                      <span style="font-size: 14px;"><b><i>WIN Support Team</i></b></span>
                  </p>
              </div>
          </div>
          `;
          await sendMail(user.email, "Account Deleted", htmlContent);
          return NextResponse.json({
            success: true,
            message: "Account deleted! subscription cancelled successfully",
          });
        }
      }
    }
    const htmlContent = `
    <div style="max-width: 600px; margin: auto; width: 100%;">
        <a href="https://www.wigroupllc.com/" style="text-decoration: none;">
            <img style="width: 35%; max-width: 300px; display: block; margin: 24px auto;" src="https://www.wigroupllc.com/assets/logo-1.png" alt="Logo Wigroup">
        </a>
        <div style="background: #f9f9f9; color: rgb(85, 85, 85); line-height: 150%; font-family: 'Georgia', 'Times', 'Times New Roman', 'serif'; text-align: center; padding: 16px 12px;">
            <p style="text-align: center; margin: 0px; line-height: 21px;">
                <span style="font-size: 24px;">Account Deleted</span>
            </p>
            <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
                We're sorry to see you go &nbsp;
                <img style="width: 20px;" data-emoji="😢" class="an1 __web-inspector-hide-shortcut__" alt="😢" aria-label="😢" draggable="false" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f622/72.png" loading="lazy">
            </p>
            <br/>
            <p style="text-align: center; font-size: 14px; margin: 0px; line-height: 21px;">
Your account has been deleted successfully              </p>
            <br/>
            <p style="text-align: center; margin: 0px; line-height: 18px;">
                <span style="font-size: 14px;"><b><i>WIN Support Team</i></b></span>
            </p>
        </div>
    </div>
    `;
    await sendMail(user.email, "Account Deleted", htmlContent);
    return NextResponse.json({
      success: true,
      message: "Account deleted!",
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
