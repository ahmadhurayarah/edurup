"use client";

import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs_learning";
import { CheckCircle2, BookOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { dataAnalyticsCourseData } from "./data";

const curriculum = dataAnalyticsCourseData.learning.steps;

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
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-[#004F4E] text-sm font-medium mb-4">
          <BookOpen className="w-4 h-4 mr-2" />
          {dataAnalyticsCourseData.learning.heading}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {dataAnalyticsCourseData.learning.title.split(" ").slice(0, 3).join(" ")} <span className="text-[#004F4E]">{dataAnalyticsCourseData.learning.title.split(" ").slice(3).join(" ")}</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {dataAnalyticsCourseData.learning.description}
        </p>
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
