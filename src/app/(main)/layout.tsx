import { Navbar } from "@/components/Navbar";
import Footer from "./components/Footer";
import CourseCities from "./components/CourseCities";
import Head from "next/head";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        {/* 🔹 SEO Title */}
        <title>
          Edurup Learning | PGP in Digital Marketing, Full Stack, Data Science & Analytics in Bangalore
        </title>

        {/* 🔹 Meta Description */}
        <meta
          name="description"
          content="Edurup Learning offers industry-recognized Post Graduate Programs (PGP) in Digital Marketing, Full Stack Development, Data Science, and Data Analytics in Bangalore. Learn from MNC professionals, work on live projects, and get 100% placement support."
        />

        {/* 🔹 Keywords */}
        <meta
          name="keywords"
          content="Edurup Learning, Digital Marketing Course Bangalore, Data Science Course Bangalore, Data Analytics Course Bangalore, Full Stack Developer Course Bangalore, Software Training Institute Bangalore, PGP Courses, 100% Placement Training"
        />

        {/* 🔹 Open Graph Tags */}
        <meta
          property="og:title"
          content="Edurup Learning | PGP in Digital Marketing, Full Stack, Data Science & Analytics in Bangalore"
        />
        <meta
          property="og:description"
          content="Advance your career with Edurup Learning’s Post Graduate Programs in Digital Marketing, Data Science, Full Stack & Analytics. 100% placement support from MNC mentors."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edurup.in/" />
        <meta property="og:image" content="https://edurup.in/images/edurup-banner.jpg" />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Edurup Learning | Job-Guaranteed Online Courses in PGP Data Science, Digital Marketing, Data Analytics & Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Edurup Learning offers industry-ready online PGP programs in Data Science, Digital Marketing, Data Analytics, and Full Stack Developer. 100% placement support. Learn from Real time Working Experts."
        />
        <meta name="twitter:image" content="https://edurup.in/images/edurup-banner.jpg" />
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
