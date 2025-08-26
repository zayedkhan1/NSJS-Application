// import React from 'react';
// import newLogo from '../../assets/Logos/againBanner.jpg'
// import { Typewriter } from 'react-simple-typewriter';
// import Navbar from '../SharedPages/Navbar';
// import { Link } from 'react-router-dom';




// const Banner = () => {
//     return (
//         <div >
            
        
// <div className=''>
    
//   {/* Banner Section */}
//   <div
// //    min-h-screen
//     className=" relative min-h-screen flex items-center justify-center"
//     style={{
//       backgroundImage: `url(${newLogo})`,
//       backgroundSize: "cover",
//     backgroundPosition: "center"
//     }}
//   >
//     <div className="absolute inset-0 bg-black/50"></div>

//     <div className="relative z-10 text-center text-white p-4 ">
//       <div className="max-w-md">
        
//     <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white leading-tight'>
//   ব্যক্তি‑স্বার্থ নয়,{' '}
//   <span style={{ color:'white' }}>
//     <Typewriter
//       words={['মানবতার সেবায়', 'মানুষের জন্য', 'সমাজ ও মানবতার জন্য']}
//       loop
//       cursor
//       cursorStyle="|"
//       typeSpeed={100}
//       deleteSpeed={50}
//       delaySpeed={2000}
//     />
//   </span>
// </h2>

//         <p className="mb-5">
//                    আমরা কাজ করি নিঃস্বার্থভাবে সমাজের জন্য
//         </p>
//  <Link to='/member'>
//    <button   className="
//   bg-gradient-to-r from-green-600 to-emerald-500
//   text-white font-semibold
//   px-6 py-3
//   rounded-full
//   shadow-md
//   border border-transparent
//   transition-all duration-300 ease-in-out
//   hover:from-green-500 hover:to-emerald-400
//   hover:shadow-lg
//   hover:border-white/20
//   active:scale-95
//   " >
//   আমাদের সাথে যোগ দিন
// </button>
//  </Link>

//       </div>
//     </div>
//   </div>
// </div>



//         </div>
//     );
// };

// export default Banner;


//////////////////////////////// Animated code ////////////////////////

import React from 'react';
import { motion } from 'framer-motion';
import newLogo from '../../assets/Logos/againBanner.jpg'
import { Typewriter } from 'react-simple-typewriter';
import Navbar from '../SharedPages/Navbar';
import { Link } from 'react-router-dom';

const Banner = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const backgroundVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 0.5,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        rest: { scale: 1 },
        hover: { 
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: { scale: 0.95 }
    };

    return (
        <div>
            <div className=''>
                {/* Banner Section */}
                <motion.div
                    className="relative min-h-screen flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${newLogo})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    variants={backgroundVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="absolute inset-0 bg-black/50"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                    ></motion.div>

                    <motion.div 
                        className="relative z-10 text-center text-white p-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="max-w-md">
                            <motion.h2 
                                className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white leading-tight'
                                variants={itemVariants}
                            >
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
                            </motion.h2>

                            <motion.p 
                                className="mb-5"
                                variants={itemVariants}
                            >
                                আমরা কাজ করি নিঃস্বার্থভাবে সমাজের জন্য
                            </motion.p>
                            
                            <motion.div variants={itemVariants}>
                                <Link to='/member'>
                                    <motion.button
                                        className="
                                            bg-gradient-to-r from-green-600 to-emerald-500
                                            text-white font-semibold
                                            px-6 py-3
                                            rounded-full
                                            shadow-md
                                            border border-transparent
                                            transition-all duration-300 ease-in-out
                                            hover:from-green-500 hover:to-emerald-400
                                            hover:shadow-lg
                                            hover:border-white/20
                                            active:scale-95
                                        "
                                        variants={buttonVariants}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        আমাদের সাথে যোগ দিন
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;