"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const CourseBanner = () => {
  return (
    <section className="bg-[#2B1F5F] text-white py-16 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
        {/* Left: Course Info */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Digital Marketing PGP
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            32 week online Digital Marketing Course with Certification and 100% Placement Support
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 text-gray-300">
            <div className="flex flex-col items-start">
              <span className="font-semibold">Live</span>
              <span className="text-sm">Sessions on Zoom</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-semibold">32 Weeks</span>
              <span className="text-sm">Course Duration</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-semibold">Mentorship</span>
              <span className="text-sm">With Experienced Professionals</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-semibold">Placement</span>
              <span className="text-sm">100% Support till Job</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 w-full sm:w-auto">
              Request a Callback
            </Button>
            <Button className="bg-white text-[#2B1F5F] hover:bg-gray-200 w-full sm:w-auto">
              Download Curriculum
            </Button>
          </div>
        </div>

        {/* Right: Pricing Box */}
        <div className="flex-1 max-w-sm bg-white text-black rounded-xl shadow-lg p-6 relative">
          <div className="absolute top-4 right-4 bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded">
            28% OFF
          </div>
          <div className="mb-4">
            <span className="text-sm text-gray-600">Cohort 14 starts on</span>
            <h2 className="text-2xl font-bold">Nov 1</h2>
          </div>
          <div className="mb-4">
            <span className="text-gray-600 text-sm">Cost</span>
            <h3 className="text-3xl font-bold">
              ₹70,000 <span className="text-gray-400 line-through text-lg">₹1,00,000</span>
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              EMI starts from ₹10,000/month
            </p>
          </div>
          <Button className="w-full bg-black text-white flex justify-center items-center gap-2 mt-4 hover:bg-gray-900">
            Enroll Now &rarr;
          </Button>
          <p className="text-xs text-gray-500 mt-2">
            Discount coupon of 28% available at checkout
          </p>
        </div>
      </div>

      {/* Bottom WhatsApp / Callback Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500 w-full sm:w-auto">
          Request a Callback
        </Button>
        <Button className="bg-green-500 text-white hover:bg-green-600 w-full sm:w-auto">
          Message us on WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default CourseBanner;
