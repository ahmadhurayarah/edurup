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

// FAQ Schema
export function generateFAQSchema(cityName: string, url: string) {
  const { faq } = digitalMarketingCourseData;

  // Replace {city} placeholder with actual city name
  const replaceCity = (text: string) => text.replace(/{city}/g, cityName);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: replaceCity(item.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: replaceCity(item.answer),
      },
    })),
  };
}

// Reviews Schema
export function generateReviewsSchema(url: string) {
  const { reviews } = digitalMarketingCourseData;

  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewBody: review.text,
    itemReviewed: {
      "@type": "Course",
      name: "Digital Marketing Course",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
  }));
}

// Faculty Schema
export function generateFacultySchema() {
  const { faculty } = digitalMarketingCourseData;

  return faculty.map((instructor) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: instructor.name,
    jobTitle: instructor.designation,
    image: `https://www.edurup.in${instructor.image}`,
    sameAs: instructor.url,
    knowsAbout: instructor.subjects,
    worksFor: {
      "@type": "Organization",
      name: "Edurup Learning",
    },
  }));
}

// Job Roles Schema (ProductAnalyst)
export function generateJobRolesSchema() {
  const { productAnalyst } = digitalMarketingCourseData;

  return productAnalyst.titles.map((title) => ({
    "@context": "https://schema.org",
    "@type": "Occupation",
    name: title.replace(/\n/g, " "),
    occupationLocation: {
      "@type": "Country",
      name: "India",
    },
    estimatedSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        minValue: "800000",
        maxValue: "1000000",
      },
    },
  }));
}

// Curriculum Schema (ItemList)
export function generateCurriculumSchema() {
  const { curriculum } = digitalMarketingCourseData;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Digital Marketing Course Curriculum",
    description:
      "Comprehensive curriculum covering all aspects of Digital Marketing",
    numberOfItems: curriculum.length,
    itemListElement: curriculum.map((module, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CourseModule",
        name: module.title,
        description: module.description.join(" "),
        timeRequired: module.duration,
        courseCode: `${module.title.replace(/\s+/g, "-").toLowerCase()}`,
      },
    })),
  };
}

// Organization Schema (Company)
export function generateOrganizationSchema() {
  const { provider } = digitalMarketingCourseData;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: provider.name,
    url: provider.url,
    sameAs: provider.sameAs,
    logo: "https://www.edurup.in/logo.png",
    description:
      "Edurup Learning - Professional courses with 100% placement support",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };
}

// Generate all schemas
export function generateAllDigitalMarketingSchemas(
  cityName: string,
  url: string
) {
  return [
    generateDigitalMarketingSchema(cityName, url),
    generateFAQSchema(cityName, url),
    generateCurriculumSchema(),
    generateOrganizationSchema(),
    ...generateReviewsSchema(url),
    ...generateFacultySchema(),
    ...generateJobRolesSchema(),
  ];
}
