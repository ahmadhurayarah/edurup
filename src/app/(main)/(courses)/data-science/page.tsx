import React from "react";
import Curriculum from "./components/Curriculum";
import Banner from "./components/Banner";
import Company from "./components/Company";
import Fee from "./components/Fee";

const page = () => {
  return (
    <>
      <div className="flex flex-col">
        <Banner />
        <Company />
        <Curriculum />
        <Fee />
      </div>
    </>
  );
};

export default page;
