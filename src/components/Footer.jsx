import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
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

  return (
    <motion.footer 
      className="relative bg-[#f5f7fa] text-[#606060] w-full py-8 sm:py-12 lg:py-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:pxcopy px-10 2xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          {/* Logo and Description */}
          <motion.div 
            className="lg:w-[30%] xl:w-[25%] 2xl:w-[20%]"
            variants={itemVariants}
          >
            <img 
              src='images/logonew.png' 
              alt="Company Logo"
              className="w-20 sm:w-20 md:w-20 lg:w-30 xl:w-30"
            />
            <p className="text-[#606060] text-sm sm:text-base mt-4 sm:mt-6 mb-6 sm:mb-8 lg:mb-0">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
              Lorem ipsum has been the industry's standard dummy a type specimen book.
            </p>
          </motion.div>

          {/* Links Grid */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full"
            variants={containerVariants}
          >
            {/* Company Column 1 */}
            <motion.div variants={itemVariants}>
              <h3 className="text-[#003C71] text-lg sm:text-xl md:text-xl font-semibold mb-3 sm:mb-4">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><NavLink to="#" className="text-[#606060] hover:text-[#F36F21] text-sm sm:text-base transition-colors">How to work?</NavLink></li>
                <li><NavLink to="#" className="text-[#606060] hover:text-[#F36F21] text-sm sm:text-base transition-colors">Popular Course</NavLink></li>
                <li><NavLink to="#" className="text-[#606060] hover:text-[#F36F21] text-sm sm:text-base transition-colors">Service</NavLink></li>
              </ul>
            </motion.div>

            {/* Company Column 2 */}
            <motion.div variants={itemVariants}>
              <h3 className="text-[#003C71] text-lg sm:text-xl md:text-xl font-semibold mb-3 sm:mb-4">Resources</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><NavLink to="#" className="text-[#606060] hover:text-[#F36F21] text-sm sm:text-base transition-colors">How to work?</NavLink></li>
                <li><NavLink to="#" className="text-[#606060] hover:text-[#F36F21] text-sm sm:text-base transition-colors">Popular Course</NavLink></li>
                <li><NavLink to="#" className="text-[#606060] hover:text-[#F36F21] text-sm sm:text-base transition-colors">Service</NavLink></li>
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div variants={itemVariants}>
              <h3 className="text-[#003C71] text-lg sm:text-xl md:text-xl font-semibold mb-3 sm:mb-4">Support</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><NavLink to="#" className="text-[#606060] hover:text-[#F36F21] text-sm sm:text-base transition-colors">FAQ</NavLink></li>
                <li><NavLink to="#" className="text-[#606060] hover:text-[#F36F21] text-sm sm:text-base transition-colors">Help Center</NavLink></li>
                <li><NavLink to="#" className="text-[#606060] hover:text-[#F36F21] text-sm sm:text-base transition-colors">Career</NavLink></li>
                <li><NavLink to="#" className="text-[#606060] hover:text-[#F36F21] text-sm sm:text-base transition-colors">Privacy</NavLink></li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h3 className="text-[#003C71] text-lg sm:text-xl md:text-xl font-semibold mb-3 sm:mb-4">Contact</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><NavLink to="tel:+09137053875" className="text-[#606060] hover:text-[#F36F21] text-sm sm:text-base transition-colors">+0913-705-3875</NavLink></li>
                <li className="text-[#606060] text-sm sm:text-base">4808 Skinner Hollow Road<br />Days Creek, OR 97429</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright/Bottom Section */}
        <motion.div 
          className="border-t border-gray-200 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm"
          variants={itemVariants}
        >
          <p className="text-[#F36F21]">
            <NavLink to="#" className="hover:underline">Privacy Policy</NavLink> |{' '}
            <NavLink to="#" className="hover:underline">Terms & Condition</NavLink>
          </p>
          <p>© {new Date().getFullYear()} Upskillab.com All rights reserved.</p>
        </motion.div>
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
    </motion.footer>
  );
}

export default Footer;