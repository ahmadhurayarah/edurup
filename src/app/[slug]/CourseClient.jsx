"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// ✅ Define base paths for all course folders
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

      // ✅ Dynamically import both page and layout
      const PageComponent = dynamic(() => import(`${folder}/page`), { ssr: false });
      const layoutModule = await import(`${folder}/layout`);

      setMeta(layoutModule.metadata || null);
      setComponent(() => PageComponent);
    };

    loadCourse();
  }, [courseKey]);

  if (!Component) {
    return (
      <div style={{ padding: 40 }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  const SelectedComponent = Component;

  return (
    <div style={{ padding: 40 }}>
      {/* ✅ Use metadata from layout.tsx */}
      {meta && (
        <>
          <h1>{meta.title}</h1>
          <p>{meta.description}</p>
        </>
      )}

      {/* ✅ Render the page */}
      <SelectedComponent city={city} />
    </div>
  );
}
