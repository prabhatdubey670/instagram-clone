import React from 'react';

export default function Explore() {
  return (
    <div className="absolute right-0 md:visible invisible w-[245px] h-screen  bg-white border-2 border-gray-50 shadow-md">
      <div className="relative top-7 text-xl font-bold left-[65px]">
        Trending
      </div>
      <div id="trendimg" className="top-[75px] relative left-[36px]">
        <div id="img1">1</div>
        <div id="img2">2</div>
        <div id="img2">3</div>
        <div id="img4">4</div>
      </div>
    </div>
  );
}
