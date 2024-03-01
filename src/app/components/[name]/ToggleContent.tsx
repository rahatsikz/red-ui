"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import Slider from "@/Components/ui/Slide";
import { colorOptions } from "@/constant/ColorData";
import React, { useEffect, useState } from "react";

const ToggleContent = () => {
  const [classNames, setClassNames] = useState<any>("");

  const [checked, setChecked] = useState(false);

  const [checkColor, setCheckColor] = useState({
    value: "red-400",
    colorCode: "#f87171",
    label: "red-400",
    bg: "bg-red-400",
    text: "text-red-400",
    border: "border-red-400",
  });

  const handleCheckColorChange = (option: any) => {
    setCheckColor(option);
  };

  const checkboxOptions = [
    {
      label: "Primary",
      value: "primary",
      class: ` checked:${checkColor.border} checked:${checkColor.bg} `,
      svg: `fill-white stroke-white`,
    },
    {
      label: "Outline",
      value: "outline",
      class: ` checked:${checkColor.border} checked:bg-white`,
      svg: `fill-${checkColor.value} stroke-${checkColor.value}`,
    },
  ];

  const [checkboxTypes, setCheckboxTypes] = useState(checkboxOptions[0]);
  const handleCheckChange = (option: any) => {
    setCheckboxTypes(option);
  };

  useEffect(() => {
    const updatedCheckOptions = [
      {
        label: "Primary",
        value: "primary",
        class: ` checked:${checkColor.border} checked:${checkColor.bg} `,
        svg: `fill-white stroke-white`,
      },
      {
        label: "Outline",
        value: "outline",
        class: ` checked:${checkColor.border} checked:bg-white`,
        svg: `fill-${checkColor.value} stroke-${checkColor.value}`,
      },
    ];

    const currentOptionIndex = updatedCheckOptions.findIndex(
      (option) => option.label === checkboxTypes.label
    );

    if (currentOptionIndex === -1) {
      setCheckboxTypes(updatedCheckOptions[0]);
    } else {
      setCheckboxTypes(updatedCheckOptions[currentOptionIndex]);
    }
  }, [checkColor, checkboxTypes.label]);

  const [size, setSize] = useState(6);

  const handleSizeChange = (e: any) => {
    setSize(parseInt(e.target.value));
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

    setClassNames(``);
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

              <Slider
                value={size}
                handleChange={handleSizeChange}
                label='Box Size'
                max={10}
                min={4}
              />

              <Select
                label='Checkbox Types'
                options={checkboxOptions}
                onChange={handleCheckChange}
                value={checkboxTypes}
              />

              <Select
                label='Check Color'
                options={colorOptions}
                onChange={handleCheckColorChange}
                value={checkColor}
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
            <div className='relative flex flex-wrap items-center'>
              <input
                className='peer relative h-6 w-12 cursor-pointer appearance-none rounded-full bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-6 after:w-6 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-green-200 checked:after:left-6 checked:after:bg-green-500 h '
                type='checkbox'
                value=''
                id={label}
              />
              <label
                className='cursor-pointer pl-2 text-slate-500'
                htmlFor={label}
                style={{
                  color: labelColor.colorCode,
                  fontSize: fontSize.value,
                }}
              >
                {label}
              </label>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToggleContent;
