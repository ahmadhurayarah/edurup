import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import DataAnalyticsCourse from "@/components/courses/data-analytics";
import DataScienceAndAICourse from "@/components/courses/data-science-and-ai";
import DigitalMarketingCourse from "@/components/courses/digital-marketing";
import FullStackDeveloperCourse from "@/components/courses/full-stack-developer";
import {
  getDigitalMarketingMetadata,
  generateDigitalMarketingSchema,
} from "./seo/digital-marketing";
import {
  getDataAnalyticsMetadata,
  generateDataAnalyticsSchema,
} from "./seo/data-analytics";
import {
  getDataScienceAndAIMetadata,
  generateDataScienceAndAISchema,
} from "./seo/data-science-and-ai";
import {
  getFullStackDeveloperMetadata,
  generateFullStackDeveloperSchema,
} from "./seo/full-stack-developer";

interface CourseComponentProps {
  cityName?: string;
}

const COURSE_COMPONENTS: Record<
  string,
  React.ComponentType<CourseComponentProps>
> = {
  "data-analytics-course": DataAnalyticsCourse,
  "data-science-and-ai-course": DataScienceAndAICourse,
  "digital-marketing-course": DigitalMarketingCourse,
  "full-stack-developer-course": FullStackDeveloperCourse,
};

const ALL_COURSES = [
  "digital-marketing-course",
  "data-analytics-course",
  "data-science-and-ai-course",
  "full-stack-developer-course",
];

const ALL_CITIES = [
  "chennai",
  "hyderabad",
  "kochi",
  "vizag",
  "mumbai",
  "pune",
  "marathahalli",
  "vijayawada",
  "btm-layout",
  "tirupati",
  "bangalore",
];

const COURSE_NAMES: Record<string, string> = {
  "digital-marketing-course": "Digital Marketing",
  "data-analytics-course": "Data Analytics",
  "data-science-and-ai-course": "Data Science & AI",
  "full-stack-developer-course": "Full Stack Developer",
};

const CITY_NAMES: Record<string, string> = {
  chennai: "Chennai",
  hyderabad: "Hyderabad",
  kochi: "Kochi",
  vizag: "Vizag",
  mumbai: "Mumbai",
  pune: "Pune",
  marathahalli: "Marathahalli",
  vijayawada: "Vijayawada",
  "btm-layout": "BTM Layout",
  tirupati: "Tirupati",
  bangalore: "Bangalore",
};

function formatCityName(citySlug: string): string {
  return (
    CITY_NAMES[citySlug] ||
    citySlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

// Generate static params for all course-city combinations at build time
export async function generateStaticParams() {
  const params: { slug: string }[] = [];

  for (const course of ALL_COURSES) {
    for (const city of ALL_CITIES) {
      params.push({ slug: `${course}-${city}` });
    }
  }

  return params;
}

// Allow dynamic params - pre-generated routes use SSG, invalid routes trigger 404
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  let courseKey = "";
  let citySlug = "";

  for (const course of ALL_COURSES) {
    if (slug.startsWith(`${course}-`)) {
      courseKey = course;
      citySlug = slug.replace(`${course}-`, "");
      break;
    }
  }

  if (!courseKey || !citySlug || !ALL_CITIES.includes(citySlug)) {
    return {
      title: "Course Not Found | Edurup",
      description: "The requested course is not available.",
    };
  }

  const cityName = formatCityName(citySlug);
  const url = `https://www.edurup.in/${slug}`;

  switch (courseKey) {
    case "digital-marketing-course":
      return getDigitalMarketingMetadata(cityName, url);
    case "data-analytics-course":
      return getDataAnalyticsMetadata(cityName, url);
    case "data-science-and-ai-course":
      return getDataScienceAndAIMetadata(cityName, url);
    case "full-stack-developer-course":
      return getFullStackDeveloperMetadata(cityName, url);
  }

  return {
    title: "Course Not Found | Edurup",
    description: "The requested course is not available.",
  };
}

export default async function CoursesPageServer({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let courseKey = "";
  let citySlug = "";

  for (const course of ALL_COURSES) {
    if (slug.startsWith(`${course}-`)) {
      courseKey = course;
      citySlug = slug.replace(`${course}-`, "");
      break;
    }
  }

  if (!courseKey && ALL_COURSES.includes(slug)) {
    courseKey = slug;
  }

  const courseFound = courseKey && ALL_COURSES.includes(courseKey);
  const cityFound = citySlug && ALL_CITIES.includes(citySlug);

  // If course or city not found, trigger 404
  if (!courseFound || !citySlug || !cityFound) {
    notFound();
  }

  // If course component doesn't exist, trigger 404
  const CourseComponent = COURSE_COMPONENTS[courseKey];
  if (!CourseComponent) {
    notFound();
  }

  const cityName = formatCityName(citySlug);
  const url = `https://www.edurup.in/${slug}`;

  // Generate Course Schema based on course key
  const generateCourseSchema = () => {
    switch (courseKey) {
      case "digital-marketing-course":
        return generateDigitalMarketingSchema(cityName, url);
      case "data-analytics-course":
        return generateDataAnalyticsSchema(cityName, url);
      case "data-science-and-ai-course":
        return generateDataScienceAndAISchema(cityName, url);
      case "full-stack-developer-course":
        return generateFullStackDeveloperSchema(cityName, url);
      default:
        return null;
    }
  };

  const courseSchema = generateCourseSchema();

  return (
    <>
      {courseSchema && (
        <Script
          id="course-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(courseSchema),
          }}
        />
      )}
      <CourseComponent cityName={cityName} />
    </>
  );
}
