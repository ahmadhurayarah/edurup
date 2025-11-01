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
    slugBase: "full-stack-website-course",
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
    slugBase: "Mca-data-science-course",
    cities: [],
  },
  {
    name: "MCA Data Science Online",
    slugBase: "Mca-data-science-online",
    cities: [],
  },
  {
    name: "MBA Digital Marketing Course",
    slugBase: "MBA-Digital-Marketing-course",
    cities: [],
  },
  {
    name: "MBA Digital Marketing Online",
    slugBase: "MBA-Digital-Marketing-course-online",
    cities: [],
  },
];

export default function CourseCities() {
  return (
    <div className="bg-white text-[#081F33] border-t border-b border-gray-200 py-10 px-5 md:px-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {courses.map((course, index) => (
          <div key={index}>
            {/* ✅ Make heading clickable when no cities */}
            {course.cities.length === 0 ? (
              <Link
                href={`/${course.slugBase}`}
                className="text-lg md:text-xl font-semibold text-black mb-3 hover:text-blue-500 transition-colors inline-block"
              >
                {course.name}
              </Link>
            ) : (
              <h2 className="text-lg md:text-xl font-semibold text-black mb-3">
                {course.name}
              </h2>
            )}

            {/* ✅ Render cities or fallback */}
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm">
              {course.cities.length > 0 ? (
                course.cities.map((city, i) => {
                  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
                  const href = `/${course.slugBase}-${citySlug}`;
                  return (
                    <span key={i} className="flex items-center">
                      <Link
                        href={href}
                        className="hover:text-blue-500 transition-colors"
                      >
                        {city}
                      </Link>
                      {i !== course.cities.length - 1 && (
                        <span className="mx-1 text-gray-400">|</span>
                      )}
                    </span>
                  );
                })
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
