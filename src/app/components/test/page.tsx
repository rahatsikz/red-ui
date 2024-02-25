import React from "react";

const TestPage = () => {
  return (
    <div className='h-[90vh] flex items-center justify-center bg-red-50 '>
      <div className='w-1/3 bg-white mx-auto h-[60vh] py-8 px-12'>
        {/* test */}

        <div className='flex  gap-1 relative'>
          <textarea
            name='Enter Desc'
            id='Enter Desc'
            placeholder='Enter Description'
            className='w-[80%] border-2 border-sky-400 focus:border-blue-600 rounded-md px-[14px] py-[12px] resize-none bg-transparent focus:outline-none placeholder:text-sm'
            rows={4}
            required={true}
          ></textarea>
          <label
            htmlFor='Enter Desc'
            className='text-gray-400 text-sm  block absolute -top-2 bg-white left-4 px-2'
          >
            Enter Desc
          </label>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
