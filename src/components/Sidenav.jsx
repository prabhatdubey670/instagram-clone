import React from "react";
import ig_logo from "D:/codeputs/Clones/instagram-clone/src/assets/Instagram_Logo_2016.svg";
import {
  MdOutlineHome,
  MdOutlineVideoLibrary,
  MdOutlineAddBox,
  MdAccountCircle,
  MdMenu,
} from "react-icons/md";
export default function Sidenav() {
  return (
    <div className="absolute w-[245px] h-screen bg-white border-2 border-gray-50 shadow-lg">
      <img
        src={ig_logo}
        alt="img"
        className="absolute w-32 h-9 top-7 left-5"
      />

      <nav className="absolute top-32 left-4 space-y-12">
        <MdOutlineHome className=" w-9 h-9 bg-transparent  " />
        <span className="text-xl absolute left-16 -top-[46px]">Home</span>
        <MdOutlineVideoLibrary className=" w-8 h-8 bg-transparent   " />
        <span className="text-xl absolute left-16 top-[35px]">Reels</span>
        <MdOutlineAddBox className=" w-8 h-8 bg-transparent  " />
        <span className="text-xl absolute left-16 top-[116px]">Create</span>
        <MdAccountCircle className=" w-8 h-8 bg-transparent  " />
        <span className="text-xl absolute left-16 top-[195px]">Profile</span>
      </nav>
      <MdMenu className="absolute left-4 w-8 h-8 bg-transparent  bottom-5" />
      <span className="absolute left-[75px] bottom-6 text-xl">More</span>
    </div>
  );
}
