// import React from 'react';
// import { FaFacebook } from "react-icons/fa6";


// const PreFooter = () => {
//     return (
//        <section className='shadow p-2'>
//     <footer className="bg-gray-50 text-gray-800 pt-10">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Social Media Section */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <div className="text-3xl">🌟</div>
//             <h1 className="text-2xl font-semibold">
//               সোশ্যাল মিডিয়াতে আমাদের অনুসরণ করুন
//             </h1>
//           </div>
//           <p className="text-sm text-gray-600 leading-relaxed">
//             আমাদের সর্বশেষ আপডেট, ছবি, ভিডিও ও কর্মসূচির খবর পেতে সোশ্যাল মিডিয়াতে আমাদের সাথে থাকুন। আপনার মতামত ও অংশগ্রহণ আমাদেরকে আরও অনুপ্রাণিত করে। আসুন, একসাথে ভালো কিছু করি!
//           </p>
//           <div className="flex gap-3 mt-4 text-2xl">
//             <a href="https://www.facebook.com/nssofficial2020" target="_blank" rel="noreferrer" >
//               <FaFacebook className='text-blue-600' />
//             </a>
//             <a href="#" className="hover:text-sky-500 transition">
//               <i className="fab fa-x-twitter"></i>
//             </a>
//             <a href="#" className="hover:text-pink-500 transition">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#" className="hover:text-blue-400 transition">
//               <i className="fab fa-telegram-plane"></i>
//             </a>
//             <a href="#" className="hover:text-red-500 transition">
//               <i className="fab fa-youtube"></i>
//             </a>
//           </div>
//         </div>
    
//         {/* Contact Section */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-4 ">যোগাযোগ করুন</h2>
//           <div className="space-y-2 text-sm text-gray-700">
//             <p>📍 কাঞ্চন, কাঞ্চন বাজার ১৪৬১, রূপগঞ্জ, নারায়ণগঞ্জ।</p>
//             <p>📞 01743-402987</p>
//             <p>📞 01580-361432</p>
//             <p>📞 01724-161022</p>
//             <p>📧 nsjsofficial2020@gmail.com</p>
//           </div>
//         </div>
    
//         {/* Membership Form */}
//         <div className=" rounded-2xl">
//           <h2 className="text-xl font-semibold text-gray-800  mb-4">
//             আমাদের সদস্য হোন
//           </h2>
//           <form className="flex flex-col gap-3">
//             <input
//               type="text"
//               placeholder="আপনার নাম লিখুন"
//               className="px-4 py-2 border border-gray-300 rounded text-sm placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//             <input
//               type="email"
//               placeholder="আপনার ইমেইল"
//               className="px-4 py-2 border border-gray-300 rounded text-sm placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//             <textarea
//               placeholder="মন্তব্য করুন"
//               rows="3"
//               className="px-4 py-2 border border-gray-300 rounded text-sm placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//             <button
//               type="submit"
//               className="bg-green-600 hover:bg-green-700 text-white py-2 rounded shadow-sm text-sm transition"
//             >
//               পাঠান
//             </button>
//           </form>
//         </div>
//       </div>
    
    
//     </footer>
    
//   </section>
//     );
// };

// export default PreFooter;




///////////////////////////////// Animated Code //////////////////////////////////





import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook } from "react-icons/fa6";

const PreFooter = () => {
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

  const iconVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.95 }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.section 
      className='shadow p-2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <footer className="bg-gray-50 text-gray-800 pt-10">
        <motion.div 
          className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Social Media Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <motion.div 
                className="text-3xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  duration: 3
                }}
              >
                🌟
              </motion.div>
              <h1 className="text-2xl font-semibold">
                সোশ্যাল মিডিয়াতে আমাদের অনুসরণ করুন
              </h1>
            </div>
            <motion.p 
              className="text-sm text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              আমাদের সর্বশেষ আপডেট, ছবি, ভিডিও ও কর্মসূচির খবর পেতে সোশ্যাল মিডিয়াতে আমাদের সাথে থাকুন। আপনার মতামত ও অংশগ্রহণ আমাদেরকে আরও অনুপ্রাণিত করে। আসুন, একসাথে ভালো কিছু করি!
            </motion.p>
            <div className="flex gap-3 mt-4 text-2xl">
              <motion.a 
                href="https://www.facebook.com/nssofficial2020" 
                target="_blank" 
                rel="noreferrer"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <FaFacebook className='text-blue-600' />
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-sky-500 transition"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <i className="fab fa-x-twitter"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-pink-500 transition"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-blue-400 transition"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <i className="fab fa-telegram-plane"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-red-500 transition"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <i className="fab fa-youtube"></i>
              </motion.a>
            </div>
          </motion.div>
      
          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4 ">যোগাযোগ করুন</h2>
            <motion.div 
              className="space-y-2 text-sm text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.1 }}
            >
              <motion.p initial={{ x: -10 }} animate={{ x: 0 }} transition={{ delay: 0.6 }}>📍 কাঞ্চন, কাঞ্চন বাজার ১৪৬১, রূপগঞ্জ, নারায়ণগঞ্জ।</motion.p>
              <motion.p initial={{ x: -10 }} animate={{ x: 0 }} transition={{ delay: 0.7 }}>📞 01743-402987</motion.p>
              <motion.p initial={{ x: -10 }} animate={{ x: 0 }} transition={{ delay: 0.8 }}>📞 01580-361432</motion.p>
              <motion.p initial={{ x: -10 }} animate={{ x: 0 }} transition={{ delay: 0.9 }}>📞 01724-161022</motion.p>
              <motion.p initial={{ x: -10 }} animate={{ x: 0 }} transition={{ delay: 1.0 }}>📧 nsjsofficial2020@gmail.com</motion.p>
            </motion.div>
          </motion.div>
      
          {/* Membership Form */}
          <motion.div 
            className="rounded-2xl"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              আমাদের সদস্য হোন
            </h2>
            <motion.form 
              className="flex flex-col gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="px-4 py-2 border border-gray-300 rounded text-sm placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                whileFocus="focus"
                variants={inputVariants}
              />
              <motion.input
                type="email"
                placeholder="আপনার ইমেইল"
                className="px-4 py-2 border border-gray-300 rounded text-sm placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                whileFocus="focus"
                variants={inputVariants}
              />
              <motion.textarea
                placeholder="মন্তব্য করুন"
                rows="3"
                className="px-4 py-2 border border-gray-300 rounded text-sm placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                whileFocus="focus"
                variants={inputVariants}
              />
              <motion.button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-2 rounded shadow-sm text-sm transition"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                পাঠান
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </footer>
    </motion.section>
  );
};

export default PreFooter;