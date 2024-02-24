import React from "react";

const TestPage = () => {
  return (
    <div className='h-[90vh] flex items-center justify-center bg-red-50 '>
      <div className='w-1/3 bg-white mx-auto h-[60vh] py-8 px-12'>
        {/* test */}
        <div className='flex  gap-1 relative'>
          <input
            type='password'
            name='Password'
            id='Password'
            placeholder='Enter Password'
            className='border-b-2 w-[80%] px-[20px] py-[10px]  border-red-400 rounded-none bg-transparent  focus:outline-none placeholder:text-sm'
            required={true}
          />
          <label
            htmlFor='Password'
            className='text-gray-900 text-sm  block absolute -top-2 bg-white left-4 px-2'
          >
            Password
          </label>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
