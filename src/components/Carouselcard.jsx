import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const TextCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, { margin: '-100px', once: true });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isInView]);

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    if (index !== currentIndex) {
      setDirection(index > currentIndex ? 'right' : 'left');
      setCurrentIndex(index);
    }
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction === 'right' ? '20%' : '-20%',
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: { duration: 0.3 },
        x: { duration: 0.3, ease: 'easeOut' },
      },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === 'right' ? '-20%' : '20%',
      transition: { duration: 0.2 },
    }),
  };

  const textVariants = {
    hidden: (isHeading) => ({
      opacity: 0,
      x: isHeading ? -50 : 50, // Heading from left, description from right
    }),
    visible: (isHeading) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: isHeading ? 0.15 : 0.25, // Stagger: heading first, then description
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.div
      ref={carouselRef}
      className="relative w-full h-[70vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden bg-[#f5f7fa]"
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Background Image */}
          <motion.img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].heading}
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

          {/* Content Container */}
          <motion.div
            className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 z-10 border border-white/20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <motion.h1
              custom={true} // Heading
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4 md:mb-5 leading-tight text-white"
            >
              {slides[currentIndex].heading}
            </motion.h1>

            <motion.p
              custom={false} // Description
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 md:mb-8 line-clamp-3"
            >
              {slides[currentIndex].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <NavLink to="/ContactUs">
                <motion.button
                  whileHover={{
                    y: -2,
                    boxShadow: '0 8px 20px rgba(243, 111, 33, 0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg bg-[#F36F21] text-white font-semibold text-sm sm:text-base md:text-lg cursor-pointer shadow-md transition-all"
                >
                  Start Learning
                  <FiArrowRight className="inline ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </motion.button>
              </NavLink>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative w-2.5 sm:w-3 md:w-3.5 h-2.5 sm:h-3 md:h-3.5 rounded-full focus:outline-none"
            whileHover={{ scale: 1.3 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                backgroundColor: currentIndex === index ? '#F36F21' : '#ffffff',
                opacity: currentIndex === index ? 1 : 0.5,
                scale: currentIndex === index ? 1.2 : 1,
              }}
              transition={{ type: 'spring', stiffness: 500 }}
            />
          </motion.button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={goToPrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg z-20 hidden md:block"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <FiArrowRight className="rotate-180 text-[#003C71] w-5 sm:w-6 h-5 sm:h-6" />
      </motion.button>

      <motion.button
        onClick={goToNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg z-20 hidden md:block"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <FiArrowRight className="text-[#003C71] w-5 sm:w-6 h-5 sm:h-6" />
      </motion.button>
    </motion.div>
  );
};

// Slides and container component
const carouselSlides = [
  {
    heading: 'Best Online Courses',
    description: 'Best Education From Your Home',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
  },
  {
    heading: 'Career Ladder Accelerator',
    description: 'Placement Assistance',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
  },
  {
    heading: "India's Top Universities",
    description: 'Best Online Learning Platform',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
  },
];

const CarouselContainer = () => {
  return (
    <div className="w-full">
      <TextCarousel slides={carouselSlides} />
    </div>
  );
};

export default CarouselContainer;