import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import vdo from '../assets/2993020039879586992.mp4';
import Reelcard from './subcomp/Reelcard';
import db from '../../firebase';

function Reelslist() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, '01'));
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
        className="snap-mandatory snap-y scroll-smooth  md:h-[85%] md:top-12 md:left-[41%]  overflow-scroll max-w-xl md:w-[306px] absolute rounded-md "
      >
        {videos.map(
          ({
            url,username, caption, music, likes, comments, shares,
          }) => (
            <Reelcard
              username={username}
              music={music}
              caption={caption}
              likes={likes}
              comments={comments}
              shares={shares}
              url={vdo}
            />
          ),
        )}
      </div>
    </center>
  );
}

export default Reelslist;
