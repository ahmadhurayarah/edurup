"use client";
import Image from "next/image";
import React from "react";

const CourseInfo = () => {
  const infoData = [
    {
      title: "COURSE DURATION",
      description: "4 Months, if completed as per the schedule",
      imageSrc: "/CourseInfo/download.png",
      imageAlt: "Course Duration",
      imageWidth: 128,
      imageHeight: 128,
    },
    {
      title: "ELIGIBILITY",
      description:
        "B. Tech (all branches), BSc, B.Com, BBA, etc. No CGPA cut-off",
      imageSrc: "/CourseInfo/download-1.png",
      imageAlt: "Eligibility",
      imageWidth: 137,
      imageHeight: 136,
    },
    {
      title: "ONLINE",
      description: "2 Hours Classes and 2 Hours Labs Every Day",
      imageSrc: "/CourseInfo/download-2.png",
      imageAlt: "Online",
      imageWidth: 134,
      imageHeight: 134,
    },
  ];

  return (
    <section className="flex flex-col items-center bg-dark py-8 sm:py-16">
      <div className="container mx-auto flex flex-wrap justify-center gap-8 sm:gap-16">
        {infoData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full sm:w-1/3"
          >
            <figure className="mb-4">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={item.imageWidth}
                height={item.imageHeight}
                className="object-contain"
              />
            </figure>
            <div className="text-center">
              <h3 className="text-lg sm:text-2xl font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-lg text-white">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseInfo;
