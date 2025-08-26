// import React from 'react';
// const BecomeMember = () => {
//   return (
//     <div>
//       <div className="w-8/12 mx-auto bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-4  text-green-600 ">আবেদন ফরম</h2>

//         <form className="space-y-1">

//           <div>
//             <label className="block text-sm font-medium">* সদস্যের ধরন:</label>
//             <select className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400">
//               <option>সদস্য</option>
//               <option> আজীবন সদস্য </option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium">* নাম:</label>
//             <input type="text" placeholder=" হোসেন" className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400" />
//           </div>


//           <div>
//             <label className="block text-sm font-medium">* ফোন নম্বর:</label>
//             <input type="text" placeholder="01XXXXXXXXX" className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">* ইমেইল:</label>
//             <input type="email" placeholder="zayed@email.com" className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400" />
//           </div>


//           <div>
//             <label className="block text-sm font-medium">* পেশা:</label>
//             <select placeholder="পেশা সিলেক্ট করুন" className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400">
//               <option>ছাত্র</option>
//               <option>চাকরিজীবী</option>
//               <option>
//                 ব্যবসায়ী
//               </option>
//             </select>
//           </div>


//           <div>
//             <label className="block text-sm font-medium">* ঠিকানা:</label>
//             <input type="text" placeholder="কাঞ্চন বাজার , রূপগঞ্জ , নারায়ণগঞ্জ" className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400" />
//           </div>



//           <p className="text-red-600 text-xs mt-2">
//             * যাচাই করা ছাড়া কোনো তথ্য গ্রহণযোগ্য নয়, অন্যথায় আবেদন বাতিল হবে।
//           </p>

//           <p className="text-xs text-gray-600">
//             সম্মানিত সদস্যদের সকল তথ্য আমাদের জন্য গুরুত্বপূর্ণ। সদস্যগণের তথ্য অন্য কোনো কাজে প্রকাশ করা হবে না।
//           </p>

//           <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
//             প্রেরণ করুন
//           </button>

//         </form>
//       </div>

//     </div>
//   );
// };

// export default BecomeMember;

////////////////////////////////////// Animated Code /////////////////////////////////

import React from 'react';
import { motion } from 'framer-motion';

const BecomeMember = () => {
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
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-8/12 mx-auto bg-white p-6 rounded-lg shadow-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h2 
          className="text-2xl font-bold text-center mb-4 text-green-600"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          আবেদন ফরম
        </motion.h2>

        <motion.form 
          className="space-y-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium">* সদস্যের ধরন:</label>
            <motion.select 
              whileFocus={{ scale: 1.01 }}
              className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400"
            >
              <option>সদস্য</option>
              <option> আজীবন সদস্য </option>
            </motion.select>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium">* নাম:</label>
            <motion.input 
              type="text" 
              placeholder=" হোসেন" 
              whileFocus={{ scale: 1.01 }}
              className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400" 
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium">* ফোন নম্বর:</label>
            <motion.input 
              type="text" 
              placeholder="01XXXXXXXXX" 
              whileFocus={{ scale: 1.01 }}
              className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400" 
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium">* ইমেইল:</label>
            <motion.input 
              type="email" 
              placeholder="zayed@email.com" 
              whileFocus={{ scale: 1.01 }}
              className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400" 
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium">* পেশা:</label>
            <motion.select 
              placeholder="পেশা সিলেক্ট করুন" 
              whileFocus={{ scale: 1.01 }}
              className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400"
            >
              <option>ছাত্র</option>
              <option>চাকরিজীবী</option>
              <option>ব্যবসায়ী</option>
            </motion.select>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium">* ঠিকানা:</label>
            <motion.input 
              type="text" 
              placeholder="কাঞ্চন বাজার , রূপগঞ্জ , নারায়ণগঞ্জ" 
              whileFocus={{ scale: 1.01 }}
              className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400" 
            />
          </motion.div>

          <motion.p 
            className="text-red-600 text-xs mt-2"
            variants={itemVariants}
          >
            * যাচাই করা ছাড়া কোনো তথ্য গ্রহণযোগ্য নয়, অন্যথায় আবেদন বাতিল হবে।
          </motion.p>

          <motion.p 
            className="text-xs text-gray-600"
            variants={itemVariants}
          >
            সম্মানিত সদস্যদের সকল তথ্য আমাদের জন্য গুরুত্বপূর্ণ। সদস্যগণের তথ্য অন্য কোনো কাজে প্রকাশ করা হবে না।
          </motion.p>

          <motion.button 
            type="submit" 
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            প্রেরণ করুন
          </motion.button>

        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default BecomeMember;