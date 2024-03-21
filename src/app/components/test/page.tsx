"use client";

/* eslint-disable @next/next/no-img-element */

import React from "react";
// import SelectComponent from "./select";
import AccordionComponent from "./accordion";

const TestPage = () => {
  const header = "I Need This More Than Mitufy";
  const description =
    "Introducing our versatile Accordion component, designed to elevate your user interface. Crafted for seamless integration into any project, our accordions offer unparalleled flexibility and style.";
  return (
    <div className='h-[90vh] flex items-center justify-center bg-red-50 '>
      <div className='w-7/12 bg-red-100 mx-auto min-h-96 py-8 px-12 '>
        {/* test */}

        <div className='bg-white w-full min-h-80  py-10 mx-auto pl-6 pr-4'>
          {/*  */}
          <AccordionComponent
            header={header}
            description={description}
            isOpen={false}
          />
          {/*  */}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
