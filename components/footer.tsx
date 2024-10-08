import React from "react";
import "./FotterStyle.css";
import Image from "next/image";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className="flex flex-col bg-white">
      {/*  */}
      <Image src="/svg/Shape.svg" alt="shape" width={2000} height={400} />

      {/*  */}
      <div className="w-full max-w-[1090px] h-auto relative mx-auto top-[-150px] p-4">
        <div className="w-full h-full bg-[#ffd700] rounded-[10px] relative flex flex-col lg:flex-row justify-between items-center p-6">
          {/* Left Section: Heading and Description */}
          <div className="flex flex-col gap-3 lg:max-w-[60%] text-left lg:text-left">
            <h2 className="text-black text-[28px] font-normal font-playfair">
              Subscribe to Newsletters
            </h2>
            <p className="text-black text-sm font-light font-poppins opacity-60 lg:max-w-[400px]">
              Subscribe to our newsletter and unlock a world of exclusive
              benefits. Be the first to know about our latest products, special
              promotions, and exciting updates.
            </p>
          </div>

          {/* Right Section: Email Input and Button */}
          <div className="flex justify-between items-center w-full lg:w-[40%] mt-4 lg:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[70%] h-[56px] p-3 rounded bg-white opacity-25 text-[#1b1d21] font-poppins"
            />
            <button className="w-[30%] h-[56px] bg-[#23204c] text-white font-poppins uppercase rounded">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1314px] h-6 my-10 ml-16 justify-around items-center gap-[570px] flex">
        
        <div className="w-[520px] h-[18px] relative flex-row justify-between items-start flex">
          <div className="w-[76.67px] text-[#09132e] text-base font-normal font-['Poppins']">
            Discover
          </div>
          <div className="w-[78.89px] text-[#09132e] text-base font-normal font-['Poppins']">
            About us
          </div>
          <div className="w-[63.33px] text-[#09132e] text-base font-normal font-['Poppins']">
            Explore
          </div>
          <div className="w-[52.22px] text-[#09132e] text-base font-normal font-['Poppins']">
            Books
          </div>
        </div>


        <div className="w-60 h-6 relative flex flex-row gap-4">
          <Image
            className="w-[26.67px] h-[17px]"
            src="/svg/facebookBurble.svg"
            alt="social"
            width={500}
            height={24}
          />
          <Image
            className="w-[26.67px] h-[17px]"
            src="/svg/twitterBurble.svg"
            alt="social"
            width={500}
            height={24}
          />
          <Image
            className="w-[26.67px] h-[17px]"
            src="/svg/vimeoBurble.svg"
            alt="social"
            width={500}
            height={24}
          />
          <Image
            className="w-[26.67px] h-[17px]"
            src="/svg/youtubeBurble.svg"    
            alt="social"
            width={500}
            height={24}
          />
        </div>
      </div>

      <div className="h-[61px] ml-16 py-5 border-t border-black/25 justify-start items-start gap-[880px] inline-flex">
        <div className="text-[#09132e] text-sm font-normal font-['Poppins']">
          © 2023 All rights reserved
        </div>
        <div className="w-[256.67px] text-right text-[#09132e] text-sm font-normal font-['Poppins']">
          Terms of Service Privacy Policy
        </div>
      </div>    
    </div>
  );
};
