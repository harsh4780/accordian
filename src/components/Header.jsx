import React from "react";
import icon from "../assets/Icon.svg";

function Header() {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-between items-center mt-2 px-5 sm:px-10">
      {/* Mobile view: Hamburger and Logo side by side */}
      <div className="flex items-center justify-between w-full md:hidden">
        <div className="flex items-center ">
          <button className="text-gray-500 mr-2.5">
            {/* Menu Icon for mobile */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex gap-1 items-center ml-2.5">
            <img src={icon} className="w-6 h-7" alt="" />
            <span className="font-bold text-[24px] sm:text-[30px]">
              Nexcent
            </span>
          </div>
        </div>

        <button className="bg-[#4CAF4F] rounded-sm px-[16px] sm:px-[22px] py-2 sm:py-3 text-white">
          Register Now <i></i>
        </button>
      </div>

      {/* Desktop view: Logo */}
      <div className="hidden md:flex gap-1 items-center">
        <img src={icon} className="w-6 h-7" alt="" />
        <span className="font-bold text-[24px] sm:text-[30px]">Nexcent</span>
      </div>

      {/* Right section: Navigation (hidden on mobile) */}
      <div className="hidden md:flex gap-6 font-medium text-[14px] sm:text-[16px] items-center">
        <ul className="flex gap-4 sm:gap-7">
          <li>Home</li>
          <li>Features</li>
          <li>Community</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>

        <div>
          <button className="bg-[#4CAF4F] rounded-sm px-[16px] sm:px-[22px] py-2 sm:py-3 text-white">
            Register Now <i></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
