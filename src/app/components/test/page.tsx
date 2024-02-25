import React from "react";

const TestPage = () => {
  return (
    <div className='h-[90vh] flex items-center justify-center bg-red-50 '>
      <div className='w-1/3 bg-white mx-auto h-[60vh] py-8 px-12'>
        {/* test */}

        <div className='relative w-[60%]'>
          <label
            htmlFor='select club'
            className='pointer-events-none absolute -top-2.5 bg-white left-4 px-2 text-sm text-slate-600 block pl-2'
          >
            Select Club
          </label>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='pointer-events-none absolute top-3 right-2 h-5 w-5 fill-slate-400 '
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>

          <select
            id='select club'
            name='select club'
            className='h-11 w-full appearance-none border-2 border-lime-500 focus:border-green-600 rounded-full bg-white px-4 text-sm text-slate-500 outline-none'
          >
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
