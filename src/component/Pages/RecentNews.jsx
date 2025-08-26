// import React, { useEffect, useState } from 'react';
// import News from '../Constant/ProjectData';

// const RecentNews = () => {
//  const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     // Mock fetching data
//     setArticles(News );
//   }, []);
//     return (
//         <div  className='shadow'>
//             <header className="bg-green-700 w-full text-white p-5 text-center font-serif text-2xl md:text-3xl">
//             সাম্প্রতিক সংবাদ
//       </header>
         
// {/*  */}
//              <div>
//       {articles.map((article, idx) => (
//         <div
//           key={idx}
//            className={`max-w-6xl mx-auto my-8 bg-white shadow-md rounded overflow-hidden flex flex-col sm:space-y-3 md:flex-row
//     transform transition duration-300 hover:scale-[1.02] hover:shadow-lg ${
//       idx % 2 === 1 ? "md:flex-row-reverse" : ""
//   }`}
//             style={{ height: "350px" }}
//         >
//           {/* Image */}
//           <div className="md:w-1/2 relative h-64 md:h-full">
//             <img
//               src={article.image}
//               alt={article.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-800/40 to-transparent"></div>
//           </div>

//           {/* Content */}
//           <div className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-between h-full overflow-y-auto scroll-hidden">
//             <div>
//               <h2 className="text-xl  sm:text-2xl font-semibold mb-3">
//                 {article.title}
//               </h2>
//               <p className="text-gray-600 mb-3 text-sm sm:text-base">
//                 {article.description}
//               </p>
//               <a
//                 href={article.moreLink}
//                 className="text-blue-600 hover:underline text-sm"
//               >
//                 More...
//               </a>
//             </div>

//             {/* Footer */}
//             <div className="mt-4 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-500">
//               <div className="flex items-center gap-1">📅 {article.date}</div>
//               <div className="flex items-center gap-1">👤 {article.author}</div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>



//         </div>
//     );
// };

// export default RecentNews;

/////////////////////////////////// Animated Code ////////////////////////////////

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import News from '../Constant/ProjectData';

const RecentNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Mock fetching data
    setArticles(News);
  }, []);

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className='shadow'>
      {/* Header */}
      <motion.header 
        className="bg-green-700 w-full text-white p-5 text-center font-serif text-2xl md:text-3xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        সাম্প্রতিক সংবাদ
      </motion.header>
      
      {/* News Articles */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {articles.map((article, idx) => (
          <motion.div
            key={idx}
            className={`max-w-6xl mx-auto my-8 bg-white shadow-md rounded overflow-hidden flex flex-col sm:space-y-3 md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            style={{ height: "350px" }}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Image */}
            <motion.div 
              className="md:w-1/2 relative h-64 md:h-full"
              variants={imageVariants}
              whileHover="hover"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800/40 to-transparent"></div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-between h-full overflow-y-auto scroll-hidden"
              variants={contentVariants}
            >
              <div>
                <motion.h2 
                  className="text-xl sm:text-2xl font-semibold mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {article.title}
                </motion.h2>
                <motion.p 
                  className="text-gray-600 mb-3 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {article.description}
                </motion.p>
                <motion.a
                  href={article.moreLink}
                  className="text-blue-600 hover:underline text-sm"
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  More...
                </motion.a>
              </div>

              {/* Footer */}
              <motion.div 
                className="mt-4 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex items-center gap-1">📅 {article.date}</div>
                <div className="flex items-center gap-1">👤 {article.author}</div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RecentNews;