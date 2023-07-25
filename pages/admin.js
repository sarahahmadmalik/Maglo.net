import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {Inter} from "next/font/google";

const font09 = Inter({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700"],
  });
  


function Admin() {
  const [activeButton, setActiveButton] = useState("Dashboard");

  const buttons = [
    { text: "Dashboard", image: "/assets/menu.svg" },
    { text: "Seller", image: "/assets/man-in-suit-and-tie.svg" },
    { text: "Products", image: "/assets/cubes.svg" },
    { text: "Services", image: "/assets/repairing-service.svg" },
    { text: "History", image: "/assets/history.svg" },
    { text: "Ratings", image: "/assets/rating.svg" },
    { text: "Account settings", image: "/assets/setting.svg" },
  ];

  return (
    <div className={`${font09.className} w-[100vw] h-[100vh]`}>
      <div className="w-full h-full">
        {/* sidebar */}
        <div className="w-[220px] flex flex-col justify-between h-full  border shadow-md">
            <div className="w-full h-full">
          <div className="flex justify-center mb-4">
            <Image src="/assets/maglolologo.svg" width={100} height={100} alt="Maglo Logo" />
          </div>

          {/* Buttons */}
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`w-full flex items-center py-2 pl-5 pr-4 my-2 font-[400] text-[16px] ${
                activeButton === button.text ? "bg-[#F9F9F9] border-[#0852c145] border-[1px]" : ""
              }`}
              onClick={() => setActiveButton(button.text)}
            >
              <div className="mr-3">
                <Image src={button.image} width={24} height={24} alt={button.text} />
              </div>
              {button.text}
            </button>
          ))}
          </div>
          <div className="px-3 py-2">
            <p className="font-[500] text-[16px]">Design & Develop by</p>
            <Link href='/' className="text-[#0852C1] font-[500] text-[16px]">ZySoftec</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Admin;
