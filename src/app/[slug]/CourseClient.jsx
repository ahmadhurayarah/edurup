"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { getCourseMeta } from "@/app/utils/data";
import { COURSE_FOLDERS } from "@/app/utils/courses";

export default function CourseClient({ courseKey, city }) {
  const [meta, setMeta] = useState(null);
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
            <div style={{ padding: 40 }}>No course found.</div>
          );
      }

      // ✅ Centralized meta
      setMeta(getCourseMeta(courseKey, city));

      setComponent(() => PageComponent);
    };

    loadCourse();
  }, [courseKey, city]);

  if (!Component) return <div style={{ padding: 40 }}>Loading...</div>;

  const SelectedComponent = Component;

  return (
    <div style={{ padding: 40 }}>
      {meta && (
        <>
          <h1>{meta.title}</h1>
          <p>{meta.description}</p>
        </>
      )}
      <SelectedComponent city={city} />
    </div>
  );
}
