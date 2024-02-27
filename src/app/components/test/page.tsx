"use client";
import React, { useState } from "react";

const TestPage = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className='h-[90vh] flex items-center justify-center bg-red-50 '>
      <div className='w-1/3 bg-white mx-auto h-[60vh] py-8 px-12'>
        {/* test */}

        <div className='relative flex flex-wrap items-center'>
          <input
            className='w-6 h-6 cursor-pointer appearance-none rounded border-2 peer focus:outline-none transition-colors border-gray-300 bg-white  checked:border-red-400 checked:bg-white'
            type='checkbox'
            id='one'
          />
          <label
            className='cursor-pointer text-sm text-gray-400 pl-2'
            htmlFor='one'
          >
            Accept Terms
          </label>
          <svg
            className='pointer-events-none w-6 h-6 absolute 0px left-0 -rotate-90  fill-red-400 stroke-red-400 opacity-0  peer-checked:rotate-0 peer-checked:opacity-100'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            aria-labelledby='title-1 description-1'
            role='graphics-symbol'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
