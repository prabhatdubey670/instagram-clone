import React , {useState} from 'react'
import { MdFavorite,MdInsertComment,MdShare ,MdFavoriteBorder } from 'react-icons/md'
import { SlOptions } from 'react-icons/sl'
export default function Reelsidebar({likes,comments,shares}) {
  const [liked,setLiked] = useState(false);
  return (
    <div className='absolute text-white bg-transparent top-1/2 right-[10px] z-50 '>
     {liked?<MdFavorite className='bg-transparent text-xl' onClick={(e)=>setLiked(false)}/>:<MdFavoriteBorder className='bg-transparent text-xl' onClick={(e)=>setLiked(true)}/>}
      {/* <MdFavorite className='bg-transparent text-xl'/> */}
      <p className='bg-transparent text-xs'>{liked? likes + 1 : likes}</p>
      <MdInsertComment className='bg-transparent text-xl mt-3'/>
      <p className='bg-transparent text-xs'>{comments}</p>
      <MdShare className='bg-transparent text-xl mt-3'/>
      <p className='bg-transparent text-xs'>{shares}</p>
      <SlOptions className='bg-transparent text-lg mt-3'/>
      
    </div> 
  )
}

