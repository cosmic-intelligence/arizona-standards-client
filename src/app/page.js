"use client";
import React from "react";
import MediaHeader from "./components/mediaHeader";
import Mission from "./components/mission";
import OpenAnimation from "./components/openAnimation";
import OurServices from "./components/ourServices";
import Reviews from "./components/reviews";
import helmet from "../../public/helmet.png";
import PageWrapper from "./components/pageWrapper";

export default function Home() {

  return (
    <PageWrapper>
      <main>
        <OpenAnimation />
        <MediaHeader header="Arizona Standards." body="Your Trusted Partner for Construction Excellence in the Phoenix Area!" image={helmet} />
        <Mission />
        <OurServices />
        <Reviews />
      </main>
    </PageWrapper>
  );
}
