"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const CareerSteps = () => {
  const steps = [
    {
      step: "STEP 1",
      title: "Fundamentals",
      duration: "1 Month",
      description: "3 Hours Classes and 3 Hours Labs per day",
      courses: [
        { src: "/CareerSteps/html.png", alt: "HTML" },
        { src: "/CareerSteps/javascript.png", alt: "JavaScript" },
        { src: "/CareerSteps/css.png", alt: "CSS" },
      ],
      carouselImages: [
        "/CareerSteps/download-15.png",
        "/CareerSteps/download-16.png",
        "/CareerSteps/download-17.png",
      ],
    },
    {
      step: "STEP 2",
      title: "MERN Full Stack",
      duration: "2 Months",
      description: "React, Express, Node, MongoDB",
      courses: [],
      carouselImages: ["/CareerSteps/download-18.png"],
    },
    {
      step: "STEP 3",
      title: "End-to-End Placement Support",
      duration: "Up to 16 Months",
      description:
        "Free Add-ons: Interview screening test, Mock interviews, HR support",
      courses: [],
      carouselImages: [
        "/CareerSteps/download-19.png",
        "/CareerSteps/download-20.png",
      ],
    },
  ];

  return (
    <div>
      <div className="py-10 bg-white text-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-8">
            Start Your IT Career in 3 Steps
          </h2>
          <div className="hidden sm:flex justify-between">
            {steps.map((step, index) => (
              <div
                key={index}
                className="border border-gray-200 shadow-xl rounded-lg p-4 w-[30%] bg-white"
              >
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">{step.title}</h3>
                  <p className="text-gray-600">Duration: {step.duration}</p>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </div>
                <div className="mb-4">
                  {step.courses.length > 0 && (
                    <p className="font-semibold">Courses Include</p>
                  )}
                  <div className="flex ml-4">
                    {step.courses.map((course, idx) => (
                      <Image
                        key={idx}
                        src={course.src}
                        alt={course.alt}
                        width={80}
                        height={80}
                      />
                    ))}
                  </div>
                </div>
                <Carousel className="w-full flex justify-center items-center">
                  <CarouselContent>
                    {step.carouselImages.map((imgSrc, idx) => (
                      <CarouselItem key={idx}>
                        <Image
                          src={imgSrc}
                          alt={`Project ${idx + 1}`}
                          width={300}
                          height={200}
                          className="rounded-md"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
      
                </Carousel>
              </div>
            ))}
          </div>
          <div className="sm:hidden">
            <div className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 w-full bg-white"
                >
                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{step.title}</h3>
                    <p className="text-gray-600">Duration: {step.duration}</p>
                    <p className="text-gray-600 mt-2">{step.description}</p>
                  </div>
                  <div className="mb-4">
                    {step.courses.length > 0 && (
                      <p className="font-semibold">Courses Include</p>
                    )}
                    <div className="flex space-x-2">
                      {step.courses.map((course, idx) => (
                        <Image
                          key={idx}
                          src={course.src}
                          alt={course.alt}
                          width={50}
                          height={50}
                        />
                      ))}
                    </div>
                  </div>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {step.carouselImages.map((imgSrc, idx) => (
                        <CarouselItem key={idx}>
                          <Image
                            src={imgSrc}
                            alt={`Project ${idx + 1}`}
                            width={300}
                            height={200}
                            className="rounded-md"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                
                  </Carousel>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default CareerSteps;
