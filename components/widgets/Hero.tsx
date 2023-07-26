"use client";

import React from "react";
import { useState } from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import GetQuot from "./forms/GetQuot";
import Sales from "./forms/Sales";
import {  Work_Sans } from "next/font/google";
import {  Saira_Condensed } from "next/font/google";

const font6 = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});


const font99 = Saira_Condensed({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});




const Hero = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  
  return (
    <section className="relative bg-image h-full   overflow-hidden "  >
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60 -z-[-2] "></div> */}
      <Wrapper>
        {/* parent  */}
        <div className="flex flex-col mdd:flex-row mdd:justify-between sm:justify-center items-center py-10 w-full">
          {/* right  */}
           <div className="basis-[100%] md:basis-[60%] flex flex-col mt-[1rem] md:mt-0 xl:mt-0 justify-start items-start text-white z-10">
            <h1 className={`text-[35px] font-[700] md:leading-[6rem]   md:text-[70px] xxl:text-[70px] ${font6.className}  z-90`}>Bridging the ocean</h1>
            <p className={`text-[28px] md:text-[48px] md:leading-[4rem] font-[600] ${font6.className} z-90`}>Worldwide Connections <br /> for Your Needs</p>
            <div className="flex gap-x-4 mt-6 z-90">
            <Button text="Get quotation" linkTo="" />
            <button
              type="button"
              className="bg-transparent border-[#F6BE00] border-2 rounded-full w-40 h-12 flex-shrink-0 text-[#F6BE00] hover:scale-105 ease-in duration-300 transition-all"
            >
              Sales Here
            </button>
            </div>
          </div>
          {/* left  */}
           <div className="basis-[100%] md:basis-[40%] mt-10 md:mt-10 z-10 ">
          <div className="max-w-[450px] max-h-[530px]  bg float-right backdrop-blur-[5px]" >
      <div className="flex  border-slate-600 z-60">
        <button
          className={` w-full h-12 rounded-tl-lg  ${
            activeTab === 'tab1' ? 'bg-black/40 text-[#F6BE00]' : 'bg-black/0 text-white'
          }`}
          onClick={() => setActiveTab('tab1')}
        >
          Get quotation
        </button>
        <button
          className={`w-full h-12 rounded-tr-lg ${
            activeTab === 'tab2' ?  'bg-black/40 text-[#F6BE00]' : 'bg-black/0 text-white'
          }`}
          onClick={() => setActiveTab('tab2')}
        >
          Sales here
        </button>
      </div>

      {activeTab === 'tab1' && <Sales />}
      {activeTab === 'tab2' && <Sales />}
    </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
