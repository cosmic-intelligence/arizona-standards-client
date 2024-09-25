'use client'
import React from "react";
import MediaHeader from "../components/mediaHeader";
import ApplicationForm from "../components/applicationForm";
import OpenAnimation from "../components/openAnimation";
import career from "../../../public/career.jpg";
import PageWrapper from "../components/pageWrapper";

function page() {
  return (
    <PageWrapper>
      <OpenAnimation />
      <MediaHeader header="Join Our Team at Arizona Standards" body="At Arizona Standards, we believe that our people are our greatest asset. We are always looking for talented, motivated individuals who want to be a part of a growing, dynamic team. Whether you’re an experienced professional or just starting your career, we offer opportunities for development and growth in an industry that is always evolving." image={career} />
      <ApplicationForm baseUrl={`${process.env.NEXT_PUBLIC_BASE}/application`} />
    </PageWrapper>
  );
}

export default page;
