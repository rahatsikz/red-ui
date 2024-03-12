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
      <div className='w-10/12 bg-white mx-auto min-h-96 py-8 px-12 flex gap-4'>
        {/* test */}

        <div className='overflow-hidden min-w-80 h-fit bg-white shadow-md rounded w-[60%]'>
          <div className='p-6'>
            <div className='grid gap-6 '>
              <img
                src='https://i.ibb.co/Jkct5BL/430610643-822176203269811-5837933321810083409-n.jpg'
                alt='card image'
                className='aspect-video w-full h-full object-cover rounded'
              />

              <div className='w-full'>
                <h2 className='text-xl text-slate-800 font-semibold'>
                  This is Title
                </h2>
                <p className='text-slate-500 text-xs tracking-wider mt-1'>
                  Sub-title
                </p>
                <p className='text-slate-500 mt-4 text-sm line-clamp-5'>
                  Introducing our sleek and versatile card component, designed
                  to elevate your user interface with minimal effort. Crafted
                  for seamless integration into any project, our cards offer
                  unparalleled flexibility and style.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='overflow-hidden min-w-80 h-fit bg-white shadow-md rounded w-[60%]'>
          <div className='p-6'>
            <div className='grid gap-6 '>
              <img
                src='https://i.ibb.co/Jkct5BL/430610643-822176203269811-5837933321810083409-n.jpg'
                alt='card image'
                className='aspect-video w-full h-full object-cover rounded'
              />

              <div className='w-full'>
                <h2 className='text-xl text-slate-800 font-semibold'>
                  This is Title
                </h2>
                <p className='text-slate-500 text-xs tracking-wider mt-1'>
                  Sub-title
                </p>
                <p className='text-slate-500 mt-4 text-sm line-clamp-5'>
                  Introducing our sleek and versatile card component, designed
                  to elevate your user interface with minimal effort. Crafted
                  for seamless integration into any project, our cards offer
                  unparalleled flexibility and style.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='overflow-hidden min-w-80 h-fit bg-white shadow-md rounded w-[60%]'>
          <div className='p-6'>
            <div className='grid gap-6 '>
              <img
                src='https://i.ibb.co/Jkct5BL/430610643-822176203269811-5837933321810083409-n.jpg'
                alt='card image'
                className='aspect-video w-full h-full object-cover rounded'
              />

              <div className='w-full'>
                <h2 className='text-xl text-slate-800 font-semibold'>
                  This is Title
                </h2>
                <p className='text-slate-500 text-xs tracking-wider mt-1'>
                  Sub-title
                </p>
                <p className='text-slate-500 mt-4 text-sm line-clamp-5'>
                  Introducing our sleek and versatile card component, designed
                  to elevate your user interface with minimal effort. Crafted
                  for seamless integration into any project, our cards offer
                  unparalleled flexibility and style.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
