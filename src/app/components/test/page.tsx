"use client";
import React, { useState } from "react";

const TestPage = () => {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <div className='h-[90vh] flex items-center justify-center bg-red-50 '>
      <div className='w-1/3 bg-white mx-auto h-[60vh] py-8 px-12'>
        {/* test */}

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
