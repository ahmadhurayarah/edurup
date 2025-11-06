import type { Metadata } from "next";

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
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `PG | Full Stack Developer Course in ${cityName}`,
    description:
      "Become a Full Stack Developer with MERN stack (MongoDB, Express, React, Node.js). Build real projects and get placement assistance. Join Full Stack Developer course with 100% placement support.",
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
    courseCode: "FSD-PGP",
    educationalLevel: "Professional",
    courseMode: "online",
    inLanguage: "en",
    duration: "P32W",
    timeRequired: "PT2H",
    url: url,
    teaches: [
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

