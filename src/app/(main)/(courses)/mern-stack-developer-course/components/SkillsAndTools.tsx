"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const skills = [
  {
    src: "/skills/html.png",
    alt: "HTML",
    label: "HTML",
    width: 50,
    height: 50,
  },
  { src: "/skills/css.png", alt: "CSS", label: "CSS", width: 50, height: 50 },
  {
    src: "/skills/node.png",
    alt: "Node JS",
    label: "Node JS",
    width: 50,
    height: 50,
  },
  {
    src: "/skills/mongodb.png",
    alt: "Mongo DB",
    label: "Mongo DB",
    width: 50,
    height: 50,
  },
  {
    src: "/skills/reactjs.png",
    alt: "React JS",
    label: "React JS",
    width: 50,
    height: 50,
  },
  { src: "/skills/git.png", alt: "Git", label: "Git", width: 50, height: 50 },
  {
    src: "/skills/expressjs.png",
    alt: "Express JS",
    label: "Express JS",
    width: 50,
    height: 50,
  },
  {
    src: "/skills/js.png",
    alt: "JavaScript",
    label: "JavaScript",
    width: 50,
    height: 50,
  },
];

const tools = [
  { src: "/tools/aws.png", alt: "AWS", label: "AWS", width: 50, height: 50 },
  {
    src: "/tools/docker.png",
    alt: "Docker",
    label: "Docker",
    width: 50,
    height: 50,
  },
  {
    src: "/tools/commandline.png",
    alt: "Command Line",
    label: "Command Line",
    width: 50,
    height: 50,
  },
];

const CourseOverview = () => {
  return (
    <div>
      {" "}
      <div className="py-10 bg-[#e0f2f1] text-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-4xl font-semibold mb-4">
                Skills You’ll Learn
              </h2>
              <p className="text-lg sm:text-xl mb-4">
                This comprehensive course thoroughly covers essential MERN stack
                developer skills including:
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center w-20 sm:w-24"
                  >
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={skill.width}
                      height={skill.height}
                      className="object-contain"
                    />
                    <p className="text-center mt-2">{skill.label}</p>
                  </div>
                ))}
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold mb-4">
                Tools Covered
              </h2>
              <p className="text-lg sm:text-xl mb-4">
                By completing this course, you’ll master some key technologies
                vital for modern web development
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center w-20 sm:w-24"
                  >
                    <Image
                      src={tool.src}
                      alt={tool.alt}
                      width={tool.width}
                      height={tool.height}
                      className="object-contain"
                    />
                    <p className="text-center mt-2">{tool.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center mb-8">
                <div className="flex items-center text-lg text-gray-800">
                  <div className="bg-green-500 h-4 w-4 rounded-full mr-2"></div>
                  Next batch starts on May 20th
                </div>
              </div>
              <Button variant="bg" size="lg">
                Book A Free Demo
              </Button>
            </div>
            <div className="flex-1 hidden sm:block">
              <Image
                src="/Skills/illustration.png"
                alt="Illustration"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default CourseOverview;
