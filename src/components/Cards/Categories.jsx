import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { 
  FiBriefcase, 
  FiPenTool, 
  FiCode, 
  FiBarChart2, 
  FiCamera, 
  FiMic, 
  FiMusic, 
  FiFilm,
  FiArrowRight
} from 'react-icons/fi';

const CategoryCarousel = () => {
  const categories = [
    {
      title: 'AI/ML Programs',
      info: '15+ Courses',
      icon: <FiBriefcase size={24} />,
      image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      color: '#003C71'
    },
    {
      title: 'Post Graduate',
      info: '15+ Courses',
      icon: <FiPenTool size={24} />,
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      color: '#F36F21'
    },
    {
      title: 'Under Graduate', 
      info: '15+ Courses',
      icon: <FiCode size={24} />,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      color: '#003C71'
    },
    {
      title: 'Finance Courses',
      info: '15+ Courses',
      icon: <FiBarChart2 size={24} />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      color: '#F36F21'
    },
    {
      title: 'Digital Marketing',
      info: '15+ Certification',
      icon: <FiCamera size={24} />,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      color: '#003C71'
    },
    {
      title: 'Coding/Languages',
      info: '15+ Courses',
      icon: <FiMic size={24} />,
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      color: '#F36F21'
    },
    {
      title: 'Career/Personal',
      info: '15+ Counsellors',
      icon: <FiMic size={24} />,
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      color: '#F36F21'
    },
    {
      title: 'Internships',
      info: '15+ Certification',
      icon: <FiMusic size={24} />,
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      color: '#003C71'
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      partialVisibilityGutter: 20
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  };

  const CustomDot = ({ onClick, active }) => (
    <motion.button
      onClick={() => onClick()}
      className={`mx-1 w-2 h-2 rounded-full ${
        active ? 'bg-[#F36F21]' : 'bg-[#003C71]/30'
      }`}
      whileHover={{ scale: 1.5 }}
      animate={{
        width: active ? 24 : 8,
        backgroundColor: active ? '#F36F21' : '#003C71'
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    />
  );

  return (
    <div className="relative max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[#003C71]">Explore </span>
        <span className="text-[#F36F21]">Categories</span>
      </motion.h2>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="transform 600ms ease-in-out"
        containerClass="carousel-container"
        itemClass="px-2 sm:px-3"
        showDots={true}
        customDot={<CustomDot />}
        arrows={false}
        renderDotsOutside={true}
        additionalTransfrom={0}
        ssr={true}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="h-[320px] sm:h-[360px] mx-1 relative rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            {/* Modern Card Container */}
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl overflow-hidden">
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
              </div>

              {/* Floating Icon Badge */}
              <motion.div 
                className="absolute top-6 right-6 z-10 p-3 rounded-full shadow-lg"
                style={{ backgroundColor: category.color }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-white">
                  {category.icon}
                </div>
              </motion.div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 z-10">
                <div className="mb-4">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {category.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-white/90 mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {category.info}
                  </motion.p>
                </div>

                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <motion.div 
                    className="h-1 rounded-full bg-white/30 overflow-hidden"
                    style={{ width: '60%' }}
                    whileHover={{
                      backgroundColor: category.color,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="h-full rounded-full"
                      style={{ 
                        backgroundColor: category.color,
                        width: '70%' 
                      }}
                      animate={{
                        width: ['70%', '90%', '70%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }}
                    />
                  </motion.div>
                  

                </motion.div>
              </div>

              {/* Animated Accent Bar */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: category.color }}
                initial={{ width: '100%' }}
                whileHover={{
                  height: 4,
                  backgroundColor: category.color === '#003C71' ? '#F36F21' : '#003C71',
                  transition: { duration: 0.3 }
                }}
              />
            </div>

            {/* Floating Tag */}
            <motion.div 
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold shadow-md z-10"
              style={{ 
                backgroundColor: `${category.color}20`,
                backdropFilter: 'blur(10px)',
                color: category.color === '#003C71' ? '#003C71' : '#F36F21'
              }}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              Popular
            </motion.div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;