import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const tools = [
  { name: "Netflix", src: "/netflix.png" },
  { name: "Uber", src: "/uber.png" },
  { name: "Amazon", src: "/amazon.png" },
  { name: "Dominos", src: "/dominos.png" },
];

const Language = () => {
  return (
    <>
      <section className="relative w-full bg-white dark:bg-gray-900 py-16 flex flex-col items-center overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-indigo-200 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-purple-300 rounded-full opacity-20 animate-pulse-slow delay-2000"></div>

        {/* Section Heading */}
        <h2 className="relative text-3xl sm:text-5xl font-bold text-center text-black dark:text-white mb-12 z-10">
          Languages & Tools Covered
        </h2>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-4 gap-8 max-w-6xl w-full px-8 z-10 relative">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={tool.src}
                alt={tool.name}
                width={100}
                height={100}
                className="object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="sm:hidden w-full overflow-x-auto flex gap-4 px-4 z-10 relative">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-4 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={tool.src}
                alt={tool.name}
                width={80}
                height={80}
                className="object-contain mb-2"
              />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Tailwind animation utilities */}
      <style jsx>{`
        @keyframes pulse-slow {
          0% { transform: scale(0.9); opacity: 0.15; }
          50% { transform: scale(1.1); opacity: 0.25; }
          100% { transform: scale(0.9); opacity: 0.15; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
};

export default Language;
