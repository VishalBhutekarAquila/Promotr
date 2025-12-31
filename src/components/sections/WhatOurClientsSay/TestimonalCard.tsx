import React from "react";
import left from "../../../assets/WhatOurClientsSay/left.svg";
import right from "../../../assets/WhatOurClientsSay/right.svg";

interface CardProps {
  image: string;
  quote: string;
  name: string;
  location: string;
}

const TestimonialCard = ({ image, quote, name, location }: CardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start mx-4 sm:mx-4 md:mx-8 lg:mx-40 px-4 sm:px-8 md:px-4 lg:px-16 py-8 md:py-12 lg:py-16 gap-6 mt-6 bg-white rounded-2xl border border-neutral-200 shadow-[#420E019E]/60 shadow-lg">
      <img
        src={image}
        alt="character"
        className="w-44 sm:w-40 md:w-56 lg:w-56  object-contain rounded-sm"
      />

      <div className="flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0 md:ml-8">
        <div className="flex flex-col md:flex-row justify-center sm:justify-start items-center gap-2 sm:gap-4 md:mt-8 lg:mt-16">
          <img
            className="w-10 sm:w-12 md:w-16  md:-translate-y-34 lg:w-20 self-start md:self-center"
            src={left}
            alt="left"
          />
          <p className="text-[#5A0400] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug sm:leading-normal">
            {quote}
          </p>
          <img
            className="w-10 sm:w-12 md:w-16 md:translate-y-34  lg:w-20 self-end md:self-center hidden sm:block"
            src={right}
            alt="right"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mt-6 gap-2 sm:gap-4">
          <p className="font-semibold text-md lg:ml-24 sm:text-2xl md:text-3xl lg:text-4xl text-[#5A0400]">
            — {name}, {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
