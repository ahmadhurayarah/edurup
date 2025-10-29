import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Full Stack Web Developer Course in Bangalore | MERN Stack | Edurup Learning",
  description:
    "Master React, Node.js, MongoDB, and Express with Edurup's Full Stack Developer Course in Bangalore. Hands-on projects + Placement Assistance.",
  openGraph: {
    title:
      "Full Stack Web Developer Course in Bangalore | MERN Stack | Edurup Learning",
    description:
      "Master React, Node.js, MongoDB, and Express with Edurup's Full Stack Developer Course in Bangalore. Hands-on projects + Placement Assistance.",
    url: "https://www.edurup.in/full-stack-developer-course-bangalore",
    siteName: "Edurup Learning",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Edurup Full Stack Developer Course in Bangalore",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Full Stack Web Developer Course in Bangalore | MERN Stack | Edurup Learning",
    description:
      "Master React, Node.js, MongoDB, and Express with Edurup's Full Stack Developer Course in Bangalore. Hands-on projects + Placement Assistance.",
    images: "/twitter_image.png",
    site: "@EdurupLearning",
  },
  alternates: {
    canonical: "https://www.edurup.in/full-stack-developer-course-bangalore",
  },
  robots: "index, follow",
};

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Canonical tag */}
      <link
        rel="canonical"
        href="https://www.edurup.in/full-stack-developer-course-bangalore"
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Full Stack Developer Course in Bangalore",
            "description":
              "Master MERN Stack development with Edurup Learning's Full Stack Developer Course in Bangalore. Learn MongoDB, Express, React, and Node.js with live projects and placement support.",
            "provider": {
              "@type": "Organization",
              "name": "Edurup Learning",
              "url": "https://www.edurup.in",
              "logo": "https://www.edurup.in/images/logo.png",
              "sameAs": [
                "https://www.instagram.com/edurup_learning",
                "https://www.linkedin.com/school/edurup-learning",
                "https://maps.app.goo.gl/Lp8gWA41rM5ikMe49",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "Admissions",
                "areaServed": "IN",
                "availableLanguage": "English",
              },
            },
            "educationalCredentialAwarded":
              "Professional Certificate in Full Stack Development",
            "learningResourceType": "Online & Classroom Course",
            "occupationalCredentialAwarded":
              "Full Stack Developer / Software Engineer",
            "courseMode": "Online and Offline (Bangalore)",
            "inLanguage": "en",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Offline and Online",
              "startDate": "2025-11-15",
              "endDate": "2026-07-15",
              "instructor": {
                "@type": "Person",
                "name": "Industry Mentors in MERN Stack Development",
                "description":
                  "Software developers with 8+ years of full stack development experience.",
              },
              "location": {
                "@type": "Place",
                "name": "Edurup Learning - Bangalore",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "marathahalli, Bangalore",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "postalCode": "560001",
                  "addressCountry": "IN",
                },
              },
            },
          }),
        }}
      />

      {/* ✅ Full Stack Developer FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the Full Stack Developer Course offered by Edurup Learning in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Full Stack Developer Course in Bangalore by Edurup Learning is a job-ready, industry-oriented program that covers front-end and back-end technologies, live projects and placement support."
                }
              },
              {
                "@type": "Question",
                "name": "Who can apply for the Full Stack Developer course in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Anyone eager to become a full stack web developer can apply — including fresh graduates, working professionals, and non-IT backgrounds. No prior coding knowledge required."
                }
              },
              {
                "@type": "Question",
                "name": "What is the duration and format of this Full Stack Developer course in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The program spans several weeks, is delivered through live online classes (and optionally hybrid in Bangalore), and includes assignments and project work."
                }
              },
              {
                "@type": "Question",
                "name": "What technologies and tools are covered in the curriculum?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Learners will be trained in HTML5, CSS3, JavaScript, React/Angular, Node.js, Express, MongoDB/MySQL, Git, deployment tools and full-stack application development."
                }
              },
              {
                "@type": "Question",
                "name": "Does Edurup Learning provide placement assistance for this Full Stack Developer course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — Edurup provides placement support including resume building, mock interviews, hiring partner access, and assistance until job placement."
                }
              },
              {
                "@type": "Question",
                "name": "What is the fee structure and payment/EMI options for this course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fees vary by batch and mode; scholarships and early-bird discounts may apply. Flexible EMI and payment options are available."
                }
              },
              {
                "@type": "Question",
                "name": "What are the eligibility criteria for enrolling in the Full Stack Developer Course in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Minimal eligibility: basic logic/maths aptitude helps, no strict coding background required, just the willingness to learn and complete the program."
                }
              },
              {
                "@type": "Question",
                "name": "Will I receive a certificate upon completion of the program?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — Upon successful completion, you will receive an industry-recognised certification for the Full Stack Developer course from Edurup Learning."
                }
              },
              {
                "@type": "Question",
                "name": "What kinds of projects will I work on during the course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Projects include building responsive web apps, RESTful APIs, full-stack MERN/MEAN applications, deploying to cloud/servers, and a personalized capstone portfolio."
                }
              },
              {
                "@type": "Question",
                "name": "Is the course available offline in Bangalore or only online?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The course is offered online with live classes, and may include optional in-person classroom sessions in Bangalore; check current batch mode."
                }
              },
              {
                "@type": "Question",
                "name": "What job roles and salary can I expect after completing the Full Stack Developer course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Graduates can target roles like Full Stack Developer, Web Application Developer, Front/Back-End Developer. In Bangalore freshers may start at ~₹ 5-10 LPA, scaling up with skills."
                }
              },
              {
                "@type": "Question",
                "name": "How do I apply or enrol for the Edurup Learning Full Stack Developer Course in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Visit the course page on Edurup Learning's website, click 'Apply' or 'Book a Demo', fill the registration form and secure your seat for the next batch."
                }
              }
            ]
          }),
        }}
      />

      <div className="h-full dark:bg-dark">
        <main className="h-full mt-[94px] dark:bg-dark">{children}</main>
      </div>
    </>
  );
};

export default CoursesLayout;