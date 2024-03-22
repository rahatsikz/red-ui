"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
// import SelectComponent from "./select";
import AccordionComponent from "./accordion";
import SelectComponent from "./select";
import ButtonComponent from "./button";

const HowToUseButton = () => {
  return (
    <ButtonComponent type='button' onClick={() => console.log("clicked")}>
      Submit Form
    </ButtonComponent>
  );
};

const HowToUseAccordion = () => {
  const header = "What do you need to know?";
  const description =
    "Introducing our versatile Accordion component, designed to elevate your user interface. Crafted for seamless integration into any project, our accordions offer unparalleled flexibility and style.";
  return (
    <div>
      <AccordionComponent
        header={header}
        description={description}
        isOpen={true}
      />
    </div>
  );
};

const HowToUseSelect = () => {
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

  const labelText = "Select Food";

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <SelectComponent
        onSelectChange={handleChange}
        value={value}
        options={foodOptions}
        labelText={labelText}
      />
    </div>
  );
};

const TestPage = () => {
  return (
    <div className='h-[calc(100vh-5.6rem)] flex items-center justify-center bg-red-50 '>
      <div className='w-7/12 bg-red-100 h-full mx-auto py-8 px-12 '>
        {/* test */}

        <div className='bg-white w-full h-full space-y-4 py-10 mx-auto pl-6 pr-4'>
          {/*  */}
          {/* <HowToUseAccordion /> */}

          {/* <HowToUseSelect /> */}
          {/* <HowToUseButton /> */}

          {/*  */}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
