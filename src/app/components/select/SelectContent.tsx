"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import { BorderOptions } from "@/constant/Border";
import { BorderRadiusOptions } from "@/constant/BorderRadius";
import { colorOptions } from "@/constant/ColorData";
import { WidthOptions } from "@/constant/Width";
import React, { useState } from "react";

const SelectContent = () => {
  const [classNames, setClassNames] = useState<any>("");

  const [radius, setRadius] = useState({
    label: "None",
    value: "0",
    class: "rounded-none",
  });

  const handleRadiusChange = (option: any) => {
    setRadius(option);
  };

  const FontSizeOption = [
    {
      label: "Extra Small",
      value: "12px",
      class: "text-xs",
    },
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

  const [labelText, setLabelText] = useState("Select Option");

  const handleLabelTextChange = (value: any) => {
    setLabelText(value);
  };

  const [label, setLabel] = useState({
    label: "Label at Top",
    value: "top",
    class: "absolute -top-7 pl-2",
  });

  const LabelOptions = [
    {
      label: "No Label",
      value: "none",
      class: "hidden",
    },
    {
      label: "Label at Top",
      value: "top",
      class: "absolute -top-7 pl-2",
    },
    {
      label: "Label at Bottom",
      value: "bottom",
      class: "absolute top-12 pl-2",
    },
    {
      label: "Absolute",
      value: "absolute",
      class: "absolute -top-2.5 bg-white left-4 px-2",
    },
  ];

  const handleOptionChange = (option: any) => {
    setLabel(option);
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

  const [borderType, setBorderType] = useState({
    label: "Border all side",
    value: "2",
    class: "border-2",
  });

  const handleBorderTypeChange = (option: any) => {
    setBorderType(option);
  };

  const [borderColor, setBorderColor] = useState({
    value: "red-400",
    colorCode: "#f87171",
    label: "red-400",
    bg: "bg-red-400",
    text: "text-red-400",
    border: "border-red-400",
  });

  const handleBorderColorChange = (option: any) => {
    setBorderColor(option);
  };
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const [focusBorderColor, setFocusBorderColor] = useState(borderColor);

  const handleFocusBorderColorChange = (option: any) => {
    setFocusBorderColor(option);
  };

  const [width, setWidth] = useState({
    label: "Medium",
    value: "60%",
    class: "w-[60%]",
  });

  const handleWidthChange = (option: any) => {
    setWidth(option);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setClassNames(`
    <div className='relative ${width.class}'>
        <label
        htmlFor="${labelText.toLowerCase()}"
        className="pointer-events-none ${label.class} ${fontSize.class} ${
      labelColor.text
    } block" 
        >
        ${labelText}
        </label>
        <svg
        xmlns='http://www.w3.org/2000/svg'
        className='pointer-events-none absolute top-3 right-2 h-5 w-5 fill-slate-400 '
        viewBox='0 0 20 20'
        fill='currentColor'
        >
        <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
        />
        </svg>

        <select
        id="${labelText.toLowerCase()}"
        name="${labelText.toLowerCase()}"
        className="h-11 w-full appearance-none ${borderType.class} ${
      borderColor.border
    } focus:${focusBorderColor.border} ${
      radius.class
    } bg-white px-4 text-sm text-slate-500 outline-none"
        
        >
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
        </select>
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
              <Select
                label='Label Type'
                options={LabelOptions}
                onChange={handleOptionChange}
                value={label}
              />

              <Input
                name='LabelText'
                label='Label Text'
                value={labelText}
                type='text'
                handleChange={handleLabelTextChange}
                defaultValue=''
              />

              <Select
                label='label Color'
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
                label='Border Radius'
                options={BorderRadiusOptions}
                onChange={handleRadiusChange}
                value={radius}
              />
              <Select
                label='Border Type'
                options={BorderOptions}
                onChange={handleBorderTypeChange}
                value={borderType}
              />
              <Select
                label='Border Color'
                options={colorOptions}
                onChange={handleBorderColorChange}
                value={borderColor}
              />
              <Select
                label='Border on Focus'
                options={colorOptions}
                onChange={handleFocusBorderColorChange}
                value={focusBorderColor}
              />
              <Select
                label='Select Width'
                options={WidthOptions}
                onChange={handleWidthChange}
                value={width}
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
            <div className='relative' style={{ width: width.value }}>
              <label
                htmlFor={labelText.toLowerCase()}
                className={`pointer-events-none ${label.class} ${fontSize.class} block`}
                style={{
                  color: labelColor.colorCode,
                }}
              >
                {labelText}
              </label>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='pointer-events-none absolute top-3 right-2 h-5 w-5 fill-slate-400 '
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>

              <select
                id={labelText.toLowerCase()}
                name={labelText.toLowerCase()}
                className={`h-11 w-full appearance-none ${borderType.class}  ${radius.class} bg-white px-4 text-sm text-slate-500 outline-none `}
                style={{
                  borderColor: isFocused
                    ? focusBorderColor.colorCode
                    : borderColor.colorCode,
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectContent;
