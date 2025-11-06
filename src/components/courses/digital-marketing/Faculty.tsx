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
import { digitalMarketingCourseData } from "./data";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: {
      primary: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      gradient: "from-blue-50 to-blue-100",
    },
    purple: {
      primary: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
      gradient: "from-purple-50 to-purple-100",
    },
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

const Faculty = () => {
  const facultyData = digitalMarketingCourseData.faculty;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <div className="pt-[2rem] sm:pt-[2rem] flex flex-col dark:bg-dark w-full overflow-x-hidden">
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
          <section className="overflow-x-hidden w-full flex justify-center">
            <Carousel opts={{ align: "center" }} className="w-full max-w-7xl">
              <CarouselContent className="flex flex-wrap justify-center">
                {facultyData.map((faculty, index) => {
                  const colors = getColorClasses(faculty.color);
                  return (
                    <CarouselItem
                      key={index}
                      className="basis-full sm:basis-1/2 flex justify-center"
                    >
                      <motion.div
                        className="p-2 pt-[2rem] pb-10"
                        variants={cardVariants}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
                          <CardContent className="p-0">
                            <div
                              className={`bg-gradient-to-br ${colors.gradient} p-6 pb-4`}
                            >
                              <div className="flex flex-col items-center">
                                <Avatar className="h-20 w-20 ring-4 ring-white shadow-lg">
                                  <AvatarImage src={faculty.image} />
                                  <AvatarFallback className="text-lg font-semibold text-black">
                                    {faculty.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-1">
                                  {faculty.name}
                                </h3>
                                <div
                                  className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.primary} border ${colors.border}`}
                                >
                                  {faculty.designation}
                                </div>
                              </div>
                            </div>

                            <div className="p-6 pt-4">
                              <div className="grid grid-cols-3 gap-4 mb-6">
                                {[
                                  {
                                    icon: GraduationCap,
                                    label: "Experience",
                                    value: faculty.experience,
                                  },
                                  {
                                    icon: Users,
                                    label: "Students",
                                    value: faculty.students,
                                  },
                                  {
                                    icon: Star,
                                    label: "Rating",
                                    value: faculty.rating,
                                  },
                                ].map((stat, statIndex) => (
                                  <div key={statIndex} className="text-center">
                                    <div className="flex items-center justify-center mb-1">
                                      <stat.icon
                                        className={`h-4 w-4 ${
                                          statIndex === 2
                                            ? "text-yellow-500 fill-current"
                                            : "text-gray-500"
                                        } mr-1`}
                                      />
                                      <span className="text-xs text-gray-500">
                                        {stat.label}
                                      </span>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                      {stat.value}
                                    </p>
                                  </div>
                                ))}
                              </div>

                              <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                                  <GraduationCap className="h-4 w-4 mr-2" />
                                  Expertise Areas
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {faculty.subjects.map((subject, idx) => (
                                    <span
                                      key={idx}
                                      className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.primary} border ${colors.border}`}
                                    >
                                      {subject}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {faculty.url && faculty.socialMedia && (
                                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                  <Link
                                    href={faculty.url}
                                    target="_blank"
                                    className="group/link"
                                  >
                                    <div className="flex items-center justify-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                      <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="h-5 w-5 text-blue-600"
                                      />
                                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        View LinkedIn Profile
                                      </span>
                                      <ArrowUpRight className="h-4 w-4 text-gray-400" />
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </section>
        </motion.div>
      </div>
      <Separator />
    </>
  );
};

export default Faculty;
