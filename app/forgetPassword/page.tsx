"use client";

import Image from "next/image";
import { useState } from "react";
import closedEyeIcon from "../../public/svg/closed eye.svg";
import openEyeIcon from "../../public/svg/opened eye.svg";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="login-form">
      <Image
        src="svg/bg-top.svg"
        alt="bg-top"
        width={500}
        height={100}
        className="top-0 left-0 absolute"
      />
      <Image
        src="/svg/bg-bottom.svg"
        alt="Background Bottom"
        width={500}
        height={100}
        className="bottom-0 right-0 absolute"
      />

      <div className="flex flex-1 flex-col gap-5">
        <div className="flex ml-8">
          <Image src="/svg/logo.svg" alt="login" width={70} height={70} />
          <div>
            <div className="text-white text-[30px] font-extrabold font-['Proxima Nova Extra Condensed']">
              Forget Password
            </div>
            <div className="text-[#e8e8e8] text-base font-semibold font-['Proxima Nova Extra Condensed'] tracking-wide">
              Please enter you’re email
            </div>
          </div>
        </div>

        <form className="flex flex-1 flex-col m-auto gap-5">
          {/* user name */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none bg-transparent w-[400px] h-[58px] px-4 py-3.5 rounded-xl border text-white text-xl font-normal font-['Poppins'] border-white justify-start items-center gap-2.5 inline-flex"
            placeholder="example@mail.com"
          />

          {/*  */}
          <div className="cursor-pointer w-[400px] h-[62px] px-2.5 py-3.5 bg-gradient-to-r from-[#03457c] via-[#6e00ff] to-[#0765d3] rounded-xl justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[25px] font-normal font-['Abril Fatface'] tracking-wider">
              Reset Password
            </div>
          </div>

          <div className="h-[54px] px-10 py-[3px] justify-start items-start gap-2 inline-flex">
            <div className="text-[#e8e8e8] text-xl font-semibold font-['Poppins'] leading-normal tracking-tight">
              Don’t have an account?
            </div>
            <div className="cursor-pointer text-[#ffd700] text-xl font-extrabold font-['Poppins'] underline leading-normal tracking-tight">
              Signup
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
