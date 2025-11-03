import CourseClient from "./CourseClient";
import { getCourseMeta } from "@/app/utils/data";
import { Navbar } from "../../components/Navbar";
import Footer from "../(main)/components/Footer";
import CourseCities from "../(main)/components/CourseCities";
// import CourseBanner from "../(main)/components/CourseBanner"; // ✅ Import it here

export default async function CoursePage({ params }) {
  const slug = (await params)?.slug?.toLowerCase();

  if (!slug) return <div>Invalid URL</div>;

  const tokens = slug.split("-");
  const city = tokens.pop();
  const courseKey = tokens.join("-");

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* ✅ Banner outside of constrained container */}
        <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2">
          {/* <CourseBanner /> */}
        </div>

        {/* Your main course content */}
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

  const tokens = slug.split("-");
  const city = tokens.pop();
  const courseKey = tokens.join("-");

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
