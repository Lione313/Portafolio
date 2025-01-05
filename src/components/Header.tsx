import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-950 bg-opacity-75 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center max-w-4xl mx-auto w-full">
        <h1 className="text-white mr-2 text-2xl font-bold group transition-transform transform hover:scale-110 hover:text-red-800 hover:shadow-xl hover:bg-gradient-to-r from-black to-red-800 bg-clip-text">
          Lionel
        </h1>

        <div className="ml-auto flex space-x-10 md:hidden">
          <button className="text-white p-2 transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-red-800 hover:shadow-lg hover:shadow-red-500">
            <i className="fa fa-user"></i>
          </button>
          <button className="text-white p-2 transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-red-800 hover:shadow-lg hover:shadow-red-500">
            <i className="fa fa-cogs"></i>
          </button>
          <button className="text-white p-2 transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-red-800 hover:shadow-lg hover:shadow-red-500">
            <i className="fa fa-envelope"></i>
          </button>
        </div>

        <ul className="flex ml-auto space-x-6 hidden md:flex">
          <li className="group">
            <a
              href="#"
              className="text-white text-lg font-semibold transition-all duration-500 ease-in-out hover:text-red-800"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-black to-red-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              About me
              </span>
            </a>
          </li>

          <li className="group">
            <a
              href="#"
              className="text-white text-lg font-semibold transition-all duration-500 ease-in-out hover:text-red-800"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-black to-red-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                My Projects
              </span>
            </a>
          </li>

          <li className="group">
            <a
              href="#"
              className="text-white text-lg font-semibold transition-all duration-500 ease-in-out hover:text-red-800"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-black to-red-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
               Contact me
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
