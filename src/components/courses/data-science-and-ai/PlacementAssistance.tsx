"use client";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  Code,
  GanttChartSquare,
  LineChart,
  ScrollText,
  UserRoundCog,
} from "lucide-react";
import Image from "next/image";
import { dataScienceAICourseData } from "./data";

const iconComponentMap: Record<string, typeof Code> = {
  Code,
  LineChart,
  Briefcase,
  GanttChartSquare,
  ScrollText,
  UserRoundCog,
};

function PlacementAssistance() {
  const { placementAssistance } = dataScienceAICourseData;
  const [iconSize, setIconSize] = useState(40); // Default icon size

  useEffect(() => {
    // Adjust icon size for small screens
    if (window.innerWidth <= 768) {
      setIconSize(40); // Change icon size for small screens
    }
  }, []);

  const contentData = placementAssistance.features.map((item) => {
    const IconComponent = iconComponentMap[item.icon] || Code;
    return {
      icon: <IconComponent size={iconSize} className="dark:text-black" />,
      title: item.title,
    };
  });

  return (
    <>
      <div className="w-full pt-[2rem] px-[2rem] flex flex-col items-center bg-primary ">
        <div className="mb-4">
          <h3 className="text-2xl sm:text-5xl font-semibold text-center text-primary ">
            {placementAssistance.heading.split(" ")[0]} <span className="text-fg">{placementAssistance.heading.split(" ")[1]}</span>
          </h3>
          <p className="text-center text-sm sm:text-lg text-gray-700 dark:text-white mt-3">
            {placementAssistance.description}
          </p>
        </div>
        <div className="flex flex-row items-center mb-10 md:mb-0">
          <div className="ml-5 sm:ml-10 flex flex-wrap gap-x-10 gap-y-10 w-[20rem] sm:w-[50rem] items-center ">
            {contentData.map((item, index) => (
              <div
                key={index}
                className="gap-y-5 flex flex-col items-center justify-center bg-fg h-[8rem] w-[8rem] sm:h-[10rem] sm:w-[10rem] rounded-xl p-2 sm:p-4"
              >
                <div className="">{item.icon}</div>
                <div className=" h-10">
                  <h3 className="text-center text-sm sm:text-lg dark:text-black ">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <Image src={placementAssistance.image} alt="Placement Assistance" width={400} height={400} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PlacementAssistance;
