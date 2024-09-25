"use client";
import React from "react";
import ServicesContent from "../components/servicesContent";
import ServicesAnimation from "../components/servicesAnimation";
import HeaderTextSlide from "../components/headerTextSlide";
import OpenAnimation from "../components/openAnimation";
import PageWrapper from "../components/pageWrapper";

function page() {
  return (
    <PageWrapper>
      <OpenAnimation />
      <div className="max-w-full">
        <div className="h-24 sm:h-12 w-full" />
        <div className="p-3 sm:p-6">
          <HeaderTextSlide
            headline="Comprehensive Construction Services in Phoenix, Arizona: Arizona Standards Turning Visions into Reality"
            orangeWords="Services"
          />
        </div>
        <ServicesAnimation />
        <ServicesContent />
      </div>
    </PageWrapper>
  );
}

export default page;
