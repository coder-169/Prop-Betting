'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
function Forgot() {
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: '',
  });
  const [resendLoading, setResendLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [createPassLoading, setCreatePassLoading] = useState(false);
  const [codeCorrect, setCodeCorrect] = useState(false);
  const handleEmailChange = async () => {
    setSent(false);
    setCodeCorrect(false);
  };
  const handlePasswords = async (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };
  const router = useRouter();
  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    if (email === '') {
      setSent(false);
      setCodeCorrect(false);
      return toast.error('Email is required');
    }
    setResendLoading(true);
    try {
      const res = await fetch('/api/mails/forgot-pass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('teecone-forgot-code', data.hashedCode);
        localStorage.setItem('teecone-forgot-expireTime', data.expireTime);
        toast.success(data.message);
        setSent(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('An error occurred');
    }
    setResendLoading(false);
  };
  const handleSubmitCode = async (e) => {
    e.preventDefault();
    if (
      localStorage.getItem('teecone-forgot-expireTime') < new Date().getTime()
    )
      return toast.error('Code expired!');
    if (code < 6) return toast.error('Code must contain 6 digits');
    try {
      setVerifyLoading(true);
      const res = await fetch('/api/auth/verify/code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hashedCode: localStorage.getItem('teecone-forgot-code'),
          code,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setCodeCorrect(true);
        toast.success('Code verified! Create password');
      } else return toast.error('incorrect code or expired!');
    } catch (error) {
      toast.error(error.message);
    }
    setVerifyLoading(false);
  };
  const handleSubmitPasswords = async (e) => {
    e.preventDefault();
    if (passwords.password !== passwords.confirmPassword)
      return toast.error('Passwords do not match!');
    setCreatePassLoading(true);
    try {
      const res = await fetch('/api/user/password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, ...passwords }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        router.push('/auth/sign-in');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('An error occurred');
    }
    setCreatePassLoading(false);
  };
  // shift focus of input to next logic

  return (
        <div className="mb-16 mt-8 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
          {/* Sign in section */}

          {/* COde */}
          {sent && !codeCorrect ? (
            <div className="mt-[4vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
              <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                Verify Code
              </h3>
              <p className="mb-9 ml-1 text-base text-gray-600">
                enter the code received on your email!
              </p>
              <form onSubmit={handleSubmitCode} data-hs-pin-input="">
                <div className=" mb-12 flex space-x-3">
                  <input
                    extra="w-full text-center"
                    className={'text-center'}
                    value={code}
                    type="number"
                    placeholder="⚬ ⚬ ⚬ ⚬ ⚬ ⚬ "
                    id="d1"
                    onChange={(e) => {
                      if (e.target.value.length > 6) return;
                      setCode(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-4 flex items-center justify-between px-2">
                  <button
                    onClick={handleSubmitEmail}
                    type="button"
                    className="text-sm font-medium text-blue-500 transition-all duration-200 hover:text-blue-600 disabled:cursor-progress disabled:opacity-60 dark:text-white dark:hover:text-gray-300"
                    disabled={resendLoading}
                  >
                    {resendLoading ? 'Resending...' : 'Resend code?'}
                  </button>
                  <button
                    onClick={handleEmailChange}
                    type="button"
                    className="text-sm font-medium text-blue-500 transition-all duration-200 hover:text-blue-600 dark:text-white dark:hover:text-gray-300"
                    href=" "
                  >
                    Correct Email?
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={verifyLoading}
                  className="linear w-full  rounded-xl bg-brand-500  py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 disabled:cursor-progress disabled:opacity-60 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                >
                  {verifyLoading ? 'Verifying...' : 'Verify?'}
                </button>
              </form>
            </div>
          ) : (
            !codeCorrect && (
              <div className="mt-[4vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
                <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                  Enter Email
                </h3>
                <p className="mb-9 ml-1 text-base text-gray-600">
                  You will receive the code on the given email!
                </p>
                <form onSubmit={handleSubmitEmail} data-hs-pin-input="">
                  <div className=" mb-12 flex space-x-3">
                    <input
                      className="w-full"
                      value={email}
                      type="email"
                      placeholder="johnboe@gmail.com"
                      required={true}
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={resendLoading}
                    className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 disabled:cursor-progress disabled:opacity-70 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                  >
                    {resendLoading ? 'Getting Code...' : ' Get Code'}
                  </button>
                </form>
              </div>
            )
          )}
          {codeCorrect && (
            <div className="mt-[4vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
              <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                Create Password
              </h3>
              <p className="mb-9 ml-1 text-base text-gray-600">
                Create a strong password! and both passwords should match
              </p>{' '}
              <form onSubmit={handleSubmitPasswords} data-hs-pin-input="">
                <div className=" mb-12">
                  <input
                    className="w-full"
                    label="Password"
                    value={passwords.password}
                    type="text"
                    placeholder="********"
                    id="password"
                    onChange={handlePasswords}
                  />
                </div>
                <div className=" mb-12">
                  <input
                    className="w-full"
                    label="Confirm Password"
                    value={passwords.confirmPassword}
                    type="text"
                    placeholder="********"
                    id="confirmPassword"
                    onChange={handlePasswords}
                  />
                </div>
                <button
                  type="submit"
                  disabled={createPassLoading}
                  className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700  disabled:cursor-progress disabled:opacity-70 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                >
                  {createPassLoading ? 'Updating...' : 'Update'}
                </button>
              </form>
            </div>
          )}
        </div>
     
  );
}

export default Forgot;
