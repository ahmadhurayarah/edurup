import React from "react";
import Image from "next/image";
import { fullStackDeveloperCourseData } from "./data";

const Marq = () => {
  return (
    <>
      <div className="px-[10rem] space-y-6">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <Image
              src={fullStackDeveloperCourseData.company.marqueeImages[0].src}
              alt={fullStackDeveloperCourseData.company.marqueeImages[0].alt}
              width={3424} // adjust width as per your image dimensions
              height={64} // adjust height as per your image dimensions
              className="h-[4rem] object-cover"
            />
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            <Image
              src={fullStackDeveloperCourseData.company.marqueeImages[0].src}
              alt={fullStackDeveloperCourseData.company.marqueeImages[0].alt}
              width={3424} // adjust width as per your image dimensions
              height={64} // adjust height as per your image dimensions
              className="h-[4rem] object-cover"
            />
          </div>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee3 whitespace-nowrap">
            <Image
              src={fullStackDeveloperCourseData.company.marqueeImages[1].src}
              alt={fullStackDeveloperCourseData.company.marqueeImages[1].alt}
              width={3424} // adjust width as per your image dimensions
              height={64} // adjust height as per your image dimensions
              className="h-[4rem] object-cover"
            />
          </div>

          <div className="absolute top-0 animate-marquee4 whitespace-nowrap">
            <Image
              src={fullStackDeveloperCourseData.company.marqueeImages[1].src}
              alt={fullStackDeveloperCourseData.company.marqueeImages[1].alt}
              width={3424} // adjust width as per your image dimensions
              height={64} // adjust height as per your image dimensions
              className="h-[4rem] object-cover"
            />
          </div>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <Image
              src={fullStackDeveloperCourseData.company.marqueeImages[2].src}
              alt={fullStackDeveloperCourseData.company.marqueeImages[2].alt}
              width={3424} // adjust width as per your image dimensions
              height={64} // adjust height as per your image dimensions
              className="h-[4rem] object-cover"
            />
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            <Image
              src={fullStackDeveloperCourseData.company.marqueeImages[2].src}
              alt={fullStackDeveloperCourseData.company.marqueeImages[2].alt}
              width={3424} // adjust width as per your image dimensions
              height={64} // adjust height as per your image dimensions
              className="h-[4rem] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Marq;
