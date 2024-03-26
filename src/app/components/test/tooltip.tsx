import React from "react";

type TooltipProps = {
  tooltipText: string;
  hoverableText: string;
};

const TooltipComponent = ({ tooltipText, hoverableText }: TooltipProps) => {
  return (
    <div className='relative group w-fit'>
      <div className='relative overflow-hidden cursor-pointer hover:overflow-visible'>
        {hoverableText}
      </div>
      <span className='absolute invisible transform bottom-full left-1/2 -translate-x-1/2 -translate-y-2 z-20 min-w-48 w-fit p-2 text-sm text-white bg-slate-700 rounded opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100'>
        <div className='relative'>
          <div className='w-3 h-3 bg-slate-700 absolute transform top-full left-1/2 -translate-x-1/2 translate-y-0.5 -rotate-45'></div>
          <div className='py-1 px-2 text-center'>{tooltipText}</div>
        </div>
      </span>
    </div>
  );
};

export default TooltipComponent;
