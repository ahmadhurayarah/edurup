import React from "react";
import Banner from "./components/Banner";
import CourseInfo from "./components/CourseInfo";
import Company from "./components/Company";
import CourseOverview from "./components/CourseOverview";
import CareerSteps from "./components/CareerSteps";
const page = () => {
  return (
    <>
      <div className="min-h-full flex flex-col">
        <Banner />
        <CourseInfo />
        <Company />
        <CourseOverview />
        <CareerSteps />
      </div>
    </>
  );
};

export default page;
