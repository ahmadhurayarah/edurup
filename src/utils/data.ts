export type CourseMeta = {
  title: string;
  description: string;
  keywords?: string[];
};

function toTitleCase(input: string) {
  return input
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function formatCity(city: string) {
  return toTitleCase(city.replace(/-/g, " "));
}

function formatCourseName(slug: string) {
  const name = slug.replace(/-course$/, "").replace(/-/g, " ");
  return toTitleCase(name);
}

export function getCourseMeta(courseKey: string, city: string): CourseMeta {
  const cityName = formatCity(city || "Your City");
  const courseName = formatCourseName(courseKey || "Professional");

  const base: Record<string, (city: string, course: string) => CourseMeta> = {
    "digital-marketing-course": (c, course) => ({
      title: `${course} Course in ${c} | Edurup`,
      description: `Master ${course.toLowerCase()} in ${c} with hands-on projects, certifications, and placement support at Edurup. Learn from industry experts.`,
      keywords: [
        "Digital Marketing",
        `Digital Marketing ${c}`,
        `${course} ${c}`,
        "SEO",
        "SEM",
        "SMM",
      ],
    }),
    "data-analytics-course": (c, course) => ({
      title: `${course} Course in ${c} | Edurup`,
      description: `Learn ${course.toLowerCase()} in ${c}. SQL, Excel, Power BI, Tableau with real datasets and job assistance at Edurup.`,
      keywords: [
        "Data Analytics",
        `Data Analytics ${c}`,
        `${course} ${c}`,
        "Power BI",
        "Tableau",
        "SQL",
      ],
    }),
    "data-science-course": (c, course) => ({
      title: `${course} Course in ${c} | Edurup`,
      description: `Join the best ${course.toLowerCase()} program in ${c}. Python, ML, DL, Projects, and career support at Edurup.`,
      keywords: [
        "Data Science",
        `Data Science ${c}`,
        `${course} ${c}`,
        "Machine Learning",
        "Deep Learning",
        "Python",
      ],
    }),
    "full-stack-developer-course": (c, course) => ({
      title: `${course} in ${c} | Edurup`,
      description: `Become a ${course.toLowerCase()} in ${c}. MERN stack, projects, and placement assistance with Edurup mentors.`,
      keywords: [
        "Full Stack",
        `Full Stack ${c}`,
        `${course} ${c}`,
        "React",
        "Node.js",
        "MongoDB",
      ],
    }),
  };

  const builder = base[courseKey];
  if (builder) return builder(cityName, courseName);

  return {
    title: `${courseName} Course in ${cityName} | Edurup`,
    description: `Join the best ${courseName.toLowerCase()} course in ${cityName}. Learn from experts with Edurup's industry-driven curriculum and placement support.`,
    keywords: [courseName, `${courseName} ${cityName}`, "Edurup"],
  };
}
