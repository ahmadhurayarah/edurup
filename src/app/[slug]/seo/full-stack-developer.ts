import type { Metadata } from "next";
import { fullStackDeveloperCourseData } from "@/components/courses/full-stack-developer/data";

export function getFullStackDeveloperMetadata(
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

export function generateFullStackDeveloperSchema(cityName: string, url: string) {
  const { course, provider } = fullStackDeveloperCourseData;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `PG | ${course.name} Course in ${cityName}`,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: provider.name,
      url: provider.url,
    },
    courseCode: course.code,
    educationalLevel: course.educationalLevel,
    courseMode: course.mode,
    inLanguage: course.language,
    duration: course.durationISO,
    timeRequired: course.timeRequired,
    url: url,
    offers: {
      "@type": "Offer",
      price: course.price.discounted.toString(),
      priceCurrency: course.price.currency,
      availability: "https://schema.org/InStock",
      url: url,
      priceValidUntil: course.price.validUntil,
      seller: { "@type": "Organization", name: provider.name },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.rating?.value?.toString?.() || "4.8",
      reviewCount: course.rating?.count?.toString?.() || "1000",
      bestRating: course.rating?.best?.toString?.() || "5",
      worstRating: course.rating?.worst?.toString?.() || "1",
    },
    teaches: course.teaches || [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "Full Stack Development",
      "Web Development",
    ],
  };
}

// FAQ Schema
export function generateFullStackDeveloperFAQSchema(cityName: string) {
  const { faq } = (fullStackDeveloperCourseData as any);
  if (!faq || !Array.isArray(faq) || faq.length === 0) return null;
  const replaceCity = (text: string) => text.replace(/\{city\}/g, cityName);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item: any) => ({
      "@type": "Question",
      name: replaceCity(item.question),
      acceptedAnswer: { "@type": "Answer", text: replaceCity(item.answer) },
    })),
  };
}

// Aggregate helper (Course + FAQ only)
export function generateAllFullStackDeveloperSchemas(
  cityName: string,
  url: string
) {
  const course = generateFullStackDeveloperSchema(cityName, url);
  const faq = generateFullStackDeveloperFAQSchema(cityName);
  return [course, faq].filter(Boolean);
}

