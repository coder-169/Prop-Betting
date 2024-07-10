"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Loader from "@/components/utility/Loader";
import Input from "@/components/Input";
import Link from "next/link";
function Verify() {
  const { data: session, status } = useSession();

  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [resendLoading, setResendLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);

  const handleSubmitCode = async (e: any) => {
    e.preventDefault();
    const stored = localStorage.getItem("prop-betting-signup-expireTime")!;
    if (stored && parseInt(stored) < new Date().getTime())
      return toast.error("Code expired!");
    if (code.length < 6) return toast.error("Code must contain 6 digits");
    try {
      setVerifyLoading(true);
      const res = await fetch("/api/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hashedCode: localStorage.getItem("prop-betting-signup-code"),
          code,
          email: localStorage.getItem("prop-betting-signup-email"),
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Account verified");
        console.log(status);
        const ses = await getSession();
        console.log(ses)
        if (status === "authenticated") {
          router.push("/");
        } else {
          router.push("/login");
        }
      } else toast.error("incorrect code or expired!");
    } catch (error: any) {
      toast.error(error.message);
    }
    setVerifyLoading(false);
  };
  const resendEmail = async () => {
    try {
      setResendLoading(true);
      const response = await fetch("/api/auth/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("prop-betting-signup-email"),
        }),
      });
      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("prop-betting-signup-code", data.hashedCode);
        localStorage.setItem("prop-betting-signup-expireTime", data.expireTime);
        setCode("");
      } else {
        toast.error(data.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
    setResendLoading(false);
  };
  // shift focus of input to next logic
  const emailUser = session?.user?.email;
  useEffect(() => {
    setLoading(false);
  }, [router, status, session]);
  return (
    <div className="mb-16 mt-8 flex w-full justify-center px-2 md:mx-0 md:px-0 lg:mb-10 items-center h-[85vh]">
      {/* Sign in section */}
      {loading ? (
        <Loader />
      ) : (
        <div className="text-center mt-[4vh] w-4/5 lg:w-3/5 flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <Link href={"/"}>Home</Link>
          <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Verify Account
          </h3>
          <p className="mb-9 ml-1 text-base text-gray-300">
            Check your email for verify code!
          </p>

          {/* COde */}
          <form
            className="w-full"
            onSubmit={handleSubmitCode}
            data-hs-pin-input=""
          >
            <div className=" mb-8 flex space-x-3 w-full">
              <Input
                value={code}
                type="number"
                classes="w-full text-center"
                hint="⚬ ⚬ ⚬ ⚬ ⚬ ⚬ "
                id="d1"
                handler={(e) => {
                  if (e.target.value.length > 6) return;
                  setCode(e.target.value);
                }}
              />
            </div>

            {/* Checkbox */}
            <div className="mb-4 flex items-center justify-between px-2">
              <button
                onClick={resendEmail}
                disabled={resendLoading}
                type="button"
                className="text-sm font-medium hover:text-gray-400 512da8] text-white  transition-all duration-200  disabled:cursor-not-allowed "
              >
                {resendLoading ? "Resending..." : "Resend code"}
              </button>
            </div>
            <button
              type="submit"
              className="w-full mx-auto cursor-pointer outline-none bg-[#FFCE00] hover:bg-[#dab10a]  shadow-sm text-sm px-4 py-4 rounded-full border-transparent transition-all duration-200 text-white"
            >
              {verifyLoading ? "Verifying..." : "Verify"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Verify;
