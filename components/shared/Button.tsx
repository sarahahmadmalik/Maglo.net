import React, { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <button type="button" className="bg-[#F6BE00] rounded-full w-40 h-12 flex-shrink-0 text-black hover:scale-105 ease-in duration-300 transition-all">{text}</button>
    </div>
  );
};

export default Button;
