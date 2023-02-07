import React from "react";
import { motion, useAnimation } from "framer-motion";
import { MdLibraryMusic } from "react-icons/md";

function Reelfooter({ username, caption, music }) {
  return (
    <div
      id="reelfooter"
      className="relative md:bottom-[77px] px-2 bg-transparent text-white flex flex-col bottom-[100px]"
    >
      <h3
        className="absolute left-3 -bottom-3
       bg-transparent md:text-base text-xl "
      >
        @{username}
      </h3>

      <p
        className="md:text-sm
      absolute text-base left-[14px] md:-bottom-[38px] -bottom-[44px] bg-transparent"
      >
        {caption}{" "}
      </p>
      <MdLibraryMusic className="absolute left-3 md:-bottom-16 -bottom-20 bg-transparent font-bold z-50 opacity-70 md:text-base text-2xl" />
      <motion.p
        initial={{ x: -200, opacity: 1 }}
        animate={{ x: 100, opacity: 1 }}
        transition={{
          repeat: Infinity,
          type: "keyframes",
          duration: 10,
          delay: -10,
          repeatType: "loop",
        }}
        className="absolute -bottom-16 bg-transparent right-3 font-extralight text-sm overflow-x-hidden"
      >
        {music}
      </motion.p>
    </div>
  );
}

export default Reelfooter;
