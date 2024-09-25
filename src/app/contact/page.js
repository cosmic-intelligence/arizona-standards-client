"use client";
import React from "react";
import OpenAnimation from "../components/openAnimation";
import PageWrapper from "../components/pageWrapper";

function page() {
  return (
    <PageWrapper>
      <OpenAnimation />
      <div className="h-24 sm:h-12 w-full" />
      <div className="p-2 sm:p-8 flex flex-col justify-center items-center w-full">
        <p className="opacity-20 font-bold whitespace-nowrap text-[8vw] tracking-[.5rem] sm:tracking-[1.5rem] text-center">
          GET IN TOUCH
        </p>
        <div className="flex items-center flex-wrap">
          <p className="max-w-lg font-bold text-center mt-4">
            Whether you&apos;re eager to discuss your next exciting construction
            project or simply have a burning question about our services,
            we&apos;re here to hear from you! Drop us an email at{" "}
            <a
              className="underline text-orange"
              href="mailto:controller@arizonastandards.com"
            >
              Arizona Standards.
            </a>{" "}
            and our dedicated team will be delighted to assist you. Let&apos;s
            build something great together!
          </p>
        </div>
        <div className="border-[gray] border-t-2 border-b-2 py-4 flex flex-row justify-center mt-12 space-x-10">
          <div>
            <p className="font-bold">Address</p>
            <p>1721 W. Rose Garden LN. Suite 6</p>
            <p>Phoenix, AZ 85027</p>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <p>480-393-3447</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default page;
