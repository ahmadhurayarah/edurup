// ✅ Server Component
import CourseClient from "./CourseClient";
import { Navbar } from "../../components/Navbar";
import Footer from "../(main)/components/Footer";
import CourseCities from "../(main)/components/CourseCities";

export default async function CoursePage({ params }) {
  const slug = (await params)?.slug?.toLowerCase();

  if (!slug) return <div>Invalid URL</div>;

  const tokens = slug.split("-");
  const city = tokens.pop();
  const courseKey = tokens.join("-");

  return (
    <>
      {/* fixed navbar with height 64px on mobile, 80px on md */}
      <Navbar /> 

      {/* content pushed below the fixed navbar */}
      <main >
        <CourseClient courseKey={courseKey} city={city} />
        <CourseCities />
      </main>

      <Footer />
    </>
  );
}
