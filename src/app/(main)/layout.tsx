"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "./components/Footer";
import CourseCities from "./components/CourseCities";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // ✅ Extract course & city from URL (e.g. /data-science-course-bangalore)
  const { dynamicTitle, dynamicDescription } = useMemo(() => {
    const path = pathname || "";
    const match = path.match(/\/([^\/]+-course-[^\/]+)/);

    if (match && match[1]) {
      const folderName = match[1];
      const parts = folderName.split("-course-");
      const courseType = parts[0]?.replace(/-/g, " ") || "";
      const city = parts[1]?.replace(/-/g, " ") || "";

      const formattedCourse = courseType
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      const formattedCity = city
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      return {
        dynamicTitle: `${formattedCourse} Course in ${formattedCity} | Edurup`,
        dynamicDescription: `Join the best ${formattedCourse.toLowerCase()} course in ${formattedCity}. Learn from industry experts and enhance your skills with Edurup’s hands-on projects and placement guidance.`,
      };
    }

    return { dynamicTitle: null, dynamicDescription: null };
  }, [pathname]);

  const title =
    dynamicTitle ||
    "Edurup Learning | PGP in Digital Marketing, Full Stack, Data Science & Analytics in Bangalore";
  const description =
    dynamicDescription ||
    "Edurup Learning offers industry-recognized Post Graduate Programs (PGP) in Digital Marketing, Full Stack Development, Data Science, and Data Analytics in Bangalore. Learn from MNC professionals, work on live projects, and get 100% placement support.";

  return (
    <>
      <Head>
        {/* 🔹 SEO Title */}
        <title>{title}</title>

        {/* 🔹 Meta Description */}
        <meta name="description" content={description} />

        {/* 🔹 Keywords */}
        <meta
          name="keywords"
          content="Edurup Learning, Digital Marketing Course Bangalore, Data Science Course Bangalore, Data Analytics Course Bangalore, Full Stack Developer Course Bangalore, Software Training Institute Bangalore, PGP Courses, 100% Placement Training"
        />

        {/* 🔹 Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edurup.in/" />
        <meta
          property="og:image"
          content="https://edurup.in/images/edurup-banner.jpg"
        />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://edurup.in/images/edurup-banner.jpg"
        />
        <meta name="twitter:site" content="@EdurupLearning" />

        {/* 🔹 Basic Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        {/* 🔹 Structured Data / Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Edurup Learning",
              url: "https://www.edurup.in",
              logo: "https://www.edurup.in/images/logo.png",
              description:
                "Edurup Learning provides job-guaranteed online and classroom courses in Digital Marketing, Data Analytics and Full Stack Development.",
              sameAs: [
                "https://www.instagram.com/edurup_learning/",
                "https://www.linkedin.com/school/edurup-learning/",
                "https://www.facebook.com/eduruplearning",
                "https://maps.app.goo.gl/Lp8gWA41rM5ikMe49",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-XXXXXXXXXX",
                contactType: "Admissions",
                areaServed: "IN",
                availableLanguage: "English",
              },
            }),
          }}
        />

        {/* ✅ Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MBBG98KF');`,
          }}
        />

        {/* ✅ Google Ads Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17654394600"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17654394600');
            `,
          }}
        />

        {/* ✅ Google Analytics (GA4) Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BQJXZKCHX4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BQJXZKCHX4');
            `,
          }}
        />

        {/* 🔹 Extra Meta */}
        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="Edurup Learning" />
        <meta name="apple-mobile-web-app-title" content="Edurup Learning" />
      </Head>

      {/* ✅ Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MBBG98KF"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <div className="min-h-full dark:bg-dark">
        <Navbar />
        <main className="h-full mt-[94px] dark:bg-dark">{children}</main>
        <CourseCities />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
