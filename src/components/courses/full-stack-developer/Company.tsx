import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { fullStackDeveloperCourseData } from "./data";

const Company = () => {
  return (
    <>
      <div className="min-h-[17rem] sm:min-h-full flex flex-col items-center bg-white w-full">
        <div className="mt-[1rem] sm:mt-[2rem] w-full">
          <h3 className="text-2xl sm:text-5xl font-semibold text-center text-primary dark:text-dark">
            <span className="text-fg">{fullStackDeveloperCourseData.company.heading.split(" ")[0]}</span>{" "}
            {fullStackDeveloperCourseData.company.heading.replace(/^\S+\s/, "")}
          </h3>
          <h3 className="mt-1 mb-5 sm:mt-5 sm:mb-10 text-center text-2xl sm:text-5xl font-semibold text-primary dark:text-dark">
            {fullStackDeveloperCourseData.company.subheading}
          </h3>
        </div>
        
        {/* Full width container with no horizontal padding */}
        <div className="mb-1 sm:mb-10 w-full space-y-6">
          <div className="relative flex overflow-x-hidden w-full">
            <div className="animate-marquee5 sm:animate-marquee whitespace-nowrap w-full">
              <Image
                src={fullStackDeveloperCourseData.company.marqueeImages[0].src}
                alt={fullStackDeveloperCourseData.company.marqueeImages[0].alt}
                width={3424}
                height={64}
                className="h-[1.9rem] sm:h-[4rem] object-cover w-full"
              />
            </div>

            <div className="absolute top-0 animate-marquee6 sm:animate-marquee2 whitespace-nowrap w-full">
              <Image
                src={fullStackDeveloperCourseData.company.marqueeImages[0].src}
                alt={fullStackDeveloperCourseData.company.marqueeImages[0].alt}
                width={3424}
                height={64}
                className="h-[1.9rem] sm:h-[4rem] object-cover w-full"
              />
            </div>
          </div>
          
          <div className="relative flex overflow-x-hidden w-full">
            <div className="animate-marquee7 sm:animate-marquee3 whitespace-nowrap w-full">
              <Image
                src={fullStackDeveloperCourseData.company.marqueeImages[1].src}
                alt={fullStackDeveloperCourseData.company.marqueeImages[1].alt}
                width={3424}
                height={64}
                className="h-[1.9rem] sm:h-[4rem] object-cover w-full"
              />
            </div>

            <div className="absolute top-0 animate-marquee8 sm:animate-marquee4 whitespace-nowrap w-full">
              <Image
                src={fullStackDeveloperCourseData.company.marqueeImages[1].src}
                alt={fullStackDeveloperCourseData.company.marqueeImages[1].alt}
                width={3424}
                height={64}
                className="h-[1.9rem] sm:h-[4rem] object-cover w-full"
              />
            </div>
          </div>
          
          <div className="relative flex overflow-x-hidden w-full">
            <div className="animate-marquee5 sm:animate-marquee whitespace-nowrap w-full">
              <Image
                src={fullStackDeveloperCourseData.company.marqueeImages[2].src}
                alt={fullStackDeveloperCourseData.company.marqueeImages[2].alt}
                width={3424}
                height={64}
                className="h-[1.9rem] sm:h-[4rem] object-cover w-full"
              />
            </div>

            <div className="absolute top-0 animate-marquee6 sm:animate-marquee2 whitespace-nowrap w-full">
              <Image
                src={fullStackDeveloperCourseData.company.marqueeImages[2].src}
                alt={fullStackDeveloperCourseData.company.marqueeImages[2].alt}
                width={3424}
                height={64}
                className="h-[1.9rem] sm:h-[4rem] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;