import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
  params: { slug?: string[] } | Promise<{ slug?: string[] }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slugArray = resolvedParams?.slug || [];

  // Convert slug array to string (e.g., ['data-science-course-bangalore'] → 'data-science-course-bangalore')
  const slug = Array.isArray(slugArray) ? slugArray.join("-") : "";

  // Extract parts — handles both “data-science-course-bangalore” or “ai-course-in-mumbai”
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
