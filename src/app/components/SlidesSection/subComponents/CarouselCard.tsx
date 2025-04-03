import Button from '@/app/components/universalComponents/Button';
import { Mulish } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const mulish = Mulish({
  subsets: ['latin'],
});
type PropType = {
  name: string;
  href: string;
  location: string;
  description: string;
  videoUrl: string;
};

const CarouselCard: React.FC<{ data: PropType }> = ({ data }) => {
  return (
    <div className="rounded-4xl m-[var(--slide-spacing)] max-w-[250px] flex-none transform-gpu relative">
      <div
        className="absolute z-10 h-full w-full  flex flex-col rounded-2xl pb-10  justify-end "
        style={{
          background:
            'linear-gradient(180deg, rgba(245,245,245,0) 34.08%, rgba(34, 48, 74,1) 100%)',
        }}
      ></div>
      <div className="absolute z-10 p-3 h-[105%] flex justify-end flex-col">
        <div className={`  text-white ${mulish.className}`}>
          <div className="font-bold text-lg">{data.name}</div>
          <div className="text-xs text-gray-300">{data.location}</div>
          <div className="text-xs">{data.description}</div>
          <div
            className="hover:scale-105 transition-all "
            style={{ transition: 'all 200ms' }}
          >
            <Link href={data.href}>
            <button
              className={`py-3 px-8 mt-3 uppercase font-extrabold bg-[#FAD504] rounded-lg text-text hover:cursor-pointer`}
            >
              <div className="flex justify-center items-center gap-1">
                <div className="text-xs">Ride Details</div>
              </div>
            </button>
            </Link>
          </div>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="aspect-[229/394] rounded-3xl w-full object-cover lg:aspect-[246/346]"
      >
        <source src={data.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CarouselCard;
