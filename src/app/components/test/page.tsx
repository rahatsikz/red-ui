import React from "react";

const TestPage = () => {
  return (
    <div className='h-[90vh] flex items-center justify-center bg-red-50 '>
      <div className='w-1/3 bg-white mx-auto h-[60vh] py-8 px-12'>
        {/* test */}

        <div className='flex gap-4 flex-row items-center'>
          <div className='relative flex items-center'>
            <input
              className='w-6 h-6 checked:border-indigo-400 checked:bg-indigo-400 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointe peer border-slate-500 focus:outline-none'
              type='radio'
              value='one'
              id='one'
              name='bpl'
            />
            <label
              className='pl-2 text-slate-600 text-sm cursor-pointer'
              htmlFor='one'
            >
              Option One
            </label>
            <svg
              className='absolute w-6 h-6 fill-white left-0 scale-50 opacity-0 pointer-events-none peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-labelledby='title-1 description-1'
              role='graphics-symbol'
            >
              <circle cx='8' cy='8' r='4' />
            </svg>
          </div>
          <div className='relative flex items-center'>
            <input
              className='w-6 h-6 checked:border-indigo-400 checked:bg-indigo-400 bg-white transition-colors  border-2 rounded-full appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 focus:outline-none'
              type='radio'
              value='two'
              id='two'
              name='bpl'
            />
            <label
              className='pl-2 text-slate-600 text-sm cursor-pointer'
              htmlFor='two'
            >
              Option Two
            </label>
            <svg
              className='absolute w-6 h-6 fill-white left-0 scale-50 opacity-0 pointer-events-none peer-checked:scale-100 peer-checked:opacity-100   peer-disabled:cursor-not-allowed'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-labelledby='title-03 description-03'
              role='graphics-symbol'
            >
              <circle cx='8' cy='8' r='4' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
