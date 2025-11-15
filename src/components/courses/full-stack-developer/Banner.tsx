"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { fullStackDeveloperCourseData } from "./data";

interface CourseBannerProps {
  cityName?: string;
}

const CourseBanner = ({ cityName = "Bangalore" }: CourseBannerProps) => {
  const { course, banner } = fullStackDeveloperCourseData;
    const handleEnrollClick = () => {
    // Open admission form in new tab
    const admissionUrl = `/admission-form?course=${encodeURIComponent(course.name)}`;
    window.open(admissionUrl, '_blank');
  };
  return (
    <section
      className="py-12 px-4 sm:px-16"
      style={{
        backgroundColor: banner.backgroundColor,
        color: banner.textColor,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* Left: Course Info */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          <h1 className="text-3xl sm:text-5xl font-bold leading-snug">
            Certified Full Stack Developer Course
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            {course.description}
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-4 text-gray-300">
            {course.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start bg-[#3B2A80] px-4 py-2 rounded-md w-full sm:w-auto"
              >
                <span className="font-semibold">{feature.title}</span>
                <span className="text-xs sm:text-sm">{feature.subtitle}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 w-full sm:w-auto py-3 sm:py-2 transition text-sm sm:text-base">
              Request a Callback
            </Button>
            <Button className="bg-white text-[#2B1F5F] hover:bg-gray-200 w-full sm:w-auto py-3 sm:py-2 transition text-sm sm:text-base">
              Download Curriculum
            </Button>
          </div>
        </div>

        {/* Right: Pricing Box */}
        <div className="flex-1 w-full lg:max-w-lg bg-white text-black rounded-2xl shadow-2xl p-6 sm:p-8 relative">
          <div className="absolute top-3 right-3 bg-green-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
            {course.price.discountPercentage}% OFF
          </div>

          <div className="mb-5">
            <span className="text-gray-600 text-sm sm:text-base">
              Cohort {banner.cohort} starts on
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">
              {banner.cohortStartDate}
            </h2>
          </div>

          <div className="mb-5">
            <span className="text-gray-600 text-sm sm:text-base">Cost</span>
            <h3 className="text-3xl sm:text-4xl font-bold mt-1">
              ₹{course.price.discounted.toLocaleString("en-IN")}{" "}
              <span className="text-gray-400 line-through text-base sm:text-lg">
                ₹{course.price.original.toLocaleString("en-IN")}
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              EMI starts from ₹{course.price.emi.toLocaleString("en-IN")}/month
            </p>
          </div>

           <Button 
            onClick={handleEnrollClick}
            className="w-full bg-black text-white flex justify-center items-center gap-2 mt-4 py-3 sm:py-4 hover:bg-gray-900 transition text-sm sm:text-base"
          >
            Enroll Now &rarr;
          </Button>


          <p className="text-xs text-gray-500 mt-3 text-center">
            Discount coupon of 28% available at checkout
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseBanner;

