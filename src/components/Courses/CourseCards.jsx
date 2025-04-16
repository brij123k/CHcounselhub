import React from 'react';
import CourseList from './CourseList';
import { FiClock, FiUsers, FiArrowRight } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';
function CourseCards() {

 const navigation= useNavigate()
    
  return (
    <div className='bg-white relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='w-[80%] h-[80%] absolute top-20 left-[-250px] blur-lg rounded-full bg-[#FF74261A] z-0'></div>
      <img 
        src="/images/PlanetIconImage.png" 
        alt="Planet Icon" 
        className="absolute top-4 right-4 h-8 lg:h-12 z-10" 
      />

      {/* Main content container */}
      <div className="relative bg-gradient-to-b from-[#f2f0ff] to-white py-16 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="relative text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900">
              Explore Our World's Best <span className='text-[#FF7426]'>Courses </span>
            </h2>
          </div>

          {/* Course cards list */}
          <CourseList />

        </div>
      </div>
    </div>
  );
}

export default CourseCards;