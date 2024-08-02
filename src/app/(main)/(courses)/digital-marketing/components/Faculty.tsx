"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faAmazon } from "@fortawesome/free-brands-svg-icons";
import "keen-slider/keen-slider.min.css";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const facultyData = [
  {
    name: "Rupesh Kumar",
    designation: "Chief Marketing officer",
    image: "/mentor3.jpg",
    subjects: ["Digital marketing", "Performance marketing"],
    socialMedia: "linkedin",
    url: "https://in.linkedin.com/in/neelam-rupesh",
  },
  {
    name: "Sirija Neelam",
    designation: "Data Scientist",
    image: "/mentor1.jpeg",
    subjects: [
      "Python",
      "Artificial Intelligence",
      "Data science & Machine Learning",
    ],
    socialMedia: "linkedin",
    url: "https://www.linkedin.com/in/sirija-devi-a35561160?trk=blended-typeahead",
  },
  {
    name: "Mukesh Kumar",
    designation: "General Manager",
    image: "/mentor2.jpg",
    subjects: ["Digital strategy", "Product Marketing"],
    socialMedia: "linkedin",
    url: "https://www.linkedin.com/in/askmukesh?trk=blended-typeahead",
  },
  {
    name: "Shabudeen",
    designation: "Sr Software engineer",
    image: "/mentor4.jpg",
    subjects: ["React js & Node JS", "Front end development"],
    socialMedia: null,
    url: null,
  },
];

const Faculty = () => {
  return (
    <>
      <div className="pt-[2rem] sm:pt-[2rem] flex flex-col items-center justify-center dark:bg-dark max-w-screen">
        <div className="px-[2rem]">
          <h1 className="text-2xl sm:text-5xl font-semibold text-center text-primary ">
            Learn from Industry <span className="text-fg"> experts</span>
          </h1>
        </div>
        <Carousel
          opts={{
            align: "center",
          }}
          className="max-w-[20rem] md:max-w-3xl lg:max-w-5xl"
        >
          <CarouselContent>
            {facultyData.map((faculty, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 pt-[2rem] pb-10">
                  <Card className="flex flex-row justify-center items-center ">
                    <CardContent className="flex flex-col items-center w-[17rem] h-[21rem] sm:w-[20rem] sm:h-[27rem] border pb-10 bg-white rounded-xl shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-4 sm:p-8">
                      <Avatar className="h-[5rem] w-[5rem] sm:h-[6rem] sm:w-[6rem]">
                        <AvatarImage src={faculty.image} />
                        <AvatarFallback>Faculty</AvatarFallback>
                      </Avatar>
                      <h5 className=" mt-1 mb-0 sm:mt-3 sm:mb-1 text-sm  font-medium text-gray-900 dark:text-white">
                        {faculty.name}
                      </h5>
                      <div className=" w-[11rem] h-[2.85rem] font-semibold flex flex-row justify-center text-sm text-center text-gray-500 dark:text-gray-400">
                        {faculty.designation}
                      </div>

                      <div className=" mt-1 sm:mt-4 flex flex-row justify-center items-center">
                        <FontAwesomeIcon icon={faFacebook} className="h-8" />
                      </div>
                      <div className="text-sm mt-1 mb-0 sm:mt-3 sm:mb-1 font-semibold">
                        Teaches
                      </div>

                      <div className="w-[15rem] font-semibold h-[4.1rem] flex flex-col items-center text-sm text-center text-gray-500 dark:text-gray-400">
                        {faculty.subjects.map((subject, index) => (
                          <div key={index}>{subject}</div>
                        ))}
                      </div>

                      <div className="mt-1 mb-0 sm:mt-3 sm:mb-1 space-x-2 flex flex-row items-center justify-center hover:text-fg">
                        {faculty.url && faculty.socialMedia && (
                          <Link href={faculty.url} target="_blank">
                            <div className="flex flex-row items-center justify-center transition-colors">
                              <div className="border-b font-semibold text-sm border-black dark:border-b dark:border-white hover:border-fg hover:dark:border-fg">
                                {faculty.socialMedia} profile
                              </div>
                              <ArrowUpRight className="h-4" />
                            </div>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Separator />
    </>
  );
};

export default Faculty;
