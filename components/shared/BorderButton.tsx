import React, { FC } from "react";
const BorderButton: FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <button type="button" className="bg-transparent border-black border-2 hover:border-transparent hover:bg-[#F6BE00] rounded-full w-40 h-12 flex-shrink-0 text-black hover:scale-105 ease-in duration-300 transition-all">{text}</button>
    </div>
  );
};

export default BorderButton;
