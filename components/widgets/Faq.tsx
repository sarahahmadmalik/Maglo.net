"use client"
import React from "react";
import Wrapper from "../shared/Wrapper";
import Accordian from '../Accordian'

import {  Work_Sans } from "next/font/google";
import { RevealWrapper } from "next-reveal";

const font42 = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
});

const Faq = () => {
  const questions = [
    {
      id: 1,
      title: "What services do you oofer?",
      info: "We accept various payment methods to provide convenience and flexibility to our customers. Currently, we accept payments via credit or debit cards, including major card providers such as Visa, Mastercard, and American Express. Additionally, we also accept payments through bank transfers or electronic fund transfers (EFT).",
    },
    {
      id: 2,
      title: "What services do you oofer?",
      info: "We accept various payment methods to provide convenience and flexibility to our customers. Currently, we accept payments via credit or debit cards, including major card providers such as Visa, Mastercard, and American Express. Additionally, we also accept payments through bank transfers or electronic fund transfers (EFT).",    },
    {
      id: 3,
      title: "What services do you oofer?",
      info: "We accept various payment methods to provide convenience and flexibility to our customers. Currently, we accept payments via credit or debit cards, including major card providers such as Visa, Mastercard, and American Express. Additionally, we also accept payments through bank transfers or electronic fund transfers (EFT).",    },
    {
      id: 4,
      title: "What services do you oofer?",
      info: "We accept various payment methods to provide convenience and flexibility to our customers. Currently, we accept payments via credit or debit cards, including major card providers such as Visa, Mastercard, and American Express. Additionally, we also accept payments through bank transfers or electronic fund transfers (EFT).",
    },

  ];
  const questions2 = [
    {
        id: 1,
        title: "What services do you oofer?",
        info: "We accept various payment methods to provide convenience and flexibility to our customers. Currently, we accept payments via credit or debit cards, including major card providers such as Visa, Mastercard, and American Express. Additionally, we also accept payments through bank transfers or electronic fund transfers (EFT).",
      },
      {
        id: 2,
        title: "What services do you oofer?",
        info: "We accept various payment methods to provide convenience and flexibility to our customers. Currently, we accept payments via credit or debit cards, including major card providers such as Visa, Mastercard, and American Express. Additionally, we also accept payments through bank transfers or electronic fund transfers (EFT).",    },
      {
        id: 3,
        title: "What services do you oofer?",
        info: "We accept various payment methods to provide convenience and flexibility to our customers. Currently, we accept payments via credit or debit cards, including major card providers such as Visa, Mastercard, and American Express. Additionally, we also accept payments through bank transfers or electronic fund transfers (EFT).",    },
      {
        id: 4,
        title: "What services do you oofer?",
        info: "We accept various payment methods to provide convenience and flexibility to our customers. Currently, we accept payments via credit or debit cards, including major card providers such as Visa, Mastercard, and American Express. Additionally, we also accept payments through bank transfers or electronic fund transfers (EFT).",
      },
  ]
  return (
    <section className="py-20">
      <Wrapper>
        <div>
          <div>
            <h1 className={`md:text-[40px] text-[24px] font-bold md:font-[800] text-[#081840] text-center ${font42.className}`}>
              Frequently Ask Questions
            </h1>
            <p className="px-4 md:px-44 lg:px-44 py-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>

          <div className="mt-5 md:mt-16  md:lg:mt-0 flex flex-col md:flex-row lg:flex-row md:gap-16 justify-center items-start max-h-[900px]">
        
            <div className="container-faq basis-[50%]">
              <section className="info md:mt-3 ">
              {questions.map((q) => (
                  <RevealWrapper
                  rotate={{ x: -12, y: 0, z: 0 }}
                  origin="bottom"
                  delay={200}
                  duration={1000}
                  distance="200px"
                  reset={false}
                  viewOffset={{ top: 0, right: 12, bottom: 0, left: 0 }}
                  key={q.id}
                >
        <Accordian key={q.id} title={q.title} info={q.info} />
        </RevealWrapper>
      ))}
              </section>
            </div>
            <div className="container-faq basis-[50%]">
              <section className="info md:mt-3 ">
              {questions.map((q) => (
                  <RevealWrapper
                  rotate={{ x: -12, y: 0, z: 0 }}
                  origin="bottom"
                  delay={200}
                  duration={1000}
                  distance="200px"
                  reset={false}
                  viewOffset={{ top: 0, right: 12, bottom: 0, left: 0 }}
                  key={q.id}
                >
        <Accordian key={q.id} title={q.title} info={q.info} />
        </RevealWrapper>))}
              </section>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Faq;
