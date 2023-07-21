import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";

const Inquiries = () => {
  const data = [
    {
      country: "India",
      brand: "Man B&W",
      model: "Man B&W L27/38",
      item: "Kit Cylinder Head, Kit Cylender, Bearing Bush Rocker arms, Bearing Bush Piston Conection rod small end, Piston, Piston ring.",
    },
    {
      country: "India",
      brand: "Man B&W",
      model: "Man B&W L27/38",
      item: "Kit Cylinder Head, Kit Cylender, Bearing Bush Rocker arms, Bearing Bush Piston Conection rod small end, Piston, Piston ring.",
    },
    {
      country: "India",
      brand: "Man B&W",
      model: "Man B&W L27/38",
      item: "Kit Cylinder Head, Kit Cylender, Bearing Bush Rocker arms, Bearing Bush Piston Conection rod small end, Piston, Piston ring.",
    },
  ];
  return (
    <section className="bg-[#EAF0FF] py-10">
      <Wrapper>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-[40px]">Current Inquiries</h1>
          <div className="grid  md:grid-cols-3 gap-3 ">
            {data.map((data, id) => (
              <div key={id} className="max-w-[420px] h-[250px] md:h-[230px] bg-white mt-8 ">
                <div className="bg-[#1E7FCB] w-full h-8 flex justify-between items-center px-4">
                  <p className="text-white font-medium">
                    Whimson International
                  </p>
                  <p className="text-white">10 Days Left</p>
                </div>

                <div className=" px-4 font-medium text-base flex flex-col pt-3 gap-y-3">
                  <p>
                    {" "}
                    Country:{" "}
                    <span className="text-[#1E7FCB]"> {data.country}</span>
                  </p>

                  <p>
                    {" "}
                    Brand: <span className="text-[#1E7FCB]"> {data.brand}</span>
                  </p>

                  <p>
                    {" "}
                    Model: <span className="text-[#1E7FCB]"> {data.model}</span>
                  </p>

                  <p className="pr-10">Item: {data.item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-4 mt-8">
            <Button text="Add Comments" />
            <button
              type="button"
              className="bg-[#1E7FCB] rounded-full w-40 h-12 flex-shrink-0 text-white hover:scale-105 ease-in duration-300 transition-all"
            >
              Send Inquiries
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Inquiries;
