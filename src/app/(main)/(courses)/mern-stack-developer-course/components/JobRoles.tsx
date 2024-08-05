"use client";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const jobRoles = [
  "Full Stack Web Developer",
  "JavaScript Developer",
  "React Developer",
  "Front End Developer",
  "Back End Developer",
];

const JobRoles = () => {
  return (
    <div className="py-10 bg-white text-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-semibold text-left mb-4">
          Suitable Job Roles
        </h2>
        <p className="text-left text-lg mb-4">
          Upon successful completion of our MERN Stack course, you’ll gain
          exclusive access to our dedicated placement support. Our team will
          connect you with exciting opportunities at top IT Companies.
        </p>
        <ul className="text-left mb-8">
          {jobRoles.map((role, index) => (
            <li
              key={index}
              className="text-lg font-semibold text-green-700 mb-2"
            >
              {role}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold mr-2">
              <span className="mr-1">●</span>
            </span>
            <p className="text-dark">Next batch starts on May 20th</p>
          </div>
          <Button variant="bg" className="px-6 py-2 rounded-md">
            Book A Free Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobRoles;
