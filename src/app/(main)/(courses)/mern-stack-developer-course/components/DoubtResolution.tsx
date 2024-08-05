"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const DoubtResolution = () => {
  return (
    <div className="bg-[#E9F4ED] py-10 text-dark ">
      <div className="container mx-auto px-4">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl text-dark sm:text-4xl font-semibold mb-4">
            Get Your Doubts Clarified
            <br />
            Faster than in Offline Classes
          </h2>
          <p className="text-dark text-xl mb-8">
            Our highly motivated team of experts are ready to help you with your
            doubts from <strong>9AM – 9PM Everyday</strong>
          </p>
        </div>

        <div className="flex flex-col gap-8 mb-8">
          <div className="flex-1 border rounded-lg shadow-lg p-4 bg-white flex flex-col sm:flex-row items-center">
            <Image
              src="/DoubtResolution/download-22.png"
              alt="Mentors"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
            <div className="sm:ml-8 text-center sm:text-left">
              <h3 className="text-xl font-semibold mt-4 sm:mt-0">
                1500+ Mentors to Resolve Your Doubts
              </h3>
              <p className="text-gray-600 mb-4">
                Including Subject Matter Experts, IITians, Teaching Assistants,
                placement booster Alumni, etc.
              </p>
              <Button variant="default">Book A Free Demo</Button>
            </div>
          </div>
          <div className="flex-1 border rounded-lg shadow-lg p-4 bg-[#1A2849] text-white flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-center">
              1000+ Doubts are resolved within 15 minutes Everyday!
            </h3>
            <Image
              src="/DoubtResolution/download-23.png"
              alt="Doubt Resolution"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtResolution;
