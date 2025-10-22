import React from "react";
import Curriculum from "./components/Curriculum";
import Banner from "./components/Banner";
import Company from "./components/Company";
import Fee from "./components/Fee";
import Learning from "./components/Learning";
import PlacementAssistance from "./components/PlacementAssistance";
import Footer from "../../components/Footer";
import Faq from "./components/Faq";
import Faculty from "./components/Faculty";
import CertificatePage from "./components/CertificatePage";
import Language from "./components/Language";
import ProductAnalyst from "./components/ProductAnalyst";
import Reviews from "./components/Reviews";

const page = () => {
  return (
    <>
      <div className="min-h-full flex flex-col">
        <Banner />
        <Company />
        <Curriculum />
        <ProductAnalyst />
        <Reviews />
        <Fee />
        <Learning />
        <Faculty />
        <Language />
        <PlacementAssistance />
        <Faq />
      </div>
    </>
  );
};

export default page;
