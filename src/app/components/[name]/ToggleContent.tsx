"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import { colorOptions } from "@/constant/ColorData";
import React, { useState } from "react";

const ToggleContent = () => {
  const [classNames, setClassNames] = useState<any>("");

  const [checked, setChecked] = useState(false);

  const [toggleColor, setToggleColor] = useState({
    value: "red-400",
    colorCode: "#f87171",
    label: "red-400",
    bg: "bg-red-400",
    text: "text-red-400",
    border: "border-red-400",
  });

  const handleToggleColorChange = (option: any) => {
    setToggleColor(option);
  };

  // const [containerColor, setContainerColor] = useState({
  //   value: "red-200",
  //   colorCode: "#fecaca",
  //   label: "red-200",
  //   bg: "bg-red-200",
  //   text: "text-red-200",
  //   border: "border-red-200",
  // });

  // const handleContainerColorChange = (option: any) => {
  //   setContainerColor(option);
  // };

  const SizeOptions = [
    {
      label: "Small",
      value: 4,
      class: "h-4 w-8 after:h-4 after:w-4",
    },
    {
      label: "Medium",
      value: 6,
      class: "h-6 w-12 after:h-6 after:w-6",
    },
    {
      label: "Large",
      value: 8,
      class: "h-8 w-16 after:h-8 after:w-8",
    },
  ];

  const [size, setSize] = useState(SizeOptions[1]);

  const handleSizeChange = (option: any) => {
    setSize(option);
  };

  const FontSizeOption = [
    {
      label: "Small",
      value: "14px",
      class: "text-sm",
    },
    {
      label: "Base",
      value: "16px",
      class: "text-base",
    },
  ];

  const [fontSize, setFontSize] = useState({
    label: "Small",
    value: "14px",
    class: "text-sm",
  });

  const handleFontSizeChange = (option: any) => {
    setFontSize(option);
  };

  const [label, setLabel] = useState("Toggle me");

  const handleLabelChange = (value: any) => {
    setLabel(value);
  };

  const [labelColor, setLabelColor] = useState({
    value: "gray-400",
    colorCode: "#9ca3af",
    label: "gray-400",
    bg: "bg-gray-400",
    text: "text-gray-400",
    border: "border-gray-400",
  });

  const handleLabelColorChange = (option: any) => {
    setLabelColor(option);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setClassNames(`
    <div className='relative flex gap-4 items-center'>
      <label className="${fontSize.class} ${labelColor.text}" htmlFor='toggle'>
      ${label}
      </label>
      <input
      type='checkbox'
      id='toggle'
      className='absolute w-full h-full peer appearance-none rounded-md cursor-pointer'
      />
      <span
      className="flex items-center rounded-full duration-300 ease-in-out ${size.class} bg-gray-300 after:bg-white after:rounded-full after:shadow-md after:duration-300
      peer-checked:${toggleColor.bg} peer-checked:after:translate-x-full"
      ></span>
  </div>  
    
    `);
  };

  return (
    <section>
      <div className='lg:grid grid-cols-12 flex flex-col gap-16 lg:h-[90.6vh] h-full'>
        <div className='lg:col-span-8 '>
          <form
            className='xl:w-11/12 mx-auto px-4 mt-8'
            onSubmit={handleSubmit}
          >
            <div className='grid lg:grid-cols-2 gap-8'>
              <Input
                name='label'
                label='Label'
                value={label}
                type='text'
                handleChange={handleLabelChange}
                defaultValue=''
              />
              <Select
                label='Label Color'
                options={colorOptions}
                onChange={handleLabelColorChange}
                value={labelColor}
              />

              <Select
                label='Label Size'
                options={FontSizeOption}
                onChange={handleFontSizeChange}
                value={fontSize}
              />

              <Select
                label='Toggle Size'
                options={SizeOptions}
                onChange={handleSizeChange}
                value={size}
              />
              {/* <Select
                label='Container Color'
                options={colorOptions}
                onChange={handleContainerColorChange}
                value={containerColor}
              /> */}

              <Select
                label='Toggle Color'
                options={colorOptions}
                onChange={handleToggleColorChange}
                value={toggleColor}
              />
            </div>
            <div className='mt-8 flex justify-center'>
              <Button type='submit' className='px-24'>
                Generate Code
              </Button>
            </div>
          </form>
          <div
            className={`w-11/12 mx-auto mt-8 ${
              classNames.length > 0 ? "" : "hidden"
            }`}
          >
            <div className='bg-red-50 pl-4'>
              <CopyToClipboardButton text={classNames} />
            </div>
          </div>
        </div>
        <div className='bg-red-50 lg:col-span-4 md:w-full w-11/12 mx-auto py-12 flex items-center justify-center px-12'>
          <div className='bg-white py-32 w-full mx-auto pl-6 pr-4'>
            {/*  */}

            <div className='relative flex gap-4 items-center'>
              <label
                style={{
                  color: labelColor.colorCode,
                  fontSize: fontSize.value,
                }}
                htmlFor='toggle'
              >
                {label}
              </label>
              <input
                type='checkbox'
                id='toggle'
                className='absolute w-full h-full peer appearance-none rounded-md cursor-pointer'
                onChange={() => setChecked(!checked)}
              />
              <span
                className={`flex items-center rounded-full duration-300 ease-in-out ${size.class} after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-full `}
                style={{
                  backgroundColor: checked ? toggleColor.colorCode : "#d1d5db",
                }}
              ></span>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToggleContent;
