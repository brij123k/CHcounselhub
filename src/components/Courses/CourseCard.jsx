import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiBookOpen, FiAward, FiCheckCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ 
  id,
  courseId,
  courseCode,
  courseLevel,
  image, 
  title, 
  duration, 
  studentsEnrolled, 
  originalPrice, 
  discountedPrice,
  remainingSheets,
  university,
  faculty,
  credits
}) => {
  const navigate = useNavigate();
  
  // Format duration display for academic terms
  const formatDuration = (duration) => {
    if (duration <= 1) return '1 Term';
    if (duration <= 2) return `${duration} Terms`;
    if (duration <= 3) return '1 Year';
    return `${Math.ceil(duration/3)} Years`;
  };

  // Format price display
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price).replace('₹', '₹');
  };

  // Get academic level color
  const getLevelColor = () => {
    switch(courseLevel) {
      case 'UNDERGRADUATE': return 'bg-blue-100 text-blue-800';
      case 'POSTGRADUATE': return 'bg-purple-100 text-purple-800';
      case 'DOCTORAL': return 'bg-amber-100 text-amber-800';
      case 'CERTIFICATE': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Get academic level label
  const getLevelLabel = () => {
    switch(courseLevel) {
      case 'UNDERGRADUATE': return 'Undergrad';
      case 'POSTGRADUATE': return 'Postgrad';
      case 'DOCTORAL': return 'Doctoral';
      case 'CERTIFICATE': return 'Certificate';
      default: return courseLevel?.toLowerCase() || 'All Levels';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px 0px" }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full cursor-pointer border border-gray-100 hover:shadow-md transition-all duration-300 group relative"
      onClick={() => navigate(`/courses/${courseId || id}`)}
    >
      {/* University/Faculty Ribbon */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#003366] to-[#004080] text-white py-1 px-4 text-xs font-medium flex justify-between items-center">
   
      </div>

      {/* Course Image */}
      <div className="relative h-40 overflow-hidden mt-7">
        <motion.img
          src={image || 'https://source.unsplash.com/random/600x400/?campus,library'}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Course Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Course Level and Credits */}
        <div className="flex justify-between items-start mb-2">
          <motion.div 
            className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${getLevelColor()}`}
            whileHover={{ scale: 1.05 }}
          >
            <FiAward className="mr-1.5" />
            {getLevelLabel()}
          </motion.div>
          
          {credits && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {credits} Credits
            </span>
          )}
        </div>

        {/* Course Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Course Code */}
        {courseCode && (
          <p className="text-xs text-gray-500 mb-3 font-mono">#{courseCode}</p>
        )}

        {/* Meta Information */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-3">
            <div className="flex items-center bg-green-50 px-2 py-1 rounded-md">
  <FiCheckCircle className="mr-1.5 text-green-600" />
  <span className="text-sm font-medium text-green-800">Certified</span>
</div>
              
            </div>

            {/* Pricing */}
            <div className="flex flex-col items-end">
              {originalPrice && originalPrice > discountedPrice && (
                <span className="text-xs text-gray-400 line-through">
                  {formatPrice(originalPrice)}
                </span>
              )}
              <span className="text-base font-bold text-[#003366]">
                {formatPrice(discountedPrice)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Indicator */}
      {typeof remainingSheets === 'number' && remainingSheets < 10 && (
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${
          remainingSheets === 0 ? 'bg-red-500' : 
          remainingSheets < 5 ? 'bg-amber-500' : 'bg-blue-500'
        }`}>
          <motion.div 
            className="h-full bg-current"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5 }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default CourseCard;