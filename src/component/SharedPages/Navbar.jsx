import React, { useState } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import navLogo from '../../assets/Logos/roundedLogo.png'
import '../Css/Nav.css'

const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <div>
            
     
  <nav className="w-full fixed top-0 left-0 z-50 bg-green-500  text-white shadow">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center ">
            <a
              href="/"
              className=" flex-shrink-0 flex items-center text-xl font-semibold font-sans "
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
          <div className="hidden md:flex md:items-center space-x-8 design">
            <a
              href="/"
               
            >
                 হোম
            </a>
            <a
              href="/aboutOurs"
              >
              আমাদের সম্পর্কে 
            </a>
            <a
              href="/project"
            
            >
              প্রকল্প সমূহ
            </a>
            <a
              href="/news"
              
            >
              সংবাদ 
            </a>
            <a
              href="/contact"
              
            >
              যোগাযোগ
            </a>
            <a
              href="/member"
             
            >
              আমাদের সদস্য হোন
            </a>
            
          </div>

          {/* Mobile Button & Menu */}
          <div className="bg-green-800 rounded p-2 md:hidden flex flex-col items-end relative">
            <div className="flex items-center justify-center">
              <button onClick={() => setMenuOpen(!menuOpen)} className='text-2xl'><RiMenu2Fill /></button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="absolute top-full right-0 mt-2 flex flex-col bg-white shadow px-4 py-3 space-y-3 w-50 z-20">
                <a
                  href="/"
                  className="text-gray-400 hover:text-blue-600 font-bold transition-transform duration-300 transform hover:scale-105"
                >
                হোম
                </a>
                <a
                  href="/aboutOurs"
                  className="text-gray-400 hover:text-blue-600 font-bold transition-transform duration-300 transform hover:scale-105"
                >
                   আমাদের সম্পর্কে 
                </a>
                <a
                  href="/project"
                  className="text-gray-400 hover:text-blue-600 font-bold transition-transform duration-300 transform hover:scale-105"
                >
                  প্রকল্প 
                </a>
                <a
                  href="/news"
                  className="text-gray-400 hover:text-blue-600 font-bold transition-transform duration-300 transform hover:scale-105"
                >
                  সংবাদ
                </a>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-blue-600 font-bold transition-transform duration-300 transform hover:scale-105"
                >
                   যোগাযোগ
                </a>
                <a
                  href="/member"
                  className="text-gray-400 hover:text-blue-600 font-bold transition-transform duration-300 transform hover:scale-105"
                >
                   আমাদের সদস্য হোন
                </a>
             
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