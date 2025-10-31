"use client";

import Link from "next/link";

const courses = [
  {
    name: "Digital Marketing Course",
    slugBase: "digital-marketing-course",
    cities: [
      "Chennai",
      "Hyderabad",
      "Kochi",
      "Vizag",
      "Mumbai",
      "Pune",
      "Marathahalli",
      "Vijayawada",
      "BTM Layout",
      "Tirupati",
    ],
  },
  {
    name: "Data Science Course",
    slugBase: "data-science-course",
    cities: [
      "Chennai",
      "Hyderabad",
      "Kochi",
      "Vizag",
      "Mumbai",
      "Pune",
      "Marathahalli",
      "Vijayawada",
      "BTM Layout",
      "Tirupati",
    ],
  },
  {
    name: "Full Stack Website Developer Course",
    slugBase: "full-stack-developer-course",
    cities: [
      "Chennai",
      "Hyderabad",
      "Kochi",
      "Vizag",
      "Mumbai",
      "Pune",
      "Marathahalli",
      "Vijayawada",
      "BTM Layout",
      "Tirupati",
    ],
  },
  {
    name: "Data Analytics Course",
    slugBase: "data-analytics-course",
    cities: [
      "Chennai",
      "Hyderabad",
      "Kochi",
      "Vizag",
      "Mumbai",
      "Pune",
      "Marathahalli",
      "Vijayawada",
      "BTM Layout",
      "Tirupati",
    ],
  },
  {
    name: "MCA Data Science Course",
    slugBase: "mca-data-science-course",
    cities: [],
  },
  {
    name: "MCA Data Science Online",
    slugBase: "mca-data-science-online",
    cities: [],
  },
];

export default function CourseCities() {
  return (
    <div className="bg-white text-[#081F33] border-t border-b border-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-6 text-left">
        {courses.map((course, index) => (
          <div key={index}>
            <h2 className="text-base md:text-lg font-semibold text-black mb-2">
              {course.name}
            </h2>
            <div className="flex flex-wrap justify-left gap-x-2 gap-y-1 text-sm leading-relaxed">
              {course.cities.length > 0 ? (
                course.cities.map((city, i) => (
                  <span key={i} className="flex items-left">
                    <Link
                      href={`/${course.slugBase}-${city
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="hover:text-blue-500 transition-colors"
                    >
                      {city}
                    </Link>
                    {i !== course.cities.length - 1 && (
                      <span className="mx-1 text-gray-400">|</span>
                    )}
                  </span>
                ))
              ) : (
                <p className="text-gray-400 text-sm italic">
                  Available Nationwide
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
