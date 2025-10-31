import { Metadata } from "next";
import { headers } from "next/headers";

interface LayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata(): Promise<Metadata> {
  // Get full URL from request headers
  const headersList = headers();
  const url = headersList.get("x-url") || headersList.get("referer") || "";

  // Try to extract last part of URL (e.g., data-science-course-mumbai)
  const match = url.match(/data-science-course-[a-z-]+/i);
  const slug = match ? match[0] : "";

  // Extract course and city names
  const parts = slug.split("-course-");
  const courseType = parts[0]?.replace(/-/g, " ") || "Professional";
  const city = parts[1]?.replace(/-/g, " ") || "Your City";

  // Format text properly
  const formattedCourse = courseType
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const formattedCity = city
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // Dynamic SEO
  const title = `${formattedCourse} Course in ${formattedCity} | Edurup`;
  const description = `Join the best ${formattedCourse.toLowerCase()} course in ${formattedCity}. Learn from experts and enhance your career prospects with Edurup's industry-driven curriculum.`;

  const canonical = `https://www.edurup.in/${slug}`;
  const image = "https://www.edurup.in/images/logo.png";

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [image],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function DynamicLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
