import Link from 'next/link';
import React from 'react';

function Options({
  iconSrc,
  optionName,
}: {
  iconSrc: string;
  optionName: string;
}) {
  return (
    <Link href="">
      <div className="flex items-center space-x-2 hover:cursor-pointer gap-2 text-sm">
        <img
          src={iconSrc}
          alt="icon"
          className="h-4.5 m-0" style={{
            color: 'transparent',
            filter:
              'brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)',
          }}
        />
        <div className="text-[#717D92]">{optionName}</div>
      </div>
    </Link>
  );
}

export default Options;
