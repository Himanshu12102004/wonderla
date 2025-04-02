'use client';
import { cities } from '@/app/data/data';
import React, { useState } from 'react';
import { Mulish } from 'next/font/google';
const mulish = Mulish({
  subsets: ['latin'],
  weight: '700',
});
interface SubSection {
  name: string;
  image: string;
}

interface LocationData {
  name: string;
  href: string;
  image: string;
  subSection: SubSection[];
}
function SubCity({ data }: { data: SubSection }) {
  return <div className='flex items-center gap-4'>
    <div className="">
          <img
            src={data.image}
            className="h-12 w-12 rounded-xl object-cover"
            alt={data.name}
          />
        </div>
    <div className="uppercase">{data.name}</div></div>;
}
function City({ data }: { data: LocationData }) {
  return (
    <div
      className={`flex justify-between items-center group/subSection relative`}
    >
      <div className="flex  items-center gap-4 ">
        <div className="">
          <img
            src={data.image}
            className="h-12 w-12 rounded-xl object-cover"
            alt={data.name}
          />
        </div>
        <div className="uppercase">{data.name}</div>
      </div>
      {data.subSection.length != 0 && (
        <div >
          <div className=' h-16 -top-3 w-12 absolute'></div>
        <div>
          <svg
            height="24"
            width="24"
            className="ml-auto size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#717D92"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6L15 12L9 18"></path>
          </svg>
        </div>
        </div>
      )}
      {data.subSection.length != 0 && (
        <div className="absolute left-70 group-hover/subSection:visible invisible flex flex-col bg-secondary rounded-xl p-4 w-40 transform translate-y-1/4">
          {data.subSection.map((subData, index) => (
            <div key={index}>
              <SubCity data={subData} />

              {index != data.subSection.length - 1 && (
                <div>
                  <div className="h-2"></div>
                  <hr className="border-t-1 border-gray-200" />
                  <div className="h-2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
      )}
    </div>
  );
}
function Cities() {
  return (
    <div className={`flex flex-col ${mulish.className}`}>
      {cities.map((elem, index) => (
        <div key={index}>
          <City data={elem} />
          {index != cities.length - 1 && (
            <div>
              <div className="pt-3"></div>
              <hr className="border-t-1 border-gray-200" />
              <div className="pt-3"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
function Location() {
  return (
    <div className="flex items-center space-x-2 cursor-pointer gap-2 text-sm group relative">
      <img src="icons/location.svg" alt="icon" className="h-4.5 m-0" />
      <div className="text-[#717D92] m-0">LOCATIONS</div>
      <img
        src="icons/downarrow.svg"
        alt="downArrow"
        className="m-0 transition-transform duration-200 group-hover:rotate-180"
      />
      <div className="h-10 absolute top-4 w-full"></div>
      <div className=" w-72 hidden transform -translate-x-1/4 group-hover:block absolute top-12 z-10 bg-secondary rounded-3xl p-4 ">
        <Cities />
      </div>
    </div>
  );
}

export default Location;
