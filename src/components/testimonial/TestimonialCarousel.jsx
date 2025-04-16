import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px', once: true });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const testimonials = [
    {
      id: 1,
      quote:
        'Joining this program was a fantastic decision. The flexibility allowed me to balance my studies with work, while the engaging coursework and expert faculty provided invaluable insights and skills. The support I received was outstanding, and I’ve already seen a positive impact on my career. I wholeheartedly recommend this program to others.',
      name: 'Shubham Singh',
      position: 'Manager with Indiamart',
    },
    {
      id: 2,
      quote:
        'Enrolling in this MBA program was transformative. The curriculum was rigorous yet rewarding, with practical insights that I could apply immediately. The professors were industry experts who provided invaluable mentorship. The flexible format allowed me to balance work and study seamlessly. This program significantly advanced my career, and I highly recommend it.',
      name: 'Arpit Nigam',
      position: 'VP at K12 Techno',
    },
    {
      id: 3,
      quote:
        'AI and Machine Learning program exceeded my expectations. The cutting-edge curriculum and hands-on projects provided deep, practical knowledge. The faculty’s expertise and support were exceptional, making complex concepts accessible. I’ve gained skills that directly advanced my career in tech. This program is a game-changer for anyone in the field.',
      name: 'Ajit Yadav',
      position: 'Software Engineer at Cognizant',
    },
  ];

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
      className="min-h-[500px] py-12 bg-[#f5f7fa] flex items-center relative overflow-hidden"
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
          className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#F36F21] mix-blend-multiply opacity-20"
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div custom={0} variants={itemVariants} className="text-center mb-12">
          <h2 className="text-[#003C71] text-sm font-semibold uppercase tracking-widest mb-2">
            Testimonials
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#003C71] leading-tight">
            What Say Our <span className="text-[#F36F21]">Students</span>
          </h1>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-[#F36F21] to-[#003C71] mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-200"
            >
              <div className="relative">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-[#003C71]/20 text-4xl absolute -top-4 -left-4" />

                {/* Quote Text */}
                <motion.p
                  className="text-gray-700 text-lg md:text-xl leading-relaxed italic font-light mb-6 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  "{testimonials[currentIndex].quote}"
                </motion.p>

                {/* Author Info */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h5 className="text-xl font-semibold text-[#003C71]">
                    {testimonials[currentIndex].name}
                  </h5>
                  <span className="text-[#F36F21] text-base font-medium">
                    {testimonials[currentIndex].position}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute -left-12 top-1/2 -translate-y-1/2 bg-[#003C71] text-white p-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.1, backgroundColor: '#F36F21' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaChevronLeft className="text-lg" />
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            className="absolute -right-12 top-1/2 -translate-y-1/2 bg-[#003C71] text-white p-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.1, backgroundColor: '#F36F21' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaChevronRight className="text-lg" />
          </motion.button>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-[#F36F21] scale-125' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.5 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCarousel;