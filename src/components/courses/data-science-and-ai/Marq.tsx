import React from "react";
import Image from "next/image";

const Marq = () => {
  return (
    <>
      <div className="px-[10rem] space-y-6">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <Image
              src="/maurquee1.jpg"
              alt="Marquee Image"
              width={3424} // adjust width as per your image dimensions
              height={64} // adjust height as per your image dimensions
              className="h-[4rem] object-cover"
            />
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            <Image
              src="/maurquee1.jpg"
              alt="Marquee Image"
              width={3424} // adjust width as per your image dimensions
              height={64} // adjust height as per your image dimensions
              className="h-[4rem] object-cover"
            />
          </div>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee3 whitespace-nowrap">
            <Image
              src="/maurquee2.jpg"
              alt="Marquee Image"
              width={3424} // adjust width as per your image dimensions
              height={64} // adjust height as per your image dimensions
              className="h-[4rem] object-cover"
            />
          </div>

          <div className="absolute top-0 animate-marquee4 whitespace-nowrap">
            <Image
              src="/maurquee2.jpg"
              alt="Marquee Image"
              width={3424} // adjust width as per your image dimensions
              height={64} // adjust height as per your image dimensions
              className="h-[4rem] object-cover"
            />
          </div>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <Image
              src="/maurquee3.jpg"
              alt="Marquee Image"
              width={3424} // adjust width as per your image dimensions
              height={64} // adjust height as per your image dimensions
              className="h-[4rem] object-cover"
            />
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            <Image
              src="/maurquee3.jpg"
              alt="Marquee Image"
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
