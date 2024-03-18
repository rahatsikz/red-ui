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

        <div className='bg-white h-fit w-full overflow-y-auto  py-6 mx-auto pl-6 pr-4 flex justify-center gap-12'>
          <div className='flex justify-center items-center'>
            <div className='animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-sky-500'></div>
          </div>

          <div className='flex justify-center items-center'>
            <div className='inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-sky-500 border-e-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]'></div>
          </div>

          <div className='relative flex justify-center items-center'>
            <span className='animate-ping h-10 w-10 duration-700 absolute inline-flex rounded-full opacity-75 bg-sky-500'></span>
            <span className='relative inline-flex rounded-full h-10 w-10 bg-sky-500'></span>
          </div>

          <div className='flex justify-center items-center'>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-labelledby='title-04a desc-04a'
              aria-live='polite'
              aria-busy='true'
              className='animate h-12 w-12 animate-spin'
            >
              <circle
                cx='12'
                cy='12'
                r='10'
                className='stroke-slate-200'
                strokeWidth='4'
              />

              <path
                d='M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2'
                className='stroke-sky-500'
                strokeWidth='4'
              />
            </svg>
          </div>

          <div className='flex justify-center items-center gap-2'>
            <div className='flex'>
              <div
                className='w-6 h-6 rounded-full animate-bounce bg-sky-500'
                style={{ animationDelay: "200ms" }}
              ></div>
            </div>

            <div className='flex'>
              <div
                className='w-6 h-6 rounded-full animate-bounce bg-sky-500'
                style={{ animationDelay: "500ms" }}
              ></div>
            </div>

            <div className='flex'>
              <div
                className='w-6 h-6 rounded-full animate-bounce bg-sky-500'
                style={{ animationDelay: "700ms" }}
              ></div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
