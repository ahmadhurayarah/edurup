import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToastProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edurup - Empowering Your Future",
  description:
    "Edurup offers top-notch courses and training programs to help you achieve your career goals. Join us to learn from industry experts and get job-ready skills in the most sought-after fields.",
  keywords: [
    "Edurup",
    "Online Courses",
    "Career Training",
    "MERN Stack",
    "Digital Marketing",
    "Job Placement",
    "Industry Experts",
  ],
  authors: [{ name: "Edurup", url: "https://www.edurup.com" }],
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
    title: "Edurup - Empowering Your Future",
    description:
      "Join Edurup to learn from industry experts and gain the skills needed to excel in your career.",
    url: "https://www.edurup.com",
    siteName: "Edurup",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Edurup",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edurup - Empowering Your Future",
    description:
      "Join Edurup to learn from industry experts and gain the skills needed to excel in your career.",
    images: "/twitter_image.png",
    site: "@EdurupSchool",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="application-name" content="Edurup" />
        <meta name="apple-mobile-web-app-title" content="Edurup" />
        <meta
          name="msapplication-tooltip"
          content="Edurup - Empowering Your Future"
        />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="pb-theme"
        >
          <ToastProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
