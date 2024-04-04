import React, { useState } from "react";

const Slider = ({ value, handleChange, min = 2, max = 32, label }: any) => {
  return (
    <div className='flex items-center space-x-4'>
      <span className='text-gray-600 text-sm w-28'> {label} </span>
      <input
        type='range'
        min={min}
        max={max}
        step={2}
        value={value}
        onChange={handleChange}
        className='lg:w-full w-full  h-4 rounded-full bg-gradient-to-r from-red-200  to-[#FE6E63] appearance-none focus:outline-none'
      />
      <span className='text-gray-600'>{value} </span>
    </div>
  );
};

export default Slider;
