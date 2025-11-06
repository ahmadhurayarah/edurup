import React from "react";
import Curriculum from "./Curriculum";
import Banner from "./Banner";
import Company from "./Company";
import Fee from "./Fee";
import Learning from "./Learning";
import PlacementAssistance from "./PlacementAssistance";
import Faq from "./Faq";
import Faculty from "./Faculty";
import Language from "./Language";
import ProductAnalyst from "./ProductAnalyst";
import Reviews from "./Reviews";

interface DigitalMarketingCourseProps {
  cityName?: string;
}

const DigitalMarketingCourse = ({ cityName }: DigitalMarketingCourseProps) => {
  return (
    <>
      <div className="min-h-full flex flex-col overflow-x-hidden">
        <Banner cityName={cityName} />
        <Company />
        <Curriculum />
        <ProductAnalyst />
        <Reviews />
        <Fee />
        <Learning />
        <Faculty />
        <Language />
        <PlacementAssistance />
        <Faq cityName={cityName} />
      </div>
    </>
  );
};

export default DigitalMarketingCourse;
