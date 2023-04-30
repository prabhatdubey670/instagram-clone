import React from 'react';
import {
  MdOutlineHome,
  MdExplore,
  MdOutlineAddBox,
  MdAccountCircle,
  MdMenu,
} from 'react-icons/md';
import igLogo from '../assets/Instagram_Logo_2016.svg';

export default function Sidenav() {
  return (
    <div className="fixed w-[245px] h-screen bg-white border-2 border-gray-50 shadow-lg md:visible invisible">
      <img src={igLogo} alt="img" className="absolute w-32 h-9 top-7 left-5" />

      <nav className="absolute top-32 left-6 space-y-12">
        <a href={`/`} className="cursor-pointer">
          <MdOutlineHome className=" w-9 h-9 bg-transparent " />
          <span className="text-xl absolute left-16 top-1">Home</span>
        </a>
        <div className="cursor-pointer">
          <MdExplore className=" w-8 h-8 bg-transparent   " />
          <a href={`/explore`} className="text-xl absolute left-16 top-[85px]">
            Explore
          </a>
        </div>

        <div className="cursor-pointer">
          <MdOutlineAddBox className=" w-8 h-8 bg-transparent  " />
          <a href={`/create`} className="text-xl absolute left-16 top-[165px]">
            Create
          </a>
        </div>
        <div className="cursor-pointer">
          <MdAccountCircle className=" w-8 h-8 bg-transparent  " />
          <a href={`/profile`} className="text-xl absolute left-16 top-[245px]">
            Profile
          </a>
        </div>
      </nav>
      <MdMenu className="absolute left-4 w-8 h-8 bg-transparent  bottom-5" />
      <span className="absolute left-[75px] bottom-6 text-xl">More</span>
    </div>
  );
}
