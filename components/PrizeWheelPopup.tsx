'use client';

import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

const PrizeWheel = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(0);

  const data = [
    { option: '1 point' },
    { option: '50 points' },
    { option: '100 points' },
    { option: 'Better luck next time!' },
  ];

  const handleSpin = () => {
    const newPrizeIndex = Math.floor(Math.random() * data.length);
    setPrizeIndex(newPrizeIndex);
    setMustSpin(true);
  };

  return (
    <div className="flex flex-col items-center">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeIndex}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
        outerBorderColor="#000000"
        outerBorderWidth={5}
        innerRadius={20}
        innerBorderWidth={5}
        innerBorderColor="#f5f5f5"
        radiusLineWidth={2}
        radiusLineColor="#ededed"
        fontSize={16}
        textDistance={60}
        onStopSpinning={() => setMustSpin(false)}
      />

      <button
        onClick={handleSpin}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        disabled={mustSpin}
      >
        Spin
      </button>

      {mustSpin === false && (
        <p className="mt-4 text-lg font-bold text-gray-700">
          {`Result: ${data[prizeIndex].option}`}
        </p>
      )}
    </div>
  );
};

export default PrizeWheel;
