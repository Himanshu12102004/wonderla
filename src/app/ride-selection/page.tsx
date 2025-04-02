import React from 'react';
import CircularSideBar from '../components/ctegorySideBar/CircularSideBar';
import Carousel from '../components/carousel/Carousel';

function RideSelection() {
  return <div className="bg-primary h-full">
    <div className='flex h-full items-center justify-between'>
    <CircularSideBar/>
    <Carousel/>
    </div>
  </div>;
}

export default RideSelection;
