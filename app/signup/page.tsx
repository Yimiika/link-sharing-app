"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signUp } from "@/lib/authFunctions";
import { useRouter } from "next/navigation";
 // Adjust the path as needed

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true)
      await signUp(email, password);
      await router.replace('/')
      // Redirect to login or another page on successful signup
      // For example: window.location.href = "/login";
    } catch (err) {
      setError("Signup failed. Please try again.");
      setLoading(false)
    }
  };

  return (
    <div className="flex flex-col w-[1440px] p-[206px_482px_205px_482px] justify-center items-center bg-[#FAFAFA]">
      <a className="flex flex-row items-center justify-center gap-1.5">
        <Image
          src="/solar_link-circle-bold.svg"
          alt="Logoicon"
          width={40}
          height={40}
        />
        <Image src="/logo.svg" alt="Logo" width={135} height={26.25} />
      </a>
      <div className="flex p-10 flex-col items-start gap-10 self-stretch">
        <div>
          <h3 className="text-[#333] text-[32px] font-bold leading-[150%]">
            Create account
          </h3>
          <h5 className="text-[#737373] text-[16px] font-normal leading-[150%]">
            Let’s get you started sharing your links!
          </h5>
        </div>
        <div className="flex flex-col items-start gap-6 self-stretch">
          <div>
            <p className="text-[#333] text-[12px] font-normal leading-[150%]">
              Email address
            </p>
            <div className="relative flex items-center w-[396px]">
              <Image
                src="/envelopeicon.svg"
                alt="Envelope Icon"
                width={16}
                height={16}
                className="absolute left-3"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. alex@email.com"
                className="w-full pl-10 p-[12px_16px] items-center gap-3 rounded-lg border border-[#D9D9D9] bg-[#FFF]"
              />
            </div>
          </div>
          <div>
            <p className="text-[#333] text-[12px] font-normal leading-[150%]">
              Create password
            </p>
            <div className="relative flex items-center w-[396px]">
              <Image
                src="/passwordicon.svg"
                alt="Password Icon"
                width={16}
                height={16}
                className="absolute left-3"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                className="w-full pl-10 p-[12px_16px] items-center gap-3 rounded-lg border border-[#D9D9D9] bg-[#FFF]"
              />
            </div>
          </div>
          <div>
            <p className="text-[#333] text-[12px] font-normal leading-[150%]">
              Confirm password
            </p>
            <div className="relative flex items-center w-[396px]">
              <Image
                src="/passwordicon.svg"
                alt="Password Icon"
                width={16}
                height={16}
                className="absolute left-3"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="At least 8 characters"
                className="w-full pl-10 p-[12px_16px] items-center gap-3 rounded-lg border border-[#D9D9D9] bg-[#FFF]"
              />
            </div>
          </div>
          {error && (
            <p className="text-[#FF4D4D] text-xs font-normal leading-[18px]">
              {error}
            </p>
          )}
          <button
            onClick={handleSignup}
            className="flex p-[11px_27px] flex-col justify-center items-center gap-2 self-stretch rounded-lg bg-[#633CFF]"
          >
            <p className="text-[#FFF] text-[16px] font-semibold leading-[150%]">
             {loading?'loading...':' Signup'}
            </p>
          </button>
          <p className="text-[#737373] self-center text-[16px] font-normal leading-[150%]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#633CFF]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
