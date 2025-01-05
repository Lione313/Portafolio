import React from "react";

const Img = () => {
  return (
    <img
      // Eliminamos márgenes innecesarios y usamos márgenes que responden en pantallas pequeñas
      className="h-64 w-64 mx-auto mt-16 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-16 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72 hover:scale-105 transition-transform duration-200"
      src="https://pbs.twimg.com/media/GJTI3xPXwAAF1MJ.jpg"
      alt="Imagen centrada y circular"
    />
  );
};

export default Img;
