import React, { useState, useEffect } from 'react';
import UniCard from './UniCard';
import { motion } from 'framer-motion';
import { getDataHandler } from '../../config/services';

function UniList() {
  const [univercity, setUnivercity] = useState([]);

  const handleUnivercity = async () => {
    try {
      const res = await getDataHandler('universities');
      console.log('API Response:', res.universities);
      if (res && res.universities) {
        const newCourses = res.universities.map((course, index) => ({
          id: index + 1,
          imageUrl: course.imageUrl,
          institutionType: course.institutionType,
          programType: course.programType || 'UG Programs',
          programs: course.programType,
          deliveryMode: course.deliveryMode,
          reviews: course.reviews,
          rating: course.rating,
          certification: course.certification // Fixed typo
        }));
        setUnivercity(newCourses);
        console.log('Updated univercity state:', newCourses);
      } else {
        console.error('No universities found in response');
      }
    } catch (error) {
      console.error('Error fetching universities:', error);
    }
  };

  useEffect(() => {
    handleUnivercity();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="relative py-12 px-4 sm:px-6 lg:px-8 bg-[#f5f7fa] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background animations (unchanged) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        animate={{
          rotate: [0, 1, -1, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      >
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#003C71]/5 lg:skew-x-12 origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[60%] bg-[#F36F21]/10 lg:-skew-x-6 origin-bottom-left"></div>
      </motion.div>

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {univercity.length > 0 ? (
            univercity.map((course) => (
              <UniCard key={course.id} {...course} />
            ))
          ) : (
            <p>No university data available</p>
          )}
        </motion.div>
      </div>

      {/* Floating accent element */}
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[#F36F21]/10 pointer-events-none -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.div>
  );
}

export default UniList;