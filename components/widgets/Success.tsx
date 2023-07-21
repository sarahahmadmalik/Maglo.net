import Image from "next/image";
import React from "react";
import img from "../../public/assets/success.png";
import Button from "../shared/Button";
const Success = () => {
  return (
    <div className="relative flex mb-[20rem] md:mb-0 max-w-[375px] md:max-w-full sm:max-w-full mx-auto md:mx-0 justify-center md:justify-start sm:justify-start">
      <div className="w-full">
        <Image src={img} alt="success" width={970} height={1080} className="w-full h-full  top-0 mx-auto sm:w-[700px] sm:h-[550px] md:w-[940px] md:h-[730px] sm:mx-0 md:mx-0 object-fill "/>
      </div>
      <div className="bg-white w-[270px] p-5 h-[370px] sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[420px] absolute z-1 flex flex-col md:p-10   sm:ml-[20rem] md:ml-[42rem]  mt-[15.5rem] md:mt-[10rem]">
        <h1 className="sm:text-[30px] md:text-[40px] font-bold">Navigating to Success: How Working with Us Sets You Apart</h1>
        <p className="mb-6">Dont miss out on the countless opportunities that await you. Start your inquiry today and unlock the full potential of the Marine Global Network. Together, we will navigate the seas of success.</p>
        <Button text="Read more"/>
      </div>
    </div>
  );
};

export default Success;
