import React from "react";


const PageNotFound = () => {
  return (
    <main className="relative bg-black h-screen flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full bg-cover bg-fixed bg-no-repeat z-0 bg-opacity-50" style={{ backgroundImage: 'url("https://wallpapers.com/images/featured/cielo-oscuro-r6up6saosci2pwnu.jpg")' }}></div>
      
      <h1 className="text-white text-6xl font-bold mb-4 wave z-10">
        <span className="char font-semibold">4</span>
        <span className="char font-semibold">0</span>
        <span className="char  font-semibold">4</span>
      </h1>

      <p className="text-gray-300 text-3xl mb-3 z-10 font-semibold">
        Oops! Error 
      </p>
      
      <p className="text-white text-lg mb-6 z-10 font-semibold">
        You've reached the end, you better come back        
      </p>

      <a
        href="/"
        className="mt-6 px-8 py-3 bg-none text-white font-semibold text-lg rounded-lg transition-all duration-300 ease-in-out hover:bg-none hover:scale-105 z-10 hover:text-red-800" 
      >
        Back to Home
      </a>
    </main>
  );
};

export default PageNotFound;
