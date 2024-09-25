"use client";
import React, { useLayoutEffect } from "react";
import Image from "next/image";
import ScrollDown from "./scrollDown";
import { gsap } from "gsap";
// import logo from "../../../public/logo-white.png";
import helmet from "../../../public/helmet.png";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MediaHeader({ header, body, image }) {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".mouse", {
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          ease: "power4.out",
          trigger: ".mouse",
          start: "bottom center",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-full md:w-1/2 h-full flex flex-row items-center justify-center p-10">
        <div>
          <p className="text-2xl lg:text-5xl font-bold text-left max-w-2xl">
            {header}
          </p>
          <p className="text-xl text-left max-w-2xl mt-4">
            {body}
          </p>
        </div>
      </div>
      <div className="hidden md:block w-1/2 h-full flex flex-row items-center justify-center p-10">
        <Image
          src={image}
          className="`
            h-full w-full object-contain"
          alt="logo"
        />
      </div>
      <div className="absolute bottom-1 w-full mouse">
        <ScrollDown />
      </div>
    </div>
  );
}

export default MediaHeader;
