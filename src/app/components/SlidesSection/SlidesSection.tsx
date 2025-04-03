import { Mulish } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import EmblaCarousel from './subComponents/Carousel';
import { EmblaOptionsType } from 'embla-carousel';
import { rides } from '@/app/data/data';

const mulish = Mulish({
  subsets: ['latin'],
  weight: '900',
});

const OPTIONS: EmblaOptionsType = { loop: false };

function SlidesSection({ currentCategory }: { currentCategory: number }) {
  let myRide = rides[currentCategory];
  useEffect(() => {
    myRide = rides[currentCategory];
  }, [currentCategory]);
  return (
    <div className="flex-4/5 h-full ml-5">
      <h1
        className={`text-6xl pt-40 text-white tracking-tighter ${mulish.className}`}
      >
        OUR ICONIC RIDES
      </h1>
      <EmblaCarousel options={OPTIONS} slides={myRide} />
      
            <button
              className={`py-4 px-24 mt-10 mb-10 hover:scale-110 transition-all font-extrabold bg-[#FAD504] rounded-full text-text hover:cursor-pointer`}
              style={{ transition: 'all 200ms' }}
            >
              <div className="flex justify-center items-center gap-1">
                <div className="text-sm">Explore All Rides!</div>
              </div>
            </button>
          </div>
  );
}

export default SlidesSection;
