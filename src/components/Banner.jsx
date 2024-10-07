import React from "react";
import bannerimage from "../assets/illustration.png";

function Banner() {
  return (
    <div className="container mx-auto border bg-gray-200">
      <div
        className="mx-auto
        grid md:grid-cols-2 px-5 sm:px-10"
      >
        {/* Left Section */}
        <div className="mt-14 sm:mt-28">
          <p className="text-[32px] sm:text-[44.50px] text-[#4D4D4D] font-[600] leading-snug">
            Lessons and insights <br />{" "}
            <span className="text-[#4CAF4F]">from 8 years</span>{" "}
          </p>
          <p className="text-[#717171] font-medium text-[14px] sm:text-[16px] mt-3">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-[#4CAF4F] rounded-sm px-6 py-2 sm:px-[22px] sm:py-3 text-white mt-5">
            Register
          </button>
        </div>
          
        {/* Right section */}
        <div className="mt-8 md:mt-12 md:ml-0">
          <img src={bannerimage} className="w-full md:w-96 h-96 object-contain" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
