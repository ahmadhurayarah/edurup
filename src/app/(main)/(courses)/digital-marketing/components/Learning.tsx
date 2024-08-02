"use client";

import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs_learning";
import { CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const curriculum = [
  {
    title: "Start Learning",
    description: ["Pay 49,999 and join the course", "Live Classes by Experts"],
    image: "/learning1.svg",
  },
  {
    title: "Get Assessed",
    description: ["Write Online Assessment", "Get Eligibility for placements"],
    image: "/learning2.svg",
  },
  {
    title: "Apply for jobs",
    description: [
      "Access Placement videos",
      "Apply for Jobs",
      "Get an offer letter",
    ],
    image: "/learning3.svg",
  },
];

const Learning = () => {
  const [activeTab, setActiveTab] = useState(curriculum[0].title);
  const activeItem = curriculum.find((item) => item.title === activeTab);
  const defaultItem = {
    title: "",
    description: [],
    image: "",
  };
  const currentItem = activeItem || defaultItem;

  return (
    <div className="w-full flex py-[2rem] flex-col justify-center ">
      <div className=" flex flex-col">
        <h3 className="text-xl sm:text-5xl font-semibold text-center text-primary dark:text-white">
          The New Immersive
        </h3>
        <h3 className="mt-1 mb-5 sm:mt-5 sm:mb-10 text-center text-xl sm:text-5xl text-fg font-semibold">
          Learning Experience
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row items-start justify-center">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="px-[2rem] sm:px-[5rem] pb-[1rem] sm:pb-[8rem] w-[20rem] sm:w-[30rem]"
        >
          {curriculum.map((item, idx) => (
            <div key={idx} className="">
              <TabsList className="flex flex-col items-start py-[0.5rem]">
                <TabsTrigger
                  value={item.title}
                  className="flex flex-row gap-x-3 items-center justify-start"
                >
                  <div className="flex flex-row justify-center items-center"></div>
                  {idx + 1}
                  <h4
                    className={`ml-3 text-lg ${
                      activeTab === item.title ? "text-black" : "text-gray-700"
                    }  dark:text-white`}
                  >
                    {item.title}
                  </h4>
                </TabsTrigger>

                <TabsContent value={item.title}>
                  <div className="ml-[2.5rem] sm:ml-[3rem] space-y-3">
                    {item.description.map((desc, descIdx) => (
                      <div
                        key={descIdx}
                        className="flex flex-row items-center gap-x-2"
                      >
                        <CheckCircle2
                          className="text-r"
                          size={18}
                          strokeWidth={1.5}
                        />
                        <h4 className="text-sm sm:text-[1.05rem]">{desc}</h4>
                      </div>
                    ))}
                    <div className="block sm:hidden w-full flex-row justify-center items-center">
                      <Image
                        src={currentItem.image}
                        width={600}
                        height={1000}
                        alt="learning"
                        className="w-full"
                      />
                    </div>
                  </div>
                </TabsContent>
              </TabsList>
            </div>
          ))}
        </Tabs>
        <div className="hidden sm:block">
          <Image
            src={currentItem.image}
            width={600}
            height={400}
            alt="learning"
          />
        </div>
      </div>

      <Separator />
    </div>
  );
};

export default Learning;
