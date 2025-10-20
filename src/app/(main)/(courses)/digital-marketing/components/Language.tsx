import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const logos = [
  "/netflix.png",
  "/uber.png",
  "/amazon.png",
  "/dominos.png",
];

const Language = () => {
  return (
    <>
      {/* Section Heading */}
      <section className="w-full bg-white dark:bg-gray-900 py-16 flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-black dark:text-white mb-12">
          Languages & Tools Covered
        </h2>

        {/* Desktop View */}
        <div className="hidden sm:flex w-full max-w-6xl justify-evenly items-center gap-8 px-8">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={logo}
                alt={logo}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="sm:hidden w-full overflow-x-auto flex gap-4 px-4">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow"
            >
              <Image
                src={logo}
                alt={logo}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <Separator />
    </>
  );
};

export default Language;
