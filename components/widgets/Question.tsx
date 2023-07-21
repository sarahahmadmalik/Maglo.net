import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question">
      <header className='flex flex-row gap-x-4' >
        <h4 onClick={() => setExpanded(!expanded)} className="question-title">
          {title}
        </h4>
        <button className="btn-zzz" onClick={() => setExpanded(!expanded)}>
          {expanded ?  <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p className="text-info">{info}</p>}
    </article>
  );
};

export default Question;
