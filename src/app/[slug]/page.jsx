import CourseClient from "./CourseClient";
import { getCourseMeta } from "@/app/utils/data";
import { COURSE_KEYS } from "@/app/utils/courses";
import { VALID_CITIES } from "@/app/utils/city";
import { Navbar } from "../../components/Navbar";
import Footer from "../(main)/components/Footer";
import CourseCities from "../(main)/components/CourseCities";
import NotFoundCourseCity from "../(main)/components/NotFoundCourseCity";
// import CourseBanner from "../(main)/components/CourseBanner"; // ✅ Import it here

export default async function CoursePage({ params }) {
  const slug = (await params)?.slug?.toLowerCase();

  if (!slug) return <div>Invalid URL</div>;

  const tokens = slug.split("-");
  const city = tokens.pop();
  const courseKey = tokens.join("-");

  const isValid = COURSE_KEYS.has(courseKey) && VALID_CITIES.has(city);

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* ✅ Banner outside of constrained container */}
        <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2">
          {/* <CourseBanner /> */}
        </div>

        {isValid ? (
          <>
            <CourseClient courseKey={courseKey} city={city} />
            <CourseCities />
          </>
        ) : (
          <>
            <NotFoundCourseCity />
            <CourseCities />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export async function generateMetadata({ params }) {
  const slug = (await params)?.slug?.toLowerCase();
  if (!slug) return {};

  const tokens = slug.split("-");
  const city = tokens.pop();
  const courseKey = tokens.join("-");

  const isValid = COURSE_KEYS.has(courseKey) && VALID_CITIES.has(city);
  const meta = isValid
    ? getCourseMeta(courseKey, city)
    : {
        title: "Course Not Found | Edurup",
        description: "The requested course or city could not be found.",
      };
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
