"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import {
  IconBrandGoogle,
  IconBrandTwitterFilled,
  IconBrandFacebookFilled,
} from "@tabler/icons-react";
import Input from "@/components/Input";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CreateAcount() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [active, setActive] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  const [creds, setCreds] = useState({
    email: "",
    username: "",
    referralCode: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: any) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  const [passType, setPassType] = useState("password");
  const loginUser = async (e: any) => {
    e.preventDefault();
    if (creds.username === "" || creds.password === "")
      return toast.error("Credentials are required");
    setLoading(true);
    await signIn("credentials", {
      ...creds,
      redirect: false,
    }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
      }
      if (callback?.ok && !callback.error) {
        toast.success("Log In Successful! Redirecting you");
        router.push("/profile");
      }
    });
    setLoading(false);
  };
  const signInWithGoogle = async () => {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/profile",
    });
  };
  const handleSignUp = async (e: any) => {
    e.preventDefault();
    if (
      creds.email === "" ||
      creds.first_name === "" ||
      creds.last_name === "" ||
      creds.name === "" ||
      creds.password === "" ||
      creds.confirmPassword === ""
    )
      return toast.error("Please fill all the fields");
    if (creds.password !== creds.confirmPassword)
      return toast.error("Both passwords should match");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(creds),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("win-signup-email", creds.email);
        localStorage.setItem("win-signup-code", data.hashedCode);
        localStorage.setItem("win-signup-expireTime", data.expireTime);
        toast.success(data.message + " Verify your account!");
        router.push("/auth/verify");
      } else {
        toast.error(data.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
    setLoading(false);
  };
  return (
    <section className="h-screen flex items-center">
      <div className="w-1/2">
        <div className="pb-10 pt-8 mb-7 mt-12 mt-lg-0 px-4 px-sm-10">
          <svg
            width="130"
            height="36"
            viewBox="0 0 130 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="my-4 text-center mx-auto block"
          >
            <path
              d="M13.64 17.76C15.72 21.0667 17.7867 24.0533 19.84 26.72L19.76 27.32C18.0267 27.9333 16.2533 28.2933 14.44 28.4L13.88 27.96C11.96 24.6533 10.4 21.7733 9.2 19.32H5.32V19.84L5.56 28H0.12L0.4 20.32L0.12 2.24L10 2.2C12.6933 2.2 14.7733 2.86667 16.24 4.2C17.7067 5.50667 18.44 7.38667 18.44 9.84C18.44 11.4933 18.0133 13.0133 17.16 14.4C16.3333 15.76 15.16 16.88 13.64 17.76ZM5.4 15.12L9.36 15.28C11.6267 14.5067 12.76 12.8667 12.76 10.36C12.76 9 12.3867 7.98667 11.64 7.32C10.92 6.62667 9.8 6.25333 8.28 6.2L5.56 6.36L5.4 15.12ZM36.1056 19.36L25.3056 19.44C25.5456 22.7733 27.239 24.44 30.3856 24.44C32.039 24.44 33.879 23.9733 35.9056 23.04L36.3456 23.32L35.5456 27.28C33.519 28.0267 31.6123 28.4 29.8256 28.4C26.8923 28.4 24.5856 27.5467 22.9056 25.84C21.2523 24.1333 20.4256 21.7733 20.4256 18.76C20.4256 15.7733 21.239 13.4133 22.8656 11.68C24.4923 9.92 26.6923 9.04 29.4656 9.04C31.839 9.04 33.6656 9.69333 34.9456 11C36.2523 12.28 36.9056 14.08 36.9056 16.4C36.9056 17.0133 36.839 17.7867 36.7056 18.72L36.1056 19.36ZM32.2656 15.8C32.2656 14.7333 32.0256 13.9333 31.5456 13.4C31.0656 12.84 30.359 12.56 29.4256 12.56C28.3856 12.56 27.519 12.9067 26.8256 13.6C26.1323 14.2667 25.6656 15.24 25.4256 16.52L32.1856 16.36L32.2656 15.8ZM58.0622 11.92C57.3422 12.1067 56.3155 12.3067 54.9822 12.52L54.9022 12.68C55.3022 13.48 55.5022 14.3733 55.5022 15.36C55.5022 17.36 54.7689 18.96 53.3022 20.16C51.8622 21.3333 49.9022 21.92 47.4222 21.92C46.6755 21.92 45.9022 21.8533 45.1022 21.72C44.8622 21.96 44.7022 22.1467 44.6222 22.28C44.5422 22.4133 44.5022 22.5733 44.5022 22.76C44.5022 23.24 44.8222 23.5733 45.4622 23.76C46.1022 23.9467 47.1155 24.1333 48.5022 24.32C50.0755 24.5067 51.3822 24.7333 52.4222 25C53.4889 25.2667 54.3955 25.7333 55.1422 26.4C55.9155 27.0667 56.3022 28.0133 56.3022 29.24C56.3022 30.4933 55.9022 31.6133 55.1022 32.6C54.3289 33.6133 53.2489 34.4 51.8622 34.96C50.4755 35.52 48.9022 35.8 47.1422 35.8C44.7155 35.8 42.8489 35.3067 41.5422 34.32C40.2355 33.3333 39.5822 32.0267 39.5822 30.4C40.4089 29.2533 41.5155 28.2533 42.9022 27.4V27.2C41.9955 26.88 41.2889 26.44 40.7822 25.88C40.2755 25.2933 40.0222 24.52 40.0222 23.56C40.7422 22.68 41.6489 21.8667 42.7422 21.12V20.92C41.7822 20.3867 41.0489 19.6933 40.5422 18.84C40.0622 17.96 39.8222 16.9333 39.8222 15.76C39.8222 13.68 40.5422 12.0533 41.9822 10.88C43.4222 9.70667 45.3822 9.12 47.8622 9.12C49.3022 9.12 50.6089 9.36 51.7822 9.84C53.7022 9.49333 55.6622 8.96 57.6622 8.24L58.0622 8.6V11.92ZM47.5822 18.72C48.6755 18.72 49.5022 18.44 50.0622 17.88C50.6222 17.32 50.9022 16.5067 50.9022 15.44C50.9022 13.4133 49.8622 12.4 47.7822 12.4C45.5422 12.4 44.4222 13.4267 44.4222 15.48C44.4222 16.5467 44.6889 17.36 45.2222 17.92C45.7555 18.4533 46.5422 18.72 47.5822 18.72ZM51.8222 30.2C51.8222 29.48 51.4355 28.9867 50.6622 28.72C49.9155 28.4533 48.7555 28.2267 47.1822 28.04L45.8222 27.84C45.1822 28.2667 44.7022 28.68 44.3822 29.08C44.0622 29.48 43.9022 29.9067 43.9022 30.36C43.9022 31.0533 44.2222 31.6133 44.8622 32.04C45.5022 32.4667 46.4355 32.68 47.6622 32.68C48.9155 32.68 49.9155 32.4533 50.6622 32C51.4355 31.5733 51.8222 30.9733 51.8222 30.2ZM60.5422 20.32L60.3422 9.76L65.5822 9.32L65.3422 19.8L65.5822 28H60.2622L60.5422 20.32ZM63.0622 0.279999C63.8889 0.279999 64.5289 0.519999 64.9822 1C65.4622 1.48 65.7022 2.14667 65.7022 3C65.7022 3.90667 65.4489 4.62667 64.9422 5.16C64.4355 5.69333 63.7422 5.96 62.8622 5.96C61.9822 5.96 61.3022 5.72 60.8222 5.24C60.3689 4.76 60.1422 4.08 60.1422 3.2C60.1422 2.32 60.3955 1.61333 60.9022 1.08C61.4355 0.546666 62.1555 0.279999 63.0622 0.279999ZM76.8519 9.08C78.6652 9.08 80.3719 9.38667 81.9719 10L81.2519 13.92L80.6119 14.12C79.8385 13.6133 79.0652 13.2267 78.2919 12.96C77.5185 12.6933 76.8385 12.56 76.2519 12.56C75.6119 12.56 75.1052 12.7333 74.7319 13.08C74.3585 13.4 74.1719 13.8 74.1719 14.28C74.1719 14.84 74.4119 15.2933 74.8919 15.64C75.3985 15.9867 76.1852 16.3733 77.2519 16.8C78.3185 17.2267 79.1985 17.64 79.8919 18.04C80.5852 18.44 81.1719 19 81.6519 19.72C82.1585 20.4133 82.4119 21.28 82.4119 22.32C82.4119 23.3867 82.1319 24.3867 81.5719 25.32C81.0385 26.2267 80.2119 26.9733 79.0919 27.56C77.9719 28.12 76.5985 28.4 74.9719 28.4C73.0519 28.4 71.0652 28 69.0119 27.2L69.6119 23.04L70.1319 22.72C70.9585 23.4133 71.8785 23.9733 72.8919 24.4C73.9052 24.8 74.7985 25 75.5719 25C76.2919 25 76.8519 24.8267 77.2519 24.48C77.6519 24.1067 77.8519 23.6667 77.8519 23.16C77.8519 22.6 77.5985 22.1467 77.0919 21.8C76.6119 21.4533 75.8385 21.0667 74.7719 20.64C73.6785 20.16 72.7852 19.7333 72.0919 19.36C71.3985 18.96 70.7985 18.4 70.2919 17.68C69.8119 16.96 69.5719 16.0667 69.5719 15C69.5719 13.2667 70.2252 11.8533 71.5319 10.76C72.8385 9.64 74.6119 9.08 76.8519 9.08ZM93.4834 24.08C94.3368 24.08 95.2301 23.8533 96.1634 23.4L96.6034 23.8L96.0834 26.96C94.7234 27.6533 93.3368 28.08 91.9234 28.24C88.3234 27.8667 86.5234 26.1067 86.5234 22.96L86.7234 19.64L86.6834 12.76H84.2034L84.0034 12.48L84.2834 9.56H86.6434V6.48L91.4834 4.92L91.8434 5.24L91.7234 9.56H96.4834L96.6434 9.84L96.4034 12.76H91.6434L91.4034 21.72C91.4034 22.5733 91.5634 23.1867 91.8834 23.56C92.2034 23.9067 92.7368 24.08 93.4834 24.08ZM113.606 19.36L102.806 19.44C103.046 22.7733 104.739 24.44 107.886 24.44C109.539 24.44 111.379 23.9733 113.406 23.04L113.846 23.32L113.046 27.28C111.019 28.0267 109.112 28.4 107.326 28.4C104.392 28.4 102.086 27.5467 100.406 25.84C98.7523 24.1333 97.9256 21.7733 97.9256 18.76C97.9256 15.7733 98.739 13.4133 100.366 11.68C101.992 9.92 104.192 9.04 106.966 9.04C109.339 9.04 111.166 9.69333 112.446 11C113.752 12.28 114.406 14.08 114.406 16.4C114.406 17.0133 114.339 17.7867 114.206 18.72L113.606 19.36ZM109.766 15.8C109.766 14.7333 109.526 13.9333 109.046 13.4C108.566 12.84 107.859 12.56 106.926 12.56C105.886 12.56 105.019 12.9067 104.326 13.6C103.632 14.2667 103.166 15.24 102.926 16.52L109.686 16.36L109.766 15.8ZM128.353 9.36C128.593 9.36 128.926 9.38667 129.353 9.44V14.36L128.793 14.56C128.339 14.3733 127.846 14.28 127.313 14.28C125.766 14.28 124.366 15.28 123.113 17.28V19.8L123.393 28H118.073L118.393 20.32L118.153 9.76L123.193 9.32L123.153 12.96H123.473C124.779 10.56 126.406 9.36 128.353 9.36Z"
              fill="white"
            />
          </svg>
          <div className="login_section__form">
            <form className="w-[55%] mx-auto" onSubmit={handleSignUp}>
              {" "}
              <div className="mb-4">
                <Input
                  hint="Username"
                  id="username"
                  value={creds.username}
                  handler={handleChange}
                />
              </div>{" "}
              <div className="mb-4">
                <Input
                  hint="Email"
                  id="email"
                  value={creds.email}
                  handler={handleChange}
                />
              </div>{" "}
              <div className="mb-4">
                <Input
                  hint="Referral Code"
                  id="referralCode"
                  value={creds.referralCode}
                  handler={handleChange}
                />
              </div>
              <div className="mb-4">
                <Input
                  hint="password"
                  id="password"
                  value={creds.password}
                  handler={handleChange}
                />
              </div>
              <div className="mb-4">
                <Input
                  hint="Confirm Password"
                  id="confirmPassword"
                  value={creds.confirmPassword}
                  handler={handleChange}
                />
              </div>
              {/* <div className="d-flex align-items-center flex-wrap flex-sm-nowrap gap-2 mb-6">
                          <input type="checkbox" />
                          <span>
                            I agree to all statements with{" "}
                            <Link href="#">Terms of Use</Link>
                          </span>
                        </div> */}
              <button
                className="cmn-btn px-5 py-4 mb-4 w-100 !rounded-full"
                style={{ borderRadius: "50px" }}
                type="submit"
              >
                Sign Up Now
              </button>
            </form>
          </div>
          <div className="login_section__socialmedia text-center mb-2">
            <p className="mb-3">Or</p>
            <button onClick={() => signIn("google")} className="">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/svgs/google.svg"
                className="hover:invert-[10%]"
                alt=""
              />
            </button>
          </div>
          <span className="d-center gap-1">
            Already a member?{" "}
            <Link className="text-[#fcfc17]" href="/login">
              Login
            </Link>
          </span>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          className="hidden ml-auto md:block md:w-[90%] lg:w-[70%]"
          width={528}
          height={500}
          src="/images/signup.png"
          alt="Image"
        />
      </div>
    </section>
  );
}
