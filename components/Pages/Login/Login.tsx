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
import ButtonLoader from "@/components/utility/ButtonLoader";

export default function CreateAcount() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
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
    setLoginLoading(true);
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
    setLoginLoading(false);
  };
  const signInWithGoogle = async () => {
    setLoading(true);

    await signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <section className="h-screen flex items-center">
      <div className="w-1/2">
        <div className="pb-10 pt-8 mb-7 mt-12 mt-lg-0 px-4 px-sm-10">
          <svg
            width="85"
            height="36"
            viewBox="0 0 85 36"
            className="my-4 text-center mx-auto block"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.24 23.96L14.88 28H0.96L1.24 20.32L0.96 2.24H6.48L6.16 19.84L6.28 23.52H14.92L15.24 23.96ZM25.1913 9.04C27.9113 9.04 29.9913 9.84 31.4313 11.44C32.8713 13.04 33.5913 15.3467 33.5913 18.36C33.5913 21.6133 32.8179 24.1067 31.2713 25.84C29.7246 27.5467 27.4979 28.4 24.5913 28.4C21.8713 28.4 19.7913 27.6 18.3513 26C16.9113 24.4 16.1913 22.0933 16.1913 19.08C16.1913 15.8267 16.9646 13.3467 18.5113 11.64C20.0579 9.90667 22.2846 9.04 25.1913 9.04ZM24.8313 12.64C23.5513 12.64 22.6179 13.0667 22.0313 13.92C21.4713 14.7733 21.1913 16.1467 21.1913 18.04C21.1913 20.4933 21.4846 22.24 22.0713 23.28C22.6579 24.32 23.6179 24.84 24.9513 24.84C26.2313 24.84 27.1513 24.4267 27.7113 23.6C28.2979 22.7467 28.5913 21.36 28.5913 19.44C28.5913 17.0133 28.2846 15.28 27.6713 14.24C27.0846 13.1733 26.1379 12.64 24.8313 12.64ZM55.1169 11.92C54.3969 12.1067 53.3702 12.3067 52.0369 12.52L51.9569 12.68C52.3569 13.48 52.5569 14.3733 52.5569 15.36C52.5569 17.36 51.8235 18.96 50.3569 20.16C48.9169 21.3333 46.9569 21.92 44.4769 21.92C43.7302 21.92 42.9569 21.8533 42.1569 21.72C41.9169 21.96 41.7569 22.1467 41.6769 22.28C41.5969 22.4133 41.5569 22.5733 41.5569 22.76C41.5569 23.24 41.8769 23.5733 42.5169 23.76C43.1569 23.9467 44.1702 24.1333 45.5569 24.32C47.1302 24.5067 48.4369 24.7333 49.4769 25C50.5435 25.2667 51.4502 25.7333 52.1969 26.4C52.9702 27.0667 53.3569 28.0133 53.3569 29.24C53.3569 30.4933 52.9569 31.6133 52.1569 32.6C51.3835 33.6133 50.3035 34.4 48.9169 34.96C47.5302 35.52 45.9569 35.8 44.1969 35.8C41.7702 35.8 39.9035 35.3067 38.5969 34.32C37.2902 33.3333 36.6369 32.0267 36.6369 30.4C37.4635 29.2533 38.5702 28.2533 39.9569 27.4V27.2C39.0502 26.88 38.3435 26.44 37.8369 25.88C37.3302 25.2933 37.0769 24.52 37.0769 23.56C37.7969 22.68 38.7035 21.8667 39.7969 21.12V20.92C38.8369 20.3867 38.1035 19.6933 37.5969 18.84C37.1169 17.96 36.8769 16.9333 36.8769 15.76C36.8769 13.68 37.5969 12.0533 39.0369 10.88C40.4769 9.70667 42.4369 9.12 44.9169 9.12C46.3569 9.12 47.6635 9.36 48.8369 9.84C50.7569 9.49333 52.7169 8.96 54.7169 8.24L55.1169 8.6V11.92ZM44.6369 18.72C45.7302 18.72 46.5569 18.44 47.1169 17.88C47.6769 17.32 47.9569 16.5067 47.9569 15.44C47.9569 13.4133 46.9169 12.4 44.8369 12.4C42.5969 12.4 41.4769 13.4267 41.4769 15.48C41.4769 16.5467 41.7435 17.36 42.2769 17.92C42.8102 18.4533 43.5969 18.72 44.6369 18.72ZM48.8769 30.2C48.8769 29.48 48.4902 28.9867 47.7169 28.72C46.9702 28.4533 45.8102 28.2267 44.2369 28.04L42.8769 27.84C42.2369 28.2667 41.7569 28.68 41.4369 29.08C41.1169 29.48 40.9569 29.9067 40.9569 30.36C40.9569 31.0533 41.2769 31.6133 41.9169 32.04C42.5569 32.4667 43.4902 32.68 44.7169 32.68C45.9702 32.68 46.9702 32.4533 47.7169 32C48.4902 31.5733 48.8769 30.9733 48.8769 30.2ZM57.5969 20.32L57.3969 9.76L62.6369 9.32L62.3969 19.8L62.6369 28H57.3169L57.5969 20.32ZM60.1169 0.279999C60.9435 0.279999 61.5835 0.519999 62.0369 1C62.5169 1.48 62.7569 2.14667 62.7569 3C62.7569 3.90667 62.5035 4.62667 61.9969 5.16C61.4902 5.69333 60.7969 5.96 59.9169 5.96C59.0369 5.96 58.3569 5.72 57.8769 5.24C57.4235 4.76 57.1969 4.08 57.1969 3.2C57.1969 2.32 57.4502 1.61333 57.9569 1.08C58.4902 0.546666 59.2102 0.279999 60.1169 0.279999ZM79.1066 16.4C79.1332 15.4667 78.9199 14.7467 78.4666 14.24C78.0399 13.7067 77.4132 13.44 76.5866 13.44C75.3866 13.44 74.1066 14.0133 72.7466 15.16V19.8L72.9866 28H67.6666L67.9466 20.32L67.7466 9.76L72.7866 9.32V12.04H73.0666C74.5332 10.7067 76.1332 9.74667 77.8666 9.16C79.8932 9.16 81.4399 9.62667 82.5066 10.56C83.5732 11.4667 84.0799 12.7867 84.0266 14.52L83.9066 19.84L84.1466 28H78.7866L79.1066 16.4Z"
              fill="white"
            />
          </svg>

          <div className="login_section__form">
            <form className="w-[55%] mx-auto" onSubmit={loginUser}>
              {" "}
              <div className="mb-4">
                <Input
                  type="email"
                  hint="Username/Email"
                  id="username"
                  value={creds.username}
                  handler={handleChange}
                />
              </div>{" "}
              <div className="mb-4">
                <Input
                  type="password"
                  hint="password"
                  id="password"
                  value={creds.password}
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
                disabled={loginLoading}
                className={`disabled:opacity-80 cmn-btn gap-2 relative px-5 py-4 mb-4 w-100 !rounded-full`}
                type="submit"
              >
                {loginLoading && (
                  <ButtonLoader extras={"absolute left-4 top-3"} />
                )}
                Sign In
              </button>
            </form>
          </div>
          <div className="login_section__socialmedia text-center mb-2">
            <p className="mb-3">Or</p>
            {loading ? (
              <ButtonLoader />
            ) : (
              <button onClick={signInWithGoogle} className="">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/svgs/login.svg"
                  className="hover:invert-[10%]"
                  alt=""
                />
              </button>
            )}
          </div>
          <span className="d-center gap-1">
            Don&apos; have an account?{" "}
            <Link className="text-[#fcfc17]" href="/create-account">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          className="hidden ml-auto md:block md:w-[90%] lg:w-[70%]"
          width={528}
          height={500}
          src="/images/login-p.png"
          alt="Image"
        />
      </div>
    </section>
  );
}
