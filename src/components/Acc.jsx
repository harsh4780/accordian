import React, { useState } from "react";

function Acc({title, para}) {
  const [accordianOpen, setAccordian] = useState(false);

  return (
    <div className="py-2" >
      <button onClick={()=>setAccordian(!accordianOpen)} className="flex justify-between w-full">
        <span>{title}</span>
        {accordianOpen ?<span className="rotate-180">-</span> : <span className="rotate-180">+</span>}
        
      </button>
      <di
        className={`grid overflow-hidden transition-all duration-200 ease-in-out text-slate-700 text-md ${accordianOpen ? 'grid-rows-[1fr] opacity-100 ':'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">{para}</div>
      </di>
    </div>
  );
}

export default Acc;
