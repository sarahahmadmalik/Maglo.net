import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Success from "./Success";
import {  Work_Sans } from "next/font/google";

const font45 = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
});

const WhyUs = () => {
  const data = [
    {
      image: "/assets/img1.svg",
      heading: "Efficiency",
      text: "Streamline your procurement process and access a wide range of services and spare parts efficiently, saving valuable time and resources.",
    },
    {
      image: "/assets/img2.svg",
      heading: "Global Reached",
      text: "Streamline your procurement process and access a wide range of services and spare parts efficiently, saving valuable time and resources.",
    },
    {
      image: "/assets/img3.svg",
      heading: "Reliability",
      text: "Streamline your procurement process and access a wide range of services and spare parts efficiently, saving valuable time and resources.",
    },
    {
      image: "/assets/img4.svg",
      heading: "Expertise",
      text: "Streamline your procurement process and access a wide range of services and spare parts efficiently, saving valuable time and resources.",
    },
  ];

  return (
    <section className="py-10 bg-shade">
      <div className=" flex flex-col justify-center items-center">
        <h1 className={`${font45.className} text-[#081840] text-[40px] font-bold`}>Why Choose Us</h1>
        <p className="px-8 md:px-44 py-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {data.map((data, key) => (
            <div
              key={key}
              className="w-[280px] h-[340px] bg-white drop-shadow-lg px-6 flex flex-col justify-center items-center text-center"
            >
              <Image src={data.image} alt="image" width={100} height={100} />
              <h1 className=" py-4 text-lg font-bold">{data.heading}</h1>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-20">
        <Success />
      </div>
    </section>
  );
};

export default WhyUs;
