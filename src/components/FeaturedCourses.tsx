"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Check,
  ArrowRight,
  Download,
  Flame,
  Users,
  Clock,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const FeaturedCourses = () => {
  const allCourses = [
    // Software Courses
    {
      title: "Data Science with  AI",
      duration: "8 WEEKS",
      batchStart: "Nov 30, 2025",
      scholarship: "Yes",
      emi: "Rs. 5,000",
      eligibility: "Open for All",
      enrolled: "400+",
      color: "blue",
      category: "software",
      features: [
        "Get A industry certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 1000+ coding challenges & Projects",
        "1 year placement support",
        
      ],
    },
    {
      title: "Full Stack Software Developer",
      duration: "8 WEEKS",
      batchStart: "Nov 30, 2025",
      scholarship: "Yes",
      emi: "Rs. 5,000",
      eligibility: "Open for All",
      enrolled: "300+",
      color: "green",
      category: "software",
      features: [
        "Get A industry certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 1000+ coding challenges & Projects",
        "1 year placement support",
        
      ],
    },
    {
      title: "Data Analyst",
      duration: "8 WEEKS",
      batchStart: "Dec 15, 2025",
      scholarship: "Yes",
      emi: "Rs. 5,000",
      eligibility: "Open for All",
      enrolled: "850+",
      color: "purple",
      category: "software",
      features: [
        "Get A industry certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 1000+ coding challenges & Projects",
        "1 year placement support",
       
      ],
    },
    // Business Courses
    {
      title: "Advanced Digital Marketing",
      duration: "3 MONTHS",
      batchStart: "Oct 20, 2025",
      scholarship: "Yes",
      emi: "Rs. 4,500",
      eligibility: "Open for All",
      enrolled: "2,100+",
      color: "orange",
      category: "business",
      features: [
        "Get A professional certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 10,000+ coding questions in our Arena",
        "100% Placement Assistance (Lifetime)",
        "No coding experience required",
      ],
    },
    {
      title: "Financial Analyst Certification",
      duration: "4 MONTHS",
      batchStart: "Jan 10, 2026",
      scholarship: "Yes",
      emi: "Rs. 5,200",
      eligibility: "Open for All",
      enrolled: "1,500+",
      color: "red",
      category: "business",
      features: [
        "Get A professional certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 10,000+ coding questions in our Arena",
        "100% Placement Assistance (Lifetime)",
        "No coding experience required",
      ],
    },
    {
      title: "Business Development Mastery",
      duration: "2 MONTHS",
      batchStart: "Feb 5, 2026",
      scholarship: "Yes",
      emi: "Rs. 3,800",
      eligibility: "Open for All",
      enrolled: "950+",
      color: "teal",
      category: "business",
      features: [
        "Get A professional certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 10,000+ coding questions in our Arena",
        "100% Placement Assistance (Lifetime)",
        "No coding experience required",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        primary: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200",
        button: "bg-blue-600 hover:bg-blue-700",
        check: "text-blue-600",
        gradient: "from-blue-50 to-blue-100",
      },
      green: {
        primary: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200",
        button: "bg-green-600 hover:bg-green-700",
        check: "text-green-600",
        gradient: "from-green-50 to-green-100",
      },
      purple: {
        primary: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200",
        button: "bg-purple-600 hover:bg-purple-700",
        check: "text-purple-600",
        gradient: "from-purple-50 to-purple-100",
      },
      orange: {
        primary: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200",
        button: "bg-orange-600 hover:bg-orange-700",
        check: "text-orange-600",
        gradient: "from-orange-50 to-orange-100",
      },
      red: {
        primary: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-200",
        button: "bg-red-600 hover:bg-red-700",
        check: "text-red-600",
        gradient: "from-red-50 to-red-100",
      },
      teal: {
        primary: "text-teal-600",
        bg: "bg-teal-50",
        border: "border-teal-200",
        button: "bg-teal-600 hover:bg-teal-700",
        check: "text-teal-600",
        gradient: "from-teal-50 to-teal-100",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const renderGridCourseCard = (
    course: any,
    index: number,
    compact = false
  ) => {
    const colors = getColorClasses(course.color);
    return (
      <motion.div
        key={index}
        className={compact ? "w-full" : "w-full"}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98 }}
      >
        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            {/* Header with gradient background */}
            <div className={`bg-gradient-to-br ${colors.gradient} p-6 pb-4`}>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.primary} border ${colors.border}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    ONLINE
                  </motion.span>
                  <motion.span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.primary} border ${colors.border}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {course.duration}
                  </motion.span>
                </div>
                <CardTitle
                  className={`text-lg font-bold ${colors.primary} leading-tight mb-4`}
                >
                  {course.title}
                </CardTitle>
              </div>
            </div>

            <div className="p-6 pt-4">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: Clock, label: "Batch", value: course.batchStart },
                  { icon: TrendingUp, label: "EMI", value: course.emi },
                  {
                    icon: Check,
                    label: "Scholarship",
                    value: course.scholarship,
                  },
                  { icon: Users, label: "Students", value: course.enrolled },
                ].map((stat, statIndex) => (
                  <motion.div
                    key={statIndex}
                    className="text-center bg-gray-50 dark:bg-gray-700/30 rounded-lg p-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + statIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-center mb-1">
                      <stat.icon className={`h-3 w-3 ${colors.primary} mr-1`} />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                  <Check className={`h-4 w-4 mr-2 ${colors.primary}`} />
                  Course Highlights
                </h4>
                <div className="space-y-2">
                  {course.features
                    .slice(0, 4)
                    .map((feature: string, idx: number) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Check
                          className={`w-4 h-4 mt-0.5 ${colors.check} flex-shrink-0`}
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 mb-4">
                <Button
                  className={`w-full ${colors.button} text-white`}
                  size="sm"
                >
                  Explore Course
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-gray-300 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
              </div>

              {/* Enrollment Info */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>{course.enrolled} Students enrolled</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  const renderCourseCard = (course: any, index: number) => {
    const colors = getColorClasses(course.color);
    return (
      <motion.div
        key={index}
        className="w-[380px] flex-shrink-0 p-2"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            {/* Header with gradient background */}
            <div className={`bg-gradient-to-br ${colors.gradient} p-6 pb-4`}>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.primary} border ${colors.border}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    ONLINE
                  </motion.span>
                  <motion.span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.primary} border ${colors.border}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {course.duration}
                  </motion.span>
                </div>
                <CardTitle
                  className={`text-xl font-bold ${colors.primary} leading-tight mb-4`}
                >
                  {course.title}
                </CardTitle>
              </div>
            </div>

            <div className="p-6 pt-4">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: Clock, label: "Batch", value: course.batchStart },
                  { icon: TrendingUp, label: "EMI", value: course.emi },
                  {
                    icon: Check,
                    label: "Scholarship",
                    value: course.scholarship,
                  },
                  { icon: Users, label: "Students", value: course.enrolled },
                ].map((stat, statIndex) => (
                  <motion.div
                    key={statIndex}
                    className="text-center bg-gray-50 dark:bg-gray-700/30 rounded-lg p-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + statIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-center mb-1">
                      <stat.icon className={`h-3 w-3 ${colors.primary} mr-1`} />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                  <Check className={`h-4 w-4 mr-2 ${colors.primary}`} />
                  Course Highlights
                </h4>
                <div className="space-y-2">
                  {course.features
                    .slice(0, 4)
                    .map((feature: string, idx: number) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Check
                          className={`w-4 h-4 mt-0.5 ${colors.check} flex-shrink-0`}
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 mb-4">
                <Button
                  className={`w-full ${colors.button} text-white`}
                  size="sm"
                >
                  Explore Course
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-gray-300 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
              </div>

              {/* Enrollment Info */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>{course.enrolled} Students enrolled</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <>
      <div className="pt-[1.3rem] sm:pt-[2rem] pb-[4rem] px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center dark:bg-dark">
        <h1 className="mb-4 text-3xl sm:text-5xl font-semibold text-center text-gray-900 dark:text-white">
          Industry Certified{" "}
          <span className="text-blue-600 dark:text-blue-400">Courses</span>
        </h1>
        <Tabs
          defaultValue="sc"
          className="w-full max-w-[1200px] flex flex-col items-center justify-center"
        >
          <TabsList className="mb-5 hidden sm:grid w-auto sm:w-full grid-cols-2 bg-gray-100 border border-gray-200 rounded-lg p-1">
            <TabsTrigger
              value="sc"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 hover:bg-blue-50 transition-colors rounded-md"
            >
              Software Courses
            </TabsTrigger>
            <TabsTrigger
              value="bc"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-gray-700 hover:bg-green-50 transition-colors rounded-md"
            >
              Business Courses
            </TabsTrigger>
          </TabsList>
          <TabsList className="mb-5 sm:hidden h-11 grid grid-cols-2 bg-gray-100 border border-gray-200 rounded-lg p-1">
            <TabsTrigger
              value="sc"
              className="text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 hover:bg-blue-50 transition-colors rounded-md"
            >
              Software Courses
            </TabsTrigger>
            <TabsTrigger
              value="bc"
              className="text-sm data-[state=active]:bg-green-600 data-[state=active]:text-white text-gray-700 hover:bg-green-50 transition-colors rounded-md"
            >
              Business Courses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sc" className="w-full hidden min-[1200px]:block">
            <div className="flex items-center justify-center gap-8 px-6 lg:px-8">
              {allCourses
                .filter((course) => course.category === "software")
                .map((course, index) => renderCourseCard(course, index))}
            </div>
          </TabsContent>

          <TabsContent value="bc" className="w-full hidden min-[1200px]:block">
            <div className="flex items-center justify-center gap-8 px-6 lg:px-8">
              {allCourses
                .filter((course) => course.category === "business")
                .map((course, index) => renderCourseCard(course, index))}
            </div>
          </TabsContent>

          <TabsContent
            value="sc"
            className="hidden min-[700px]:block min-[1200px]:hidden"
          >
            <div className="w-full px-4 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {allCourses
                  .filter((course) => course.category === "software")
                  .map((course, index) => renderGridCourseCard(course, index))}
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="bc"
            className="hidden min-[700px]:block min-[1200px]:hidden"
          >
            <div className="w-full px-4 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {allCourses
                  .filter((course) => course.category === "business")
                  .map((course, index) => renderGridCourseCard(course, index))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sc" className="block min-[700px]:hidden w-full">
            <div className="w-full px-2 sm:px-4">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-1 md:-ml-2">
                  {allCourses
                    .filter((course) => course.category === "software")
                    .map((course, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-1 md:pl-2 md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="px-2">
                          {renderGridCourseCard(course, index, true)}
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </TabsContent>

          <TabsContent value="bc" className="block min-[700px]:hidden w-full">
            <div className="w-full px-2 sm:px-4">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-1 md:-ml-2">
                  {allCourses
                    .filter((course) => course.category === "business")
                    .map((course, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-1 md:pl-2 md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="px-2">
                          {renderGridCourseCard(course, index, true)}
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Separator />
    </>
  );
};

export default FeaturedCourses;
