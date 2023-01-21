import React ,{useRef, useState} from 'react'
import Reelsidebar from './Reelsidebar';
import Reelfooter from './Reelfooter';
import vdo from 'D:/codeputs/Clones/instagram-clone/src/assets/2990726203617069730.mp4'

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
    <>
    
    <div className='w-full max-h-full   relative snap-start border-none  bg-white object-fill' >
      <video src={vdo} loop
      ref={videoRef}
      onClick={onVideoPress}/>
      <Reelfooter username="jerryd" music="leo ft.honey x cozy" />
      
      <Reelsidebar/>
    </div>
    
    </>
  )
}

export default Reelcard
