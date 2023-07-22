"use client";

import React from "react";
import { useState } from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import GetQuot from "./forms/GetQuot";
import Sales from "./forms/Sales";
import {  Work_Sans } from "next/font/google";

const font = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const Hero = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  
  return (
    <section className="bg-[url('../public/assets/bg-image.png')] bg-no-repeat bg-cover bg-center -z-30 overflow-hidden "  >
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60 -z-10 "></div> */}
      <Wrapper>
        {/* parent  */}
        <div className="flex flex-col md:flex-row  py-10 md:py-20 ">
          {/* right  */}
          <div className="basis-[100%] md:basis-[50%] md:pt-6 flex flex-col justify-start items-start text-white">
            <h1 className={`text-[32px] font-[700]  md:text-[65px] ${font.className}`}>Bridging the ocean</h1>
            <p className="text-[28px] md:text-[48px] font-[600] font-workSans">Worldwide Connections <br /> for Your Needs</p>
            <div className="flex gap-x-4 mt-10">
            <Button text="Get quotation" />
            <button
              type="button"
              className="bg-transparent border-[#F6BE00] border-2 rounded-full w-40 h-12 flex-shrink-0 text-[#F6BE00] hover:scale-105 ease-in duration-300 transition-all"
            >
              Sales Here
            </button>
            </div>
          </div>
          {/* left  */}
          <div className="basis-[100%] md:basis-[50%] mt-10 md:mt-0 z-10 ">
          <div className="max-w-[450px] max-h-[530px]  bg float-right backdrop-blur-[5px]" >
      <div className="flex  border-slate-600">
        <button
          className={` w-full h-12 rounded-tl-lg  ${
            activeTab === 'tab1' ? 'bg-black/40 text-[#F6BE00]' : 'bg-black/0 text-white'
          }`}
          onClick={() => setActiveTab('tab1')}
        >
          Get Qoutation
        </button>
        <button
          className={`w-full h-12 rounded-tr-lg ${
            activeTab === 'tab2' ?  'bg-black/40 text-[#F6BE00]' : 'bg-black/0 text-white'
          }`}
          onClick={() => setActiveTab('tab2')}
        >
          Sales Here
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
