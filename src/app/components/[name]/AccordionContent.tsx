"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import ImageInput from "@/Components/ui/ImageInput";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import { colorOptions } from "@/constant/ColorData";
import React, { useEffect, useState } from "react";

const AccordionContent = () => {
  const [code, setCode] = useState<any>("");
  const [componentCode, setComponentCode] = useState<any>("");

  const [header, setHeader] = useState("What do you need to know?");

  const handleHeaderChange = (value: any) => {
    setHeader(value);
  };

  const dummyDesc =
    "Introducing our versatile Accordion component, designed to elevate your user interface. Crafted for seamless integration into any project, our accordions offer unparalleled flexibility and style.";

  const [desc, setDesc] = useState(dummyDesc);

  const handleDescChange = (value: any) => {
    setDesc(value);
  };

  const chevronSVG = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className='w-4 h-4 group-open:rotate-180 transition-transform duration-300'
    >
      <path
        fillRule='evenodd'
        d='M10 13.707l-6.646-6.647a1 1 0 00-1.414 1.414l7.354 7.353a1 1 0 001.414 0l7.354-7.353a1 1 0 00-1.414-1.414L10 13.707z'
        clipRule='evenodd'
      />
    </svg>
  );
  const plusSVG = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className=' w-4 h-4 transition-transform duration-300 shrink-0 group-open:rotate-45'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth='2'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4' />
    </svg>
  );
  const ToggleButtonOptions = [
    {
      label: "Chevron",
      value: chevronSVG,
    },
    {
      label: "Plus",
      value: plusSVG,
    },
  ];

  const [buttonType, setButtonType] = useState(ToggleButtonOptions[0]);

  const handleButtonTypeChange = (option: any) => {
    setButtonType(option);
  };

  const AccordionColorOptions = [
    {
      value: "white",
      colorCode: "#ffffff",
      label: "White",
      bg: "bg-white",
      text: "text-white",
      border: "border-white",
    },
    {
      value: "black",
      colorCode: "#000000",
      label: "Black",
      bg: "bg-black",
      text: "text-black",
      border: "border-black",
    },
    ...colorOptions,
  ];

  const [bgColor, setBgColor] = useState({
    value: "sky-50",
    colorCode: "#f0f9ff",
    label: "sky-50",
    bg: "bg-sky-50",
    text: "text-sky-50",
    border: "border-sky-50",
  });

  const handleBgColorChange = (option: any) => {
    setBgColor(option);
  };

  const [headerColor, setHeaderColor] = useState({
    value: "slate-700",
    colorCode: "#334155",
    label: "Slate 700",
    bg: "bg-slate-700",
    text: "text-slate-700",
    border: "border-slate-700",
  });

  const handleHeaderColorChange = (option: any) => {
    setHeaderColor(option);
  };

  const [descColor, setDescColor] = useState({
    value: "slate-500",
    colorCode: "#64748b",
    label: "Slate 500",
    bg: "bg-slate-500",
    text: "text-slate-500",
    border: "border-slate-500",
  });

  const handleDescColorChange = (option: any) => {
    setDescColor(option);
  };

  const defaultOpenOptions = [
    {
      label: "Open",
      value: true,
    },
    {
      label: "Close",
      value: false,
    },
  ];

  const [isOpen, setIsOpen] = useState(defaultOpenOptions[0]);

  const handleIsOpenChange = (option: any) => {
    setIsOpen(option);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (buttonType.label === "Chevron") {
      setCode(`
import React from "react";

type AccordionProps = {
  header: string;
  description: string;
  isOpen?: boolean;
};

const AccordionComponent = ({
  header,
  description,
  isOpen = false,
}: AccordionProps) => {
  return (
    <details className='p-4 group w-full' open={isOpen}>
      <summary className='flex items-center justify-between w-full font-medium tracking-wide list-none cursor-pointer focus-visible:outline-none py-4 px-4 rounded ${bgColor.bg} ${headerColor.text}'>
        {header}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-4 h-4 group-open:rotate-180 transition-transform duration-300'
        >
          <path
            fillRule='evenodd'
            d='M10 13.707l-6.646-6.647a1 1 0 00-1.414 1.414l7.354 7.353a1 1 0 001.414 0l7.354-7.353a1 1 0 00-1.414-1.414L10 13.707z'
            clipRule='evenodd'
          />
        </svg>
      </summary>
      <p className='mt-2 px-4 ${descColor.text}'>{description}</p>
    </details>
  );
};

export default AccordionComponent;`);
    } else {
      setCode(`
import React from "react";

type AccordionProps = {
  header: string;
  description: string;
  isOpen?: boolean;
};
      
const AccordionComponent = ({
  header,
  description,
  isOpen = false,
}: AccordionProps) => {
  return (
    <details className='p-4 group w-full' open={isOpen}>
      <summary className='flex items-center justify-between w-full font-medium tracking-wide list-none cursor-pointer focus-visible:outline-none py-4 px-4 rounded ${bgColor.bg} ${headerColor.text}'>
        {header}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className=' w-4 h-4 transition-transform duration-300 shrink-0 group-open:rotate-45'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4v16m8-8H4'
          />
        </svg>
      </summary>
      <p className='mt-2 px-4 ${descColor.text}'>{description}</p>
    </details>
  );
};

export default AccordionComponent;
      `);
    }

    setComponentCode(`
const HowToUseAccordion = () => {
  const header = "${header}";
  const description = "${desc}";
  return (
    <div>
      <AccordionComponent header={header} description={description} isOpen ={${isOpen.value}} />
    </div>
  );
};

export default HowToUseAccordion;
    `);
  };

  useEffect(() => {
    setCode("");
  }, [bgColor, buttonType, headerColor, descColor, isOpen, header, desc]);

  return (
    <section>
      <div className='xl:grid grid-cols-12 flex flex-col gap-16 lg:h-[90.6vh] h-full'>
        <div className='xl:col-span-8 '>
          <form
            className='xl:w-11/12 mx-auto px-4 mt-8'
            onSubmit={handleSubmit}
          >
            <div className='grid lg:grid-cols-2 gap-8'>
              <Input
                name='header'
                label='Header'
                value={header}
                type='text'
                handleChange={handleHeaderChange}
                defaultValue=''
              />
              <Input
                name='desc'
                label='Description'
                value={desc}
                type='text'
                handleChange={handleDescChange}
                defaultValue=''
              />
              <Select
                label='Toggle Button Type'
                options={ToggleButtonOptions}
                onChange={handleButtonTypeChange}
                value={buttonType}
              />
              <Select
                label='Background Color'
                options={AccordionColorOptions}
                onChange={handleBgColorChange}
                value={bgColor}
              />
              <Select
                label='Header Color'
                options={AccordionColorOptions}
                onChange={handleHeaderColorChange}
                value={headerColor}
              />
              <Select
                label='Description Color'
                options={AccordionColorOptions}
                onChange={handleDescColorChange}
                value={descColor}
              />
              <Select
                label='By Default Open'
                options={defaultOpenOptions}
                onChange={handleIsOpenChange}
                value={isOpen}
              />
            </div>
            <div className='mt-8 flex justify-center'>
              <Button type='submit' className='px-24'>
                Generate Code
              </Button>
            </div>
          </form>
          <div
            className={`w-11/12 mx-auto mt-8 transition-opacity duration-700 ${
              code.length > 0 ? "" : "opacity-0 hidden lg:block"
            }`}
          >
            <CopyToClipboardButton text={code} component={componentCode} />
          </div>
        </div>
        <div className='bg-red-50 xl:col-span-4 md:w-full w-11/12 mx-auto py-12 flex items-center justify-center px-12'>
          <div className='bg-white h-80 w-full overflow-y-auto flex justify-center py-6 mx-auto pl-6 pr-4'>
            {/*  */}
            <details className='p-4 group w-full' open={isOpen.value}>
              <summary
                className='flex items-center justify-between w-full font-medium tracking-wide list-none cursor-pointer focus-visible:outline-none py-4 px-4 rounded'
                style={{
                  backgroundColor: bgColor.colorCode,
                  color: headerColor.colorCode,
                }}
              >
                {header}
                {buttonType.value}
              </summary>
              <p className='mt-2 px-4' style={{ color: descColor.colorCode }}>
                {desc}
              </p>
            </details>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionContent;
