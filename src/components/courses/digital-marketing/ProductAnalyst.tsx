"use client";
import { useEffect, useState } from 'react';
import { digitalMarketingCourseData } from "./data";

export default function ProductAnalyst() {
  const { productAnalyst } = digitalMarketingCourseData;
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const titles = productAnalyst.titles;

  useEffect(() => {
    const startAnimation = () => {
      let index = 0;
      
      const animate = () => {
        // First, make current heading go down
        setIsAnimating(true);
        
        // After going down, change to next heading and make it appear from below
        setTimeout(() => {
          index = (index + 1) % titles.length;
          setCurrentTitle(index);
          setIsAnimating(false);
          
          // Start next animation after a microsecond pause
          setTimeout(animate, 1500); // Pause between transitions
        }, 600); // Time for going down
      };
      
      animate();
    };

    // Start animation when component mounts
    const timer = setTimeout(startAnimation, 1000);
    
    return () => clearTimeout(timer);
  }, [titles.length]);

  return (
    <section className="w-full bg-[#1b0944] text-white py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center">
      <div className="text-center w-full max-w-6xl">
        <p className="text-sm sm:text-base uppercase tracking-wide text-gray-300 mb-6 sm:mb-8">
          {productAnalyst.heading}
        </p>

        <div className="relative h-32 sm:h-40 flex items-center justify-center mb-8 sm:mb-8">
          {/* Single heading that transforms */}
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold absolute transition-all duration-600 ease-in-out whitespace-pre-line text-center leading-tight"
            style={{
              transform: isAnimating ? 'translateY(80px) scale(0.95)' : 'translateY(0) scale(1)',
              opacity: isAnimating ? 0 : 1
            }}
          >
            {titles[currentTitle]}
          </h2>
        </div>

        <div className="mt-8 w-full max-w-2xl h-1.5 bg-white mx-auto"></div>
      </div>

      <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-4xl">
        {/* Average Salary Card */}
        <div className="bg-[#5a1cc4] px-8 sm:px-16 md:px-24 py-6 sm:py-8 rounded-lg sm:rounded-l text-center w-full sm:min-w-[280px] md:min-w-[320px] shadow-lg">
          <p className="text-sm sm:text-base text-gray-200 mb-2">Average Salary</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{productAnalyst.salaries.average}</h3>
        </div>

        {/* Highest Salary Card */}
        <div className="bg-[#742bff] px-8 sm:px-16 md:px-24 py-6 sm:py-8 rounded-lg sm:rounded-l text-center w-full sm:min-w-[280px] md:min-w-[320px] shadow-lg">
          <p className="text-sm sm:text-base text-gray-200 mb-2">Highest Salary at {productAnalyst.salaries.highestCompany}</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{productAnalyst.salaries.highest}</h3>
        </div>
      </div>
    </section>
  );
}