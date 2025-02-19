import React from "react";
import { motion } from "framer-motion";

const Sobre = () => {
  return (
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-white font-semibold text-xl text-center 
                 mt-[20px] sm:mt-[-350px] md:mt-[-350px] 
                 lg:mt-[-400px] xl:mt-[-400px] 
                 ml-0 sm:ml-[1rem] md:ml-[6rem] lg:ml-[10rem] xl:ml-[14rem]"
    >
      Soy un estudiante tal tal tal
    </motion.p>
  );
};

export default Sobre;
