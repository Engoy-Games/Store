"use client";

import Image from "next/image";
import { useState } from "react";
import closedEyeIcon from "../../public/svg/closed eye.svg";
import openEyeIcon from "../../public/svg/opened eye.svg";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassowrd, setConfirmPassowrd] = useState("");
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const toggleEye = () => {
    setIsEyeOpen(!isEyeOpen);
  };

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
        <div className="flex m-auto">
          <Image src="/svg/logo.svg" alt="login" width={70} height={70} />
          <div>
            <div className="text-white text-[30px] font-extrabold font-['Proxima Nova Extra Condensed']">
              Signup
            </div>
            <div className="text-[#e8e8e8] text-base font-semibold font-['Proxima Nova Extra Condensed'] tracking-wide">
            Just some details to get you in.!
            </div>
          </div>
        </div>

        <form className="flex flex-1 flex-col m-auto gap-5">
          {/* user name */}
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="outline-none bg-transparent w-[400px] h-[58px] px-4 py-3.5 rounded-xl border text-white text-xl font-normal font-['Poppins'] border-white justify-start items-center gap-2.5 inline-flex"
            placeholder="Username"
          />

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none bg-transparent w-[400px] h-[58px] px-4 py-3.5 rounded-xl border text-white text-xl font-normal font-['Poppins'] border-white justify-start items-center gap-2.5 inline-flex"
            placeholder="Email / Phone"
          />

          {/* password */}
          <div className="h-[50px] flex-col justify-start items-start gap-3 inline-flex">
            <input
              type={isEyeOpen ? "text" : "password"} // Change type based on eye state
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none bg-transparent text-white text-xl font-normal font-['Poppins'] w-[400px] px-4 py-3.5 rounded-xl border border-white justify-between items-center inline-flex"
              placeholder="Password"
            />
            <div
              className="w-[18px] h-[18px] relative cursor-pointer"
              onClick={toggleEye}
            >
              <Image
                src={isEyeOpen ? openEyeIcon : closedEyeIcon}
                alt="eye"
                width={18}
                height={18}
                className="absolute top-[-50px] left-[350px]"
              />
            </div>
          </div>


          {/* Confirm Password */}
          <div className="h-[50px] flex-col justify-start items-start gap-3 inline-flex">
            <input
              type={isEyeOpen ? "text" : "password"} // Change type based on eye state
              value={confirmPassowrd}
              onChange={(e) => setConfirmPassowrd(e.target.value)}
              className="outline-none bg-transparent text-white text-xl font-normal font-['Poppins'] w-[400px] px-4 py-3.5 rounded-xl border border-white justify-between items-center inline-flex"
              placeholder="Confirm Password"
            />
          </div>

          {/* Forgot password and login page */}
          <div className="mt-1 h-24 flex-col justify-center items-center gap-3 inline-flex cursor-pointer">
            <div className="text-white text-base font-bold font-['Poppins']">
              Forgot password ?
            </div>
            <div className="cursor-pointer w-[400px] px-2.5 py-3.5 bg-gradient-to-r from-[#ffbb00] via-[#e57744] to-[#e1712c] rounded-xl justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-[26px] font-bold font-['Proxima Nova Extra Condensed'] tracking-wide ">
                Signup
              </div>
            </div>
          </div>

          {/* Or separator */}
          <div className="h-[22px] justify-start items-center gap-5 inline-flex">
            <div className="w-[170px] h-[0px] border-2 border-[#e8e8e8]"></div>
            <div className="text-[#e8e8e8] text-base font-medium font-['Noto Sans']">
              Or
            </div>
            <div className="w-[170px] h-[0px] border-2 border-[#e8e8e8]"></div>
          </div>

          {/* Social login */}
          <div className="h-[50px] pt-[5px] justify-center items-center gap-[18px] inline-flex">
            <div className="w-[42px] h-[42px] relative">
              <Image
                src="/svg/google.svg"
                alt="google"
                width={42}
                height={42}
              />
            </div>
            <div className="w-[42px] h-[42px] relative">
              <Image
                src="/svg/facebook.svg"
                alt="facebook"
                width={42}
                height={42}
              />
            </div>
          </div>

          {/* Signup */}
          <div className="h-[54px] px-20 py-[3px] justify-start items-start gap-2 inline-flex">
            <div className="text-[#e8e8e8] text-xl font-semibold font-['Poppins'] leading-normal tracking-tight">
              Already Registered?
            </div>
            <div className="cursor-pointer text-[#ffd700] text-xl font-extrabold font-['Poppins'] underline leading-normal tracking-tight">
              Login
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}