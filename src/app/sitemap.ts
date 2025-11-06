import { MetadataRoute } from "next";

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

const BASE_URL = "https://www.edurup.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split("T")[0];

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/events`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic course-city routes
  const courseRoutes: MetadataRoute.Sitemap = [];
  for (const course of ALL_COURSES) {
    for (const city of ALL_CITIES) {
      courseRoutes.push({
        url: `${BASE_URL}/${course}-${city}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    }
  }

  return [...staticRoutes, ...courseRoutes];
}
