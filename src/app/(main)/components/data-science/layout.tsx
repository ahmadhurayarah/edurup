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
  const description = `Join the best ${formattedCourse.toLowerCase()} course in ${formattedCity}. Learn from industry experts and enhance your data skills with Edurup’s hands-on projects and placement guidance.`;

  return { title, description, formattedCourse, formattedCity, slug: folderName };
}

// ✅ Server-side metadata generation (SEO + Schema)
export async function generateMetadata(): Promise<Metadata> {
  const { title, description, formattedCourse, formattedCity, slug } =
    extractMetaFromFolder(import.meta.url);

  const canonical = `https://www.edurup.in/${slug}`;
  const image = "https://www.edurup.in/images/logo.png";

  // 🔹 FAQ Schema (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the best ${formattedCourse.toLowerCase()} course in ${formattedCity}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Edurup offers the best ${formattedCourse.toLowerCase()} course in ${formattedCity}, featuring real-world projects, mentorship, and placement assistance.`
        }
      },
      {
        "@type": "Question",
        "name": `Does the ${formattedCourse.toLowerCase()} course in ${formattedCity} include certification?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, after completing the ${formattedCourse.toLowerCase()} course in ${formattedCity}, you will receive an industry-recognized certification from Edurup.`
        }
      },
      {
        "@type": "Question",
        "name": `Who can enroll in the ${formattedCourse.toLowerCase()} course in ${formattedCity}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Students, working professionals, and fresh graduates interested in data analytics, AI, or IT can join this ${formattedCourse.toLowerCase()} course in ${formattedCity}.`
        }
      }
    ]
  };

  // 🔹 Course + Organization Schema
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${formattedCourse} Course in ${formattedCity}`,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Edurup",
      "sameAs": "https://www.edurup.in"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "name": `${formattedCourse} Course in ${formattedCity}`,
      "courseMode": "Online and Offline",
      "location": {
        "@type": "Place",
        "name": formattedCity
      }
    }
  };

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
    other: {
      // JSON-LD scripts will be inserted into <head>
      "script:faq": JSON.stringify(faqSchema),
      "script:course": JSON.stringify(courseSchema),
    },
  };
}

export default function DynamicLayout({ children }: LayoutProps) {
  return (
    <>
      {children}

      {/* ✅ Inject structured data directly into <head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "Edurup",
                "url": "https://www.edurup.in",
                "logo": "https://www.edurup.in/images/logo.png",
              },
            ],
          }),
        }}
      />
    </>
  );
}
