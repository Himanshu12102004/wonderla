'use client';
import React, { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <svg
        width="27"
        height="17"
        viewBox="0 0 27 17"
        xmlns="http://www.w3.org/2000/svg"
        className="h-2.5 w-4 fill-yellow lg:h-[17px] lg:w-[26px] lg:fill-text"
      >
        <rect
          x="0.322266"
          y="0.0905762"
          width="26.334"
          height="3.15699"
          rx="1.5785"
          className="origin-center transform transition-transform duration-300"
        ></rect>
        <rect
          x="0.322266"
          y="6.96667"
          width="26.334"
          height="3.15699"
          rx="1.5785"
          className="transform transition-opacity duration-300"
        ></rect>
        <rect
          x="0.322266"
          y="13.8429"
          width="26.334"
          height="3.15699"
          rx="1.5785"
          className="origin-center transform transition-transform duration-300"
        ></rect>
      </svg>
    </div>
  );
}

export default HamburgerMenu;
