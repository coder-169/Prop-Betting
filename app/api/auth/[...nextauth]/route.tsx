import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/app/models/User";
import dbConnect from "@/app/utils/db";
import { sendMail } from "@/app/utils/funcs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "JohnBoe" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        console.log(credentials);
        await dbConnect();
        if (!credentials) {
          throw new Error("Missing credentials");
        }
        const user = await User.findOne({
          $or: [
            { email: { $regex: credentials.username, $options: "i" } },
            { username: { $regex: credentials.username, $options: "i" } },
          ],
        });
        console.log(user);

        if (!user) {
          throw new Error("Invalid credentials");
        }
        const passMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        console.log(passMatch);
        if (!passMatch) throw new Error("Invalid credentials");

        return user;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session }) {
      await dbConnect();
      if (!session.user) return session;
      let existingUser = await User.findOne({
        $or: [
          { email: session.user.email },
          { username: session.user.username },
        ],
      });
      if (existingUser) {
        session.user = existingUser;
      } else {
        throw new Error("User not found");
      }
      return session;
    },
    async signIn({ user, profile, account }) {
      if (!profile) return true;
      const { email_verified, given_name, family_name } = profile as {
        email_verified: boolean;
        given_name: string;
        family_name: string;
      };
      if (!email_verified) throw new Error("Sorry, your email is not verified");
      const { name, email, image } = user;
      await dbConnect();
      const existingUser = await User.findOne({
        $or: [{ email }, { username: name }],
      });
      if (!existingUser) {
        await User.create({
          username: name,
          email,
          image,
          isVerified: true,
          role: "user",
          provider: account?.provider,
        });
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
Your account has been created successfully using Google authentication.     </p>
                <br/>
                <p style="text-align: center; margin: 0px; line-height: 18px;">
                    <span style="font-size: 14px;"><b><i>WIN Support Team</i></b></span>
                </p>
            </div>
        </div>
        `;
        await sendMail(email, "Account Registration Successful", htmlContent);
      }
      return true;
    },
  },
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
