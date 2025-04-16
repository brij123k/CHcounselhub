import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, useInView } from 'framer-motion';
import TrainingBanner from "../../components/banners/TrainingBanner";
import FeedbaackBanner from "../../components/banners/FeedbackBanner";
import EnrollmentModal from "../../components/Modal/EnrollmentModal";
import CourseCards from "../../components/Courses/CourseCards";

const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px', once: true });

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setIsEnrollModalOpen(true);
  };

  const handleEnrollSubmit = () => {
    console.log("Enrolling in:", selectedCourse);
    setIsEnrollModalOpen(false);
  };

  // Banner animation variants
  const bannerVariants = {
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

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Banner */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={bannerVariants}
        className="w-full bg-[#f5f7fa] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
          <motion.div
            className="absolute top-4 left-4 w-16 h-16 rounded-full bg-[#F36F21] mix-blend-multiply opacity-20"
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

        <div className="max-w-8xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="lg:w-1/2 space-y-8">
              <motion.h1
                custom={0}
                variants={itemVariants}
                className="text-5xl font-extrabold leading-tight sm:text-6xl"
              >
                <span className="block mb-3 text-[#003C71]">Unlock Your</span>
                <span className="block text-[#F36F21]">Tech Potential</span>
              </motion.h1>

              <motion.p
                custom={1}
                variants={itemVariants}
                className="text-xl max-w-2xl text-gray-700"
              >
                Join thousands who've transformed their careers with our cutting-edge programs
              </motion.p>

              <motion.div
                custom={2}
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="#Courses">
                  <motion.button
                    whileHover={{
                      y: -3,
                      boxShadow: '0 10px 25px rgba(243, 111, 33, 0.4)',
                      backgroundColor: '#e05e1a',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#F36F21] text-white font-semibold py-3 px-8 rounded-lg shadow-lg"
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Browse Courses
                  </motion.button>
                </a>
                <NavLink to="/ContactUs">
                  <motion.button
                    whileHover={{
                      y: -3,
                      boxShadow: '0 10px 25px rgba(0, 60, 113, 0.2)',
                      backgroundColor: '#002a5c',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#003C71] text-white font-semibold py-3 px-8 rounded-lg shadow-lg"
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Speak to Advisor
                  </motion.button>
                </NavLink>
              </motion.div>
            </motion.div>

            {/* Image with Animation */}
            <motion.div
              variants={imageVariants}
              className="lg:w-1/2 flex justify-center relative perspective-1000"
            >
              <div className="relative w-full max-w-lg">
                <motion.div
                  className="absolute inset-0 bg-[#003C71]/10 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: window.innerWidth > 1024 ? 'rotateX(5deg) rotateY(-10deg)' : 'none',
                  }}
                ></motion.div>
                <motion.img
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 10px 25px -5px rgba(243, 111, 33, 0.4)',
                  }}
                  src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Students collaborating"
                  className="relative rounded-xl w-full h-auto object-cover z-10"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: window.innerWidth > 1024 ? 'translateZ(30px)' : 'none',
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -bottom-5 -right-5 bg-white text-[#003C71] px-5 py-2 rounded-lg shadow-lg font-bold z-20 border border-[#F36F21]/20"
                >
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-1 text-[#F36F21]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">94% Success Rate</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <CourseCards onEnrollClick={handleEnrollClick} />
      <TrainingBanner />
      <FeedbaackBanner />

      {selectedCourse && (
        <EnrollmentModal
          course={selectedCourse}
          isOpen={isEnrollModalOpen}
          onClose={() => setIsEnrollModalOpen(false)}
          onEnroll={handleEnrollSubmit}
        />
      )}
    </div>
  );
};

export default CourseList;