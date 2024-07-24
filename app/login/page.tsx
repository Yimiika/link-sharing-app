"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "@/lib/authFunctions";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()

  const handleLogin = async () => {
    try {
      await signIn(email, password);
    await router.replace('/home')
      // Redirect to the home page or another page on successful login
      // For example: window.location.href = "/";
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
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
            Login
          </h3>
          <h5 className="text-[#737373] text-[16px] font-normal leading-[150%]">
            Add your details below to get back into the app
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
              onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="e.g. alex@email.com"
                className="w-full pl-10 p-[12px_16px] items-center gap-3 rounded-lg border border-[#D9D9D9] bg-[#FFF]"
              />
            </div>
          </div>
          <div>
            <p className="text-[#333] text-[12px] font-normal leading-[150%]">
              Password
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
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 p-[12px_16px] items-center gap-3 rounded-lg border border-[#D9D9D9] bg-[#FFF]"
              />
            </div>
          </div>
          <button onClick={() => handleLogin()} className="flex p-[11px_27px] flex-col justify-center items-center gap-2 self-stretch rounded-lg bg-[#633CFF]">
            <p className="text-[#FFF] text-[16px] font-semibold leading-[150%]">
              Login
            </p>
          </button>
          <p className="text-[#737373] self-center text-[16px] font-normal leading-[150%]">
            Don’t have an account?{" "}
            <Link href="./signup" className="text-[#633CFF]">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
