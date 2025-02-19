import React from "react";
import { motion } from "framer-motion";

const Sobre = () => {
  return (
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-white font-semibold text-xl text-center 
                 mt-[-300px]  
                 sm:mt-[20px]  
                 md:mt-[-250px] 
                 lg:mt-[-400px]  
                 xl:mt-[-400px] 
                 ml-[0rem] sm:ml-[1rem] md:ml-[6rem] lg:ml-[10rem] xl:ml-[14rem]"
    >
      Soy un estudiante tal tdwadawd
    </motion.p>
  );
};

export default Sobre;
