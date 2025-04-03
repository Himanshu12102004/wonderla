import { motion } from "framer-motion";
import React from "react";
type PropType={
  x:number,
  y:number
}
const Magnifier:React.FC<PropType>=({ x, y })=> {
  return (
    <motion.div
      className={`absolute transform -translate-x-1/2 -translate-y-1/2`}
      style={{ top: `${y}rem`, left: `${x}rem` }}
    >
      <div className="h-[170px] bg-button w-[170px] rounded-full flex justify-center items-center">
        <div className="h-[150px] w-[150px] rounded-full bg-white"></div>
      </div>
    </motion.div>
  );
}
export default Magnifier