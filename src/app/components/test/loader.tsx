import React from "react";

const LoaderComponent = () => {
  return (
    <div className='relative flex justify-center items-center'>
      <span
        className='animate-ping h-10 w-10 duration-700 absolute inline-flex rounded-full opacity-75 
      bg-green-400'
      ></span>
      <span className='relative inline-flex rounded-full h-10 w-10 bg-green-400'></span>
    </div>
  );
};

export default LoaderComponent;
