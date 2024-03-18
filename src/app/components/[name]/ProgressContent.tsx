"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import { colorOptions } from "@/constant/ColorData";
import React, { useState } from "react";

const ProgressContent = () => {
  const [classNames, setClassNames] = useState<any>("");

  const [labelText, setLabelText] = useState("HTML");

  const handleLabelTextChange = (value: any) => {
    setLabelText(value);
  };
  const [percentage, setPercentage] = useState<number>(70);

  const handlePercentageChange = (value: any) => {
    setPercentage(value);
  };

  const progressTypeOptions = [
    {
      value: "linear",
      label: "Linear",
    },
    {
      value: "radial",
      label: "Radial",
    },
  ];

  const [progressType, setProgressType] = useState(progressTypeOptions[1]);

  const handleOptionChange = (option: any) => {
    setProgressType(option);
  };

  const [progressColor, setProgressColor] = useState({
    value: "blue-400",
    colorCode: "#60a5fa",
    label: "blue-400",
    bg: "bg-blue-400",
    text: "text-blue-400",
    border: "border-blue-400",
  });

  const handleProgressColorChange = (option: any) => {
    setProgressColor(option);
  };
  const [bgColor, setBgColor] = useState({
    value: "slate-200",
    colorCode: "#e2e8f0",
    label: "Slate 200",
    bg: "bg-slate-200",
    text: "text-slate-200",
    border: "border-slate-200",
  });

  const handleBgColorChange = (option: any) => {
    setBgColor(option);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (progressType.value === "linear") {
      setClassNames(`
<div className='space-y-1'>
    <div className='flex items-center justify-between font-medium'>
      <span>${labelText}</span>
      <span>${percentage}%</span>
    </div>
    <div
      className='w-full h-4 rounded-full ${bgColor.bg} overflow-hidden'>
        <div
        className='h-full rounded-full w-[${percentage}%] ${progressColor.bg}'>
        </div>
    </div>
</div>
        `);
    } else {
      setClassNames(`
<div className='flex items-center justify-center'>
  <svg className='transform -rotate-90 w-72 h-72'>
    <circle
      cx='50%'
      cy='50%'
      r='120'
      stroke='currentColor'
      strokeWidth='18'
      fill='transparent'
      className='${bgColor.text}'
      strokeLinecap='round'
    />
    <circle
      cx='50%'
      cy='50%'
      r='120'
      stroke='currentColor'
      strokeWidth='20'
      fill='transparent'
      strokeDasharray={2 * Math.PI * 120}
      strokeDashoffset={
        2 * Math.PI * 120 - (${percentage} / 100) * 2 * Math.PI * 120
      }
      className='${progressColor.text}'
      strokeLinecap='round'
      />
  </svg>
  <div className='absolute flex flex-col items-center'>
    <span className='text-3xl'>${percentage}%</span>
    <span className='text-lg'>${labelText} </span>
  </div>
</div>
        `);
    }
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
                label='Progress Type'
                options={progressTypeOptions}
                onChange={handleOptionChange}
                value={progressType}
              />
              <Input
                name='LabelText'
                label='Label Text'
                value={labelText}
                type='text'
                handleChange={handleLabelTextChange}
                defaultValue=''
              />
              <Input
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
            <CopyToClipboardButton text={classNames} />
          </div>
        </div>
        <div className='bg-red-50 xl:col-span-4 md:w-full w-11/12 mx-auto py-12 flex items-center justify-center px-12'>
          <div className='bg-white py-32 w-full mx-auto pl-6 pr-4'>
            {/*  */}
            {progressType.value === "linear" ? (
              <div className='space-y-1'>
                <div className='flex items-center justify-between font-medium '>
                  <span>{labelText}</span>
                  <span>{percentage}%</span>
                </div>
                <div
                  className='w-full h-4 rounded-full overflow-hidden'
                  style={{ backgroundColor: bgColor.colorCode }}
                >
                  <div
                    className='h-full rounded-full'
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: progressColor.colorCode,
                    }}
                  ></div>
                </div>
              </div>
            ) : (
              <div className='flex items-center justify-center'>
                <svg className='transform -rotate-90 w-72 h-72'>
                  <circle
                    cx='50%'
                    cy='50%'
                    r='120'
                    stroke='currentColor'
                    strokeWidth='18'
                    fill='transparent'
                    // className='text-slate-400'
                    strokeLinecap='round'
                    style={{ color: bgColor.colorCode }}
                  />

                  <circle
                    cx='50%'
                    cy='50%'
                    r='120'
                    stroke='currentColor'
                    strokeWidth='20'
                    fill='transparent'
                    strokeDasharray={2 * Math.PI * 120}
                    strokeDashoffset={
                      2 * Math.PI * 120 - (percentage / 100) * 2 * Math.PI * 120
                    }
                    strokeLinecap='round'
                    style={{ color: progressColor.colorCode }}
                  />
                </svg>
                <div className='absolute flex flex-col items-center'>
                  <span className='text-3xl'>{percentage}%</span>
                  <span className='text-lg'> {labelText} </span>
                </div>
              </div>
            )}
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressContent;
