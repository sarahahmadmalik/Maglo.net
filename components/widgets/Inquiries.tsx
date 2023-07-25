import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import { useState, useEffect } from "react";
import InquiryData from '../../data/InquiryData'
import { useRouter } from "next/router";
import {  Roboto } from "next/font/google";
import {  Work_Sans } from "next/font/google";
import {  Saira_Condensed } from "next/font/google";

const font11 = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const font99 = Saira_Condensed({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});



const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const Inquiries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);


  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? InquiryData.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === InquiryData.length - 1 ? 0 : prevIndex + 1));
  };


  const handlePage = () =>{
    router.push('../inquiry');
  }
 

  return (
    <section className="bg-[#EAF0FF] py-10">
      <Wrapper>
        <div className={`flex flex-col items-center justify-center cursor-pointer `} onClick={handlePage}>
          <h1 className={` ${font11.className} font-semibold text-[40px]`}>Current Inquiries</h1>
          <div className={`flex flex-row justify-center items-center gap-3 moving-1 overflow-hidden`}>
            {InquiryData.map((data, id) => (
              <div key={id} className="w-[420px] h-[250px] md:h-[230px] bg-white mt-8 overflow-hidden rounded-md ">
                <div className={`${font11.className} bg-[#1E7FCB] w-full h-8 flex justify-between items-center px-4`}>
                  <p className="text-white font-medium">
                    Whimson International
                  </p>
                  <p className="text-white">10 Days Left</p>
                </div>

                <div className="px-4 font-medium text-base flex flex-col pt-3 gap-y-3">
                  <p>
                    {" "}
                    Country:{" "}
                    <span className="text-[#1E7FCB]"> {data.country}</span>
                  </p>

                  <p>
                    {" "}
                    Brand: <span className="text-[#1E7FCB]"> {data.brand}</span>
                  </p>

                  <p>
                    {" "}
                    Model: <span className="text-[#1E7FCB]"> {data.model}</span>
                  </p>

                  <p className="pr-10">Item: {data.item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-4 mt-8">
          <button
        type="button"
        className={`bg-[#F6BE00] ${font99.className} font-[500] rounded-full w-40 h-12 flex-shrink-0 text-black hover:scale-105 ease-in duration-300 transition-all`}
      >
        Add Comments
      </button>
            <button
              type="button"
              className={`${font99.className} font-[500] bg-[#1E7FCB] rounded-full w-40 h-12 flex-shrink-0 text-white hover:scale-105 ease-in duration-300 transition-all`}
            >
              Send Inquiries
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Inquiries;
