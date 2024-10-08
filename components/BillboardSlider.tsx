"use client";

import { useState } from 'react';
import { Billboard as BillboardType } from '@/types';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface BillboardSliderProps {
  data: BillboardType[];
}

export const BillboardSlider: React.FC<BillboardSliderProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {/* Billboard Display */}
      <div className="p-4 sm:p-6 lg:px-[100px] rounded-xl overflow-hidden">
        <div
          className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover transition-all duration-300"
          style={{
            backgroundImage: `url(${data[currentIndex]?.imageUrl})`,
          }}
        />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-[50%] left-[110px] transform -translate-y-1/2">
        <div className="flex flex-col items-center">
          <div
            className="bg-[#0e0e0e] rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer"
            onClick={handlePrev}
          >
            <IoIosArrowBack className='text-white w-[24px] h-[24px]' />
          </div>
        </div>
      </div>

      <div className="absolute top-[50%] right-[110px] transform -translate-y-1/2">
        <div className="flex flex-col items-center">
          <div
            className="bg-[#0e0e0e] rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer"
            onClick={handleNext}
          >
            <IoIosArrowForward className='text-white w-[24px] h-[24px]' />
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center relative bottom-20">
        <div className="flex space-x-2 bg-[rgba(14,14,14,0.65)] rounded-md p-2 gap-3">
          {data.map((_, index) => (
            <div
              key={index}
              className={`w-[12px] h-[12px] rounded-full cursor-pointer transition-opacity duration-300 flex justify-center items-center ${
                index === currentIndex ? 'bg-[#6E00FF]' : 'bg-white/60'
              }`}
              onClick={() => setCurrentIndex(index)} // Change slide on dot click
            />
          ))}
        </div>
      </div>
    </div>
  );
};
