"use client";
import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import LinkWrapper from "./linkWrapper";

function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-12 p-3 sm:p-6 pb-12">
      <div>
        <p className="font-forum text-5xl text-center">
          Let&apos;s Work Together!
        </p>
        <div className="flex items-center justify-center mt-4">
          <LinkWrapper route="/contact">
            <p className="text-orange">Contact Us</p>
          </LinkWrapper>
          <ArrowUpRightIcon className="text-orange h-4 w-4 text-blue-500" />
        </div>
      </div>
      <p className="text-xs mt-16">® All State Specialist LLC. - 2023</p>
    </div>
  );
}

export default Footer;
