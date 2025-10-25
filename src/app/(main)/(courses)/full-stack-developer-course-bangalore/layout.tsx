import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Full Stack Web Developer Course in Bangalore | MERN Stack | Edurup Learning",
  description:
    "Master React, Node.js, MongoDB, and Express with Edurup's Full Stack Developer Course in Bangalore. Hands-on projects + Placement Assistance.",
  openGraph: {
    title:
      "Full Stack Web Developer Course in Bangalore | MERN Stack | Edurup Learning",
    description:
      "Master React, Node.js, MongoDB, and Express with Edurup's Full Stack Developer Course in Bangalore. Hands-on projects + Placement Assistance.",
    url: "https://www.edurup.in/full-stack-developer-course-bangalore",
    siteName: "Edurup Learning",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Edurup Full Stack Developer Course in Bangalore",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Full Stack Web Developer Course in Bangalore | MERN Stack | Edurup Learning",
    description:
      "Master React, Node.js, MongoDB, and Express with Edurup's Full Stack Developer Course in Bangalore. Hands-on projects + Placement Assistance.",
    images: "/twitter_image.png",
    site: "@EdurupLearning",
  },
  alternates: {
    canonical: "https://www.edurup.in/full-stack-developer-course-bangalore",
  },
  robots: "index, follow",
};

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Canonical tag */}
      <link
        rel="canonical"
        href="https://www.edurup.in/full-stack-developer-course-bangalore"
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Full Stack Developer Course in Bangalore",
            "description":
              "Master MERN Stack development with Edurup Learning's Full Stack Developer Course in Bangalore. Learn MongoDB, Express, React, and Node.js with live projects and placement support.",
            "provider": {
              "@type": "Organization",
              "name": "Edurup Learning",
              "url": "https://www.edurup.in",
              "logo": "https://www.edurup.in/images/logo.png",
              "sameAs": [
                "https://www.instagram.com/edurup_learning",
                "https://www.linkedin.com/school/edurup-learning",
                "https://maps.app.goo.gl/Lp8gWA41rM5ikMe49",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "Admissions",
                "areaServed": "IN",
                "availableLanguage": "English",
              },
            },
            "educationalCredentialAwarded":
              "Professional Certificate in Full Stack Development",
            "learningResourceType": "Online & Classroom Course",
            "occupationalCredentialAwarded":
              "Full Stack Developer / Software Engineer",
            "courseMode": "Online and Offline (Bangalore)",
            "inLanguage": "en",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Offline and Online",
              "startDate": "2025-11-15",
              "endDate": "2026-07-15",
              "instructor": {
                "@type": "Person",
                "name": "Industry Mentors in MERN Stack Development",
                "description":
                  "Software developers with 8+ years of full stack development experience.",
              },
              "location": {
                "@type": "Place",
                "name": "Edurup Learning - Bangalore",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "marathahalli, Bangalore",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "postalCode": "560001",
                  "addressCountry": "IN",
                },
              },
            },
          }),
        }}
      />

      <div className="h-full dark:bg-dark">
        <main className="h-full mt-[94px] dark:bg-dark">{children}</main>
      </div>
    </>
  );
};

export default CoursesLayout;