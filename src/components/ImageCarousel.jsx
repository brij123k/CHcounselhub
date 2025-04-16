import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const HiringPartnersShowcase = () => {
  const logos = [
    'company1.svg', 'company2.svg', 'company3.svg', 'company4.svg',
    'company5.svg', 'company6.svg', 'company7.svg', 'company8.svg',
    'company9.svg', 'company10.svg', 'company11.svg', 'company12.svg'
  ];

  // Double the array for seamless looping
  const doubledLogos = [...logos, ...logos];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
      className="relative py-16 bg-[#f5f7fa] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background animations */}
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.h2 
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
          variants={itemVariants}
        >
          Our <span className="text-[#F36F21]">Hiring Partners</span>
        </motion.h2>

        {/* Primary Marquee */}
        <motion.div
          className="py-2 mb-3 relative overflow-hidden bg-white/50 rounded-xl border border-white/20 shadow-lg backdrop-blur-sm"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {doubledLogos.map((logo, index) => (
              <motion.div 
                key={`marquee1-${index}`}
                className="flex-shrink-0 mx-8"
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  transition: { duration: 0.3, type: "spring" }
                }}
              >
                <img 
                  src={`./images/${logo}`} 
                  alt="Partner logo" 
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
          {/* Gradient fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f7fa] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f7fa] to-transparent z-10" />
        </motion.div>

        {/* Secondary Marquee */}
        <motion.div
          className="py-6 relative overflow-hidden bg-white/50 rounded-xl border border-white/20 shadow-lg backdrop-blur-sm"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center"
            animate={{
              x: ['-100%', '0%'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {doubledLogos.map((logo, index) => (
              <motion.div 
                key={`marquee2-${index}`}
                className="flex-shrink-0 mx-6"
                whileHover={{
                  scale: 1.3,
                  rotate: [0, -5, 5, 0],
                  y: -5,
                  transition: { duration: 0.5, type: "spring" }
                }}
              >
                <img 
                  src={`./images/${logo}`} 
                  alt="Partner logo" 
                  className="h-12 object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
          {/* Gradient fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f7fa] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f7fa] to-transparent z-10" />
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <NavLink to="/ContactUs">
            <motion.button
              className="px-8 py-3 bg-[#F36F21] text-white rounded-lg font-medium"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(243, 111, 33, 0.4)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              Become a Partner
            </motion.button>
          </NavLink>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HiringPartnersShowcase;