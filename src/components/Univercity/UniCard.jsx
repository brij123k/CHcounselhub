import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiUsers, FiArrowRight, FiBookmark, FiClock } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const UniCard = ({ 
  id,
  institutionType,
  deliveryMode,
  programType,
  programs,
  rating,
  reviews,
  certification,
  imageUrl,
  image
}) => {
  const getProgramList = () => {
    if (programs.length === 0) return programType;
    return `${programType} (${programs.join('/')})`;
  };

  const getBadgeColor = () => {
    return institutionType === 'With Top University' 
      ? 'bg-[#003C71]' 
      : 'bg-[#F36F21]';
  };

  const getBadgeText = () => {
    return institutionType === 'With Top University' 
      ? 'University Program' 
      : 'Industry Certified';
  };

  const getImageSource = () => {
    if (imageUrl) return imageUrl;
    if (image) return image;
    return 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 40px rgba(0, 60, 113, 0.15)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="w-full bg-white rounded-2xl overflow-hidden cursor-pointer flex flex-col border border-gray-100"
    >
      {/* Image section */}
      <div className="relative h-48 sm:h-56 overflow-hidden group">
        <img 
          src={getImageSource()} 
          alt={programType}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
          {/* Top badge */}
          <motion.div 
            className={`absolute top-4 right-4 ${getBadgeColor()} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1`}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            {getBadgeText()}
          </motion.div>
          
          {/* Certification badge */}
          {certification && (
            <motion.div 
              className="absolute top-4 left-4 bg-white text-[#F36F21] px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <FiStar size={12} />
              Certified
            </motion.div>
          )}
        </div>
      </div>

      {/* Content area */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title and metadata */}
        <div className="mb-4">
          <span className="text-xs text-[#003C71] font-medium uppercase tracking-wider block mb-2">
            {institutionType}
          </span>
          <motion.h3 
            className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight"
            whileHover={{ color: "#F36F21" }}
          >
            {getProgramList()}
          </motion.h3>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full inline-flex items-center">
              <FiClock className="mr-1" size={12} />
              {deliveryMode}
            </span>
          </div>
        </div>

        {/* Rating and stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-700">
            <FiStar className="mr-2 text-[#F36F21]" size={14} />
            <span>{rating} <span className="text-gray-500">({reviews})</span></span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <FiUsers className="mr-2 text-[#003C71]" size={14} />
            <span>{Math.floor(reviews * 5)} students</span>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {certification ? 'Certificate Course' : 'Degree Program'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default UniCard;