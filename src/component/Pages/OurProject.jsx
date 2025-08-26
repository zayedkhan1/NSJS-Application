// import React, { useState } from 'react';
// import { Project } from '../Constant/ProjectData';

// const OurProject = () => {
//   const [selected, setSelected] = useState(null);

   
    
//     return (
//     <div>
//       {/* <h2 className='text-3xl text-center font-bold mb-5 mt-5'>আমাদের প্রকল্পসমূহ</h2> */}
//       <header className="bg-green-700 w-full text-white p-5 text-center font-serif text-2xl md:text-3xl">
//        আমাদের প্রকল্পসমূহ
//       </header>
//  <div className="bg-gray-100 min-h-screen py-8 px-4">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {Project.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
//           >
//             <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
//             <div className="p-4 flex flex-col flex-1">
//               <h2 className="text-lg font-semibold text-green-700">{item.title}</h2>
//               <p className="text-sm text-gray-600 mt-2 flex-1">{item.short}</p>
//               <button
//                 onClick={() => setSelected(item)}
//                 className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded"
//               >
//                 সম্পূর্ণ দেখুন
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selected && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
//             <button
//               onClick={() => setSelected(null)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
//             >
//               ✕
//             </button>
//             <h2 className="text-xl font-semibold text-green-700 mb-4">{selected.title}</h2>
//             <img src={selected.image} alt={selected.title} className="h-40 w-full object-cover rounded mb-4" />
//             <p className="text-sm text-gray-700">{selected.full}</p>
//             <button
//               onClick={() => setSelected(null)}
//               className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4 rounded"
//             >
//               বন্ধ করুন
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>

        
//     );
// };

// export default OurProject;




//////////////////////////////// Animated Code ////////////////////////////

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../Constant/ProjectData';

const OurProject = () => {
  const [selected, setSelected] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
        stiffness: 120,
        damping: 12
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

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.header 
        className="bg-green-700 w-full text-white p-5 text-center font-serif text-2xl md:text-3xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        আমাদের প্রকল্পসমূহ
      </motion.header>
      
      <div className="bg-gray-100 min-h-screen py-8 px-4">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Project.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <motion.img 
                src={item.image} 
                alt={item.title} 
                className="h-48 w-full object-cover" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-lg font-semibold text-green-700">{item.title}</h2>
                <p className="text-sm text-gray-600 mt-2 flex-1">{item.short}</p>
                <motion.button
                  onClick={() => setSelected(item)}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded"
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  সম্পূর্ণ দেখুন
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div 
              className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelected(null)}
            >
              <motion.div 
                className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative mx-4"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={() => setSelected(null)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
                <motion.h2 
                  className="text-xl font-semibold text-green-700 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {selected.title}
                </motion.h2>
                <motion.img 
                  src={selected.image} 
                  alt={selected.title} 
                  className="h-40 w-full object-cover rounded mb-4"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                />
                <motion.p 
                  className="text-sm text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  {selected.full}
                </motion.p>
                <motion.button
                  onClick={() => setSelected(null)}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4 rounded"
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  বন্ধ করুন
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default OurProject;