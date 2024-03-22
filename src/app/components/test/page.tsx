"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
// import SelectComponent from "./select";
import AccordionComponent from "./accordion";
import SelectComponent from "./select";

const TestPage = () => {
  const [value, setValue] = useState<any>("");

  const handleChange = (option: any) => {
    setValue(option);
  };

  const foodOptions = [
    {
      value: "pizza",
      label: "Pizza",
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

  const labelText = "Select Foods";

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className='h-[90vh] flex items-center justify-center bg-red-50 '>
      <div className='w-7/12 bg-red-100 mx-auto min-h-96 py-8 px-12 '>
        {/* test */}

        <div className='bg-white w-full min-h-80  py-10 mx-auto pl-6 pr-4'>
          {/*  */}
          <SelectComponent
            onSelectChange={handleChange}
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
