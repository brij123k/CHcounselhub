import React from 'react';
import UniList from './UniList';
import { motion } from 'framer-motion';

function UniCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="relative bg-[#f5f7fa] overflow-hidden py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background animations (unchanged) */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        animate={{
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#003C71]/5 lg:skew-x-12 origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[60%] bg-[#F36F21]/10 lg:-skew-x-6 origin-bottom-left"></div>
      </motion.div>

      {/* Decorative element */}
      <motion.div 
        className="absolute top-20 left-[-150px] w-[60%] h-[60%] rounded-full bg-[#F36F21]/10 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003C71] mb-2">
            Our Popular <span className="text-[#F36F21]">Courses</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover programs designed to help you achieve your career goals
          </p>
        </motion.div>

        {/* Course cards list */}
        <UniList />
      </div>

      {/* Additional floating accent */}
      <motion.div 
        className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-[#003C71]/10 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}

export default UniCards;