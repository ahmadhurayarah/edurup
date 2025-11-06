import type { Metadata } from "next";

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
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `PG | Data Analytics Course in ${cityName}`,
    description:
      "Learn Data Analytics with SQL, Excel, Power BI, and Tableau. Work on real datasets and build your portfolio. Join Data Analytics course with 100% placement support.",
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
    courseCode: "DA-PGP",
    educationalLevel: "Professional",
    courseMode: "online",
    inLanguage: "en",
    duration: "P32W",
    timeRequired: "PT2H",
    url: url,
    teaches: [
      "SQL",
      "Excel Data Analysis",
      "Power BI",
      "Tableau",
      "Data Visualization",
      "Statistics",
      "Python for Analytics",
    ],
  };
}
