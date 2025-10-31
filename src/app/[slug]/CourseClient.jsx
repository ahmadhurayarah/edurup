"use client";
import dynamic from "next/dynamic";
import React from "react";

// ✅ Import all your course pages dynamically
const DigitalMarketingCourse = dynamic(
  () => import("../(main)/components/digital-marketing/page"),
  { ssr: false }
);

const DataAnalyticsCourse = dynamic(
  () => import("../(main)/components/data-analytics/page"),
  { ssr: false }
);

const DataScienceCourse = dynamic(
  () => import("../(main)/components/data-science/page"),
  { ssr: false }
);

const FullStackWebsiteCourse = dynamic(
  () => import("../(main)/components/full-stack-website/page"),
  { ssr: false }
);

// ✅ Map slug keys to their corresponding components
const componentsMap = {
  "digital-marketing-course": DigitalMarketingCourse,
  "data-analytics-course": DataAnalyticsCourse,
  "data-science-course": DataScienceCourse,
  "full-stack-website-course": FullStackWebsiteCourse,
};

export default function CourseClient({ courseKey, city }) {
  const SelectedComponent = componentsMap[courseKey];

  if (!SelectedComponent) {
    return (
      <div style={{ padding: 40 }}>
        <h1>404 — Course not found</h1>
        <p>
          No course registered for <code>{courseKey}</code>
        </p>
      </div>
    );
  }

  // ✅ Pass `city` prop to dynamically display city-based content
  return <SelectedComponent city={city} />;
}
