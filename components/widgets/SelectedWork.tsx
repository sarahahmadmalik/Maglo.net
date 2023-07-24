import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Button from "../shared/Button";
import BorderButton from "../shared/BorderButton";
import {  Work_Sans } from "next/font/google";

const font = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
});


const SelectedWork = () => {
  const card = [
    {
      img: "/assets/cardimg1.png",
      heading: "Main Engine overhaul",
      location: "Mumbai, india",
      rating: "4.9",
      from: "Since 07/01/23",
      completed: "Successfully Completed Order:  50",
    },
    {
      img: "/assets/cardimg2.png",
      heading: "Main Engine overhaul",
      location: "Mumbai, india",
      rating: "4.9",
      from: "Since 07/01/23",
      completed: "Successfully Completed Order:  50",
    },
    {
      img: "/assets/cardimg3.png",
      heading: "Main Engine overhaul",
      location: "Mumbai, india",
      rating: "4.9",
      from: "Since 07/01/23",
      completed: "Successfully Completed Order:  50",
    },
    {
      img: "/assets/cardimg4.png",
      heading: "Main Engine overhaul",
      location: "Mumbai, india",
      rating: "4.9",
      from: "Since 07/01/23",
      completed: "Successfully Completed Order:  50",
    },
    {
      img: "/assets/cardimg5.png",
      heading: "Main Engine overhaul",
      location: "Mumbai, india",
      rating: "4.9",
      from: "Since 07/01/23",
      completed: "Successfully Completed Order:  50",
    },
    {
      img: "/assets/cardimg6.png",
      heading: "Main Engine overhaul",
      location: "Mumbai, india",
      rating: "4.9",
      from: "Since 07/01/23",
      completed: "Successfully Completed Order:  50",
    },
  ];
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col my-5  justify-center items-center">
          <div>
            <h1 className={`${font.className} text-[40px] font-[600] text-[#081840] text-center`}>
              Selected Works
            </h1>
            <p className="px-8 md:px-44 py-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  mt-6">
            {card.map((item, key) => (
              <div
                key={key}
                className={`max-w-[370px] w-[290px] md:w-[340px] rounded-xl bg-white shadow-xl`}
              >
                <Image
                  className="object-cover w-full h-48 rounded-t-xl"
                  src={item.img}
                  alt="image"
                  width={1080}
                  height={1080}
                />
                <div className="px-4 py-4 text-base ">
                  <h4 className={`${font.className}  text-xl pt-6 pb-2 font-semibold text-black`}>
                    {item.heading}
                  </h4>
                  <div className="flex items-center gap-3">
                    <Image
                      src={"/assets/cardvec1.svg"}
                      alt=""
                      width={10}
                      height={10}
                    />
                    <p>{item.location}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src={"/assets/cardvec2.svg"}
                      alt=""
                      width={10}
                      height={10}
                    />
                    <p>{item.from}</p>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <p className="">{item.completed}</p>

                    <div className="flex items-center gap-1 ">
                      <Image
                        src={"/assets/cardvec3.svg"}
                        alt=""
                        width={12}
                        height={12}
                      />
                      <p>{item.rating}</p>
                    </div>
                  </div>
                </div>
                <div className="my-4 ml-4">
                  <BorderButton text="Get in Touch" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SelectedWork;
