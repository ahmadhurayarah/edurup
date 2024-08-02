import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Placement Booster",
  description: "",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon.png",
        href: "/icon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon.png",
        href: "/icon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="pb-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
