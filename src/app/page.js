"use client";
import React from "react";
import MediaHeader from "./components/mediaHeader";
import Mission from "./components/mission";
import OpenAnimation from "./components/openAnimation";
import OurServices from "./components/ourServices";
import Reviews from "./components/reviews";
import helmet from "../../public/helmet.png";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <OpenAnimation />
      <MediaHeader header="Arizona Standards." body="Your Trusted Partner for Construction Excellence in the Phoenix Area!" image={helmet} />
      <Mission />
      <OurServices />
      <Reviews />
    </main>
  );
}
