import type { Metadata } from "next";

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
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `PG | Data Science & AI Course in ${cityName}`,
    description:
      "Master Data Science & AI with Python, Machine Learning, Deep Learning, and TensorFlow. Work on real AI projects and build your portfolio. Join Data Science & AI course with 100% placement support.",
    provider: {
      "@type": "Organization",
      name: "Edurup Learning",
      url: "https://www.edurup.in",
      sameAs: [
        "https://www.instagram.com/edurup_learning/",
        "https://www.linkedin.com/school/edurup-learning/",
        "https://www.facebook.com/eduruplearning",
      ],
    },
    courseCode: "DS-AI-PGP",
    educationalLevel: "Professional",
    courseMode: "online",
    inLanguage: "en",
    duration: "P32W",
    timeRequired: "PT2H",
    url: url,
    teaches: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Data Science",
      "Artificial Intelligence",
      "Neural Networks",
    ],
  };
}
