"use client";
import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "PGP | Digital Marketing Course in Bangalore with Placement | Edurup Learning",
  description:
    "Learn SEO, Google Ads, and Social Media Marketing with Edurup's Digital Marketing Course in Bangalore. Classroom & Online batches with 100% Placement Support.",
  openGraph: {
    title:
      "PGP | Digital Marketing Course in Bangalore with Placement | Edurup Learning",
    description:
      "Learn SEO, Google Ads, and Social Media Marketing with Edurup's Digital Marketing Course in Bangalore. Classroom & Online batches with 100% Placement Support.",
    url: "https://www.edurup.in/digital-marketing-course-bangalore",
    siteName: "Edurup Learning",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Edurup Digital Marketing Course in Bangalore",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PGP | Digital Marketing Course in Bangalore with Placement | Edurup Learning",
    description:
      "Learn SEO, Google Ads, and Social Media Marketing with Edurup's Digital Marketing Course in Bangalore. Classroom & Online batches with 100% Placement Support.",
    images: "/twitter_image.png",
    site: "@EdurupLearning",
  },
  robots: "index, follow",
};

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Digital Marketing Course in Bangalore",
            "description":
              "Join Edurup Learning's Digital Marketing Course in Bangalore and learn SEO, Google Ads, Social Media Marketing, and Analytics with 100% placement assistance.",
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
              "Post graduate in Digital Marketing",
            "learningResourceType": "Online & Classroom Course",
            "occupationalCredentialAwarded":
              "Campaign Manager / Digital Marketing Executive",
            "courseMode": "Online and Offline (Bangalore)",
            "inLanguage": "en",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Offline and Online",
              "startDate": "2025-11-15",
              "endDate": "2026-07-15",
              "instructor": {
                "@type": "Person",
                "name": "Industry Experts from Google & Meta",
                "description":
                  "Trainers with 10+ years of experience in SEO, Google Ads, and Social Media Marketing.",
              },
              "location": {
                "@type": "Place",
                "name": "Edurup Learning - Bangalore",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "marathahalli , Bangalore",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the Digital Marketing Course at Edurup Learning?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Edurup Learning's Digital Marketing Course in Bangalore is an industry-oriented training program covering SEO, Google Ads, Social Media Marketing, Email Marketing, and Analytics with 100% placement support."
                }
              },
              {
                "@type": "Question",
                "name": "Who can enroll in the Digital Marketing Course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Students, working professionals, and entrepreneurs who want to build a career in digital marketing can join. No prior experience required."
                }
              },
              {
                "@type": "Question",
                "name": "Does Edurup provide placement support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Edurup offers 100% placement support including mock interviews, resume building, and recruiter connections."
                }
              },
              {
                "@type": "Question",
                "name": "What tools will I learn during the course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You'll learn Google Ads, Meta Ads, Google Analytics, Semrush, Mailchimp, WordPress, and more."
                }
              },
              {
                "@type": "Question",
                "name": "What is the duration of the course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The course duration is 8 months with practical projects and live campaign experience."
                }
              },
              {
                "@type": "Question",
                "name": "Is this course available online or offline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can choose between online live classes or classroom sessions at our Bangalore center."
                }
              },
              {
                "@type": "Question",
                "name": "What is the average salary after the course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Freshers can earn between ₹3 LPA to ₹6 LPA depending on company and performance."
                }
              },
              {
                "@type": "Question",
                "name": "What is the course fee?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The course fee is ₹1,00,000 with up to 30% scholarship and EMI options available."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Edurup Learning over other institutes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Edurup offers practical, project-based learning, 100% placement support, and mentorship from industry experts in Bangalore."
                }
              },
              {
                "@type": "Question",
                "name": "What are the modules covered in the Digital Marketing Course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The course includes SEO, Google Ads, Social Media Marketing, Email Marketing, Content Marketing, Analytics, and Affiliate Marketing modules."
                }
              },
              {
                "@type": "Question",
                "name": "Will I get to work on live digital marketing campaigns?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, students work on real Google Ads and Meta Ads campaigns to gain practical experience."
                }
              },
              {
                "@type": "Question",
                "name": "What certifications will I receive after the course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You will receive Edurup's PGP Certificate and guidance for Google Ads, Meta, and HubSpot certifications."
                }
              },
              {
                "@type": "Question",
                "name": "Can I learn digital marketing without a technical background?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the course is designed for beginners. You don't need coding or technical experience."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide demo classes before enrolling?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Edurup offers free demo classes to help you understand the teaching style and curriculum."
                }
              },
              {
                "@type": "Question",
                "name": "What kind of companies hire Edurup students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our alumni work in companies like Valueleaf, MetricFox, Amazon, and Qpi AI."
                }
              },
              {
                "@type": "Question",
                "name": "What is the batch size for each session?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Each batch has 15–20 students to ensure personalized mentorship."
                }
              },
              {
                "@type": "Question",
                "name": "Can I switch from online to offline classes midway?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can switch between online and offline modes anytime during the course."
                }
              },
              {
                "@type": "Question",
                "name": "Will I get internship opportunities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, students are offered internship opportunities with partner companies after completing the course modules."
                }
              },
              {
                "@type": "Question",
                "name": "How can I enroll in the course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can apply via the website's Apply Now button or visit the Bangalore center. Our counselors will guide you with scholarships and EMI options."
                }
              },
              {
                "@type": "Question",
                "name": "What if I miss a class?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Missed classes can be revisited through recorded sessions available on the learning portal."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide doubt-clearing or mentorship sessions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, weekly mentorship and one-on-one doubt-clearing sessions are provided by trainers."
                }
              },
              {
                "@type": "Question",
                "name": "What career roles can I apply for after this course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can become a Digital Marketing Executive, SEO Specialist, Google Ads Expert, or Campaign Manager."
                }
              },
              {
                "@type": "Question",
                "name": "How do I contact Edurup Learning for more details?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Visit www.edurup.in or email info@edurup.in, or call our Bangalore center directly for course counseling."
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