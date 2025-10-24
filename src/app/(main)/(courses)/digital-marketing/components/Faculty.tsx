"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "keen-slider/keen-slider.min.css";
import { ArrowUpRight, GraduationCap, Star, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const facultyData = [
  {
    name: "Rupesh Kumar",
    designation: "Chief Marketing Officer",
    image: "/mentor3.jpg",
    subjects: ["Digital Marketing", "Performance Marketing"],
    socialMedia: "linkedin",
    url: "https://in.linkedin.com/in/neelam-rupesh",
    experience: "8+ Years",
    students: "2,500+",
    rating: "4.9",
    color: "blue",
  },
  // {
  //   name: "Sirija Neelam",
  //   designation: "Data Scientist",
  //   image: "/mentor1.jpeg",
  //   subjects: [
  //     "Python",
  //     "Artificial Intelligence",
  //     "Data Science & Machine Learning",
  //   ],
  //   socialMedia: "linkedin",
  //   url: "https://www.linkedin.com/in/sirija-devi-a35561160?trk=blended-typeahead",
  //   experience: "6+ Years",
  //   students: "1,800+",
  //   rating: "4.8",
  //   color: "green",
  // },
  {
    name: "Mukesh Kumar",
    designation: "General Manager",
    image: "/mentor2.jpg",
    subjects: ["Digital Strategy", "Product Marketing"],
    socialMedia: "linkedin",
    url: "https://www.linkedin.com/in/askmukesh?trk=blended-typeahead",
    experience: "10+ Years",
    students: "3,200+",
    rating: "4.9",
    color: "purple",
  },
  // {
  //   name: "Shabudeen",
  //   designation: "Senior Software Engineer",
  //   image: "/mentor4.jpg",
  //   subjects: ["React.js & Node.js", "Frontend Development"],
  //   socialMedia: null,
  //   url: null,
  //   experience: "5+ Years",
  //   students: "1,200+",
  //   rating: "4.7",
  //   color: "orange",
  // },
];

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: {
      primary: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      gradient: "from-blue-50 to-blue-100",
    },
    // green: {
    //   primary: "text-green-600",
    //   bg: "bg-green-50",
    //   border: "border-green-200",
    //   gradient: "from-green-50 to-green-100",
    // },
    purple: {
      primary: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
      gradient: "from-purple-50 to-purple-100",
    },
    // orange: {
    //   primary: "text-orange-600",
    //   bg: "bg-orange-50",
    //   border: "border-orange-200",
    //   gradient: "from-orange-50 to-orange-100",
    // },
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

const Faculty = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <>
      <div className="pt-[2rem] sm:pt-[2rem] flex flex-col dark:bg-dark w-full">
        <motion.div 
          className="px-[2rem] flex justify-center"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-2xl sm:text-5xl font-semibold text-center text-primary"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Faculty that brings out the <span className="text-fg"> best</span>{" "}
            in you
          </motion.h1>
        </motion.div>
        <motion.div
          className="w-full px-4 sm:px-6 md:px-8 lg:px-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full"
          >
             <CarouselContent className="flex justify-center">
              {facultyData.map((faculty, index) => {
                const colors = getColorClasses(faculty.color);
                return (
                  <CarouselItem
                    key={index}
                    className="basis-full sm:basis-full md:basis-1/3 lg:basis-1/4"
                  >
                    <motion.div 
                      className="p-2 pt-[2rem] pb-10"
                      variants={cardVariants}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        initial={{ opacity: 0, rotateY: -15 }}
                        whileInView={{ opacity: 1, rotateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
                        <CardContent className="p-0">
                        {/* Header with gradient background */}
                        <div
                          className={`bg-gradient-to-br ${colors.gradient} p-6 pb-4`}
                        >
                          <div className="flex flex-col items-center">
                            <motion.div 
                              className="relative"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true, amount: 0.3 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1 + 0.2,
                                type: "spring",
                                stiffness: 200
                              }}
                            >
                              <Avatar className="h-20 w-20 ring-4 ring-white shadow-lg">
                                <AvatarImage src={faculty.image} />
                                <AvatarFallback className="text-lg font-semibold text-black">
                                  {faculty.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <motion.div 
                                className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md"
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: index * 0.1 + 0.4,
                                  type: "spring",
                                  stiffness: 300
                                }}
                              >
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              </motion.div>
                            </motion.div>

                            <motion.h3 
                              className="text-xl font-bold text-gray-900  mt-4 mb-1"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.3 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1 + 0.3
                              }}
                            >
                              {faculty.name}
                            </motion.h3>

                            <motion.div
                              className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.primary} border ${colors.border}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, amount: 0.3 }}
                              transition={{ 
                                duration: 0.4, 
                                delay: index * 0.1 + 0.5,
                                type: "spring",
                                stiffness: 200
                              }}
                            >
                              {faculty.designation}
                            </motion.div>
                          </div>
                        </div>

                        {/* Stats Section */}
                        <motion.div 
                          className="p-6 pt-4"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.1 + 0.6
                          }}
                        >
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            {[
                              { icon: GraduationCap, label: "Experience", value: faculty.experience },
                              { icon: Users, label: "Students", value: faculty.students },
                              { icon: Star, label: "Rating", value: faculty.rating }
                            ].map((stat, statIndex) => (
                              <motion.div 
                                key={statIndex}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: index * 0.1 + 0.7 + statIndex * 0.1,
                                  type: "spring",
                                  stiffness: 200
                                }}
                              >
                                <div className="flex items-center justify-center mb-1">
                                  <stat.icon className={`h-4 w-4 ${statIndex === 2 ? 'text-yellow-500 fill-current' : 'text-gray-500'} mr-1`} />
                                  <span className="text-xs text-gray-500">
                                    {stat.label}
                                  </span>
                                </div>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                  {stat.value}
                                </p>
                              </motion.div>
                            ))}
                          </div>

                          {/* Subjects Section */}
                          <motion.div 
                            className="mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: index * 0.1 + 1.0
                            }}
                          >
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                              <GraduationCap className="h-4 w-4 mr-2" />
                              Expertise Areas
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {faculty.subjects.map((subject, idx) => (
                                <motion.span
                                  key={idx}
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.primary} border ${colors.border}`}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true, amount: 0.3 }}
                                  transition={{ 
                                    duration: 0.3, 
                                    delay: index * 0.1 + 1.1 + idx * 0.1,
                                    type: "spring",
                                    stiffness: 200
                                  }}
                                >
                                  {subject}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>

                          {/* LinkedIn Profile Link */}
                          {faculty.url && faculty.socialMedia && (
                            <motion.div 
                              className="pt-4 border-t border-gray-200 dark:border-gray-700"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.3 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1 + 1.2
                              }}
                            >
                              <Link
                                href={faculty.url}
                                target="_blank"
                                className="group/link"
                              >
                                <motion.div 
                                  className="flex items-center justify-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="h-5 w-5 text-blue-600 group-hover/link:text-blue-700 transition-colors"
                                  />
                                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/link:text-gray-900 dark:group-hover/link:text-white transition-colors">
                                    View LinkedIn Profile
                                  </span>
                                  <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover/link:text-gray-600 dark:group-hover/link:text-gray-300 transition-colors" />
                                </motion.div>
                              </Link>
                            </motion.div>
                          )}
                        </motion.div>
                      </CardContent>
                    </Card>
                      </motion.div>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
      <Separator />
    </>
  );
};

export default Faculty;
