import Link from "next/link";
import DataAnalyticsCourse from "@/components/courses/data-analytics";

const ALL_COURSES = [
  "digital-marketing-course",
  "data-analytics-course",
  "data-science-course",
  "full-stack-developer-course",
];

const ALL_CITIES = [
  "chennai",
  "hyderabad",
  "kochi",
  "vizag",
  "mumbai",
  "pune",
  "marathahalli",
  "vijayawada",
  "btm-layout",
  "tirupati",
];

const COURSE_NAMES: Record<string, string> = {
  "digital-marketing-course": "Digital Marketing",
  "data-analytics-course": "Data Analytics",
  "data-science-course": "Data Science & AI",
  "full-stack-developer-course": "Full Stack Developer",
};

const CITY_NAMES: Record<string, string> = {
  chennai: "Chennai",
  hyderabad: "Hyderabad",
  kochi: "Kochi",
  vizag: "Vizag",
  mumbai: "Mumbai",
  pune: "Pune",
  marathahalli: "Marathahalli",
  vijayawada: "Vijayawada",
  "btm-layout": "BTM Layout",
  tirupati: "Tirupati",
};

function formatCityName(citySlug: string): string {
  return (
    CITY_NAMES[citySlug] ||
    citySlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

function formatCourseName(courseKey: string): string {
  return (
    COURSE_NAMES[courseKey] ||
    courseKey
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

export default async function CoursesPageServer({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let courseKey = "";
  let citySlug = "";

  for (const course of ALL_COURSES) {
    if (slug.startsWith(`${course}-`)) {
      courseKey = course;
      citySlug = slug.replace(`${course}-`, "");
      break;
    }
  }

  if (!courseKey && ALL_COURSES.includes(slug)) {
    courseKey = slug;
  }

  const courseFound = courseKey && ALL_COURSES.includes(courseKey);
  const cityFound = citySlug && ALL_CITIES.includes(citySlug);

  // Course or city not found
  if (!courseFound || (citySlug && !cityFound)) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Course Information
            </h1>
            <div className="space-y-6">
              <div>
                <p className="text-xl font-semibold text-red-600 dark:text-red-400">
                  Course or city not found
                </p>
                      </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Slug:{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {slug}
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const courseName = formatCourseName(courseKey);
  
  if (citySlug && cityFound) {
    // Render course component for data-analytics-course
    if (courseKey === "data-analytics-course") {
      return <DataAnalyticsCourse />;
    }

    // Default display for other courses
    const cityName = formatCityName(citySlug);
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Course Information
            </h1>
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Course
                </h2>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {courseName}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {courseKey}
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">
                  City
                </h2>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {cityName}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {citySlug}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Slug:{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {slug}
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Course Information
          </h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Course
              </h2>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {courseName}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {courseKey}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">
                Available Cities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {ALL_CITIES.map((city) => {
                  const fullSlug = `${courseKey}-${city}`;
                  return (
                    <Link
                      key={city}
                      href={`/courses-new/${fullSlug}`}
                      className="block bg-gray-50 dark:bg-gray-700 p-3 rounded-md border border-gray-200 dark:border-gray-600 text-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {formatCityName(city)}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {city}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Slug:{" "}
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  {slug}
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
