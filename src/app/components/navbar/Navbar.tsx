import { images, navbarOptions } from '@/app/data/data';
import React from 'react';
import { Mulish } from 'next/font/google';
import Options from './subComponents/Options';
import Location from './subComponents/Location';
import Button from '../universalComponents/Button';
import HamburgerMenu from './subComponents/HamburgerMenu';
const mulish = Mulish({
  subsets: ['latin'],
  weight: '900',
});
function Navbar() {
  return (
    <nav
      className={`fixed top-10 left-15 right-15  z-5 bg-secondary rounded-xl py-3 px-12 font-mulish ${mulish.className}`}
    >
      <div className="flex justify-between items-center gap-x-7">
        <div className="">
          <img
            className="transition-transform duration-300 hover:scale-108 h-12 hover:cursor-pointer"
            src={images.wonderla}
            alt="wonderla"
          />
        </div>
        <div className="flex gap-5">
          <Location />{' '}
          {navbarOptions.map((option) => (
            <Options
              key={option.optionName}
              iconSrc={option.iconSrc}
              optionName={option.optionName}
            ></Options>
          ))}
        </div>
        <div className=" flex justify-center items-center gap-8">
          <Button
            content="BOOK TICKETS"
            radius="rounded-lg"
            padding="px-2.5 py-2.5"
            sideIcon="/icons/tickets.svg"
          />
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
