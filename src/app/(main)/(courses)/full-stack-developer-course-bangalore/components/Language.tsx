import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const Language = () => {
const tools = [
  { name: "VS Code", icon: "/Language/vscode.png", color: "bg-blue-100 text-blue-700" },
  { name: "GitHub", icon: "/Language/github.png", color: "bg-gray-100 text-gray-700" },
  { name: "Node.js", icon: "/Language/node.png", color: "bg-green-100 text-green-700" },
  { name: "MongoDB", icon: "/Language/mongo.png", color: "bg-emerald-100 text-emerald-700" },
  { name: "Express.js", icon: "/Language/express.png", color: "bg-gray-100 text-gray-700" },
  { name: "React", icon: "/Language/react.png", color: "bg-cyan-100 text-cyan-700" },
  { name: "Postman", icon: "/Language/postman.png", color: "bg-orange-100 text-orange-700" },
  { name: "Redux", icon: "/Language/redux1.png", color: "bg-purple-100 text-purple-700" },
  { name: "Docker", icon: "/Language/docker.png", color: "bg-blue-100 text-blue-700" },
  { name: "Vercel", icon: "/Language/vercel.png", color: "bg-black-100 text-black-700" },
];

  

  return (
    <>
      <div className="w-full bg-white py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="mb-4 text-3xl sm:text-5xl font-semibold text-center text-gray-900 dark:text-white">
              Learning <span className="text-fg">Journey</span>
            </h1>
          </div>

          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                COURSE JOURNEY
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                Learn all the
              </h2>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                Tools that are{" "}
                <span className="relative">
                  In-demand
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-fg"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C20 2 40 10 60 6C80 2 100 10 120 6C140 2 160 10 180 6C198 2"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              
              {/* Decorative Design Element */}
              <div className="mt-6">
                <div className="h-1 bg-gradient-to-r from-fg via-fg/50 to-transparent w-64 rounded-full"></div>
              </div>
            </div>

            {/* Right Side - Tools Grid */}
            <div className="flex-1 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-6 sm:gap-8">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <Image 
                      src={tool.icon} 
                      alt={tool.name} 
                      width={200} 
                      height={200} 
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2"
                    />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Language;