import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TrainingBanner from '../../components/banners/TrainingBanner';
import FeedbaackBanner from '../../components/banners/FeedbackBanner';
import AdmissionForm from '../../components/Forms/AdmissionForm';

const SuccessStory = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true, // Changed to one-time trigger
  });

  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Reduced from 0.3
        delayChildren: 0.1, // Reduced from 0.2
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Reduced from 0.6
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4, // Reduced from 0.8
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa]">
      {/* Animated Success Stories Banner */}
      <motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? 'visible' : 'hidden'}
  variants={bannerVariants}
  className="w-full bg-[#f5f7fa] py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
>
  <div className="max-w-8xl mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Text Content */}
      <motion.div variants={itemVariants} className="lg:w-1/2 space-y-6">
        <motion.h1
          custom={0}
          variants={itemVariants}
          className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
        >
          <span className="block mb-2 text-[#003C71]">Empowering Your</span>
          <span className="block text-[#F36F21]">Future</span>
        </motion.h1>
        <motion.p
          custom={1}
          variants={itemVariants}
          className="text-lg max-w-2xl text-gray-700"
        >
          CounselHub, a division of Trivision Partners Pvt. Ltd., is dedicated to guiding students and professionals toward academic and career success through personalized counseling.
        </motion.p>
      </motion.div>
      {/* Image with Animation */}
      <motion.div variants={imageVariants} className="lg:w-1/2 flex justify-center relative">
        <div className="relative w-full max-w-md perspective-1000">
          <motion.div
            className="absolute inset-0 bg-[#003C71]/10 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(5deg) rotateY(-10deg)',
            }}
          ></motion.div>
          <motion.img
            whileHover={{
              scale: 1.03,
              boxShadow: '0 10px 25px -5px rgba(243, 111, 33, 0.4)',
            }}
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Counselor guiding a student"
            className="relative rounded-xl w-full h-auto object-cover z-10"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(30px)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.3 }}
            className="absolute -bottom-4 -right-4 bg-white text-[#003C71] px-4 py-2 rounded-lg shadow-lg font-bold z-20 border border-[#F36F21]/20"
          >
            <div className="text-xs">Our Commitment</div>
            <div className="text-xl text-[#F36F21]">Personalized Guidance</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</motion.div>

      {/* About Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={bannerVariants}
        className="py-16 px-6 bg-[#f5f7fa] relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              custom={0}
              variants={itemVariants}
              className="text-4xl font-extrabold mb-4 text-[#003C71]"
            >
              About CounselHub
            </motion.h2>
            <motion.div
              custom={1}
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-[#F36F21] to-[#003C71] mx-auto mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }} // Reduced from 0.4, 0.6
            />
            <motion.p
              custom={2}
              variants={itemVariants}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              CounselHub, a premier division of Trivision Partners Pvt. Ltd., is dedicated to empowering students and professionals through tailored guidance and expert support.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1: Our Vision */}
            <motion.div
              custom={3}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl border border-gray-200"
              whileHover={{
                y: -10,
                boxShadow: '0 10px 25px -5px rgba(243, 111, 33, 0.4)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-[#F36F21] mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M3.707 5.293a1 1 0 011.414 0L10 10.586l4.879-4.879a1 1 0 111.414 1.414L11.414 12l4.879 4.879a1 1 0 01-1.414 1.414L10 13.414l-4.879 4.879a1 1 0 01-1.414-1.414L8.586 12 3.707 7.121a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#003C71] mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To empower individuals by providing personalized counseling that unlocks their true potential and shapes their future.
              </p>
            </motion.div>

            {/* Card 2: Our Mission */}
            <motion.div
              custom={4}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl border border-gray-200"
              whileHover={{
                y: -10,
                boxShadow: '0 10px 25px -5px rgba(243, 111, 33, 0.4)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-[#F36F21] mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#003C71] mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To deliver holistic guidance through expert counselors, ensuring every student achieves academic and career success.
              </p>
            </motion.div>

            {/* Card 3: Our Team */}
            <motion.div
              custom={5}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl border border-gray-200"
              whileHover={{
                y: -10,
                boxShadow: '0 10px 25px -5px rgba(243, 111, 33, 0.4)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-[#F36F21] mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#003C71] mb-3">Our Team</h3>
              <p className="text-gray-700">
                A dedicated group of certified counselors with extensive experience in academic and career guidance.
              </p>
            </motion.div>
          </div>

          {/* Services Section */}
          <motion.div
            custom={6}
            variants={itemVariants}
            className="mt-16 bg-white rounded-xl p-8 border border-gray-200"
            whileHover={{
              boxShadow: '0 10px 25px -5px rgba(243, 111, 33, 0.4)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-2xl font-extrabold mb-6 text-center text-[#003C71]">Our Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-[#F36F21] text-4xl mb-3">01</div>
                <h4 className="text-xl font-semibold mb-2 text-[#003C71]">Personalized Counseling</h4>
                <p className="text-gray-700">
                  One-on-one sessions tailored to your academic and career aspirations.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-[#F36F21] text-4xl mb-3">02</div>
                <h4 className="text-xl font-semibold mb-2 text-[#003C71]">Academic Guidance</h4>
                <p className="text-gray-700">
                  Expert advice on UG/PG programs and educational pathways worldwide.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-[#F36F21] text-4xl mb-3">03</div>
                <h4 className="text-xl font-semibold mb-2 text-[#003C71]">Career Support</h4>
                <p className="text-gray-700">
                  Mentorship and resources to build skills for professional success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Driven Career Section (Placeholder) */}
      <section className="py-8 md:py-10 px-4 sm:px-6 bg-[#f5f7fa] relative">
        <div className="max-w-4xl 2xl:max-w-6xl mx-auto relative z-10">
          {/* Future Content */}
        </div>
      </section>

      <TrainingBanner />
      <AdmissionForm />
      <FeedbaackBanner />
    </div>
  );
};

export default SuccessStory;