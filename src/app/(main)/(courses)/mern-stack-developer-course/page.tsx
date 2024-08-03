import React from "react";
import Banner from "./components/Banner";
import CourseInfo from "./components/CourseInfo";
const page = () => {
  return (
    <>
      <div className="min-h-full flex flex-col">
        <Banner />
        <CourseInfo />
      </div>
    </>
  );
};

export default page;
