"use client";
import React from "react";
import AboutHeader from "../components/aboutHeader";
import OpenAnimation from "../components/openAnimation";

function page() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <OpenAnimation />
      <div className="h-24 sm:h-16 w-full" />
      <AboutHeader />
    </>
  );
}

export default page;
