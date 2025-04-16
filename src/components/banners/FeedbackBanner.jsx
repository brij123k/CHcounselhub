import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const FeedbackBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px', once: true });

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="w-full bg-[#f5f7fa] py-8 px-6 sm:px-8 md:py-10 md:px-12 relative overflow-hidden"
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
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#003C71]/5 lg:skew-x-12 origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[60%] bg-[#F36F21]/10 lg:-skew-x-6 origin-bottom-left"></div>
        {/* Subtle decorative circle */}
        <motion.div
          className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#F36F21] mix-blend-multiply opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        ></motion.div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text Content */}
          <motion.div
            custom={0}
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003C71] mb-2">
              Get In <span className="text-[#F36F21]">Touch</span>
            </h2>
            <motion.p
              custom={1}
              variants={itemVariants}
              className="text-gray-700 text-sm sm:text-base"
            >
              For Queries, Feedback or Assistance
            </motion.p>
          </motion.div>

          {/* Contact Button */}
          <motion.div custom={2} variants={itemVariants}>
            <NavLink to="/ContactUs">
              <motion.button
                whileHover={{
                  y: -3,
                  boxShadow: '0 10px 25px rgba(243, 111, 33, 0.3)',
                  backgroundColor: '#e05e1a',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#F36F21] text-white font-semibold rounded-lg shadow-lg text-sm sm:text-base"
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.button>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackBanner;