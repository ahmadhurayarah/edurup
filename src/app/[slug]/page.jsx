// ✅ Server Component
import CourseClient from "./CourseClient";
import { Navbar } from "../../components/Navbar";
import Footer from "../(main)/components/Footer";
import CourseCities from "../(main)/components/CourseCities";
import { getCourseMeta } from "@/app/utils/data";

export default async function CoursePage({ params }) {
  const slug = (await params)?.slug?.toLowerCase();

  if (!slug) return <div>Invalid URL</div>;

  const tokens = slug.split("-");
  const city = tokens.pop();
  const courseKey = tokens.join("-");

  return (
    <>
      <Navbar />
      
      {/* Remove any padding/margin and ensure full width */}
      <main className="min-h-screen w-full">
        <div className="w-full">
          <CourseClient courseKey={courseKey} city={city} />
        </div>
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