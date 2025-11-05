import CourseClient from "./CourseClient";
import { Navbar } from "../../components/Navbar";
import Footer from "../(main)/components/Footer";
import CourseCities from "../(main)/components/CourseCities";
import { getCourseMeta } from "@/app/utils/data";

export default async function CoursePage({ params }) {
  const slug = (await params)?.slug?.toLowerCase();

  if (!slug) return <div className="p-8 text-center">Invalid URL</div>;

  // ✅ ALLOWED ROUTES - All 4 courses with their 10 cities + MBA courses
  const allowedRoutes = [
    // Digital Marketing Course - 10 cities
    "digital-marketing-course-chennai",
    "digital-marketing-course-hyderabad", 
    "digital-marketing-course-kochi",
    "digital-marketing-course-vizag",
    "digital-marketing-course-mumbai",
    "digital-marketing-course-pune",
    "digital-marketing-course-marathahalli",
    "digital-marketing-course-vijayawada",
    "digital-marketing-course-btm-layout",
    "digital-marketing-course-tirupati",
    
    // Data Science Course - 10 cities
    "data-science-course-chennai",
    "data-science-course-hyderabad", 
    "data-science-course-kochi",
    "data-science-course-vizag",
    "data-science-course-mumbai",
    "data-science-course-pune",
    "data-science-course-marathahalli",
    "data-science-course-vijayawada",
    "data-science-course-btm-layout",
    "data-science-course-tirupati",
    
    // Full Stack Developer Course - 10 cities
    "full-stack-developer-course-chennai",
    "full-stack-developer-course-hyderabad", 
    "full-stack-developer-course-kochi",
    "full-stack-developer-course-vizag",
    "full-stack-developer-course-mumbai",
    "full-stack-developer-course-pune",
    "full-stack-developer-course-marathahalli",
    "full-stack-developer-course-vijayawada",
    "full-stack-developer-course-btm-layout",
    "full-stack-developer-course-tirupati",
    
    // Data Analytics Course - 10 cities
    "data-analytics-course-chennai",
    "data-analytics-course-hyderabad", 
    "data-analytics-course-kochi",
    "data-analytics-course-vizag",
    "data-analytics-course-mumbai",
    "data-analytics-course-pune",
    "data-analytics-course-marathahalli",
    "data-analytics-course-vijayawada",
    "data-analytics-course-btm-layout",
    "data-analytics-course-tirupati",
    
    // MBA Courses (no cities)
    "mba-digital-marketing-course",
    "mba-digital-marketing-course-online"
  ];

  // Check if the slug is in the allowed routes
  if (!allowedRoutes.includes(slug)) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen w-full">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
            <p className="text-gray-600">The requested course is not available.</p>
          </div>
          <CourseCities />
        </main>
        <Footer />
      </>
    );
  }

  // Parse courseKey and city for allowed routes
  let courseKey = '';
  let city = '';

  if (slug.startsWith("digital-marketing-course-")) {
    courseKey = "digital-marketing-course";
    city = slug.replace("digital-marketing-course-", "");
  } else if (slug.startsWith("data-science-course-")) {
    courseKey = "data-science-course";
    city = slug.replace("data-science-course-", "");
  } else if (slug.startsWith("full-stack-developer-course-")) {
    courseKey = "full-stack-developer-course";
    city = slug.replace("full-stack-developer-course-", "");
  } else if (slug.startsWith("data-analytics-course-")) {
    courseKey = "data-analytics-course";
    city = slug.replace("data-analytics-course-", "");
  } else if (slug === "mba-digital-marketing-course") {
    courseKey = "mba-digital-marketing-course";
    city = "";
  } else if (slug === "mba-digital-marketing-course-online") {
    courseKey = "mba-digital-marketing-course-online";
    city = "";
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full">
        <CourseClient courseKey={courseKey} city={city} />
        <CourseCities />
      </main>
      <Footer />
    </>
  );
}

export async function generateMetadata({ params }) {
  const slug = (await params)?.slug?.toLowerCase();
  if (!slug) return {};

  let courseKey = '';
  let city = '';

  if (slug.startsWith("digital-marketing-course-")) {
    courseKey = "digital-marketing-course";
    city = slug.replace("digital-marketing-course-", "");
  } else if (slug.startsWith("data-science-course-")) {
    courseKey = "data-science-course";
    city = slug.replace("data-science-course-", "");
  } else if (slug.startsWith("full-stack-developer-course-")) {
    courseKey = "full-stack-developer-course";
    city = slug.replace("full-stack-developer-course-", "");
  } else if (slug.startsWith("data-analytics-course-")) {
    courseKey = "data-analytics-course";
    city = slug.replace("data-analytics-course-", "");
  } else if (slug === "mba-digital-marketing-course") {
    courseKey = "mba-digital-marketing-course";
    city = "";
  } else if (slug === "mba-digital-marketing-course-online") {
    courseKey = "mba-digital-marketing-course-online";
    city = "";
  }

  const meta = getCourseMeta(courseKey, city);
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
  };
}