import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { dataAnalyticsCourseData } from "./data";

const Company = () => {
  const { company } = dataAnalyticsCourseData;
  return (
    <>
      <div className="min-h-[17rem] sm:min-h-full flex flex-col items-center bg-white w-full">
        <div className="mt-[1rem] sm:mt-[2rem] w-full">
          <h3 className="text-2xl sm:text-5xl font-semibold text-center text-primary dark:text-dark">
            <span className="text-fg">{company.heading.split(" ")[0]}</span> {company.heading.split(" ").slice(1).join(" ")}
          </h3>
          <h3 className="mt-1 mb-5 sm:mt-5 sm:mb-10 text-center text-2xl sm:text-5xl font-semibold text-primary dark:text-dark">
            {company.subheading}
          </h3>
        </div>
        
        {/* Full width container with no horizontal padding */}
        <div className="mb-1 sm:mb-10 w-full space-y-6">
          {company.marqueeImages.map((img, index) => (
            <div key={index} className="relative flex overflow-x-hidden w-full">
              <div className={`${index === 0 ? 'animate-marquee5 sm:animate-marquee' : index === 1 ? 'animate-marquee7 sm:animate-marquee3' : 'animate-marquee5 sm:animate-marquee'} whitespace-nowrap w-full`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={3424}
                  height={64}
                  className="h-[1.9rem] sm:h-[4rem] object-cover w-full"
                />
              </div>

              <div className={`absolute top-0 ${index === 0 ? 'animate-marquee6 sm:animate-marquee2' : index === 1 ? 'animate-marquee8 sm:animate-marquee4' : 'animate-marquee6 sm:animate-marquee2'} whitespace-nowrap w-full`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={3424}
                  height={64}
                  className="h-[1.9rem] sm:h-[4rem] object-cover w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Company;