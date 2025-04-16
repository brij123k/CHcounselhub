import React from 'react'
import ImageCarousel from '../../components/ImageCarousel'
import { FiArrowRight } from 'react-icons/fi';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import FAQ from '../../components/FAQ'
import CarouselContainer from '../../components/Carouselcard'
import CourseCards from '../../components/Courses/CourseCards'
import UniCards from '../../components/Univercity/UniCards';
import ScrollableCategories from '../../components/Cards/Categories'
import StudentTestimonials from '../../components/testimonial/StudentsTestimonial'
import AdmissionForm from '../../components/Forms/AdmissionForm'
import { Faqs } from '../../data';
import { NavLink } from 'react-router-dom';
import TestimonialCarousel from '../../components/testimonial/TestimonialCarousel';
function Home() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
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

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };


  const faqs = Faqs;
  return (
    <>

      <div className='min-h-fit'>
        <CarouselContainer />
      </div>
      <div className='py-4'>
        <ScrollableCategories />
      </div>
      <CourseCards />
      <div className='py-4'>
        <UniCards/>
      </div>
      <div className='px-4 lg:px-20'>
        <ImageCarousel />
      </div>
      {/* <EducationBanner /> */}

      <div className='py-4'>
        {/* <SuccessTestimonial /> */}
      </div>
      <div className='py-4'>
        <StudentTestimonials />
      </div>
      <div className='py-4'>
      <TestimonialCarousel/>
      </div>
            <div className='py-4'>
        <AdmissionForm />
      </div>
      <FAQ faqs={faqs} />

      <motion.div 
      className="relative bg-[#f5f7fa] pt-3 overflow-hidden"
      ref={ref}
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
        <div className="rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side - Text Content */}
            <motion.div
              className="p-8 md:p-12 flex flex-col justify-center"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div className="mb-2" variants={itemVariants}>
                <p className="text-2xl font-medium text-[#003C71]">
                  <span className="text-[#F36F21]">G</span>et In Touch
                </p>
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003C71]">
                  For Queries, Feedback or Assistance
                </h2>
              </motion.div>

              <motion.div variants={itemVariants}>
                <NavLink to="/ContactUs">
                  <motion.button
                    className="bg-[#F36F21] text-white font-bold py-3 px-6 rounded-lg flex items-center"
                    whileHover={{ 
                      y: -3,
                      boxShadow: "0 10px 25px rgba(243, 111, 33, 0.4)",
                      backgroundColor: "#e05e1a"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us <FiArrowRight className="ml-2" />
                  </motion.button>
                </NavLink>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="hidden md:block relative"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={imageVariants}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.img
                  src="/images/contact Us.png"
                  alt="Contact us illustration"
                  className="w-full h-full object-contain"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                />
              </div>
              {/* Subtle overlay */}
              <motion.div 
                className="absolute inset-0 bg-[#003C71]/5 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>
          </div>
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
    </motion.div>
    </>
  )
}

export default Home
