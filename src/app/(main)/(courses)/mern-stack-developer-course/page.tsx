import React from "react";
import Banner from "./components/Banner";
import CourseInfo from "./components/CourseInfo";
import Company from "./components/Company";
import CourseOverview from "./components/CourseOverview";
import CareerSteps from "./components/CareerSteps";
import SkillsAndTools from "./components/SkillsAndTools";
import Projects from "./components/Projects";
import JobRoles from "./components/JobRoles";
import DoubtResolution from "./components/DoubtResolution";
import ReadMore from "./components/ReadMore";
const page = () => {
  return (
    <>
      <div className="min-h-full flex flex-col">
        <Banner />
        <CourseInfo />
        <Company />
        <CourseOverview />
        <CareerSteps />
        <SkillsAndTools />
        <Projects />
        <JobRoles />
        <DoubtResolution />
        <ReadMore />
      </div>
    </>
  );
};

export default page;
