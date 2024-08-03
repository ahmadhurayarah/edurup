"use client";
import React from "react";
import Image from "next/image";

const courseInfo = [
  {
    imgSrc: "/CourseInfo/download.png",
    title: "COURSE DURATION",
    description: "4 Months, if completed as per the schedule",
  },
  {
    imgSrc: "/CourseInfo/download-1.png",
    title: "ELIGIBILITY",
    description:
      "B. Tech (all branches), BSc, B.Com, BBA, etc. No CGPA cut-off",
  },
  {
    imgSrc: "/CourseInfo/download-2.png",
    title: "ONLINE",
    description: "2 Hours Classes and 2 Hours Labs Every Day",
  },
];

const CourseInfo = () => {
  return (
    <div className="py-10 bg-dark flex flex-col items-center">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        {courseInfo.map((info, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={info.imgSrc}
              alt={info.title}
              width={100}
              height={137}
              className="object-contain"
            />
            <div className="text-center">
              <h3 className="text-lg sm:text-xl text-white font-semibold mt-2">
                {info.title}
              </h3>
              <p className="text-sm sm:text-md text-gray-400 mt-1">
                {info.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseInfo;
