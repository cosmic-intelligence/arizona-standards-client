"use client";
import React from "react";
import AboutHeader from "../components/aboutHeader";
import OpenAnimation from "../components/openAnimation";
import PageWrapper from "../components/pageWrapper";
function page() {
  return (
    <PageWrapper>
      <OpenAnimation />
      <div className="h-24 sm:h-16 w-full" />
      <AboutHeader />
    </PageWrapper>
  );
}

export default page;
