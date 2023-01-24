import React, { useState, useEffect } from "react";
import Reelcard from "./subcomp/Reelcard";
// import vdo from "C:/Users/dprab/Desktop/codeputs lap/Javascript/instagram-clone/src/assets/2990726203617069730.mp4";
import db from "D:/codeputs/Clones/instagram-clone/firebase.js";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
function Reelslist() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "01"));
      querySnapshot.forEach((doc) => {
        setVideos((prev) => [...prev, doc.data()]);
      });
    };
    getVideos();
  }, []);

  
  return (
    <center>
      <div
        id="reelsvideos"
        className="snap-mandatory snap-y scroll-smooth relative md:h-[542px]   overflow-scroll max-w-xl md:w-[306px] md:mt-16 md:mb-10 rounded-md"
      >
        {videos.map(
          ({ url, username, caption, music, likes, comments, shares }) => (
            <Reelcard
              username={username}
              music={music}
              caption={caption}
              likes={likes}
              comments={comments}
              shares={shares}
              url={url}
            />
          )
        )}
      </div>
    </center>
  );
}

export default Reelslist;
