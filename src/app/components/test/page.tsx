"use client";

/* eslint-disable @next/next/no-img-element */

import Input from "@/Components/ui/Input";
import React, { useState, useEffect, useRef } from "react";
import SelectComponent from "./select";

const TestPage = () => {
  const [value, setValue] = useState("");

  const handleChange = (option: any) => {
    setValue(option);
  };

  const foodOptions = [
    {
      value: "biriyani",
      label: "Biriyani",
    },
    {
      value: "burger",
      label: "Burger",
    },
    {
      value: "pasta",
      label: "Pasta",
    },
    {
      value: "fries",
      label: "Fries",
    },
  ];

  useEffect(() => {
    console.log(value);
  }, [value]);
  const labelText = "Select Food";
  return (
    <div className='h-[90vh] flex items-center justify-center bg-red-50 '>
      <div className='w-9/12 bg-white mx-auto min-h-96 py-8 px-12 flex gap-4'>
        {/* test */}

        <div className='bg-white min-h-80 w-full overflow-y-auto  py-6 mx-auto pl-6 pr-4 flex flex-col items-center gap-6'>
          {/*  */}

          <SelectComponent
            onChange={handleChange}
            value={value}
            options={foodOptions}
            labelText={labelText}
          />

          {/*  */}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
