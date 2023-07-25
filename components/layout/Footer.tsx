import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import {
  BiMessageRounded,
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagramAlt,
} from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="bg-[#EAF0FF] pt-10 pb-2">
      <Wrapper>
        <div className="flex justify-center items-center flex-col gap-6">
          <div className="bg-[#1E7FCB] rounded-md">
            <Image
              src={"/assets/Maglologo.png"}
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div>
            <ul className="flex gap-2 md:gap-8">
              <li>Log in</li>
              <li>Join Us</li>
              <li>Place</li>
              <li>Enquiry</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex gap-6">
           <div className="bg-blue-200 rounded-full p-2">
           <BiLogoFacebook className="text-blue-500 "/>
           </div>
           <div className="bg-blue-200  rounded-full p-2">
           <BiLogoLinkedin className="text-blue-500 "/>
           </div>
           <div className="bg-blue-200  rounded-full p-2">
           <BiLogoInstagramAlt className="text-blue-500 "/>
           </div>
           <div className="bg-blue-200  rounded-full p-2">
           <BiMessageRounded className="text-blue-500 "/>
           </div>
          </div>
        </div>
      </Wrapper>
      <div className="border-t border-[#C7C7C7] mt-6"></div>
      <div>
        <ul className="flex flex-col md:flex-row justify-around items-center px-8">
          <li>Design and Developed by: Zysoftec</li>
          <li>
            <p>wwww.Zysoftec.com</p>
          </li>
          <li>
            <p>Privacy & Policy</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
