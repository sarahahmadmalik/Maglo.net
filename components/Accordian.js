import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordian = ({ title, info }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccordionClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion bg-[#FFFFFF] rounded-md border border-[#EAF0FF] mb-4 overflow-hidden">
      <div
        className={`accordion bg-[#EAF0FF] rounded-md border border-[#EAF0FF] p-2 flex justify-between 
           "text-black" font-[600]
        }`}
        onClick={handleAccordionClick}
      >
        {title}
        <button className="btn-zzz" onClick={() => setIsExpanded(prevState => !prevState)}>
          {isExpanded ?  <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isExpanded && (
        <div className=" px-4 py-2  bg-[#FFFFFF] rounded">
          {info}
        </div>
      )}
    </div>
  );
};

export default Accordian;
