"use client";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, MessageCircle, GraduationCap, CheckCircle, Crown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Outcomes = () => {
  const [activeCard, setActiveCard] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const outcomes = [
    {
      title: "Placement Support",
      description: "Complete support from our dedicated placement team until you get a job",
      icon: Target,
      color: "blue"
    },
    {
      title: "Resume Building",
      description: "Resume sharing in our network of 1200+ hiring partners",
      icon: GraduationCap,
      color: "green"
    },
    {
      title: "Mock Interviews",
      description: "Professional mock interviews assistance",
      icon: MessageCircle,
      color: "purple"
    },
    {
      title: "Capstone Projects",
      description: "Undertake Industry certified Capstone Projects from companies like Zomato & BookMyShow",
      icon: Users,
      color: "orange"
    },
    {
      title: "100% Job Assurance",
      description: "Get all the support to crack your dream tech job",
      icon: CheckCircle,
      color: "red"
    },
    {
      title: "Growth Champion",
      description: "Know learning strategies and get mentorship from our top Alumni",
      icon: Crown,
      color: "teal"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % outcomes.length);
    }, 2000); // Change card every 2 seconds

    return () => clearInterval(interval);
  }, [outcomes.length]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        primary: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200",
        iconBg: "bg-blue-100"
      },
      green: {
        primary: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200",
        iconBg: "bg-green-100"
      },
      purple: {
        primary: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200",
        iconBg: "bg-purple-100"
      },
      orange: {
        primary: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200",
        iconBg: "bg-orange-100"
      },
      red: {
        primary: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-200",
        iconBg: "bg-red-100"
      },
      teal: {
        primary: "text-teal-600",
        bg: "bg-teal-50",
        border: "border-teal-200",
        iconBg: "bg-teal-100"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };
  return (
    <>
      <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center dark:bg-dark">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 lg:mb-12 px-2"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why Choose <span className="text-red-600 dark:text-red-400 underline">Edurup?</span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Edurup offers extensive list of services to help you become Job ready.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              {outcomes.map((outcome, index) => {
                const colors = getColorClasses(outcome.color);
                const IconComponent = outcome.icon;
                const isActive = activeCard === index;
                
                return (
                  <motion.div
                    key={`${outcome.title}-${index}`}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="sm:hover:scale-105"
                  >
                    <Card 
                      className={`group transition-all duration-500 ${
                        isActive 
                          ? 'shadow-lg sm:shadow-xl -translate-y-1 sm:-translate-y-2 bg-white dark:bg-gray-800 border-2 border-red-500 dark:border-red-400' 
                          : 'hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                      } rounded-lg sm:rounded-xl overflow-hidden`}
                    >
                      <CardContent className="p-4 sm:p-6 text-center">
                        {/* Icon */}
                        <motion.div 
                          className="flex justify-center mb-3 sm:mb-4"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div 
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border-2 border-red-500 flex items-center justify-center transition-all duration-500 ${
                              isActive ? 'scale-105 sm:scale-110 shadow-md sm:shadow-lg' : 'group-hover:scale-105'
                            }`}
                            animate={isActive ? { 
                              scale: 1.1,
                              boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)"
                            } : { 
                              scale: 1,
                              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                              animate={isActive ? { 
                                rotate: [0, -10, 10, 0],
                                scale: 1.1
                              } : { 
                                rotate: 0,
                                scale: 1
                              }}
                              transition={{ duration: 0.5 }}
                            >
                              <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 text-red-500 transition-all duration-500 ${
                                isActive ? 'scale-105 sm:scale-110' : ''
                              }`} />
                            </motion.div>
                          </motion.div>
                        </motion.div>
                        
                        {/* Title */}
                        <motion.h3 
                          className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-all duration-500 ${
                            isActive 
                              ? 'text-red-600 dark:text-red-400 scale-105' 
                              : 'text-gray-900 dark:text-white'
                          }`}
                          animate={isActive ? { 
                            color: "#dc2626",
                            scale: 1.05
                          } : { 
                            color: "#111827",
                            scale: 1
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {outcome.title}
                        </motion.h3>
                        
                        {/* Description */}
                        <motion.p 
                          className={`text-xs sm:text-sm leading-relaxed transition-all duration-500 ${
                            isActive 
                              ? 'text-gray-800 dark:text-gray-200 font-medium' 
                              : 'text-gray-600 dark:text-gray-400'
                          }`}
                          animate={isActive ? { 
                            color: "#1f2937",
                            fontWeight: 500
                          } : { 
                            color: "#6b7280",
                            fontWeight: 400
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {outcome.description}
                        </motion.p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Outcomes;
