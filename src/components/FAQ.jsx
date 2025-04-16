import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.6, 
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { 
                duration: 0.8, 
                ease: "easeOut"
            }
        }
    };

    const answerVariants = {
        hidden: { 
            opacity: 0, 
            height: 0,
            paddingTop: 0,
            paddingBottom: 0
        },
        visible: { 
            opacity: 1, 
            height: "auto",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            transition: { 
                duration: 0.4,
                ease: "easeInOut"
            }
        },
        exit: { 
            opacity: 0, 
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            transition: { 
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    return (
        <motion.section 
            className="relative overflow-hidden bg-[#f5f7fa] py-16 px-4 sm:px-6 lg:py-24 lg:px-8"
            initial="hidden"
            animate="visible"
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

            {/* Floating decorative elements */}
            <motion.div 
                className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-[#F36F21]/20 blur-2xl"
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
            <motion.div 
                className="absolute bottom-1/4 right-20 w-40 h-40 rounded-full bg-[#003C71]/20 blur-2xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div 
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#003C71] mb-4">
                        Frequently Asked <span className="text-[#F36F21]">Questions</span>
                    </h2>
                    <motion.p 
                        className="text-lg text-gray-700 max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        Find answers to common questions about our programs and admission process
                    </motion.p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* FAQ Items */}
                    <motion.div 
                        className="w-full lg:w-1/2 space-y-4"
                        variants={containerVariants}
                    >
                        {faqs.map((faq, index) => (
                            <motion.div 
                                key={index}
                                className="overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg"
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -5,
                                    boxShadow: "0 10px 25px rgba(0, 60, 113, 0.1)"
                                }}
                                layout
                            >
                                <motion.button
                                    className="flex w-full items-center justify-between p-6 text-left"
                                    onClick={() => toggleAnswer(index)}
                                    whileTap={{ scale: 0.98 }}
                                    layout
                                >
                                    <motion.h3 
                                        className="text-lg font-semibold text-[#003C71]"
                                        layout
                                    >
                                        {faq.question}
                                    </motion.h3>
                                    <motion.div
                                        className="ml-4 h-6 w-6 rounded-full bg-[#F36F21] p-1 text-white flex items-center justify-center"
                                        animate={{ 
                                            rotate: openIndex === index ? 180 : 0,
                                            backgroundColor: openIndex === index ? "#003C71" : "#F36F21"
                                        }}
                                        transition={{ duration: 0.3 }}
                                        layout
                                    >
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-4 w-4" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M19 9l-7 7-7-7" 
                                            />
                                        </svg>
                                    </motion.div>
                                </motion.button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            className="overflow-hidden"
                                            variants={answerVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            layout
                                        >
                                            <div className="px-6 pb-6 pt-0">
                                                <p className="text-gray-700">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Image Section */}
                    <motion.div 
                        className="hidden lg:flex lg:w-1/2 items-center justify-center"
                        variants={imageVariants}
                    >
                        <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute -inset-4 rounded-3xl bg-[#F36F21]/10 blur-xl"></div>
                            <motion.img
                                src="https://img.freepik.com/free-vector/faq-concept-illustration_114360-7515.jpg"
                                alt="FAQ Illustration"
                                className="h-auto w-full max-w-md object-cover rounded-2xl shadow-lg"
                                whileHover={{ 
                                    boxShadow: "0 15px 30px rgba(0, 60, 113, 0.2)"
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default FAQ;