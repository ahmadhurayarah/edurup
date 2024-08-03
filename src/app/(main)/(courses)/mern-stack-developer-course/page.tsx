import React from "react";
import Banner from "./components/Banner";
import CourseInfo from "./components/CourseInfo";
import Company from "./components/Company";
const page = () => {
  return (
    <>
      <div className="min-h-full flex flex-col">
        <Banner />
        <CourseInfo />
        <Company />
      </div>
    </>
  );
};

export default page;
