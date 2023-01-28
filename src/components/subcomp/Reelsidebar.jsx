import React , {useState} from 'react'
import { MdFavorite,MdInsertComment,MdShare ,MdFavoriteBorder } from 'react-icons/md'
import { SlOptions } from 'react-icons/sl'
export default function Reelsidebar({likes,comments,shares}) {
  const [liked,setLiked] = useState(false);
  return (
    <div className='absolute text-white bg-transparent top-[38%] right-[10px] z-50 '>
     {liked?<MdFavorite className='bg-transparent text-2xl fill-red-500' onClick={(e)=>setLiked(false)}/>:<MdFavoriteBorder className='bg-transparent text-2xl' onClick={(e)=>setLiked(true)}/>}
      {/* <MdFavorite className='bg-transparent text-xl'/> */}
      <p className='bg-transparent text-sm'>{liked? likes + 1 : likes}</p>
      <MdInsertComment className='bg-transparent text-xl mt-5'/>
      <p className='bg-transparent text-sm'>{comments}</p>
      <MdShare className='bg-transparent text-xl mt-5'/>
      <p className='bg-transparent text-sm'>{shares}</p>
      <SlOptions className='bg-transparent text-lg mt-5'/>
      
    </div> 
  )
}

