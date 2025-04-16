import React,{ useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import {FaPlus, FaMinus, FaLocationArrow } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { postDataHandler } from '../../config/services';

const ContactCard = ({ icon, title, info, description }) => {
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      className="relative h-full rounded-xl overflow-hidden bg-[#f5f7fa] cursor-pointer border border-gray-200"
      whileHover={{ 
        y: -10,
        boxShadow: "0 10px 25px -5px rgba(243, 111, 33, 0.4)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Background animated blocks */}
      

      {/* Content container */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Icon */}
        <motion.div
          className="self-center mb-4 sm:mb-6 relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl bg-[#003C71]/10 border border-[#F36F21]/20">
            <motion.span
              className="text-[#F36F21]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {icon}
            </motion.span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h3 
          custom={0}
          variants={textVariants}
          className="text-xl sm:text-2xl font-extrabold mb-4 text-center text-[#003C71]"
        >
          {title}
        </motion.h3>

        {/* Info */}
        <motion.p 
          custom={1}
          variants={textVariants}
          className="text-base font-medium text-gray-700 mb-4 text-center px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm mx-auto max-w-md"
          whileHover={{ 
            y: -3,
            backgroundColor: "rgba(255,255,255,0.7)" 
          }}
        >
          {info}
        </motion.p>

        {/* Description */}
        <motion.div className="mt-auto">
          <motion.p 
            custom={2}
            variants={textVariants}
            className="text-gray-600 text-center relative text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
          >
            {description}
            <motion.span 
              className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-[#F36F21] to-[#003C71]"
              style={{ width: 0, x: "-50%" }}
              whileHover={{ 
                width: "60%",
                transition: { type: "spring", stiffness: 200 }
              }}
            />
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};


import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Input animation variants
  const inputVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiData = {
        sourse:"counselHub",
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const response = await postDataHandler('contactUs', apiData);

      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.message || 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={formVariants}
      className="relative bg-[#ffffff] rounded-xl overflow-hidden border border-gray-200"
      whileHover={{
        boxShadow: '0 10px 25px -5px rgba(243, 111, 33, 0.4)',
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Form header */}
      <div className="bg-[#003C71]/10 p-4">
        <h3 className="text-2xl font-extrabold text-[#003C71] flex items-center gap-2">
          <FiSend className="text-[#F36F21]" />
          Send us a message
        </h3>
      </div>

      <form className="p-6 sm:p-8 space-y-6 relative z-10" onSubmit={handleSubmit}>
        {/* Grid layout for name and email */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={inputVariants}>
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-[#003C71] mb-1 ml-1">
                Your Name
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F36F21]" />
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/30 transition-all bg-[#f5f7fa] hover:bg-white"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={inputVariants}>
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-[#003C71] mb-1 ml-1">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F36F21]" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/30 transition-all bg-[#f5f7fa] hover:bg-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Subject field */}
        <motion.div variants={inputVariants}>
          <label htmlFor="subject" className="block text-sm font-medium text-[#003C71] mb-1 ml-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/30 transition-all bg-[#f5f7fa] hover:bg-white"
            placeholder="What's this about?"
            required
          />
        </motion.div>

        {/* Message field */}
        <motion.div variants={inputVariants}>
          <label htmlFor="message" className="block text-sm font-medium text-[#003C71] mb-1 ml-1">
            Your Message
          </label>
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-4 text-[#F36F21]" />
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/30 transition-all bg-[#f5f7fa] hover:bg-white"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
        </motion.div>

        {/* Submit button */}
        <motion.button
          type="submit"
          className="w-full bg-[#F36F21] text-white py-4 px-6 rounded-lg font-semibold relative overflow-hidden"
          whileHover={{
            y: isSubmitting ? 0 : -3,
            boxShadow: isSubmitting ? '' : '0 10px 25px rgba(243, 111, 33, 0.4)',
            backgroundColor: isSubmitting ? '#F36F21' : '#e05e1a',
          }}
          whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
          variants={inputVariants}
          disabled={isSubmitting}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                Sending...
              </span>
            ) : (
              <>
                <FiSend className="text-lg" />
                Send Message
              </>
            )}
          </span>
        </motion.button>
      </form>
    </motion.div>
  );
};
const ContactPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // Map animation variants
  const mapVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  const contactMethods = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      info: "UpSkillLab Headquarters",
      description: "123 Tech Park, Innovation Road, Bengaluru, Karnataka 560001, India"
    },
    {
      icon: <FaPhone />,
      title: "Phone Number",
      info: "+91 98765 43210",
      description: "Monday to Friday, 9am to 6pm IST"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      info: "contact@upskilllab.com",
      description: "We'll respond within 24 hours"
    }
  ];

  

  return (
    <div className='bg-[#F7F7F7] min-h-screen'>
      
      {/* Animated Banner */}
      <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#f5f7fa]"
    >
      {/* Background animated blocks */}
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
        {/* Subtle decorative circle */}
        <motion.div 
          className="absolute top-20 left-20 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-[#F36F21] mix-blend-multiply opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.h1 
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 leading-tight"
        >
          <span className="text-[#003C71]">Contact</span>{' '}
          <span className="text-[#F36F21]">CounselHub</span>
        </motion.h1>

        <motion.div 
          className="h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 mx-auto bg-gradient-to-r from-[#F36F21] to-[#003C71] mb-4 sm:mb-6 md:mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        ></motion.div>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          We'd love to hear from you! Reach out for inquiries, support, or partnerships.
        </motion.p>
      </div>
    </motion.section>

      {/* Contact Cards */}
      <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-[#f5f7fa] overflow-hidden"
    >
      {/* Background animated blocks */}
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

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16 relative z-10">
        {contactMethods.map((method, index) => (
          <ContactCard
            key={index}
            icon={method.icon}
            title={method.title}
            info={method.info}
            description={method.description}
          />
        ))}
      </div>

      {/* Form and Map Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
      
        <ContactForm />

        {/* Map */}
        <motion.div
          variants={mapVariants}
          initial="hidden"
          animate="visible"
          className="relative bg-white rounded-xl overflow-hidden h-full min-h-[400px] border border-[#003C71]/20"
          whileHover={{
            boxShadow: "0 10px 25px -5px rgba(243, 111, 33, 0.4)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Map header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-[#003C71]/10 p-3">
            <h3 className="text-lg font-bold text-[#003C71] flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-[#F36F21]" />
              Our Location
            </h3>
          </div>

          {/* Map container */}
          <div className="relative h-full w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003168749709!2d77.59441431482193!3d12.9719629908566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf15e5e5e9a9f8c1!2sBangalore%20International%20Tech%20Park!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(110%)" }}
              allowFullScreen=""
              loading="lazy"
              title="UpSkillLab Location"
              className="absolute inset-0"
            />
            
            {/* Custom map controls */}
            <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
              <motion.button 
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#003C71] hover:text-[#F36F21]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaPlus />
              </motion.button>
              <motion.button 
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#003C71] hover:text-[#F36F21]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaMinus />
              </motion.button>
              <motion.button 
                className="w-10 h-10 rounded-full bg-[#F36F21] text-white shadow-md flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "#003C71" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLocationArrow />
              </motion.button>
            </div>

            {/* Location pin animation */}
            <motion.div
              className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              animate={{
                y: [0, -10, 0],
                transition: { repeat: Infinity, duration: 2 }
              }}
            >
              <div className="relative">
                <FaMapMarkerAlt className="text-4xl text-[#F36F21] drop-shadow-md" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#F36F21] opacity-20"
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0.2, 0.1, 0],
                    transition: { repeat: Infinity, duration: 2 }
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Address overlay */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800/70 to-transparent p-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="max-w-md mx-auto text-center">
              <p className="font-medium">UpSkillLab Headquarters</p>
              <p className="text-sm">123 Tech Park, Innovation Road, Bengaluru, Karnataka 560001</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
    </div>
  );
};

export default ContactPage;