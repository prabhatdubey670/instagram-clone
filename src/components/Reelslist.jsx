import React from 'react'
import Reelcard from './subcomp/Reelcard'
function Reelslist() {
  return (
    <center>
      <div id="reelsvideos" className='snap-mandatory snap-y scroll-smooth relative md:h-[542px]   overflow-scroll max-w-xl md:w-[306px] md:mt-16 md:mb-10 rounded-md'>
        <Reelcard/>
        <Reelcard/>
        <Reelcard/>
        <Reelcard/>
      </div>
    </center>
  )
}

export default Reelslist
