import React, { useState } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import navLogo from '../../assets/Logos/roundedLogo.png'

const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
        // const [isScrolled, setIsScrolled] = useState(false);

  //     useEffect(() => {
  //   const handleScroll = () => {
  //      setIsScrolled(window.scrollY > 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
    return (
        <div>
            
         {/* w-full  fixed z-10  bg-transparent shadow-none */}
         {/* scrool */}
         {/*  ${
        isScrolled
          ? "bg-blue-400"
          : "bg-blue-300"
      }` */}
  <nav className="w-full fixed top-0 left-0 z-50 bg-blue-400 shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center ">
            <a
              href="/"
              className=" flex-shrink-0 flex items-center text-xl font-semibold font-sans text-white"
            >
              <img
                className="w-[70px] rounded-full mr-3"
                src={navLogo}
                alt="Logo"
              />
              নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-8">
            {/* <a
              href="#"
              className="text-gray-400 hover:text-blue-600 font-bold transition-transform duration-300 transform hover:scale-105"
            >
              Home
            </a> */}
            <a
              href="/aboutOurs"
              className="relative text-white  transition-transform duration-300 transform hover:scale-105
          before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-0 before:bg-blue-600
          before:transition-all before:duration-500 hover:before:w-full" >
              আমাদের সম্পর্কে 
            </a>
            <a
              href="#"
              className="relative text-white  transition-transform duration-300 transform hover:scale-105
          before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-0 before:bg-blue-600
          before:transition-all before:duration-500 hover:before:w-full"
            >
              প্রকল্প 
            </a>
            <a
              href="#"
              className="relative text-white  transition-transform duration-300 transform hover:scale-105
          before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-0 before:bg-blue-600
          before:transition-all before:duration-500 hover:before:w-full"
            >
              সংবাদ 
            </a>
            <a
              href="#"
              className="relative text-white transition-transform duration-300 transform hover:scale-105
          before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-0 before:bg-blue-600
          before:transition-all before:duration-500 hover:before:w-full"
            >
              যোগাযোগ
            </a>
            {/* <a href="#">
              <button>Login</button>
            </a> */}
          </div>

          {/* Mobile Button & Menu */}
          <div className=" sm:bg-blue-500 md:hidden flex flex-col items-end relative">
            <div className="flex items-center justify-center">
              <button onClick={() => setMenuOpen(!menuOpen)} className='text-2xl'><RiMenu2Fill /></button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="absolute top-full right-0 mt-2 flex flex-col bg-white shadow px-4 py-3 space-y-2 w-40 z-20">
                {/* <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 font-bold transition-transform duration-300 transform hover:scale-105"
                >
                  Home
                </a> */}
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 font-bold transition-transform duration-300 transform hover:scale-105"
                >
                   আমাদের সম্পর্কে 
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 font-bold transition-transform duration-300 transform hover:scale-105"
                >
                  প্রকল্প
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 font-bold transition-transform duration-300 transform hover:scale-105"
                >
                  সংবাদ
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 font-bold transition-transform duration-300 transform hover:scale-105"
                >
                   যোগাযোগ
                </a>
                {/* <a href="#">
                  <button>Login</button>
                </a> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
    <div className="h-18"></div>

        </div>
    );
};

export default Navbar;