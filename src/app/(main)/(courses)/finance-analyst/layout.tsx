import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance Analyst",
  description: "",
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
