"use client";
import React, { useState } from "react";

const TestPage = () => {
  // const [checked, setChecked] = useState(false);
  return (
    <div className='h-[90vh] flex items-center justify-center bg-red-50 '>
      <div className='w-1/3 bg-white mx-auto h-[60vh] py-8 px-12'>
        {/* test */}

        {/* <div className='relative flex flex-wrap items-center'>
          <input
            className='peer relative h-4 w-8 cursor-pointer appearance-none rounded-lg bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-green-200 checked:after:left-4 checked:after:bg-green-500 h '
            type='checkbox'
            value=''
            id='id-c01'
          />
          <label
            className='cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400'
            htmlFor='id-c01'
          >
            Primary basic
          </label>
        </div> */}

        <div className='relative flex flex-wrap items-center'>
          <input
            className='peer relative h-6 w-12 cursor-pointer appearance-none rounded-xl bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-6 after:w-6 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-green-200 checked:after:left-6 checked:after:bg-green-500'
            type='checkbox'
            value=''
            id='id-c04'
          />
          <label
            className='cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400'
            htmlFor='id-c04'
          >
            Primary basic
          </label>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
