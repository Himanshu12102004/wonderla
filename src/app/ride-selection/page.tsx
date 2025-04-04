'use client';
import React, { useState } from 'react';
import CircularSideBar from '../components/ctegorySideBar/CircularSideBar';
import { Mulish } from 'next/font/google';
import SlidesSection from '../components/SlidesSection/SlidesSection';
import Menu from '../components/menu/Menu';
import Navbar from '../components/navbar/Navbar';
const mulish = Mulish({
  subsets: ['latin'],
});

function RideSelection() {
  const [selectedCategory, setSelectedCategory] = useState(1);
  return (
    <div>
      <div
        className={`sm:invisible flex justify-center items-center visible absolute top-0 left-0 right-0 bottom-0 z-50 text-cyan-50 ${mulish.className} text-4xl`}
        style={{ backdropFilter: 'blur(10px)',backgroundColor:"rgba(0,0,0,0.7)" }}
      >
        <div>
        OPEN THE WEBSITE ON PC 
        </div>
      </div>

      <div className={`bg-primary ${mulish.className}`}>
        <Navbar />
        <div className="flex h-full items-center">
          <CircularSideBar
            changeSelectedSlide={(x) => {
              setSelectedCategory(x);
            }}
            currentSelectedSlide={selectedCategory}
          />
          <SlidesSection currentCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
}

export default RideSelection;
