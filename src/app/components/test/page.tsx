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
      <div className='w-1/3 bg-white mx-auto h-[60vh] py-8 px-12 flex gap-2'>
        {/* test */}

        <Input
          name='LabelText'
          label='Label Text'
          value={""}
          type='text'
          handleChange={() => {}}
          defaultValue=''
        />

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
