// import React, { useState } from 'react';
// import { navItems } from '../Constant/ProjectData';

// const AboutOurs = () => {
//       const [activeId, setActiveId] = useState(1);

//     return (
//         <div>
//             <div className="flex flex-col min-h-screen font-sans bg-gray-50">
//       {/* Header */}
//       <header className="bg-green-700 w-full text-white p-5 text-center font-serif text-2xl md:text-3xl">
//         আমাদের সম্পর্কে
//       </header>
//        {/* Main content */}
//       <div className="flex w-full flex-1 flex-col md:flex-row max-w-7xl mx-auto">
//         {/* Navigation */}
//         <nav className="bg-white border-r border-gray-300 w-full md:w-64 min-h-[calc(20vh-64px)]">
//           <ul className="divide-y divide-gray-200">
//             {navItems.map(({ id, title }) => (
//               <li key={id}>
//                 <button
//                   onClick={() => setActiveId(id)}
//                   className={`
//                     w-full px-6 py-4 text-left
//                     ${
//                       activeId === id
//                         ? "text-green-700 border-l-4 border-green-700 font-semibold bg-green-50"
//                         : "text-gray-700 hover:bg-gray-100"
//                     }
//                     transition-colors duration-200
//                     focus:outline-none
//                   `}
//                   aria-current={activeId === id ? "page" : undefined}
//                 >
//                   {title}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         {/* Content */}
       
//         <main className="flex-1 p-6">
//             <article className="bg-white rounded-lg shadow-lg p-6 prose max-w-none prose-lg">
//               <h2 className="font-serif text-xl mb-4">
//                 {navItems.find(n => n.id === activeId)?.title}
//               </h2>
//               {Array.isArray(navItems.find(n => n.id === activeId)?.content) ? (
          
//                 <ul className="list-none pl-8 relative">
//   {/* vertical line */}
//   <div className="absolute left-10 top-0 bottom-2 w-0.5 bg-gray-300"></div>

//   {navItems.find(n => n.id === activeId)?.content.map((item, index) => (
//     <li
//       key={index}
//       className="relative pl-6 mb-4 last:mb-0"
//     >
//       {/* outer circle */}
//       <span className="absolute left-0 top-0 w-4 h-4 rounded-full border-2 border-green-500 bg-white flex items-center justify-center">
//         {/* inner dot */}
//         <span className="w-2 h-2 rounded-full bg-green-500"></span>
//       </span>
//       {item}
//     </li>
//   ))}
// </ul>
//               ) : (
//                 <p>{navItems.find(n => n.id === activeId)?.content}</p>
//               )}
//             </article>
//           </main>
//       </div>
//     </div>
//         </div>
//     );
// };

// export default AboutOurs;

///////////////////// Animated Code //////////////////////////////


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../Constant/ProjectData';

const AboutOurs = () => {
  const [activeId, setActiveId] = useState(1);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.98 }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col min-h-screen font-sans bg-gray-50">
        {/* Header */}
        <motion.header 
          className="bg-green-700 w-full text-white p-5 text-center font-serif text-2xl md:text-3xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          আমাদের সম্পর্কে
        </motion.header>
        
        {/* Main content */}
        <div className="flex w-full flex-1 flex-col md:flex-row max-w-7xl mx-auto">
          {/* Navigation */}
          <motion.nav 
            className="bg-white border-r border-gray-300 w-full md:w-64 min-h-[calc(20vh-64px)]"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.ul 
              className="divide-y divide-gray-200"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map(({ id, title }) => (
                <motion.li key={id} variants={itemVariants}>
                  <motion.button
                    onClick={() => setActiveId(id)}
                    className={`
                      w-full px-6 py-4 text-left
                      ${
                        activeId === id
                          ? "text-green-700 border-l-4 border-green-700 font-semibold bg-green-50"
                          : "text-gray-700 hover:bg-gray-100"
                      }
                      transition-colors duration-200
                      focus:outline-none
                    `}
                    aria-current={activeId === id ? "page" : undefined}
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {title}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
          
          {/* Content */}
          <main className="flex-1 p-6">
            <AnimatePresence mode="wait">
              <motion.article 
                key={activeId}
                className="bg-white rounded-lg shadow-lg p-6 prose max-w-none prose-lg"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.h2 
                  className="font-serif text-xl mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {navItems.find(n => n.id === activeId)?.title}
                </motion.h2>
                
                {Array.isArray(navItems.find(n => n.id === activeId)?.content) ? (
                  <motion.ul 
                    className="list-none pl-8 relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* vertical line */}
                    <motion.div 
                      className="absolute left-10 top-0 bottom-2 w-0.5 bg-gray-300"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    />

                    {navItems.find(n => n.id === activeId)?.content.map((item, index) => (
                      <motion.li
                        key={index}
                        className="relative pl-6 mb-4 last:mb-0"
                        custom={index}
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {/* outer circle */}
                        <motion.span 
                          className="absolute left-0 top-0 w-4 h-4 rounded-full border-2 border-green-500 bg-white flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
                        >
                          {/* inner dot */}
                          <motion.span 
                            className="w-2 h-2 rounded-full bg-green-500"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.6 }}
                          />
                        </motion.span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                ) : (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {navItems.find(n => n.id === activeId)?.content}
                  </motion.p>
                )}
              </motion.article>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutOurs;