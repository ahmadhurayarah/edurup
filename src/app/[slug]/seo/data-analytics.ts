import type { Metadata } from "next";
import { dataAnalyticsCourseData } from "@/components/courses/data-analytics/data";

export function getDataAnalyticsMetadata(
  cityName: string,
  url: string
): Metadata {
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

export function generateDataAnalyticsSchema(cityName: string, url: string) {
  const { course, provider } = dataAnalyticsCourseData;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `PG | ${course.name} Course in ${cityName}`,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: provider.name,
      url: provider.url,
      sameAs: provider.sameAs,
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
      seller: {
        "@type": "Organization",
        name: provider.name,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.rating.value.toString(),
      reviewCount: course.rating.count.toString(),
      bestRating: course.rating.best.toString(),
      worstRating: course.rating.worst.toString(),
    },
    teaches: course.teaches,
  };
}

// FAQ Schema
export function generateDataAnalyticsFAQSchema(cityName: string) {
  const { faq } = dataAnalyticsCourseData as any;
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
export function generateAllDataAnalyticsSchemas(cityName: string, url: string) {
  const course = generateDataAnalyticsSchema(cityName, url);
  const faq = generateDataAnalyticsFAQSchema(cityName);
  return [course, faq].filter(Boolean);
}
