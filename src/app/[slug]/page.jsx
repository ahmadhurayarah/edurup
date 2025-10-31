// ✅ Server Component (default in app/ routes)
import CourseClient from "./CourseClient";

export default async function CoursePage({ params }) {
  const slug = (await params)?.slug?.toLowerCase();

  if (!slug) return <div>Invalid URL</div>;

  const tokens = slug.split("-");
  const city = tokens.pop();
  const courseKey = tokens.join("-");

  return <CourseClient courseKey={courseKey} city={city} />;
}
