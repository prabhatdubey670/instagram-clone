import React from 'react'
import { MdFavorite,MdInsertComment,MdShare } from 'react-icons/md'
import { SlOptions } from 'react-icons/sl'
export default function Reelsidebar() {
  return (
    <div className='absolute text-white bg-transparent top-1/2 right-[10px] z-50 '>
      <MdFavorite className='bg-transparent text-xl'/>
      <p className='bg-transparent text-xs'>300</p>
      <MdInsertComment className='bg-transparent text-xl mt-3'/>
      <p className='bg-transparent text-xs'>300</p><MdShare className='bg-transparent text-xl mt-3'/>
      <SlOptions className='bg-transparent text-lg mt-3'/>
    </div>
  )
}
