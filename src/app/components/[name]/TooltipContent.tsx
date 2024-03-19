"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import { colorOptions } from "@/constant/ColorData";
import React, { useState } from "react";

const TooltipContent = () => {
  const [classNames, setClassNames] = useState<any>("");

  const [labelText, setLabelText] = useState("Hey... Thanks for hovering");

  const handleLabelTextChange = (value: any) => {
    setLabelText(value);
  };
  const [percentage, setPercentage] = useState<number>(70);

  const handlePercentageChange = (value: any) => {
    setPercentage(value);
  };

  const tooltipTypeOptions = [
    {
      value: "top",
      label: "Top",
      bgClass: "bottom-full left-1/2 -translate-x-1/2 -translate-y-2",
      arrowClass:
        "top-full left-1/2 -translate-x-1/2 translate-y-0.5 -rotate-45",
    },
    {
      value: "bottom",
      label: "Bottom",
      bgClass: "top-full left-1/2 -translate-x-1/2 translate-y-2",
      arrowClass:
        "bottom-full left-1/2 -translate-x-1/2 -translate-y-0.5 -rotate-45",
    },
    {
      value: "right",
      label: "Right",
      bgClass: "top-1/2 left-full translate-x-3 -translate-y-1/2",
      arrowClass:
        "top-1/2 right-full -translate-y-1/2 -translate-x-0.5 rotate-45",
    },
    {
      value: "left",
      label: "Left",
      bgClass: "top-1/2 right-full -translate-x-3 -translate-y-1/2",
      arrowClass:
        "top-1/2 left-full -translate-y-1/2 translate-x-0.5 rotate-45",
    },
  ];

  const [tooltipType, setTooltipType] = useState(tooltipTypeOptions[0]);

  const handleTooltipChange = (option: any) => {
    setTooltipType(option);
  };

  //   const [progressColor, setProgressColor] = useState({
  //     value: "blue-400",
  //     colorCode: "#60a5fa",
  //     label: "blue-400",
  //     bg: "bg-blue-400",
  //     text: "text-blue-400",
  //     border: "border-blue-400",
  //   });

  //   const handleProgressColorChange = (option: any) => {
  //     setProgressColor(option);
  //   };
  //   const [bgColor, setBgColor] = useState({
  //     value: "slate-200",
  //     colorCode: "#e2e8f0",
  //     label: "Slate 200",
  //     bg: "bg-slate-200",
  //     text: "text-slate-200",
  //     border: "border-slate-200",
  //   });

  //   const handleBgColorChange = (option: any) => {
  //     setBgColor(option);
  //   };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <section>
      <div className='xl:grid grid-cols-12 flex flex-col gap-16 lg:h-[90.6vh] h-full'>
        <div className='xl:col-span-8 '>
          <form
            className='xl:w-11/12 mx-auto px-4 mt-8'
            onSubmit={handleSubmit}
          >
            <div className='grid lg:grid-cols-2 gap-8'>
              <Select
                label='Tooltip Type'
                options={tooltipTypeOptions}
                onChange={handleTooltipChange}
                value={tooltipType}
              />
              <Input
                name='LabelText'
                label='Label Text'
                value={labelText}
                type='text'
                handleChange={handleLabelTextChange}
                defaultValue=''
              />
              {/* <Input
                name='percentage'
                label='Percentage'
                value={percentage}
                type='number'
                handleChange={handlePercentageChange}
                defaultValue=''
              />
              <Select
                label='Progress Color'
                options={colorOptions}
                onChange={handleProgressColorChange}
                value={progressColor}
              />
              <Select
                label='Background Color'
                options={colorOptions}
                onChange={handleBgColorChange}
                value={bgColor}
              /> */}
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
            <CopyToClipboardButton text={classNames} />
          </div>
        </div>
        <div className='bg-red-50 xl:col-span-4 md:w-full w-11/12 mx-auto py-12 flex items-center justify-center px-12'>
          <div className='bg-white py-32 w-full mx-auto pl-6 pr-4 flex items-center justify-center'>
            {/*  */}
            <div className='relative group'>
              <button className='relative overflow-hidden cursor-pointer hover:overflow-visible focus-visible:outline-none'>
                Hover me
              </button>
              <span
                className={`absolute invisible transform ${tooltipType.bgClass} z-10 min-w-40 w-fit p-2 text-xs text-white bg-slate-700 rounded opacity-0 transition-opacity duration-200 group-hover:visible  group-hover:opacity-100`}
              >
                <div className='relative'>
                  <div
                    className={`w-3 h-3 bg-slate-700 absolute transform ${tooltipType.arrowClass}`}
                  ></div>
                  <div className='py-1 px-2 text-center'>{labelText}</div>
                </div>
              </span>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TooltipContent;
