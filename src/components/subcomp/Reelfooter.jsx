import React from 'react'
import {BiMusic} from 'react-icons/bi'
function Reelfooter() {
  return (
    <div id="reelfooter" className='relative bottom-[77px] px-2 bg-transparent text-white flex flex-col'>
      <h3 className='absolute left-2
       bg-transparent'>@username</h3>
      <p className='
      absolute left-2 -bottom-8 bg-transparent'>this is a description ! </p>
      <BiMusic className='absolute -bottom-16 bg-transparent font-bold'/>
    </div>
  )
}

export default Reelfooter
