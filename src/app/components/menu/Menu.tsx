'use client';
import { animate, AnimatePresence, motion } from 'framer-motion';
import {
  cities,
  images,
  menuOptions,
  premiumMenuLinks,
  specialMenuOptions,
} from '@/app/data/data';
import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react';
import OptionWithDropDown from './subComponents/OptionWithDropDown';
import OptionWithoutDropDown from './subComponents/OptionWithoutDropDown';
import PremiumOptions from './subComponents/PremiumOptions';
type LocationPropType = {
  image: string;
  city: string;
};
const LocationCard: React.FC<LocationPropType> = (props) => {
  return (
    <div className="flex cursor-pointer items-center flex-col border border-gray-200 shadow-md rounded-2xl p-3">
      <div>
        <img
          className="rounded-full h-10 w-10 mb-2 object-cover"
          src={props.image}
          alt=""
        />
      </div>
      <div className="capitalize">{props.city}</div>
    </div>
  );
};



function Menu({
  hideMenuBar,
  currentState,
}: {
  hideMenuBar: () => void;
  currentState: boolean;
}) {
  const quickLinks = (
    <div className="flex pt-3">
      <div className="w-10"></div>
      <div className="flex gap-2 text-sm flex-col">
        <div>Restaurants</div>
        <div>Merchandise</div>
        <div>Events</div>
      </div>
    </div>
  );

  const locationCards = (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 p-3 pb-1">
      {cities.map((elem, index) => (
        <div key={index}>
          <LocationCard image={elem.image} city={elem.name} />
        </div>
      ))}
    </div>
  );
  const [zIndex, setZIndex] = useState(0);
  return (
    <AnimatePresence
    onExitComplete={() => setZIndex(0)}
    >
      {currentState && (
        <motion.div
          className="absolute flex flex-row-reverse top-0 left-0 bottom-0 right-0"
          initial={{ backgroundColor: "rgba(0,0,0,0)", zIndex: 50 }}
          animate={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 50 }}
          exit={{ backgroundColor: "rgba(0,0,0,0)", zIndex: 50 }}
          transition={{ duration: 0.3 }}
          style={{zIndex:zIndex}}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="h-dvh w-[470px] bg-white overflow-hidden no-scrollbar"
          >
            <div className="flex justify-between items-center bg-white w-[470px] p-8 pb-3">
              <img className="h-15" src={images.wonderla} alt="" />
              <div
                onClick={hideMenuBar}
                className="mr-4 p-1.5 rounded-full cursor-pointer border-gray-200 border"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-[18px] text-black"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>

            <div className="h-full min-h-0 overflow-y-scroll p-7">
              <div className="h-fit flex flex-col overflow-y-visible flex-1 pb-24">
                <OptionWithDropDown
                  data={{
                    ...specialMenuOptions[0],
                    onExpand: locationCards,
                    height: 225,
                  }}
                />

                {menuOptions.slice(0, 3).map((elem, index) => (
                  <div key={index}>
                    <OptionWithoutDropDown data={elem} />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  {premiumMenuLinks.map((elem, index) => (
                    <PremiumOptions key={index} data={elem} />
                  ))}
                </div>
                <div className="pt-3">
                  <OptionWithoutDropDown data={menuOptions[3]} />
                </div>
                <div className="mb-8">
                  <OptionWithDropDown
                    data={{
                      ...specialMenuOptions[1],
                      onExpand: quickLinks,
                      height: 100,
                    }}
                  />
                </div>
                <OptionWithoutDropDown data={menuOptions[4]} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default Menu