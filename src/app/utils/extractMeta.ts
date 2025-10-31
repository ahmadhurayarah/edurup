export function extractMetaFromPath(path: string) {
  const slugMatch = path.match(/data-science-course-[a-z-]+/i);
  const slug = slugMatch ? slugMatch[0] : "";

  const parts = slug.split("-course-");
  const courseType = parts[0]?.replace(/-/g, " ") || "Professional";
  const city = parts[1]?.replace(/-/g, " ") || "Your City";

  const formattedCourse = courseType
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const formattedCity = city
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const title = `${formattedCourse} Course in ${formattedCity} | Edurup`;
  const description = `Join the best ${formattedCourse.toLowerCase()} course in ${formattedCity}. Learn from experts and enhance your career prospects with Edurup's industry-driven curriculum.`;

  return { title, description };
}
