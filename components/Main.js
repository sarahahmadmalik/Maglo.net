import Link from 'next/link';
import React from 'react';
import {  Work_Sans } from "next/font/google";
const font = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

function Main() {
  return (
    <main className="max-w-full h-full sm:my-[6rem] my-[4rem] mx-auto bg-white">
      <div className="flex w-full h-full items-center justify-center">
        <div className="sm:w-[60%] sm:h-[50%] h-auto w-auto overflow-hidden rounded-md">
          <div className="bg-landingBlue py-2 px-6 md:px-8 md:py-4 text-xs sm:test-base text-white md:text-medium font-medium">
            <h4 className={font.className}>Please Select a Registration Method</h4>
          </div>
          <div className="flex w-full h-auto grow">
            <div className="w-[50%] flex justify-center">
              <button className={` ${font.className} bg-customYellow w-full py-2 sm:py-4 text-[.8rem] sm:text-base text-black font-semibold`}>
                Individual
              </button>
            </div>
            <div className="w-[50%] flex justify-center">
              <button className={`${font.className}   bg-[#EAF0FF] border-b border-slate- text-[.8rem] sm:text-base font-semibold text-black  w-full`}>Company</button>
            </div>
          </div>

          <div className="bg-[#EAF0FF] h-full w-full">
            <div className="py-10 px-6 h-full w-full">
              <div className="text-center">
                <h1 className={` ${font.className}  text-xl sm:text-xl md:text-2xl font-extrabold text-black`}>Welcome to ShipParts.com</h1>
              </div>
              <form className="mt-3 text-black">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 font-inter h-">
                  {/* Row 1 */}
                  <div>
                    <label className="text-xs font-medium mb-5" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="John"
                      className=" text-xs font-medium w-full border border-gray-300 px-4 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      className="text-xs font-medium w-full border border-gray-300 px-4 py-2 rounded"
                    />
                  </div>

                  {/* Row 2 */}
                  <div>
                    <label className="text-xs font-medium" htmlFor="username">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="JohnDoe1244"
                      className="text-xs font-medium w-full border border-gray-300 px-4 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Doejohn78@gmail.com"
                      className="text-xs font-medium w-full border border-gray-300 px-4 py-2 rounded"
                    />
                  </div>

                  {/* Row 3 */}
                  <div>
                    <label className="text-xs font-medium" htmlFor="createPassword">
                      Create Password
                    </label>
                    <input
                      type="password"
                      id="createPassword"
                      placeholder=". . . . ."
                      className=" text-xs font-medium w-full border border-gray-300 px-4 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder=". . . . ."
                      className=" text-xs font-medium w-full border border-gray-300 px-4 py-2 rounded"
                    />
                  </div>

                  {/* Row 4 */}
                  <div>
                    <label className="text-xs font-medium" htmlFor="phoneNumber">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      placeholder="76897878678"
                      className=" text-xs font-medium w-full border border-gray-300 px-4 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium" htmlFor="emailVerificationCode">
                      Email Verification Code
                    </label>
                    <div className='flex relative'>
                    <input
                      type="text"
                      id="emailVerificationCode"
                      placeholder="7788"
                      className="text-xs font-medium w-full border border-gray-300 px-4 py-2 rounded "
                    />
                     <button
    type="button"
    className="text-[9px] font-light bg-blue-500 text-white px-3 py-[6px] rounded absolute right-[3px] top-[4px]"
    style={{ backgroundColor: "#1E7FCB" }}
  >
    Get Code
  </button>
  </div>
                  </div>
                </div>

                <div className="mt-5 w-full flex justify-center items-center text-xs font-light">
                  <input type="checkbox" id="agreeToTerms" className="mr-2" />
                  <p>I agree to the<Link className='text-[#1E7FCB] ml-2 mr-2' href='/'>Terms & Conditions</Link>and<Link className='ml-1 text-[#1E7FCB]' href='/'>Privacy & Policy</Link></p>
            
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="bg-customYellow  text-black font-medium w-[60%] md:w-[50%] py-2 px-4 rounded hover:scale-105 ease-in duration-300 transition-all"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
