import React, { useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import AdmissionFormModal from "../Modal/BasicEnrollNowModal";

const TrainingBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full bg-[#f5f7fa] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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

      {/* Floating decorative element */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#F36F21]/20 blur-2xl pointer-events-none"
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="lg:flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 space-y-4"
            variants={itemVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#003C71]"
            >
              Fast Forward your career in Tech Fields with{" "}
              <motion.span 
                className="text-[#F36F21] inline-block"
                variants={{
                  hidden: { scale: 0.95, opacity: 0 },
                  visible: { 
                    scale: 1, 
                    opacity: 1,
                    transition: {
                      duration: 0.6,
                      delay: 0.4
                    }
                  }
                }}
              >
                CounselHub
              </motion.span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700"
            >
              Best-in-class Training Programs.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="pt-2"
            >
              <motion.p
                variants={itemVariants}
                className="text-gray-700 mb-4 text-sm"
              >
                Here are some steps you can take to accelerate your career in the technology industry
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 mt-6 lg:mt-0"
            variants={imageVariants}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-[#F36F21]/10 blur-xl z-0"></div>
              <motion.img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Tech professionals learning" 
                className="relative rounded-lg w-full h-auto object-cover shadow-lg border-2 border-white/20 max-h-[250px]"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 15px 30px rgba(0, 60, 113, 0.2)"
                }}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-2 -right-2 bg-[#003C71] text-white px-3 py-1 rounded-md shadow-md font-bold text-xs"
              >
                90% Placement Rate
              </motion.div>
            </div>
          </motion.div>
        </div>
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

      <AdmissionFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </motion.div>
  );
};

export default TrainingBanner;