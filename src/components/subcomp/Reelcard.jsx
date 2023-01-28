import React ,{useRef, useState} from 'react'
import Reelsidebar from './Reelsidebar';
import Reelfooter from './Reelfooter';


function Reelcard({
  url,username,caption,music,likes,comments,shares
}) {
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
    
    <div className='w-full h-full   relative snap-start border-none  bg-white object-fill' >
      <video src={url} loop
      ref={videoRef}
      onClick={onVideoPress}
      key={url}/>
      <Reelfooter username={username} music={music} caption={caption
      } />
      
      <Reelsidebar likes={likes} comments={comments} shares={shares}/>
    </div>

    </>
  )
}

export default Reelcard
