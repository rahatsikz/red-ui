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

          <div className='relative group'>
            <button className='relative overflow-hidden hover:overflow-visible'>
              Hover me
            </button>
            <span className='absolute invisible transform bottom-full left-1/2 -translate-x-1/2 -translate-y-2 z-10 min-w-48 w-fit p-2 text-sm text-white bg-blue-900 rounded opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100'>
              <div className='relative'>
                <div className='w-3 h-3 bg-blue-900 absolute transform top-full left-1/2 -translate-x-1/2 translate-y-0.5 -rotate-45'></div>
                <div className='py-1 px-2 text-center'>
                  Hey... Thanks for hovering
                </div>
              </div>
            </span>
          </div>

          <div className='relative group'>
            <button className='relative overflow-hidden hover:overflow-visible'>
              Hover me
            </button>
            <span className='absolute invisible transform top-1/2 left-full translate-x-3 -translate-y-1/2 z-10 min-w-48 w-fit p-2 text-sm text-white bg-blue-900 rounded opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100'>
              <div className='relative'>
                <div className='w-3 h-3 bg-blue-900 absolute transform top-1/2 right-full -translate-y-1/2 -translate-x-0.5 rotate-45'></div>
                <div className='py-1 px-2 text-center'>
                  Hey... Thanks for hovering
                </div>
              </div>
            </span>
          </div>

          <div className='relative group'>
            <button className='relative overflow-hidden hover:overflow-visible'>
              Hover me
            </button>
            <span className='absolute invisible transform top-full left-1/2 -translate-x-1/2 translate-y-2 z-10 min-w-48 w-fit p-2 text-sm text-white bg-indigo-500 rounded opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100'>
              <div className='relative'>
                <div className='w-3 h-3 bg-indigo-500 absolute transform bottom-full left-1/2 -translate-x-1/2 -translate-y-0.5 -rotate-45'></div>
                <div className='py-1 px-2 text-center'>
                  Hey... Thanks for hovering
                </div>
              </div>
            </span>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
