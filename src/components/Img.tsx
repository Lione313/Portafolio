import React from "react";

const Img: React.FC = () => {
  return (
    <div className="relative inline-block w-56 h-56 sm:w-64 sm:h-64 md:w-60 md:h-60 lg:w-96 lg:h-96 xl:w-104 xl:h-104 lg:mt-60 ">

      <div className="relative w-full h-full perspective-1000">
      
        <div
          className="absolute w-full h-full transition-all duration-300 transform-gpu
                      hover:rotate-y-180 rounded-s-3xl	 border-8 border-transparent
                      hover:border-red-800 hover:border-t-transparent hover:border-b-transparent 
                      animate-border"
        >
          <img
            className="w-full h-full object-cover rounded-s-3xl	 transition-all duration-300 ease-in-out
                      hover:scale-110 hover:rotate-3"
            src="https://i.pinimg.com/736x/35/c2/83/35c2838e747ae32b1ed326fd4444f760.jpg"
            alt="Imagen centrada y circular"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 text-white text-center font-semibold rounded-s-3xl	 transition-opacity duration-500">
          <p className="text-xl">Mr. Chamba</p>
        </div>
      </div>

      <style>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-180:hover {
          transform: rotateY(180deg);
        }

        @keyframes borderAnimate {
          0% {
            border-color: #7f1d1d; /* Rojo similar al red-800 */
            box-shadow: 0 0 10px #7f1d1d, 0 0 20px #7f1d1d;
          }
          50% {
            border-color: black;
            box-shadow: 0 0 10px black, 0 0 20px black;
          }
          100% {
            border-color: #7f1d1d;
            box-shadow: 0 0 10px #7f1d1d, 0 0 20px #7f1d1d;
          }
        }

        .animate-border {
          animation: borderAnimate 6s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Img;
