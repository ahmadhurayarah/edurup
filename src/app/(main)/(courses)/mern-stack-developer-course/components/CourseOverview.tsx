"use client";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const eligibilityItems = [
  {
    imgSrc: "/path/to/image1.png",
    text: "Any Degree – B. Tech (all branches), BSc, B.Com, BBA, etc.",
  },
  {
    imgSrc: "/path/to/image2.png",
    text: "All IT & Non-IT Branches – CSE, EEE, Civil, Mech, Bio, etc.",
  },
  {
    imgSrc: "/path/to/image3.png",
    text: "No prior coding knowledge is required.",
  },
  {
    imgSrc: "/path/to/image4.png",
    text: "No CGPA cut-off and career gap is not a barrier",
  },
];

const keyHighlights = [
  {
    imgSrc: "/CourseOverview/image5.png",
    title: "Learn from Real time working Professionals",
    description: "Alumni of IIT and MNCs like Amazon, Microsoft, etc.",
  },
  {
    imgSrc: "/CourseOverview/image6.png",
    title: "Live classes Monday to Friday",
    description: "Alumni of IIT and MNCs like Amazon, Microsoft, etc.",
  },
  {
    imgSrc: "/CourseOverview/image7.png",
    title: "10+ Real time projects",
    description: "Alumni of IIT and MNCs like Amazon, Microsoft, etc.",
  },
  {
    imgSrc: "/CourseOverview/image8.png",
    title: "9am to 9pm doubt sessions",
    description: "Alumni of IIT and MNCs like Amazon, Microsoft, etc.",
  },
  {
    imgSrc: "/CourseOverview/image9.png",
    title: "Dedicated Mentor Support",
    description: "Alumni of IIT and MNCs like Amazon, Microsoft, etc.",
  },
  {
    imgSrc: "/CourseOverview/image10.png",
    title: "100% Placement Support",
    description: "Alumni of IIT and MNCs like Amazon, Microsoft, etc.",
  },
];

const CourseOverview = () => {
  return (
    <div>
      {" "}
      <div className="bg-white dark:bg-dark text-dark dark:text-primary">
        <div className="container mx-auto px-0 sm:px-[14rem] py-10 ">
          <h3 className="text-2xl sm:text-5xl font-semibold text-center mb-6">
            <span className="text-fg"> MERN Stack </span> Course Overview
          </h3>
          <p className="text-md sm:text-xl text-left mb-8 px-[1rem]">
            You’ll become a skilled MERN Stack Developer with industry-ready
            certification. Start learning from the basics of programming and
            build advanced skills in MongoDB, Express, React, and Node.js.
            Enroll in our MERN Stack Developer certificate course today, and
            open the door to a huge number of opportunities in software
            development.
          </p>
          <h2 className="text-2xl sm:text-4xl font-semibold text-left mb-4 px-2 sm:px-0">
            Eligibility
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 px-2 sm:px-0">
            {eligibilityItems.map((item, index) => (
              <div
                key={index}
                className="flex text-left items-center justify-center w-full sm:w-60 border border-re px-4 py-4 rounded-md"
              >
                {item.text}
              </div>
            ))}
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-left mb-4 px-2 sm:px-0">
            Key Highlights
          </h2>
          <div className="grid items-center grid-cols-1 sm:grid-cols-2 gap-6 px-2 sm:px-0">
            {keyHighlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center p-2 rounded-2xl space-x-4 border border-re shadow-lg hover:shadow-none "
              >
                <div className="flex justify-center items-center bg-white rounded-full h-[3.5rem] w-[3.5rem]">
                  <Image
                    src={highlight.imgSrc}
                    alt="Highlight"
                    width={30}
                    height={30}
                  />
                </div>

                <div className="">
                  <h3 className="text-lg font-semibold text-re">
                    {highlight.title}
                  </h3>
                  <p className="text-dark dark:text-white">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default CourseOverview;
