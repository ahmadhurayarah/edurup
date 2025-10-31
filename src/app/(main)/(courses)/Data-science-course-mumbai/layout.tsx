import { Metadata } from "next";

interface Props {
  children: React.ReactNode;
  params: { slug?: string[] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Extract course type and city from URL
  // Handles routes like /data-science-course-bangalore
  const path = params?.slug?.join("-") || "";
  const parts = path.split("-course-");
  const courseType = parts[0]?.replace(/-/g, " ") || "";
  const city = parts[1]?.replace(/-/g, " ") || "";

  // Format nicely
  const formattedCourse =
    courseType.charAt(0).toUpperCase() + courseType.slice(1);
  const formattedCity =
    city.charAt(0).toUpperCase() + city.slice(1);

  // Build dynamic title and description
  const title = `${formattedCourse} Course in ${formattedCity} | Edurup`;
  const description = `Join the best ${formattedCourse.toLowerCase()} course in ${formattedCity}. Learn from experts and enhance your career prospects with Edurup's industry-driven curriculum.`;

  const canonical = `https://www.edurup.in/${path}`;
  const image = "https://www.edurup.in/images/logo.png";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
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

export default function DynamicLayout({ children }: Props) {
  return <>{children}</>;
}
