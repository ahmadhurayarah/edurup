import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DataAnalyticsCourse from "@/components/courses/data-analytics";
import DataScienceAndAICourse from "@/components/courses/data-science-and-ai";
import DigitalMarketingCourse from "@/components/courses/digital-marketing";
import FullStackDeveloperCourse from "@/components/courses/full-stack-developer";

const COURSE_COMPONENTS: Record<string, React.ComponentType> = {
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

function getDigitalMarketingMetadata(cityName: string, url: string): Metadata {
  return {
    title: `Digital Marketing Course in ${cityName} | Edurup`,
    description: `Master Digital Marketing with hands-on projects in SEO, SEM, SMM, Content Marketing, and Google Ads. Join Digital Marketing course in ${cityName} with 100% placement support. Learn from industry experts at Edurup.`,
    keywords: [
      "Digital Marketing",
      `Digital Marketing ${cityName}`,
      "Digital Marketing Course",
      "Digital Marketing Training",
      "SEO Course",
      "SEM Training",
      "Social Media Marketing",
      "Google Ads",
      "Facebook Ads",
      `Best Digital Marketing Course ${cityName}`,
      "Digital Marketing Certification",
      "Edurup",
      "Online Courses",
      "Job Guaranteed Courses",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `Digital Marketing Course in ${cityName} | Edurup`,
      description: `Master Digital Marketing with hands-on projects in SEO, SEM, SMM, Content Marketing, and Google Ads. Join Digital Marketing course in ${cityName} with 100% placement support.`,
      url,
      siteName: "Edurup Learning",
      type: "website",
      images: [
        {
          url: "https://www.edurup.in/og_image.png",
          width: 1200,
          height: 630,
          alt: "Digital Marketing Course",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Digital Marketing Course in ${cityName} | Edurup`,
      description: `Master Digital Marketing with hands-on projects in SEO, SEM, SMM, Content Marketing, and Google Ads. Join Digital Marketing course in ${cityName} with 100% placement support.`,
      images: ["https://www.edurup.in/og_image.png"],
    },
  };
}

function getDataAnalyticsMetadata(cityName: string, url: string): Metadata {
  return {
    title: `Data Analytics Course in ${cityName} | Edurup`,
    description: `Learn Data Analytics with SQL, Excel, Power BI, and Tableau. Work on real datasets and build your portfolio. Join Data Analytics course in ${cityName} with 100% placement support. Get job-ready at Edurup.`,
    keywords: [
      "Data Analytics",
      `Data Analytics ${cityName}`,
      "Data Analytics Course",
      "Data Analytics Training",
      "SQL Course",
      "Power BI Training",
      "Tableau Course",
      "Excel Analytics",
      "Data Visualization",
      `Best Data Analytics Course ${cityName}`,
      "Data Analytics Certification",
      "Edurup",
      "Online Courses",
      "Job Guaranteed Courses",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `Data Analytics Course in ${cityName} | Edurup`,
      description: `Learn Data Analytics with SQL, Excel, Power BI, and Tableau. Work on real datasets and build your portfolio. Join Data Analytics course in ${cityName} with 100% placement support.`,
      url,
      siteName: "Edurup Learning",
      type: "website",
      images: [
        {
          url: "https://www.edurup.in/og_image.png",
          width: 1200,
          height: 630,
          alt: "Data Analytics Course",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Data Analytics Course in ${cityName} | Edurup`,
      description: `Learn Data Analytics with SQL, Excel, Power BI, and Tableau. Work on real datasets and build your portfolio. Join Data Analytics course in ${cityName} with 100% placement support.`,
      images: ["https://www.edurup.in/og_image.png"],
    },
  };
}

function getDataScienceAndAIMetadata(cityName: string, url: string): Metadata {
  return {
    title: `Data Science & AI Course in ${cityName} | Edurup`,
    description: `Master Data Science & AI with Python, Machine Learning, Deep Learning, and TensorFlow. Work on real AI projects and build your portfolio. Join Data Science & AI course in ${cityName} with 100% placement support. Get job-ready at Edurup.`,
    keywords: [
      "Data Science",
      "Artificial Intelligence",
      `Data Science ${cityName}`,
      `AI Course ${cityName}`,
      "Data Science Course",
      "AI Training",
      "Machine Learning",
      "Deep Learning",
      "Python Data Science",
      "TensorFlow",
      `Best Data Science Course ${cityName}`,
      "Data Science Certification",
      "AI Certification",
      "Edurup",
      "Online Courses",
      "Job Guaranteed Courses",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `Data Science & AI Course in ${cityName} | Edurup`,
      description: `Master Data Science & AI with Python, Machine Learning, Deep Learning, and TensorFlow. Work on real AI projects and build your portfolio. Join Data Science & AI course in ${cityName} with 100% placement support.`,
      url,
      siteName: "Edurup Learning",
      type: "website",
      images: [
        {
          url: "https://www.edurup.in/og_image.png",
          width: 1200,
          height: 630,
          alt: "Data Science & AI Course",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Data Science & AI Course in ${cityName} | Edurup`,
      description: `Master Data Science & AI with Python, Machine Learning, Deep Learning, and TensorFlow. Work on real AI projects and build your portfolio. Join Data Science & AI course in ${cityName} with 100% placement support.`,
      images: ["https://www.edurup.in/og_image.png"],
    },
  };
}

function getFullStackDeveloperMetadata(
  cityName: string,
  url: string
): Metadata {
  return {
    title: `Full Stack Developer Course in ${cityName} | Edurup`,
    description: `Become a Full Stack Developer with MERN stack (MongoDB, Express, React, Node.js). Build real projects and get placement assistance. Join Full Stack Developer course in ${cityName} with 100% placement support. Learn from industry experts at Edurup.`,
    keywords: [
      "Full Stack Developer",
      `Full Stack Developer ${cityName}`,
      "Full Stack Course",
      "MERN Stack",
      "React Course",
      "Node.js Training",
      "MongoDB Course",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      `Best Full Stack Course ${cityName}`,
      "Full Stack Certification",
      "Edurup",
      "Online Courses",
      "Job Guaranteed Courses",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `Full Stack Developer Course in ${cityName} | Edurup`,
      description: `Become a Full Stack Developer with MERN stack (MongoDB, Express, React, Node.js). Build real projects and get placement assistance. Join Full Stack Developer course in ${cityName} with 100% placement support.`,
      url,
      siteName: "Edurup Learning",
      type: "website",
      images: [
        {
          url: "https://www.edurup.in/og_image.png",
          width: 1200,
          height: 630,
          alt: "Full Stack Developer Course",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Full Stack Developer Course in ${cityName} | Edurup`,
      description: `Become a Full Stack Developer with MERN stack (MongoDB, Express, React, Node.js). Build real projects and get placement assistance. Join Full Stack Developer course in ${cityName} with 100% placement support.`,
      images: ["https://www.edurup.in/og_image.png"],
    },
  };
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

  if (courseKey === "digital-marketing-course") {
    return getDigitalMarketingMetadata(cityName, url);
  }

  if (courseKey === "data-analytics-course") {
    return getDataAnalyticsMetadata(cityName, url);
  }

  if (courseKey === "data-science-and-ai-course") {
    return getDataScienceAndAIMetadata(cityName, url);
  }

  if (courseKey === "full-stack-developer-course") {
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

  return <CourseComponent />;
}
