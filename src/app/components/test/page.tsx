"use client";

/* eslint-disable @next/next/no-img-element */

import Input from "@/Components/ui/Input";
import React, { useState, useEffect, useRef } from "react";
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

  const [value1, setValue1] = useState<any>("");

  const handleChange1 = (option: any) => {
    setValue1(option);
  };

  const clubOptions = [
    {
      value: "chelsea",
      label: "Chelsea",
    },
    {
      value: "arsenal",
      label: "Arsenal",
    },
    {
      value: "spurs",
      label: "Spurs",
    },
  ];

  const labelText = "Select Food";
  const labelText1 = "Select Club";

  useEffect(() => {
    console.log(value);
  }, [value]);

  useEffect(() => {
    console.log(value1);
  }, [value1]);

  return (
    <div className='h-[90vh] flex items-center justify-center bg-red-50 '>
      <div className='w-9/12 bg-red-100 mx-auto min-h-96 py-8 px-12 '>
        {/* test */}

        <div className='bg-white w-full min-h-80  py-10 mx-auto pl-6 pr-4 space-y-10'>
          {/*  */}

          <SelectComponent
            onChange={handleChange}
            value={value}
            options={foodOptions}
            labelText={labelText}
          />

          <SelectComponent
            onChange={handleChange1}
            value={value1}
            options={clubOptions}
            labelText={labelText1}
          />

          {/*  */}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
