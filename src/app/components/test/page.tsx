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

        <div className='bg-white h-fit w-full overflow-y-auto  py-6 mx-auto pl-6 pr-4 grid grid-cols-2 gap-6 items-start '>
          <div className='flex flex-col-reverse gap-1 relative'>
            <input
              type='text'
              name='Name'
              id='Name'
              placeholder='Enter Something'
              className='w-[60%] border-2 border-sky-400 focus:border-blue-500 px-[10px] py-1 rounded-none bg-transparent focus:outline-none placeholder:text-sm'
              required={false}
            />
            <label htmlFor='Name' className='text-gray-400 text-sm  block pl-2'>
              Name
            </label>
          </div>

          <div className='relative flex gap-4 items-center'>
            <label className='text-sm text-gray-400' htmlFor='toggle'>
              Toggle me
            </label>
            <input
              type='checkbox'
              id='toggle'
              className='absolute w-full h-full peer appearance-none rounded-md cursor-pointer'
            />
            <span className='flex items-center rounded-full duration-300 ease-in-out h-6 w-12 after:h-6 after:w-6 bg-gray-300 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:bg-indigo-500 peer-checked:after:translate-x-full'></span>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
