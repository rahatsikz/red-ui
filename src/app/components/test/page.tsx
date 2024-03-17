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
      <div className='w-8/12 bg-white mx-auto min-h-96 py-8 px-12 flex gap-4'>
        {/* test */}

        <div className='bg-white h-fit w-full overflow-y-auto justify-center py-6 mx-auto pl-6 pr-4 flex justify-between'>
          {/*  */}
          <div className='flex justify-center items-center'>
            <div className='animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-primary'></div>
          </div>
          {/*  */}
          <svg
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='title-04a desc-04a'
            aria-live='polite'
            aria-busy='true'
            className='animate h-10 w-10 animate-spin'
          >
            <title id='title-04a'>Icon title</title>
            <desc id='desc-04a'>Some desc</desc>
            <circle
              cx='12'
              cy='12'
              r='10'
              className='stroke-slate-200'
              strokeWidth='4'
            />
            <path
              d='M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2'
              className='stroke-primary'
              strokeWidth='4'
            />
          </svg>
          {/*  */}
          <div
            className='inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white'
            role='status'
          >
            <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
              Loading...
            </span>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
