import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "PGP | Data science & AI Course in Bangalore with Placement | Edurup Learning",
  description:
    "Learn SEO, Google Ads, and Social Media Marketing with Edurup’s Data science & AI Course in Bangalore. Classroom & Online batches with 100% Placement Support.",
  openGraph: {
    title:
      "PGP | Data science & AI Course in Bangalore with Placement | Edurup Learning",
    description:
      "Learn SEO, Google Ads, and Social Media Marketing with Edurup’s Data science & AI Course in Bangalore. Classroom & Online batches with 100% Placement Support.",
    url: "https://www.edurup.in/data-science-and-ai-course-bangalore",
    siteName: "Edurup Learning",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Edurup Data science & AI Course in Bangalore",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PGP | Data science & AI Course in Bangalore with Placement | Edurup Learning",
    description:
      "Learn SEO, Google Ads, and Social Media Marketing with Edurup’s Data science & AI Course in Bangalore. Classroom & Online batches with 100% Placement Support.",
    images: "/twitter_image.png",
    site: "@EdurupLearning",
  },
  robots: "index, follow",
};

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Data science & AI Course in Bangalore",
            "description":
              "Join Edurup Learning’s DData science & AI Course in Bangalore and learn SEO, Google Ads, Social Media Marketing, and Analytics with 100% placement assistance.",
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
              "Post graduate in  Data science & AIl",
            "learningResourceType": "Online & Classroom Course",
            "occupationalCredentialAwarded":
              "Campaign Manager / Data science & AI Executive",
            "courseMode": "Online and Offline (Bangalore)",
            "inLanguage": "en",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Offline and Online",
              "startDate": "2025-11-15",
              "endDate": "2026-07-15",
              "instructor": {
                "@type": "Person",
                "name": "Industry Experts from Google & Meta",
                "description":
                  "Trainers with 10+ years of experience in SEO, Google Ads, and Social Media Marketing.",
              },
              "location": {
                "@type": "Place",
                "name": "Edurup Learning - Bangalore",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "marathahalli , Bangalore",
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