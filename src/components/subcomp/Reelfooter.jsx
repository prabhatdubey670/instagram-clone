import React from 'react'
import {motion} from 'framer-motion'
import {BiMusic} from 'react-icons/bi'
function Reelfooter({username,caption,music}) {
  return (
    <div id="reelfooter" className='relative bottom-[77px] px-2 bg-transparent text-white flex flex-col'>
      <h3 className='absolute left-3
       bg-transparent'>@{username}</h3>
      <p className='text-sm
      absolute left-3 -bottom-[44px] bg-transparent'>{caption} </p>
      <BiMusic className='absolute left-3 -bottom-16 bg-transparent font-bold z-50'/>
       <motion.p
        initial={{ x: -330,opacity:1 }}  animate={{ x: 270,opacity:1 }} transition={{ repeat: Infinity,type:"keyframes", duration: 25,delay:-10, repeatType:'loop' }}
      className='absolute -bottom-16 bg-transparent right-3 font-extralight text-sm overflow-x-hidden'
      >
       {music}  
      </motion.p>
   
    </div>
  )
}

export default Reelfooter
