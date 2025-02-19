import React from "react";
import { motion } from "framer-motion";

const Sobre = () => {
  return (
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-white font-semibold text-xl text-center 
                 mt-[-250px] ml-[0rem] 
                 sm:mt-[-300px] sm:ml-[1rem] 
                 md:mt-[-250px] md:ml-[6rem] 
                 lg:mt-[-300px] lg:ml-[10rem] 
                 xl:mt-[-450px] xl:ml-[14rem]"
    >
      Soy un estudiante tal tal tal
    </motion.p>
  );
};

export default Sobre;
