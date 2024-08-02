import { Navbar } from "@/components/Navbar";
import Footer from "./components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full dark:bg-dark">
      <Navbar />
      <main className="h-full mt-[94px] dark:bg-dark">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
