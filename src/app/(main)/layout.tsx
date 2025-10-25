import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Edurup Learning | Job-Guaranteed Online Courses in PGP Data Science, Digital Marketing, Data Analytics & Full Stack Developer",
  description:
    "Edurup Learning offers industry-ready online PGP programs in Data Science, Digital Marketing, Data Analytics, and Full Stack Developer. 100% placement support. Learn from Real time Working Experts.",
  keywords: [
    "Edurup Learning",
    "PGP Data Science",
    "Digital Marketing",
    "Data Analytics",
    "Full Stack Developer",
    "Job Guaranteed Courses",
    "Online Learning",
    "Placement Support",
  ],
  authors: [{ name: "Edurup Learning", url: "https://www.edurup.in" }],
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon_light.png",
        href: "/icon_light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon_dark.png",
        href: "/icon_dark.png",
      },
    ],
  },
  openGraph: {
    title:
      "Edurup Learning | Job-Guaranteed Online Courses in PGP Data Science, Digital Marketing, Data Analytics & Full Stack Developer",
    description:
      "Edurup Learning offers industry-ready online PGP programs in Data Science, Digital Marketing, Data Analytics, and Full Stack Developer. 100% placement support. Learn from Real time Working Experts.",
    url: "https://www.edurup.in",
    siteName: "Edurup Learning",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Edurup Learning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Edurup Learning | Job-Guaranteed Online Courses in PGP Data Science, Digital Marketing, Data Analytics & Full Stack Developer",
    description:
      "Edurup Learning offers industry-ready online PGP programs in Data Science, Digital Marketing, Data Analytics, and Full Stack Developer. 100% placement support. Learn from Real time Working Experts.",
    images: "/twitter_image.png",
    site: "@EdurupLearning",
  },
  robots: "index, follow",
  other: {
    "script:type": "application/ld+json",
    "script:innerHTML": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Edurup Learning",
      "url": "https://www.edurup.in",
      "logo": "https://www.edurup.in/images/logo.png",
      "description":
        "Edurup Learning provides job-guaranteed online and classroom courses in Digital Marketing, Data Analytics and Full Stack Development.",
      "sameAs": [
        "https://www.instagram.com/edurup_learning/",
        "https://www.linkedin.com/school/edurup-learning/",
        "https://www.facebook.com/eduruplearning",
        "https://maps.app.goo.gl/Lp8gWA41rM5ikMe49",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "Admissions",
        "areaServed": "IN",
        "availableLanguage": "English",
      },
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MBBG98KF');`,
          }}
        />

        {/* ✅ Google Ads Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17654394600"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17654394600');
            `,
          }}
        />

        {/* ✅ Google Analytics (GA4) Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BQJXZKCHX4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BQJXZKCHX4');
            `,
          }}
        />

        {/* Other meta tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="application-name" content="Edurup Learning" />
        <meta name="apple-mobile-web-app-title" content="Edurup Learning" />
        <meta
          name="msapplication-tooltip"
          content="Edurup Learning | Job-Guaranteed Online Courses in PGP Data Science, Digital Marketing, Data Analytics & Full Stack Developer"
        />
        <meta name="format-detection" content="telephone=no" />
      </head>

      <body className={inter.className}>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MBBG98KF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Removed ThemeProvider wrapper */}
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}