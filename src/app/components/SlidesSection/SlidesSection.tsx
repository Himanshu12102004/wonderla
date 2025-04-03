import { Mulish } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import EmblaCarousel from './components/Carousel/Carousel';
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
  console.log(myRide);
  return (
    <div className="flex-4/5 h-full ml-5">
      <h1
        className={`text-6xl pt-40 text-white tracking-tighter ${mulish.className}`}
      >
        OUR ICONIC RIDES
      </h1>
      <EmblaCarousel options={OPTIONS} slides={myRide} />
      
    </div>
  );
}

export default SlidesSection;
