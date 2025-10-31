import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
  params: any; // ✅ Fixes typing issue with Next.js 16 dynamic layouts
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const resolvedParams = await params; // ✅ handles both sync and async params

  const path = resolvedParams?.slug?.join("-") || "";
  const parts = path.split("-course-");
  const courseType = parts[0]?.replace(/-/g, " ") || "";
  const city = parts[1]?.replace(/-/g, " ") || "";

  const formattedCourse =
    courseType.charAt(0).toUpperCase() + courseType.slice(1);
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);

  const title = `${formattedCourse} Course in ${formattedCity} | Edurup`;
  const description = `Join the best ${formattedCourse.toLowerCase()} course in ${formattedCity}. Learn from experts and enhance your career prospects with Edurup's industry-driven curriculum.`;

  const canonical = `https://www.edurup.in/${path}`;
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
