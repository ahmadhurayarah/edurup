"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const CourseBanner = () => {
  const pathname = usePathname(); // e.g. /main/courses/data-science-course-chennai
  const parts = pathname.split("/").filter(Boolean);

  // Extract course and city names from URL
  const lastPart = parts[parts.length - 1] || "";
  const formatted = lastPart.replace(/-/g, " "); // → data science course chennai
  const words = formatted.split(" ");
  const city = words.pop(); // last word
  const course = words.join(" "); // remaining words

  // Capitalize nicely
  const formatTitle = (text: string) =>
    text.replace(/\b\w/g, (char) => char.toUpperCase());

  const courseTitle = formatTitle(course);
  const cityTitle = formatTitle(city || "Your City");

  return (
    <section className="bg-[#6ed290] text-black py-12 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

        {/* Left: Course Info */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          <h1 className="text-3xl sm:text-5xl font-bold leading-snug">
            Best {courseTitle}  {cityTitle}.
          </h1>
          <p className="text-base sm:text-lg text-black">
            32-week online {courseTitle} with Certification and 100% Placement Support in {cityTitle}.
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-4 text-black">
            {[
              { title: "Live", subtitle: "Sessions on Zoom" },
              { title: "32 Weeks", subtitle: "Course Duration" },
              { title: "Mentorship", subtitle: "With Experienced Professionals" },
              { title: "Placement", subtitle: "100% Support till Job" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start bg-[#ffffff] px-4 py-2 rounded-md w-full sm:w-auto"
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
            <Button className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto py-3 sm:py-2 transition text-sm sm:text-base">
              Download Curriculum
            </Button>
          </div>
        </div>

        {/* Right: Pricing Box */}
        <div className="flex-1 w-full lg:max-w-lg bg-white text-black rounded-2xl shadow-2xl p-6 sm:p-8 relative">
          <div className="absolute top-3 right-3 bg-green-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
            28% OFF
          </div>

          <div className="mb-5">
            <span className="text-gray-600 text-sm sm:text-base">Cohort 14 starts on</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">Nov 1</h2>
          </div>

          <div className="mb-5">
            <span className="text-gray-600 text-sm sm:text-base">Cost</span>
            <h3 className="text-3xl sm:text-4xl font-bold mt-1">
              ₹70,000 <span className="text-gray-400 line-through text-base sm:text-lg">₹1,00,000</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              EMI starts from ₹10,000/month
            </p>
          </div>

          <Button className="w-full bg-black text-white flex justify-center items-center gap-2 mt-4 py-3 sm:py-4 hover:bg-gray-900 transition text-sm sm:text-base">
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
