import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const TestimonialCard = ({ imageUrl, name, position, testimonial, isActive }) => {
  return (
    <motion.div
      className={`relative flex flex-col items-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 w-full max-w-[360px] min-h-[300px] mx-auto ${
        isActive ? 'scale-100 z-10' : 'scale-95 opacity-80'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isActive ? 1 : 0.8, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{
        scale: isActive ? 1.02 : 1,
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3 },
      }}
    >
      {/* Gradient Glow for Active Card */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-100/50 to-blue-100/50 blur-xl z-[-1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Profile Image */}
      <motion.div
        className="relative mb-6"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md"
          src={imageUrl}
          alt={name}
        />
      </motion.div>

      {/* Name and Position */}
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{name}</h3>
      <p className="text-sm sm:text-base text-gray-500 mt-1">{position}</p>

      {/* Decorative Line */}
      <motion.div
        className="mt-6 w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />
    </motion.div>
  );
};

const StudentTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px', once: true });

  const testimonials = [
    {
      id: 1,
      imageUrl: './images/Shashanjal.jpg',
      name: 'Shashanjal Srivastava',
      position: 'Co-Founder & CEO',
    },
    {
      id: 2,
      imageUrl: './images/download.jpg',
      name: 'Pranjal Srivastava',
      position: 'Academics Head',
    },
    {
      id: 3,
      imageUrl: './images/deepakn.jpg',
      name: 'Deepak Kumar',
      position: 'Sales Head',
    },
    {
      id: 4,
      imageUrl: './images/anupam.png',
      name: 'Anupam Kumar Singh',
      position: 'Finance Head',
    },
    {
      id: 5,
      imageUrl: './images/saleshead.jpg',
      name: 'Anurag Awasthi',
      position: 'Public Relations Head',
    },
    {
      id: 6,
      imageUrl: './images/harshit.jpg',
      name: 'Harshit Sinha',
      position: 'Founder',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Carousel navigation
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isInView, currentIndex]);

  // Responsive items per view
  const getItemsPerView = () => {
    if (window.innerWidth >= 1280) return 3; // lg
    if (window.innerWidth >= 768) return 2; // md
    return 1; // sm and below
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate visible testimonials
  const getVisibleTestimonials = () => {
    const start = currentIndex;
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (start + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #e5e7eb 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900"
        >
          Meet Our <span className="text-indigo-600">Team</span>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mx-auto mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.h2>

        {/* Carousel */}
        <div className="relative">
          <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 overflow-hidden">
            {getVisibleTestimonials().map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                imageUrl={testimonial.imageUrl}
                name={testimonial.name}
                position={testimonial.position}
                isActive={index === 0}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={goToPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-20 hidden sm:block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            <FiArrowLeft className="w-6 h-6 text-indigo-600" />
          </motion.button>
          <motion.button
            onClick={goToNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-20 hidden sm:block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            <FiArrowRight className="w-6 h-6 text-indigo-600" />
          </motion.button>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StudentTestimonials;