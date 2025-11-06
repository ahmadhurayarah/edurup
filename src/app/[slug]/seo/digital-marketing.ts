import type { Metadata } from "next";
import { digitalMarketingCourseData } from "@/components/courses/digital-marketing/data";

export function getDigitalMarketingMetadata(
  cityName: string,
  url: string
): Metadata {
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

export function generateDigitalMarketingSchema(cityName: string, url: string) {
  const { course, provider } = digitalMarketingCourseData;
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
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.mode,
      startDate: course.startDate,
      instructor: {
        "@type": "Organization",
        name: `${provider.name} Faculty`,
      },
    },
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
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        value: "1",
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
