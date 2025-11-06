import type { Metadata } from "next";
import { dataScienceAICourseData } from "@/components/courses/data-science-and-ai/data";

export function getDataScienceAndAIMetadata(
  cityName: string,
  url: string
): Metadata {
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

export function generateDataScienceAndAISchema(cityName: string, url: string) {
  const { course, provider } = dataScienceAICourseData;
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
      seller: { "@type": "Organization", name: provider.name },
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
export function generateDataScienceAndAIFAQSchema(cityName: string) {
  const { faq } = dataScienceAICourseData as any;
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
export function generateAllDataScienceAndAISchemas(
  cityName: string,
  url: string
) {
  const course = generateDataScienceAndAISchema(cityName, url);
  const faq = generateDataScienceAndAIFAQSchema(cityName);
  return [course, faq].filter(Boolean);
}
