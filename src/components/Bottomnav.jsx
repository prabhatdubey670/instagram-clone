import React, { useState } from 'react'
import {BiSearch,BiHome,BiMoviePlay,BiSend,BiUserCircle} from 'react-icons/bi'
import {motion} from 'framer-motion'
function Bottomnav() {
    
    const[click,setClick] = useState();
    
  return (
    <div >
      <nav className='flex flex-row absolute bottom-0 bg-white text-4xl space-x-12 px-4  py-2' >
        <motion.div id="home" className=''
        ><BiHome/></motion.div>
        <div id="search"><BiSearch/></div>
        <div id="reels"><BiMoviePlay/></div>
        <div id="message"><BiSend/></div>
        <div id="profile"><BiUserCircle/></div>
      </nav>
    </div>
  )
}

export default Bottomnav
