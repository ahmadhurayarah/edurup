"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "Application",
    description: "Build food application swiggy",
    step: "Project 1",
  },
  {
    title: "Website",
    description: "Live booking website Airbnb Clone!",
    step: "Project 2",
  },
  {
    title: "E-commerce Application",
    description:
      "Build a responsive Amazon E-commerce website using HTML5, CSS3, and Bootstrap Grid System",
    step: "Project 3",
  },
];

const Projects = () => {
  return (
    <div>
      <div className="py-10 bg-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-4">
            Explore MERN Stack Projects That You’ll Build
          </h2>
          <p className="text-center mb-8">
            Gain hands-on experience with these real-world projects
          </p>
          <div className="flex flex-wrap justify-between gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 shadow-xl rounded-lg p-4 w-full sm:w-[30%] bg-dark"
              >
                <span className="bg-gray-700 text-gray-100 px-2 py-1 rounded-full text-xs font-semibold">
                  {project.step}
                </span>
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center mt-8">
            <div className="flex items-center text-lg text-gray-300">
              <div className="bg-green-500 h-4 w-4 rounded-full mr-2"></div>
              Next batch starts on May 20th
            </div>
          </div>
          <div className="mt-4 text-center">
            <Button variant="bg" size="lg">
              Book A Free Demo
            </Button>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Projects;
