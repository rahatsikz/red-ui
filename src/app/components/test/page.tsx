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

        <div className='bg-white h-fit w-full overflow-y-auto flex flex-col justify-center pt-6 mx-auto pl-6 pr-4'>
          <details className='p-4 group w-full' open={true}>
            <summary className='flex items-center justify-between w-full font-medium tracking-wide list-none cursor-pointer focus-visible:outline-none py-4 px-4 rounded bg-emerald-50 text-slate-800'>
              What do you need to know?
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className=' w-4 h-4 transition-transform duration-300 shrink-0 group-open:rotate-45'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 4v16m8-8H4'
                />
              </svg>
            </summary>
            <p className='mt-2 px-4 text-slate-400'>
              Introducing our versatile Accordion component, designed to elevate
              your user interface. Crafted for seamless integration into any
              project, our accordions offer unparalleled flexibility and style.
            </p>
          </details>

          <details className='p-4 group w-full' open={false}>
            <summary className='flex items-center justify-between w-full font-medium tracking-wide list-none cursor-pointer focus-visible:outline-none py-4 px-4 rounded bg-emerald-50 text-slate-800'>
              More you need to know
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-4 h-4 group-open:rotate-180 transition-transform duration-300'
              >
                <path
                  fill-rule='evenodd'
                  d='M10 13.707l-6.646-6.647a1 1 0 00-1.414 1.414l7.354 7.353a1 1 0 001.414 0l7.354-7.353a1 1 0 00-1.414-1.414L10 13.707z'
                  clip-rule='evenodd'
                />
              </svg>
            </summary>
            <p className='mt-2 px-4 text-slate-400'>
              Mocking our versatile Accordion component, designed to elevate
              your user interface. Crafted for seamless integration into any
              project, our accordions offer unparalleled flexibility and style.
            </p>
          </details>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
