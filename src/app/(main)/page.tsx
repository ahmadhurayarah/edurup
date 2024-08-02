import Banner from "./components/Banner";
import News from "./components/News";
import Company from "./components/Company";
import Faculty from "./components/Faculty";
import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";
import Outcomes from "./components/Outcome";

export default function Home() {
  return (
    <>
      <div className="min-h-full flex flex-col">
        <Banner />
        <Company />
        <FeaturedCourses />
        <Faculty />
        <Outcomes />
        <News />
      </div>
    </>
  );
}
