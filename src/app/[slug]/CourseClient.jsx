"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { getCourseMeta } from "@/app/utils/data";
import { COURSE_FOLDERS } from "@/app/utils/courses";

export default function CourseClient({ courseKey, city }) {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const loadCourse = async () => {
      let PageComponent;
      switch (courseKey) {
        case "digital-marketing-course":
          PageComponent = dynamic(
            () => import("../(main)/components/digital-marketing/page"),
            { ssr: false }
          );
          break;
        case "data-analytics-course":
          PageComponent = dynamic(
            () => import("../(main)/components/data-analytics/page"),
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
        default:
          PageComponent = () => (
            <div className="p-8 text-center">No course found.</div>
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