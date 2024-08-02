import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const Company = () => {
  return (
    <>
      <div className="min-h-[17rem] sm:min-h-full flex flex-col items-center bg-white">
        <div className="mt-[1rem] sm:mt-[2rem]">
          <h3 className="text-2xl sm:text-5xl font-semibold text-center text-primary dark:text-dark">
            <span className="text-fg">500+</span> Companies have hired
          </h3>
          <h3 className="mt-1 mb-5 sm:mt-5 sm:mb-10 text-center text-2xl sm:text-5xl font-semibold text-primary dark:text-dark">
            Placement Booster learners
          </h3>
        </div>
        <div className="mb-1 sm:mb-10 px-[2rem] sm:px-[14rem] space-y-6">
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee5 sm:animate-marquee whitespace-nowrap">
              <Image
                src="/maurquee1.jpg"
                alt="Marquee Image"
                width={3424} // adjust width as per your image dimensions
                height={64} // adjust height as per your image dimensions
                className="h-[1.9rem] sm:h-[4rem] object-cover"
              />
            </div>

            <div className="absolute top-0 animate-marquee6 sm:animate-marquee2 whitespace-nowrap">
              <Image
                src="/maurquee1.jpg"
                alt="Marquee Image"
                width={3424} // adjust width as per your image dimensions
                height={64} // adjust height as per your image dimensions
                className="h-[1.9rem] sm:h-[4rem] object-cover"
              />
            </div>
          </div>
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee7 sm:animate-marquee3 whitespace-nowrap">
              <Image
                src="/maurquee2.jpg"
                alt="Marquee Image"
                width={3424} // adjust width as per your image dimensions
                height={64} // adjust height as per your image dimensions
                className="h-[1.9rem] sm:h-[4rem] object-cover"
              />
            </div>

            <div className="absolute top-0 animate-marquee8 sm:animate-marquee4 whitespace-nowrap">
              <Image
                src="/maurquee2.jpg"
                alt="Marquee Image"
                width={3424} // adjust width as per your image dimensions
                height={64} // adjust height as per your image dimensions
                className="h-[1.9rem] sm:h-[4rem] object-cover"
              />
            </div>
          </div>
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee5 sm:animate-marquee whitespace-nowrap">
              <Image
                src="/maurquee3.jpg"
                alt="Marquee Image"
                width={3424} // adjust width as per your image dimensions
                height={64} // adjust height as per your image dimensions
                className="h-[1.9rem] sm:h-[4rem] object-cover"
              />
            </div>

            <div className="absolute top-0 animate-marquee6 sm:animate-marquee2 whitespace-nowrap">
              <Image
                src="/maurquee3.jpg"
                alt="Marquee Image"
                width={3424} // adjust width as per your image dimensions
                height={64} // adjust height as per your image dimensions
                className="h-[1.9rem] sm:h-[4rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
