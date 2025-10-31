"use client";
import { usePathname } from "next/navigation";
import Head from "next/head";
import { ReactNode } from 'react';

export default function DynamicLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Extract course type and city from URL
  // Example: /data-science-course-bangalore
  const slug = pathname.replace("/", ""); 
  const [courseType, city] = slug
    .replace("course-", "course ")
    .split("-course-")
    .join("-")
    .split("-")
    .reduce((acc, val, i) => {
      if (i === 0) acc[0] = val.replace(/-/g, " ");
      else acc[1] = val.replace(/-/g, " ");
      return acc;
    }, ["", ""]);

  // Build dynamic title and description
  const formattedCourse =
    courseType?.replace(/-/g, " ")?.replace(/\b\w/g, (ch) => ch.toUpperCase()) || "";
  const formattedCity =
    city?.replace(/-/g, " ")?.replace(/\b\w/g, (ch) => ch.toUpperCase()) || "";

  const title = `${formattedCourse} Course ${formattedCity} | Edurup`;
  const description = `Join the best ${formattedCourse.toLowerCase()} course  ${formattedCity}. Learn from experts and enhance your career prospects with Edurup's industry-driven curriculum.`;

  const canonical = `https://www.edurup.in${pathname}`;
  const image = "https://www.edurup.in/images/logo.png";

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: title,
              description,
              provider: {
                "@type": "Organization",
                name: "Edurup",
                sameAs: "https://www.edurup.in",
              },
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
