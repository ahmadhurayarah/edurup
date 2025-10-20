import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PGP in Digital Marketing in Bangalore | Edurup Learning - SEO, Ads & Analytics Training",
  description: "Join Edurup Learning’s Post Graduate Program in Digital Marketing in Bangalore. Get hands-on training in SEO, Google Ads, Social Media, and Analytics from real-time MNC professionals with 100% placement support.",
};

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-full dark:bg-dark">
        <main className="h-full mt-[94px] dark:bg-dark">{children}</main>
      </div>
    </>
  );
};

export default CoursesLayout;
