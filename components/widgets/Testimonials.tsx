import React from "react";
import Wrapper from "../shared/Wrapper";
import Carousel from "./Carousel";
import {  Work_Sans } from "next/font/google";

const font = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const Testimonials = () => {


  return (
    <section>
      <Wrapper>
        <div className={`md:my-6 ${font.className}`}>
          <div className="text-left px-4 ">
            <h1 className="text-[24px] font-bold">Testomonials</h1>
            <h2 className="text-[40px] font-bold">What Our Client Say About Us</h2>
          </div>
          <div className="overflow-hidden" id="content">
      <Carousel />
    </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Testimonials;