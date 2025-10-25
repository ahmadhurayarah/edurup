import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analyst Course in Bangalore with Placement | Edurup Learning",
  description:
    "Build a data-driven career with Edurup's Data Analytics Course in Bangalore. Learn Python, SQL, Excel, Power BI, and AI tools with job guarantee.",
  alternates: {
    canonical: "https://www.edurup.in/data-analytics-course-bangalore",
  },
  openGraph: {
    title: "Data Analyst Course in Bangalore with Placement | Edurup Learning",
    description:
      "Build a data-driven career with Edurup's Data Analytics Course in Bangalore. Learn Python, SQL, Excel, Power BI, and AI tools with job guarantee.",
    url: "https://www.edurup.in/data-analytics-course-bangalore",
    siteName: "Edurup Learning",
    images: [
      {
        url: "https://www.edurup.in/images/logo.png",
        width: 800,
        height: 600,
        alt: "Edurup Learning - Data Analytics Course in Bangalore",
      },
    ],
  },
};

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* ✅ Schema Markup for Data Analytics Course */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Data Analytics Course in Bangalore",
            description:
              "Build a data-driven career with Edurup Learning's Data Analytics Course in Bangalore. Learn Python, SQL, Excel, Power BI, and AI tools with job guarantee and placement support.",
            provider: {
              "@type": "Organization",
              name: "Edurup Learning",
              url: "https://www.edurup.in",
              logo: "https://www.edurup.in/images/logo.png",
              sameAs: [
                "https://www.instagram.com/edurup_learning",
                "https://www.linkedin.com/school/edurup-learning",
                "https://maps.app.goo.gl/Lp8gWA41rM5ikMe49",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-XXXXXXXXXX",
                contactType: "Admissions",
                areaServed: "IN",
                availableLanguage: "English",
              },
            },
            educationalCredentialAwarded:
              "Professional Certificate in Data Analytics",
            learningResourceType: "Online & Classroom Course",
            occupationalCredentialAwarded:
              "Data Analyst / Business Analyst",
            courseMode: "Online and Offline (Bangalore)",
            inLanguage: "en",
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "Offline and Online",
              startDate: "2025-11-15",
              endDate: "2026-07-15",
              instructor: {
                "@type": "Person",
                name: "Industry Experts in Data Science and AI",
                description:
                  "Trainers with 7+ years of experience in Python, SQL, Power Bi, Excel and Business Analytics.",
              },
              location: {
                "@type": "Place",
                name: "Edurup Learning - Bangalore",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Marathahalli, Bangalore",
                  addressLocality: "Bangalore",
                  addressRegion: "Karnataka",
                  postalCode: "560001",
                  addressCountry: "IN",
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