import React ,{useRef, useState} from 'react'
import Reelfooter from './Reelfooter';
import vdo from 'D:/codeputs/Clones/instagram-clone/src/assets/2916298792394031223.mp4'

function Reelcard() {
  const [playing,setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress =()=>{
    if(playing){
      videoRef.current.pause();
      setPlaying(false);
    }
    else{
      videoRef.current.play();
      setPlaying(true);
    }
    
  }

  return (
    <div className='w-full max-h-full   relative snap-start border-none  bg-white object-fill' >
      <video src={vdo} loop
      ref={videoRef}
      onClick={onVideoPress}/>
      <Reelfooter/>
    </div>
  )
}

export default Reelcard
