'use client';

import { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { circularRideSection } from '@/app/data/data';
const angleMapping = [45, 90, 135];
function Magnifier({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className={`absolute transform -translate-x-1/2 -translate-y-1/2`}
      style={{ top: `${y}rem`, left: `${x}rem` }}
    >
      <div className="h-[170px] bg-button w-[170px] rounded-full flex justify-center items-center">
        <div className="h-[150px] w-[150px] rounded-full bg-white"></div>
      </div>
    </motion.div>
  );
}
function CircularSideBar({changeSelectedSlide,currentSelectedSlide}:{changeSelectedSlide:(x:number)=>void,currentSelectedSlide:number}) {
  const [angle, setAngle] = useState(angleMapping[currentSelectedSlide]);
  const [magnifierCoordsX, setMagnifierCoordsX] = useState(
    circularRideSection[currentSelectedSlide].magnifierCoords.x
  );
  const [magnifierCoordsY, setMagnifierCoordsY] = useState(
    circularRideSection[currentSelectedSlide].magnifierCoords.y
  );
  useEffect(() => {
    const newAngle = angleMapping[currentSelectedSlide];
    animate(angle, newAngle, {
      duration: 0.3,
      onUpdate: (latest) => setAngle(latest),
    });
    const newCoordX = circularRideSection[currentSelectedSlide].magnifierCoords.x;
    const newCoordY = circularRideSection[currentSelectedSlide].magnifierCoords.y;
    animate(magnifierCoordsX, newCoordX, {
      duration: 0.3,
      onUpdate: (latest) => setMagnifierCoordsX(latest),
    });
    animate(magnifierCoordsY, newCoordY, {
      duration: 0.3,
      onUpdate: (latest) => setMagnifierCoordsY(latest),
    });
  }, [currentSelectedSlide]);
  return (
    <div className="flex h-full items-center justify-center overflow-hidden relative flex-1/3 pt-20">
      <div className="absolute -translate-x-9/24">
        <motion.div
          className="h-[600px] w-[600px] rounded-full flex items-center justify-center relative"
          style={{
            background: `conic-gradient(from 0deg, 
            rgb(232, 233, 241) ${angle - 75}deg, 
            rgb(250, 213, 0) ${angle - 25}deg, 
            rgb(250, 213, 0) ${angle + 25}deg, 
            rgb(232, 233, 241) ${angle + 75}deg, 
            rgb(232, 233, 241))`,
          }}
        >
          <div className="bg-primary h-[420px] w-[420px] rounded-full"></div>
          <div className="z-0">
            <Magnifier x={magnifierCoordsX} y={magnifierCoordsY} />
          </div>
          {circularRideSection.map((data, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  changeSelectedSlide(index);
                }}
                className={`absolute ${data.imageClasses} transform z-20 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer`}
              >
                <img
                  style={{
                    scale: currentSelectedSlide === index ? '1.4' : '1',
                    transition: 'scale 0.3s ease-in-out',
                  }}
                  className=' '
                  src={data.image}
                  alt="rideIcon"
                />
              </div>

              <div
                className={`absolute ${data.tagClasses} transform -translate-x-1/2 -translate-y-1/2 text-white text-xl capitalize`}
              >
                <div>{data.name}</div>
                <div className="text-sm rounded-2xl px-3 py-1 bg-blue-light">{`${data.rideNumber} Rides`}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CircularSideBar;
