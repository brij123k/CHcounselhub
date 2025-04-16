import React from 'react';
import { FaStar, FaRegStar, FaUsers, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CourseCard = ({ course, onEnrollClick }) => {
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-400" />
        ) : (
          <FaRegStar key={i} className="text-yellow-400" />
        )
      );
    }
    return stars;
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative">
        <img
          src={course.image || 'https://via.placeholder.com/400x225'}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-[#F36F21] text-white text-xs font-bold px-2 py-1 rounded">
          {course.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#003C71]">{course.title}</h3>
          <span className="bg-[#003C71]/10 text-[#003C71] px-2 py-1 rounded text-sm font-semibold">
            {course.level}
          </span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center mb-4">
          <div className="flex mr-4">{renderRating(course.rating)}</div>
          <span className="text-gray-500 text-sm">({course.reviews} reviews)</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <FaUsers className="mr-1" />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-[#F36F21]">
            ${course.price}
          </span>
          <button
            onClick={() => onEnrollClick(course)}
            className="bg-[#003C71] hover:bg-[#002a5c] text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CourseCards = ({ courses, onEnrollClick }) => {
    return (
      <section id="Courses" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003C71] mb-4">
              Our Featured Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from industry experts with our comprehensive courses
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnrollClick={onEnrollClick}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CourseCards;