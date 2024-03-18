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

        <div className='bg-white h-fit w-full overflow-y-auto  py-6 mx-auto pl-6 pr-4 grid grid-cols-2 gap-6 items-start '></div>

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
