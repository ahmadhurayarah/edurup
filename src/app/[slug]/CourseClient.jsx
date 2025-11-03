"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { getCourseMeta } from "@/app/utils/data";

const courseFolders = {
  "digital-marketing-course": "../(main)/components/digital-marketing",
  "data-analytics-course": "../(main)/components/data-analytics",
  "data-science-course": "../(main)/components/data-science",
  "full-stack-developer-course": "../(main)/components/full-stack-website",
};

export default function CourseClient({ courseKey, city }) {
  const [meta, setMeta] = useState(null);
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const loadCourse = async () => {
      const folder = courseFolders[courseKey];
      if (!folder) return;

      const PageComponent = dynamic(() => import(`${folder}/page`), {
        ssr: false,
      });

      // ✅ Centralized meta
      setMeta(getCourseMeta(courseKey, city));

      setComponent(() => PageComponent);
    };

    loadCourse();
  }, [courseKey, city]);

  if (!Component) return <div style={{ padding: 40 }}>Loading...</div>;

  const SelectedComponent = Component;

  return (
    <div style={{ padding: 0 }}>
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
