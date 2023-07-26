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
      <div className="w-full h-full flex flex-row">
        {/* sidebar */}
        <div className="w-[260px] flex flex-col justify-between h-full  border shadow-md">
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
        {/* add search bar with icon on left in the same line add a circle image of location, bell icon with notifacation unread number on top of it, and a user icon img with blue bg in circle */}
        <div className="h-full w-full bg-[##F9F9F9]">
        <div className="w-full h-full flex flex-col flex-grow py-4">
        <div className="flex flex-row justify-between w-[100%] items-center px-4 py-2 border-b">
        <div className="relative mx-4 w-[40%] ">
            <input
              type="text"
              placeholder="Search for"
              className="flex-grow bg-[#FFFFFF] py-1 px-5 w-full outline-none rounded-md border border-[#0852C12B]"
            />
           
              <Image src=" /assets/searchIcon.svg" className="absolute top-2 right-2" width={17} height={17} alt="Search Icon" />
            </div>
            <div className="flex items-center px-4 py-2 border-b">
            <Image src="/assets/country.svg" width={24} height={24} alt="Location Icon" className="mx-3" />
            <div className="relative mx-3">
              <Image src="/assets/bellIcon.svg" width={24} height={24} alt="Bell Icon" />
              <span className="absolute -top-5 -right-1 px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-full">
                9
              </span>
            </div>
            <div className="relative mx-3">
              <div className="flex align-center justify-center w-10 h-10 rounded-full bg-blue-500">
                <Image src="/assets/userAdmin.svg" width={20} height={2}  alt="User Icon" />
              </div>
            </div>
          </div>
          </div>
        

          {/* Other Components */}
        

          {/* Rest of the content */}
        </div>
        </div>

        </div>
      </div>
  );
}

export default Admin;
