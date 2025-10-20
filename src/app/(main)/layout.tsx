import { Navbar } from "@/components/Navbar";
import Footer from "./components/Footer";
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

        {/* 🔹 Open Graph Tags (for Facebook, WhatsApp, LinkedIn, etc.) */}
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

        {/* 🔹 Basic Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-full dark:bg-dark">
        <Navbar />
        <main className="h-full mt-[94px] dark:bg-dark">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
