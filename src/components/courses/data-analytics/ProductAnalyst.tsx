"use client";
import { useEffect, useState } from 'react';
import { dataAnalyticsCourseData } from "./data";

export default function ProductAnalyst() {
  const { productAnalyst } = dataAnalyticsCourseData;
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
 const titles = productAnalyst.titles.map(t => t.replace(/ /g,'\n'));

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
    <section className="w-full bg-[#1b0944] text-white py-24 px-4 flex flex-col items-center">
      <div className="text-center">
        <p className="text-sm uppercase tracking-wide text-gray-300 mb-8">
          {productAnalyst.heading}
        </p>

        <div className="relative h-40 flex items-center justify-center mb-8">
          {/* Single heading that transforms */}
         <h2 
  className="text-6xl font-bold absolute transition-all duration-600 ease-in-out whitespace-pre-line text-center"
  style={{
    transform: isAnimating ? 'translateY(80px) scale(0.95)' : 'translateY(0) scale(1)',
    opacity: isAnimating ? 0 : 1
  }}
>
  {titles[currentTitle]}
</h2>
        </div>

        <div className="mt-8 w-[900px] h-1.5 bg-white mx-auto"></div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row gap-2">
        {/* Average Salary Card */}
        <div className="bg-[#5a1cc4] px-24 py-8 rounded-l text-center min-w-[320px] shadow-lg">
          <p className="text-l text-gray-200">Average Analyst Salary</p>
          <h3 className="text-4xl font-bold mt-1">{productAnalyst.salaries.average}</h3>
        </div>

        {/* Highest Salary Card */}
        <div className="bg-[#742bff] px-24 py-8 rounded-l text-center min-w-[320px] shadow-lg">
          <p className="text-l text-gray-200">Highest Salary at {productAnalyst.salaries.highestCompany}</p>
          <h3 className="text-4xl font-bold mt-1">{productAnalyst.salaries.highest}</h3>
        </div>
      </div>
    </section>
  );
}