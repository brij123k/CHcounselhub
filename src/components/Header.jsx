import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdmissionFormModal from "./Modal/BasicEnrollNowModal";
import { useQuery } from "@tanstack/react-query";
import { categoryAPI, courseAPI } from "../config/api-repository";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch categories using React Query
  const { data: categoriesData, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      console.log("Fetching categories...");
      const categories = await categoryAPI.getCategories({
        limit: 5,
        featured: true,
      });

      const allCourses = await courseAPI
        .getCourseDisplay({
          categoryIds: categories.data.map(({ _id }) => _id),
        })
        .then(({ data }) => data);
      return { categories, allCourses };
    },
    select: ({ categories, allCourses }) => {
      return categories.data.map((category) => ({
        id: category._id,
        name: category.categoryName,
        code: category.categoryCode,
        image: category.categoryImage,
        description: category.categoryDescription,
        courses: allCourses
          .filter((course) => course.category._id === category._id)
          .map((course) => ({
            id: course._id,
            name: course.courseName,
            image: course.courseImage,
          })),
      }));
    },
    throwOnError: true,
  });

  const courseCategories = categoriesData || [];

  const { data: featuredCoursesData } = useQuery({
    queryKey: ["featuredCourses"],
    queryFn: async () => {
      const courses = await courseAPI.getCourseDisplay({
        limit: 10,
        featured: true,
      });
      return courses.data;
    },
    select: (data) => {
      return data.map((course) => ({
        id: course._id,
        title: course.courseName,
        imageUrl: course.courseImage,
        duration: course.courseDuration,
      }));
    },
  });

  const AllCourses = featuredCoursesData || [];
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.style.overflow = isDrawerOpen ? "auto" : "hidden";
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
    if (!isCoursesDropdownOpen) {
      setSelectedCategory(null);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#FF7426" : "#374151",
    fontWeight: isActive ? "600" : "400",
  });

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <img
              src="/images/logonew.png"
              alt="Meritshot Logo"
              className="h-15 sm:h-18 lg:h-20 2xl:h-25 transition-all duration-200"
            />
          </motion.div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center space-x-6 xl:space-x-8 2xl:space-x-10">

          <NavLink
              to="/"
              style={navLinkStyle}
              className="hover:text-[#FF7426] text-sm lg:text-xs xl:text-lg 2xl:text-lg transition-colors whitespace-nowrap"
            >
             Home
            </NavLink>

            {/* Courses Dropdown */}

            <NavLink
              to="/Courses"
              style={navLinkStyle}
              className="hover:text-[#FF7426] text-sm lg:text-xs xl:text-lg 2xl:text-lg transition-colors whitespace-nowrap"
            >
              Courses
            </NavLink>

            <NavLink
              to="/About"
              style={navLinkStyle}
              className="hover:text-[#FF7426] text-sm lg:text-xs xl:text-lg 2xl:text-lg transition-colors whitespace-nowrap"
            >
              About
            </NavLink>

            {/* <NavLink
              to="/upcoming-batches"
              style={navLinkStyle}
              className="hover:text-[#FF7426] text-sm lg:text-xs xl:text-sm 2xl:text-base transition-colors whitespace-nowrap"
            >
              Upcoming Batches
            </NavLink> */}
            {/* <NavLink
              to="/Students-Blog"
              style={navLinkStyle}
              className="hover:text-[#FF7426] text-sm lg:text-xs xl:text-sm 2xl:text-base transition-colors whitespace-nowrap"
            >
              Student Blog
            </NavLink> */}
            <NavLink
              to="/ContactUs"
              style={navLinkStyle}
              className="hover:text-[#FF7426] text-sm lg:text-xs xl:text-lg 2xl:text-lg transition-colors whitespace-nowrap"
            >
              Contact us
            </NavLink>
          </div>
        </div>

        {/* Mobile Navigation (unchanged) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleDrawer}
            className="text-gray-600 hover:text-[#FF7426] p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={toggleDrawer}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut" }}
              className="fixed inset-0 w-full h-full z-50 lg:hidden pointer-events-none"
            >
              <div className="absolute right-0 h-full w-72 sm:w-80 bg-white shadow-2xl flex flex-col pointer-events-auto">
                <div className="flex justify-end p-4 shrink-0">
                  <button
                    onClick={toggleDrawer}
                    className="text-gray-600 hover:text-[#FF7426] p-2 focus:outline-none"
                  >
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="space-y-2 px-4 pb-4">
                  <NavLink
                      to="/"
                      style={navLinkStyle}
                      className="block px-4 py-3 text-base font-medium hover:bg-[#FFF5EF] rounded-lg transition-all"
                      onClick={toggleDrawer}
                    >
                     Home
                    </NavLink>
                    <NavLink
                      to="/Course"
                      style={navLinkStyle}
                      className="block px-4 py-3 text-base font-medium hover:bg-[#FFF5EF] rounded-lg transition-all"
                      onClick={toggleDrawer}
                    >
                     Courses
                    </NavLink>
                    <NavLink
                      to="/About"
                      style={navLinkStyle}
                      className="block px-4 py-3 text-base font-medium hover:bg-[#FFF5EF] rounded-lg transition-all"
                      onClick={toggleDrawer}
                    >
                     About
                    </NavLink>
                    <NavLink
                      to="/ContactUs"
                      style={navLinkStyle}
                      className="block px-4 py-3 text-base font-bold hover:bg-[#FFF5EF] rounded-lg transition-all"
                      onClick={toggleDrawer}
                    >
                      Contact us
                    </NavLink>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AdmissionFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}

export default Header;
