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

function PlacementAssistance() {
  const [iconSize, setIconSize] = useState(40); // Default icon size

  useEffect(() => {
    // Adjust icon size for small screens
    if (window.innerWidth <= 768) {
      setIconSize(40); // Change icon size for small screens
    }
  }, []);

  const contentData = [
    {
      icon: <Code size={iconSize} className="dark:text-black" />,
      title: "One-on-one Sessions",
    },
    {
      icon: <LineChart size={iconSize} className="dark:text-black" />,
      title: "Career Guidance",
    },
    {
      icon: <Briefcase size={iconSize} className="dark:text-black" />,
      title: "300+ Hiring Partners",
    },
    {
      icon: <GanttChartSquare size={iconSize} className="dark:text-black" />,
      title: "Resume Building",
    },
    {
      icon: <ScrollText size={iconSize} className="dark:text-black" />,
      title: "Mock Interviews",
    },
    {
      icon: <UserRoundCog size={iconSize} className="dark:text-black" />,
      title: "Soft Skills Training",
    },
  ];

  return (
    <>
      <div className="w-full pt-[2rem] px-[2rem] flex flex-col items-center bg-primary ">
        <div className="mb-4">
          <h3 className="text-2xl sm:text-5xl font-semibold text-center text-primary ">
            Placement <span className="text-fg">Assistance</span>
          </h3>
          <p className="text-center text-sm sm:text-lg text-gray-700 dark:text-white mt-3">
            Stand out from your peers in front of the recruiters by ticking all
            the right boxes and get your dream career started.
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
            <Image src="/banner-01-2.png" alt="" width={400} height={400} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PlacementAssistance;
