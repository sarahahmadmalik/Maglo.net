"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrapper from "../shared/Wrapper";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../public/assets/Maglolologo.svg";
import Button from "../shared/Button";
import { CgMenuRightAlt } from "react-icons/cg";
import BorderButton from "../shared/BorderButton";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };

  return (
    <header className="">
      <Wrapper>
        {/* parent div */}
        <div className=" flex justify-between text-primary-color-text items-center font-normal text-base">
          {/* left section */}
          <div>
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="Maglo"
                width={30}
                height={30}
                className=" h-24 w-24 md:h-24 md:w-24 "
              />
            </Link>
          </div>
          {/* right section */}
          <div className="md:flex flex-col hidden">
            <ul className="flex-col pb-6 flex md:flex-row space-x-12 items-center mt-6 text-primary-color-text">
              <Link href="/">
                <li className="">Home</li>
              </Link>
              <Link href="/seller">
                <li className="">Seller</li>
              </Link>
              <Link href="/">
                <li className="">Buyer</li>
              </Link>
              <Link href="/blogs">
                <li className="">Blogs</li>
              </Link>
              <Link href="/">
                <li className="">Join Us</li>
              </Link>
              <div className="text-base flex gap-x-4">
                <BorderButton text="Login" />

                <Button text="Join Us" />
              </div>
            </ul>
          </div>
          {/* menu button  */}
          <div
            onClick={handleNavbar}
            className="block md:hidden   items-center  cursor-pointer z-50"
          >
            {nav ? (
              <AiOutlineClose size={35} className="text-black " />
            ) : (
              <CgMenuRightAlt
                size={35}
                className="text-white bg-[#1E7FCB] py-2 rounded-lg "
              />
            )}
          </div>
          {/* mobile menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center ease-linear duration-300 z-20"
                : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center ease-linear duration-300 z-20" 
            }
          >
            <ul>
              <li className="p-4 text-xl hover:text-custom-blue duration-300 cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 text-xl hover:text-custom-blue duration-300 cursor-pointer">
                <Link href="/seller">Seller</Link>
              </li>
              <li className="p-4  text-xl hover:text-custom-blue duration-30 cursor-pointer">
                <Link href="/">Buyer</Link>
              </li>
              <li className="p-4  text-xl hover:text-custom-blue duration-30 cursor-pointer">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="p-4  text-xl hover:text-custom-blue duration-30 pb-16 cursor-pointer">
                <Link href="/">Join Us</Link>
              </li>
              <div className="text-base flex-col space-y-4">
                <BorderButton text="Login" />
                <Button text="Join Us" />
              </div>
            </ul>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
