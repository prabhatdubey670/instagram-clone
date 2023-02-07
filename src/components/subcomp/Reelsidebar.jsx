import React, { useState } from "react";
import {
  MdFavorite,
  MdInsertComment,
  MdShare,
  MdFavoriteBorder,
} from "react-icons/md";
import { SlOptions } from "react-icons/sl";
export default function Reelsidebar({ likes, comments, shares }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="absolute text-white bg-transparent md:top-[38%] top-[45%] right-[10px] z-50 ">
      {/* ternary operator to change color of heart icon */}
      {liked ? (
        <MdFavorite
          className="bg-transparent md:text-2xl text-3xl fill-red-500"
          onClick={(e) => setLiked(false)}
        />
      ) : (
        <MdFavoriteBorder
          className="bg-transparent md:text-2xl text-3xl"
          onClick={(e) => setLiked(true)}
        />
      )}
      {/* <MdFavorite className='bg-transparent text-xl'/> */}
      <p className="bg-transparent md:text-sm text-xl">{liked ? likes + 1 : likes}</p>
      <MdInsertComment className="bg-transparent md:text-xl text-2xl mt-5" />
      <p className="bg-transparent md:text-sm text-xl">{comments}</p>
      <MdShare className="bg-transparent md:text-xl text-2xl mt-5" />
      <p className="bg-transparent md:text-sm text-xl">{shares}</p>
      <SlOptions className="bg-transparent md:text-lg mt-5 text-2xl" />
    </div>
  );
}
