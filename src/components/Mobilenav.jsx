import React from 'react';
import {
  MdOutlineHome,
  MdOutlineAddBox,
  MdAccountCircle,
} from 'react-icons/md';
// import  profile from "D:/codeputs/Clones/instagram-clone/src/assets/profile.png"
function Mobilenav() {
  return (
    <div className="md:invisible text-white visible bg-black fixed bottom-0  flex flex-row  w-screen h-14 px-5 z-50">
      <nav className="flex flex-row space-x-12 relative">
        <MdOutlineHome className=" text-4xl relative top-2 left-3 " />
        <MdOutlineAddBox className=" text-4xl relative top-2 left-16" />
        <MdAccountCircle className=" text-4xl relative top-2 -right-28" />
        {/* <img src={profile} className=' w-44 h-10  relative top-2 left-60 '/> */}
      </nav>
    </div>
  );
}

export default Mobilenav;
