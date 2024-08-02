import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const C = () => {
  return (
    <>
      <div className="min-h-[17rem] sm:min-h-full flex flex-col items-center  bg-white">
        <div className="mt-[1rem] sm:mt-[2rem]">
          <h3 className="text-2xl sm:text-5xl font-semibold text-center text-primary dark:text-dark">
            <span className="text-r">500+</span> Companies have hired
          </h3>
          <h3 className="mt-1 mb-5 sm:mt-5 sm:mb-10 text-center text-2xl sm:text-5xl font-semibold text-primary dark:text-dark">
            Placement Booster learners
          </h3>
        </div>
        <div className="px-10 sm:px-0 h-full sm:h-[40rem] mb-0 sm:mb-10 object-contain ">
          <Image
            src="/companies.png"
            alt="companies"
            width={1200}
            height={1200}
          />
        </div>
      </div>
      <Separator />
    </>
  );
};

export default C;
