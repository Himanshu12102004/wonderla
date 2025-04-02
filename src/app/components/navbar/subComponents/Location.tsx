import { cities } from '@/app/data/data';
import Link from 'next/link';
import React from 'react';
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
function City({data}:{data:LocationData}){
  return <div className='flex  items-center w-52'>
    <div className=''>
      <img src={data.image} className='h-12 w-12 rounded-lg object-cover' alt={data.name} />
    </div>
    <div className='capitalize'>{data.name}</div>
  </div>
}
function Cities(){
  return (
    <div className='flex flex-col gap-5'>
  {cities.map((elem,index) => <div key={index}><City data={elem}/>
  <hr className="border-t-2 border-gray-500" />
</div>)}
    </div>
  )
}
function Location() {
  return (
    <Link href="">
      <div className="flex items-center space-x-2 hover:cursor-pointer gap-2 text-sm group relative">
        <img src="icons/location.svg" alt="icon" className="h-4.5 m-0" />
        <div className="text-[#717D92] m-0">LOCATIONS</div>
        <img
          src="icons/downarrow.svg"
          alt="downArrow"
          className="m-0 transition-transform duration-200 group-hover:rotate-180"
        />
        <div className='invisible group-hover:visible absolute top-12 z-10 bg-secondary'>
          <Cities></Cities>
        </div>
      </div>
    </Link>
  );
}

export default Location;
