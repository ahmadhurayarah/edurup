import React from "react";
import Image from "next/image";
import { dataScienceAICourseData } from "./data";

const Marq = () => {
  return (
    <>
      <div className="px-[10rem] space-y-6">
        {dataScienceAICourseData.company.marqueeImages.map((img, index) => (
          <div key={index} className="relative flex overflow-x-hidden">
            <div className={`${index === 0 ? 'animate-marquee whitespace-nowrap' : index === 1 ? 'animate-marquee3 whitespace-nowrap' : 'animate-marquee whitespace-nowrap'}`}>
              <Image src={img.src} alt={img.alt} width={3424} height={64} className="h-[4rem] object-cover" />
            </div>
            <div className={`absolute top-0 ${index === 0 ? 'animate-marquee2' : index === 1 ? 'animate-marquee4' : 'animate-marquee2'} whitespace-nowrap`}>
              <Image src={img.src} alt={img.alt} width={3424} height={64} className="h-[4rem] object-cover" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Marq;
