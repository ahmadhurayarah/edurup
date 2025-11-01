"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

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

      const PageComponent = dynamic(() => import(`${folder}/page`), { ssr: false });

      // ✅ Import meta.js (client-safe)
      try {
        const metaModule = await import(`${folder}/meta`);
        setMeta(metaModule.meta);
      } catch (err) {
        console.warn(`No meta.js found in ${folder}`);
      }

      setComponent(() => PageComponent);
    };

    loadCourse();
  }, [courseKey]);

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
