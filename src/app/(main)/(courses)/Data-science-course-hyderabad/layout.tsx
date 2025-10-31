import { Metadata } from "next";
import path from "path";
import url from "url";

interface LayoutProps {
  children: React.ReactNode;
}

// ✅ Helper to extract course & city from folder name
function extractMetaFromFolder(currentFileUrl: string) {
  const currentPath = url.fileURLToPath(currentFileUrl);
  const folderName = path.basename(path.dirname(currentPath)); 

  const parts = folderName.split("-course-");
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

  return { title, description, slug: folderName };
}

// ✅ Server-side metadata generation (works in static folders)
export async function generateMetadata(): Promise<Metadata> {
  const { title, description, slug } = extractMetaFromFolder(import.meta.url);

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
