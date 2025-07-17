import React from 'react';
import newLogo from '../../assets/Logos/againBanner.jpg'
import { Typewriter } from 'react-simple-typewriter';
import Navbar from '../SharedPages/Navbar';
import { Link } from 'react-router-dom';




const Banner = () => {
    return (
        <div >
            
        
<div className=''>
    
  {/* Banner Section */}
  <div
//    min-h-screen
    className=" relative min-h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${newLogo})`,
      backgroundSize: "cover",
    backgroundPosition: "center"
    }}
  >
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 text-center text-white p-4 shadow">
      <div className="max-w-md">
        
    <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white leading-tight'>
  ব্যক্তি‑স্বার্থ নয়,{' '}
  <span style={{ color:'white' }}>
    <Typewriter
      words={['মানবতার সেবায়', 'মানুষের জন্য', 'সমাজ ও মানবতার জন্য']}
      loop
      cursor
      cursorStyle="|"
      typeSpeed={100}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  </span>
</h2>

        <p className="mb-5">
                   আমরা কাজ করি নিঃস্বার্থভাবে সমাজের জন্য
        </p>
 <Link to='/member'>
   <button className="
  bg-gradient-to-r from-indigo-600 to-purple-600 
  text-white font-semibold 
  px-6 py-3 
  rounded-full 
  shadow-md 
  border border-transparent 
  transition-all duration-300 ease-in-out 
  hover:from-indigo-500 hover:to-purple-500 
  hover:shadow-lg 
  hover:border-white/20
  active:scale-95
">
  আমাদের সাথে যোগ দিন
</button>
 </Link>

      </div>
    </div>
  </div>
</div>



        </div>
    );
};

export default Banner;