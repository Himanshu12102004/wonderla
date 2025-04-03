'use client'
import React, { useState } from 'react';
import CircularSideBar from '../components/ctegorySideBar/CircularSideBar';
import { Mulish } from 'next/font/google';
import SlidesSection from '../components/SlidesSection/SlidesSection';
const mulish = Mulish({
  subsets: ['latin'],
});

function RideSelection() {
const [selectedCategory,setSelectedCategory]=useState(1);
  return (
    <div className={`bg-primary h-full ${mulish.className}`}>
      <div className="flex h-full items-center">
        <CircularSideBar changeSelectedSlide={(x)=>{setSelectedCategory(x)}} currentSelectedSlide={selectedCategory} />
        <SlidesSection currentCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default RideSelection;
