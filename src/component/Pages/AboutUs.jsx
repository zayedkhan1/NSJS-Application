// import React from 'react';
// import AboutLogo from '../../assets/Logos/roundedLogo.png'

// const AboutUs = () => {
//      const timelineItems = [
//     { id: 1, text: 'শিক্ষা', },
//     { id: 2, text: 'সেবা' },   
//     { id: 3, text: 'সহযোগিতা' }  
//   ];
//     return (
//         <div className='mt-10'>
//     <div className="flex flex-col md:flex-row items-center justify-around   gap-6  shadow p-5">
//   {/* Image Div */}
//   <div className=" flex justify-center items-center p-4 w-full md:w-1/2">
//     <img
//       className="max-w-full md:max-w-[350px] h-auto rounded-full"
//       src={AboutLogo}
//       alt=""
//     />
//   </div>

//   {/* Text Div */}
//   <div className=" p-4 w-full md:w-1/2">
//     <h2 className="text-xl font-bold mb-3 text-center md:text-left ">
//       নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন
//     </h2><hr  className='border-1 mb-3 border-gray-300' />

//     <p className="text-sm leading-relaxed text-justify font-sans  ">
//       নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন একটি অরাজনৈতিক, অলাভজনক ও সেবামূলক যুব
//       সংগঠন। আমরা মানবতার সেবা, সমাজ সংস্কার, দরিদ্র ও অসহায় মানুষের পাশে
//       দাঁড়ানো, শিক্ষা, স্বাস্থ্যসেবা ও সচেতনতা বৃদ্ধি সহ নানাবিধ কল্যাণমূলক
//       কার্যক্রমের মাধ্যমে একটি ন্যায়ভিত্তিক ও মানবিক সমাজ গড়ার জন্য কাজ করে
//       যাচ্ছি। আমাদের লক্ষ্য হলো মানুষের মধ্যে নৈতিকতা ও মানবিক মূল্যবোধ জাগ্রত
//       করা, আর্তমানবতার সেবায় সবাইকে উদ্বুদ্ধ করা এবং সমাজের পিছিয়ে পড়া
//       মানুষদের জন্য সহায়ক পরিবেশ তৈরি করা। আমরা কর্মসংস্থান সৃষ্টির উদ্যোগ,
//       ত্রাণ বিতরণ, স্বল্পমূল্যে বা বিনামূল্যে চিকিৎসাসেবা, পরিচ্ছন্নতা ও স্বাস্থ্য
//       সচেতনতামূলক কর্মসূচি এবং শিক্ষামূলক প্রকল্প পরিচালনার মাধ্যমে মানুষের পাশে
//       থাকার চেষ্টা করছি।
//     </p>

//     {/* desgine */}

// <div className="flex items-center  font-sans mt-6">
//       <div className="relative">
//         {/* Vertical line connecting the circles */}
//         <div className="absolute left-1/8 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

//         {timelineItems.map((item) => (
//           <div key={item.id} className="flex items-center mb-8 last:mb-0">
//             {/* Circle marker */}
//             <div className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-green-400  font-bold">
//               {/* This is the small green dot */}
//               <div className="w-2 h-2 rounded-full bg-green-400"></div>
//             </div>

//             {/* Text content */}
//             <div className="ml-4 text-sm text-green-600  ">
//               {item.text}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//         {/* desgine */}


//   </div>
// </div>

            
//         </div>
//     );
// };

// export default AboutUs;




///////////////////////////////// Animated code /////////////////////////////






import React from 'react';
import { motion } from 'framer-motion';
import AboutLogo from '../../assets/Logos/roundedLogo.png'

const AboutUs = () => {
  const timelineItems = [
    { id: 1, text: 'শিক্ষা' },
    { id: 2, text: 'সেবা' },   
    { id: 3, text: 'সহযোগিতা' }  
  ];

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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    }
  };

  return (
    <motion.div 
      className='mt-10'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-around gap-6 shadow p-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image Div */}
        <motion.div 
          className="flex justify-center items-center p-4 w-full md:w-1/2"
          variants={itemVariants}
        >
          <motion.img
            className="max-w-full md:max-w-[350px] h-auto rounded-full"
            src={AboutLogo}
            alt=""
            variants={imageVariants}
            whileHover="hover"
          />
        </motion.div>

        {/* Text Div */}
        <motion.div 
          className="p-4 w-full md:w-1/2"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-xl font-bold mb-3 text-center md:text-left"
            variants={textVariants}
          >
            নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন
          </motion.h2>
          
          <motion.hr 
            className='border-1 mb-3 border-gray-300'
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <motion.p 
            className="text-sm leading-relaxed text-justify font-sans"
            variants={textVariants}
          >
            নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন একটি অরাজনৈতিক, অলাভজনক ও সেবামূলক যুব
            সংগঠন। আমরা মানবতার সেবা, সমাজ সংস্কার, দরিদ্র ও অসহায় মানুষের পাশে
            দাঁড়ানো, শিক্ষা, স্বাস্থ্যসেবা ও সচেতনতা বৃদ্ধি সহ নানাবিধ কল্যাণমূলক
            কার্যক্রমের মাধ্যমে একটি ন্যায়ভিত্তিক ও মানবিক সমাজ গড়ার জন্য কাজ করে
            যাচ্ছি। আমাদের লক্ষ্য হলো মানুষের মধ্যে নৈতিকতা ও মানবিক মূল্যবোধ জাগ্রত
            করা, আর্তমানবতার সেবায় সবাইকে উদ্বুদ্ধ করা এবং সমাজের পিছিয়ে পড়া
            মানুষদের জন্য সহায়ক পরিবেশ তৈরি করা। আমরা কর্মসংস্থান সৃষ্টির উদ্যোগ,
            ত্রাণ বিতরণ, স্বল্পমূল্যে বা বিনামূল্যে চিকিৎসাসেবা, পরিচ্ছন্নতা ও স্বাস্থ্য
            সচেতনতামূলক কর্মসূচি এবং শিক্ষামূলক প্রকল্প পরিচালনার মাধ্যমে মানুষের পাশে
            থাকার চেষ্টা করছি。
          </motion.p>

          {/* Timeline design */}
          <motion.div 
            className="flex items-center font-sans mt-6"
            variants={timelineVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Vertical line connecting the circles */}
              <motion.div 
                className="absolute left-1/8 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              />

              {timelineItems.map((item) => (
                <motion.div 
                  key={item.id} 
                  className="flex items-center mb-8 last:mb-0"
                  variants={timelineItemVariants}
                >
                  {/* Circle marker */}
                  <motion.div 
                    className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-green-400 font-bold"
                    variants={circleVariants}
                    whileHover={{ scale: 1.2, backgroundColor: "#f0fdf4" }}
                  >
                    {/* This is the small green dot */}
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-green-400"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2 + (item.id * 0.2), type: "spring", stiffness: 200 }}
                    />
                  </motion.div>

                  {/* Text content */}
                  <motion.div 
                    className="ml-4 text-sm text-green-600"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + (item.id * 0.2), duration: 0.4 }}
                  >
                    {item.text}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;