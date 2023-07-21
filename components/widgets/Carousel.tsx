"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
const Carousel = () => {
  const cards = [
    {
      name: "Karan Ruber",
      occupation: "Manager",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.consectetur adipiscing eli",
      img: "/assets/imgtest1.png",
    },
    {
      name: "Karan Ruber",
      occupation: "Manager",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.consectetur adipiscing eli",
      img: "/assets/imgtest2.png",
    },
    {
      name: "Karan Ruber",
      occupation: "Manager",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.consectetur adipiscing eli",
      img: "/assets/imgtest1.png",
    },
    {
      name: "Karan Ruber",
      occupation: "Manager",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.consectetur adipiscing eli",
      img: "/assets/imgtest1.png",
    },
    {
      name: "Karan Ruber",
      occupation: "Manager",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.consectetur adipiscing eli",
      img: "/assets/imgtest1.png",
    },
  ];

  return (
    <div className="relative">
      <div className="flex justify-end items-end mb-4 gap-2">
        {/* <button
          onClick={prevSlide}
          className="px-1 py-1 bg-gray-400 hover:bg-[#1E7FCB] duration-300 ease-in transition-all text-white rounded-lg"
        >
          <BsArrowLeftShort size={25} className="" />
        </button>
        <button
          onClick={nextSlide}
          className="px-1 py-1 bg-gray-400 duration-300 ease-in transition-all hover:bg-[#1E7FCB] text-white rounded-lg"
        >
          <BsArrowRightShort size={25} />
        </button> */}
      </div>
  
        <div className="flex justify-center items-center gap-16 moving ">
          {cards.map((data, index) => (
            <div key={index}>
              {" "}
              <div className="rounded-lg flex gap-4 w-[340px] md:w-[500px] sm:w-[500px] shadow-md bg-[#EAF0FF] p-8 overflow-hidden">
                <div className=" flex-col w-[200px] md:w-[300px]">
                  <p className="font-semibold text-lg mb-2">{data.name}</p>
                  <p className="text-gray-600 text-sm mb-2">
                    {data.occupation}
                  </p>
                  <p className="text-gray-800">{data.review}</p>
                  <div className="flex text-yellow-400 mt-4">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <Image
                    src={data.img}
                    alt=""
                    width={100}
                    height={100}
                    className="w-[140px] md:[350px] md:[350px] h-[140px] md:object-fill"
                  />
                </div>
              </div>
            </div>
  
          ))}
        </div>

    </div>
  );
};

export default Carousel;
