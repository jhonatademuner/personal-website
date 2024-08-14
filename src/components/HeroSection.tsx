import React from "react";
import Image from "next/image";
import CurveArrow from "@/../public/curve-arrow.png";
import SocialMediaBar from "./SocialMediaBar";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[calc(100vh-70px)] w-full" id="hero-section">
      <div className="flex flex-col items-center justify-center h-full text-center gap-4 text-text text-8xl relative">
        <div className="flex flex-col justify-center z-10">
          <div className="flex relative items-center justify-center text-nowrap">
            <p className="text-xl opacity-40 -rotate-[10deg] pb-8">
              // Jhonata
              <br />
              {"\u00A0"}Demuner
            </p>
            <Image
              src={CurveArrow}
              alt="curve-arrow"
              width={48}
              height={48}
              className="rotate-45 text-color-overlap opacity-40"
            />
            <p className=" font-bold">
              I solve <span className="text-accent-3">problems</span>.
            </p>
          </div>
          <div className="flex relative items-center justify-end text-nowrap">
            <p className=" font-bold">
              <span className="text-accent">Code</span> just happens
              {"\u00A0".repeat(1)}
            </p>
            <p className="text-xl opacity-40 rotate-[10deg] pl-4 pt-4">
              // Based
              <br />
              {"\u00A0"}in Brazil
            </p>
          </div>
          <div className="flex relative items-center justify-end text-nowrap">
            <p className="text-xl opacity-40 -rotate-[10deg] text-start">
              // Software
              <br />
              {"\u00A0"}Engineer
              <br />
              {"\u00A0"}& Back-end
              <br />
              {"\u00A0"}Developer
            </p>
            <p className=" font-bold relative">
              {"\u00A0".repeat(2)}to be my{" "}
              <span className="text-accent-2">method</span>.
              {"\u00A0".repeat(2)}
            </p>
            <p className="text-xl opacity-20 rotate-[10deg] text-start pt-16 absolute -right-32">
              // And a little
              <br />
              {"\u00A0"}bit of Front-end
            </p>
          </div>
        </div>
        <div className="absolute w-[36rem] h-[59.5rem] bg-background-2 rotate-[72deg] rounded-[100%] blur-[128px]"></div>
      </div>
      <SocialMediaBar/>
    </section>
  );
};

export default HeroSection;
