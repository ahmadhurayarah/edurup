import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { fullStackDeveloperCourseData } from "./data";

const Language = () => {
  const tools = fullStackDeveloperCourseData.language.tools;
  return (
    <>
      <div className="w-full bg-white py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl sm:text-5xl font-semibold text-center text-gray-900 dark:text-white">
              Learning <span className="text-fg">Journey</span>
            </h2>
          </div>

          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                COURSE JOURNEY
              </p>
              <h3 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                Learn all the
              </h3>
              <h3 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                Tools that are{" "}
                <span className="relative">
                  In-demand
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-fg"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C20 2 40 10 60 6C80 2 100 10 120 6C140 2 160 10 180 6C198 2"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h3>
              
              {/* Decorative Design Element */}
              <div className="mt-6">
                <div className="h-1 bg-gradient-to-r from-fg via-fg/50 to-transparent w-64 rounded-full"></div>
              </div>
            </div>

            {/* Right Side - Tools Grid */}
            <div className="flex-1 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-6 sm:gap-8">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <Image 
                      src={tool.icon} 
                      alt={tool.name} 
                      width={200} 
                      height={200} 
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2"
                    />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Language;