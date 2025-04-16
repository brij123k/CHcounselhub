import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { postDataHandler } from '../../config/services';
import { toast } from 'react-toastify';

const AdmissionForm = () => {
  // State for loader
  const [loader, setLoader] = useState(false);

  // Form validation schema (based on first component's requirements)
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Full name is required')
      .min(3, 'Name must be at least 3 characters')
      .matches(/^[A-Za-z\s]+$/, 'Name can only contain letters and spaces'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    course: Yup.string()
      .required('Course selection is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      course: '',
      studentType: 'Fresher', // Default value for studentType
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoader(true);
        const data = {
          sourse:"counselHub",
          fullName: values.fullName,
          email: values.email,
          phoneNumber: values.phone,
          course: values.course,
        };

        const res = await postDataHandler('demoSession', data);
        if (res) {
          toast.success('Demo session booked successfully!');
          formik.resetForm();
        }
      } catch (error) {
        toast.error('Demo session booking failed!');
        console.error('Submission error:', error);
      } finally {
        setLoader(false);
      }
    },
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003C71]/30 to-[#003C71]/30 opacity-50"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #e5e7eb 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-10 sm:mb-12 lg:mb-16" variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Begin Your <span className="text-[#003C71]">Learning Adventure</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Join our vibrant community and unlock your potential with world-class education.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Form Section */}
          <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Apply Now</h2>
              <form onSubmit={formik.handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Full Name <span className="text-[#003C71]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formik.touched.fullName && formik.errors.fullName
                        ? 'border-red-400'
                        : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-[#003C71] focus:border-transparent transition-all text-gray-900 placeholder-gray-400`}
                    placeholder="Enter your full name"
                    aria-required="true"
                    aria-invalid={formik.touched.fullName && formik.errors.fullName ? 'true' : 'false'}
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-[#003C71]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-400'
                        : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-[#003C71] focus:border-transparent transition-all text-gray-900 placeholder-gray-400`}
                    placeholder="Enter your email"
                    aria-required="true"
                    aria-invalid={formik.touched.email && formik.errors.email ? 'true' : 'false'}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number <span className="text-[#003C71]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formik.touched.phone && formik.errors.phone
                        ? 'border-red-400'
                        : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-[#003C71] focus:border-transparent transition-all text-gray-900 placeholder-gray-400`}
                    placeholder="Enter your phone number"
                    aria-required="true"
                    aria-invalid={formik.touched.phone && formik.errors.phone ? 'true' : 'false'}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.phone}</p>
                  )}
                </div>

                {/* Course */}
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Course <span className="text-[#003C71]">*</span>
                  </label>
                  <select
                    id="course"
                    name="course"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.course}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formik.touched.course && formik.errors.course
                        ? 'border-red-400'
                        : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-[#003C71] focus:border-transparent transition-all text-gray-900`}
                    aria-required="true"
                    aria-invalid={formik.touched.course && formik.errors.course ? 'true' : 'false'}
                  >
                    <option value="">Select a course</option>
                    <option value="Undergraduate Program">Undergraduate Program</option>
                    <option value="Postgraduate Program">Postgraduate Program</option>
                    <option value="Up Skilling">Up Skilling</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                  {formik.touched.course && formik.errors.course && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.course}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loader}
                  whileHover={{ scale: loader ? 1 : 1.02, boxShadow: loader ? '' : '0 8px 20px rgba(0, 60, 113, 0.3)' }}
                  whileTap={{ scale: loader ? 1 : 0.98 }}
                  className="w-full bg-[#003C71] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loader ? 'Submitting...' : 'Submit Application'}
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100 h-full">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Why Join Us?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Expert-Led Learning',
                    desc: 'Gain insights from industry leaders with years of experience.',
                  },
                  {
                    title: 'Practical Projects',
                    desc: 'Build real-world projects to showcase your skills.',
                  },
                  {
                    title: 'Career Guidance',
                    desc: 'Receive personalized support to land your dream job.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 bg-[#003C71] p-2 rounded-full mr-4 mt-1">
                      <svg
                        className="w-5 h-5 text-[#fff]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div className="mt-8 pt-6 border-t border-gray-200" variants={itemVariants}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Our team is here to answer any questions you have.
                </p>
                <NavLink to="/ContactUs">
                  <motion.button
                    className="bg-[#F36F21] text-white font-semibold py-2.5 px-6 rounded-lg inline-flex items-center"
                    whileHover={{ scale: 1.05, boxShadow: '0 6px 15px rgba(243, 111, 33, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                    <FiArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AdmissionForm;