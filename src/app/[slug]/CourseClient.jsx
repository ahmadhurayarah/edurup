"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

export default function CourseClient({ courseKey, city }) {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const loadCourse = async () => {
      let PageComponent;
      
      // ✅ Support all 4 main courses + MBA courses
      switch (courseKey) {
        case "digital-marketing-course":
          PageComponent = dynamic(
            () => import("../(main)/components/digital-marketing/page"),
            { ssr: false }
          );
          break;
        
        case "data-science-course":
          PageComponent = dynamic(
            () => import("../(main)/components/data-science/page"),
            { ssr: false }
          );
          break;
        
        case "full-stack-developer-course":
          PageComponent = dynamic(
            () => import("../(main)/components/full-stack-website/page"),
            { ssr: false }
          );
          break;
        
        case "data-analytics-course":
          PageComponent = dynamic(
            () => import("../(main)/components/data-analytics/page"),
            { ssr: false }
          );
          break;
        
        case "mba-digital-marketing-course":
          PageComponent = dynamic(
            () => import("../(main)/(courses)/MBA-Digital-Marketing-course/page"),
            { ssr: false }
          );
          break;
        
        case "mba-digital-marketing-course-online":
          PageComponent = dynamic(
            () => import("../(main)/(courses)/MBA-Digital-Marketing-course-online/page"),
            { ssr: false }
          );
          break;

        default:
          // This should never happen since page.jsx already filters, but as fallback
          PageComponent = () => (
            <div className="p-8 mt-30 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
              <p className="text-gray-600 mt-600">The requested course is not available.</p>
            </div>
          );
      }

      setComponent(() => PageComponent);
    };

    loadCourse();
  }, [courseKey, city]);

  if (!Component) {
    return (
      <div className="w-full flex justify-center items-center py-16">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading course content...</p>
        </div>
      </div>
    );
  }

  const SelectedComponent = Component;

  return (
    <div className="w-full">
      <SelectedComponent city={city} />
    </div>
  );
}