"use client";
import Image from "next/image";
import React from "react";

const marqueeImages = [
  "/maurquee1.jpg",
  "/maurquee2.jpg",
  "/maurquee3.jpg",
];

const Company = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-[#f8f9ff] via-[#f3f4fe] to-white dark:from-[#0a0a0a] dark:via-[#111] dark:to-[#0a0a0a] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.3),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto text-center px-6">
        {/* Header */}
        <h3 className="text-3xl sm:text-5xl font-extrabold text-primary mb-3">
          <span className="text-fg">500+</span> Companies have hired
        </h3>
        <p className="text-lg sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-10">
          Placement Booster learners from our industry-ready programs
        </p>

        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 shadow-lg rounded-3xl p-6 sm:p-10 space-y-8">
          {marqueeImages.map((src, index) => (
            <div
              key={index}
              className="relative flex overflow-x-hidden group mask-gradient"
            >
              {/* Marquee row */}
              <div className="animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
                <Image
                  src={src}
                  alt={`Company logos ${index + 1}`}
                  width={3424}
                  height={64}
                  loading="lazy"
                  className="h-[2rem] sm:h-[4rem] object-contain"
                />
              </div>
              <div className="absolute top-0 animate-marquee2 whitespace-nowrap group-hover:[animation-play-state:paused]">
                <Image
                  src={src}
                  alt={`Company logos duplicate ${index + 1}`}
                  width={3424}
                  height={64}
                  loading="lazy"
                  className="h-[2rem] sm:h-[4rem] object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <button className="px-6 py-3 text-white font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-xl">
            Explore Our Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Company;
