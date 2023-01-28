import React from 'react'
import {motion,useAnimation} from 'framer-motion'
import {MdLibraryMusic} from 'react-icons/md'

function Reelfooter({username,caption,music}) {
 
  return (
    <div id="reelfooter" className='relative bottom-[77px] px-2 bg-transparent text-white flex flex-col'>
      <h3 className='absolute left-3 -bottom-3
       bg-transparent text-base '>@{username}</h3>
      <p className='text-sm
      absolute left-[14px] -bottom-[38px] bg-transparent'>{caption} </p>
      <MdLibraryMusic className='absolute left-3 -bottom-16 bg-transparent font-bold z-50 opacity-70'/>
       <motion.p
        initial={{ x: -200,opacity:1 }}  animate={{ x: 100,opacity:1 }} transition={{ repeat: Infinity,type:"keyframes", duration: 10,delay:-10, repeatType:'loop'  }}
      className='absolute -bottom-16 bg-transparent right-3 font-extralight text-sm overflow-x-hidden'
      >
       {music}  
      </motion.p>
   
    </div>
  )
}

export default Reelfooter
