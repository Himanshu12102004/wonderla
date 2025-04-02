import React from 'react';
import { Mulish } from 'next/font/google';
const mulish = Mulish({
  subsets: ['latin'],
  weight: '900',
});
function Button({
  padding,
  radius,
  content,
  sideIcon,
}: {
  padding: string;
  radius: string;
  content: string;
  sideIcon: string;
}) {
  return (
    <button className={`${padding} ${radius} text-text bg-button hover:cursor-pointer`}>
      <div className="flex justify-center items-center gap-1">
        <div className='text-xs'>{content}</div>
        {sideIcon != '' ? <img src={sideIcon} className='h-[12px]' alt="icon" /> : ''}
      </div>
    </button>
  );
}

export default Button;
