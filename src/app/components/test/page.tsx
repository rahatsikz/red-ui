/* eslint-disable @next/next/no-img-element */
"use client";
import Input from "@/Components/ui/Input";
import React, { useState } from "react";

const TestPage = () => {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <div className='h-[90vh] flex items-center justify-center bg-red-50 '>
      <div className='w-9/12 bg-white mx-auto min-h-96 py-8 px-12 flex gap-4'>
        {/* test */}

        <div className='bg-white min-h-80 w-full overflow-y-auto  py-6 mx-auto pl-6 pr-4 flex flex-col items-center justify-center gap-6'>
          {/*  */}
          <div className='relative group '>
            <button className='relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none'>
              Top
            </button>
            <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 z-10 min-w-40 w-fit p-2 text-xs text-white bg-slate-700 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
              <div className='relative'>
                <div className='w-3 h-3 bg-slate-700 absolute top-full left-1/2 transform -translate-x-1/2 translate-y-0.5 -rotate-45'></div>
                <div className='py-1 px-2 text-center'>
                  Thanks for hovering! Im a tooltip
                </div>
              </div>
            </span>
          </div>
          {/*  */}
          <div className='relative group'>
            <button
              className='relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none'
              aria-describedby='tooltip-left'
            >
              Left
            </button>
            <span
              className='absolute top-1/2 right-full transform -translate-x-3 -translate-y-1/2 z-10 w-40 p-2 text-xs text-white bg-slate-700 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100'
              aria-hidden='true'
            >
              <div className='relative'>
                <div className='w-3 h-3 bg-slate-700 absolute top-1/2 left-full transform -translate-y-1/2 translate-x-0.5 rotate-45'></div>
                <div className='py-1 px-2 text-center'>
                  Thanks for hovering! Im a tooltip
                </div>
              </div>
            </span>
          </div>
          <div className='relative group'>
            <button
              className='relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none'
              aria-describedby='tooltip-right'
            >
              Right
            </button>
            <span
              className='absolute top-1/2 left-full transform translate-x-3 -translate-y-1/2 z-10 w-40 p-2 text-xs text-white bg-slate-700 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100'
              aria-hidden='true'
            >
              <div className='relative'>
                <div className='w-3 h-3 bg-slate-700 absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-0.5 rotate-45'></div>
                <div className='py-1 px-2 text-center'>
                  Thanks for hovering! Im a tooltip
                </div>
              </div>
            </span>
          </div>

          {/*  */}
          {/* <div className='relative group'>
            <button
              className='relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none'
              aria-describedby='tooltip-top'
            >
              Top
            </button>
            <span
              className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 z-10 min-w-40 w-fit p-2 text-xs text-white bg-slate-700 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100'
              aria-hidden='true'
            >
              <div className='w-4 h-4 bg-slate-700 absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45'></div>
              Thanks for hovering! Im a tooltip
            </span>
          </div> */}
          {/*  */}
          <div className='relative group '>
            <button
              className='relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none'
              aria-describedby='tooltip-bottom'
            >
              Bottom
            </button>
            <span
              className='absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 z-10 min-w-40 w-fit p-2 text-xs text-white bg-slate-700 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100'
              aria-hidden='true'
            >
              <div className='relative'>
                <div className='w-3 h-3 bg-slate-700 absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-0.5 -rotate-45'></div>
                <div className='py-1 px-2 text-center'>
                  Thanks for hovering! Im a tooltip
                </div>
              </div>
            </span>
          </div>
          {/*  */}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
