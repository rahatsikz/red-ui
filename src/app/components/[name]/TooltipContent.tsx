"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import { colorOptions } from "@/constant/ColorData";
import React, { useEffect, useState } from "react";

const TooltipContent = () => {
  const [code, setCode] = useState<any>("");
  const [componentCode, setComponentCode] = useState<any>("");

  const [hoverText, setHoverText] = useState("Hey... Thanks for hovering");

  const handleHoverTextChange = (value: any) => {
    setHoverText(value);
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

  const toolTipColorOptions = [
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
    value: "blue-900",
    colorCode: "#1e3a8a",
    label: "blue-900",
    bg: "bg-blue-900",
    text: "text-blue-900",
    border: "border-blue-900",
  });

  const handleBgColorChange = (option: any) => {
    setBgColor(option);
  };
  const [textColor, setTextColor] = useState({
    value: "white",
    colorCode: "#ffffff",
    label: "White",
    bg: "bg-white",
    text: "text-white",
    border: "border-white",
  });

  const handleTextColorChange = (option: any) => {
    setTextColor(option);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setCode(
      `
import React from "react";

type TooltipProps = {
  tooltipText: string;
  hoverableText: string;
};
      
const TooltipComponent = ({ tooltipText, hoverableText }: TooltipProps) => {
  return (
    <div className='relative group w-fit'>
      <div className='relative overflow-hidden cursor-pointer hover:overflow-visible'>
        {hoverableText}
      </div>
      <span className='absolute invisible transform ${tooltipType.bgClass} z-20 min-w-48 w-fit p-2 text-sm ${textColor.text} ${bgColor.bg} rounded opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100'>
        <div className='relative'>
          <div className='w-3 h-3 ${bgColor.bg} absolute transform ${tooltipType.arrowClass}'></div>
          <div className='py-1 px-2 text-center'>{tooltipText}</div>
        </div>
      </span>
    </div>
  );
};

export default TooltipComponent;
      
      `
    );

    setComponentCode(`
const HowToUseTooltip = () => {
  const tooltipText = "${hoverText}";
  const hoverableText = "Hover me";
  return (
    <div>
      <TooltipComponent
        tooltipText={tooltipText}
        hoverableText={hoverableText}
      />
    </div>
  );
};
    `);
  };

  useEffect(() => {
    setCode("");
  }, [tooltipType, hoverText, bgColor, textColor]);

  return (
    <section>
      <div className='xl:grid grid-cols-12 flex flex-col gap-16 lg:h-[calc(100vh-5.6rem)] h-full'>
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
                name='hoverText'
                label='Hover Text'
                value={hoverText}
                type='text'
                handleChange={handleHoverTextChange}
                defaultValue=''
              />
              <Select
                label='Hover Background Color'
                options={toolTipColorOptions}
                onChange={handleBgColorChange}
                value={bgColor}
              />
              <Select
                label='Text Color'
                options={toolTipColorOptions}
                onChange={handleTextColorChange}
                value={textColor}
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
          <div
            className={`bg-white py-32 w-full mx-auto px-6 flex items-center ${
              tooltipType.value === "right" && "justify-start xl:justify-start"
            } ${
              tooltipType.value === "left" && "justify-end xl:justify-end "
            } ${
              (tooltipType.value === "top" || tooltipType.value === "bottom") &&
              "justify-center"
            } md:justify-center 2xl:justify-center`}
          >
            {/*  */}
            <div className='relative group w-fit'>
              <div className='relative overflow-hidden cursor-pointer hover:overflow-visible'>
                Hover me
              </div>
              <span
                className={`absolute invisible transform ${tooltipType.bgClass} z-20 min-w-48 w-fit p-2 text-sm rounded opacity-0 transition-opacity duration-200 group-hover:visible  group-hover:opacity-100`}
                style={{
                  backgroundColor: bgColor.colorCode,
                  color: textColor.colorCode,
                }}
              >
                <div className='relative'>
                  <div
                    className={`w-3 h-3 absolute transform ${tooltipType.arrowClass}`}
                    style={{
                      backgroundColor: bgColor.colorCode,
                    }}
                  ></div>
                  <div className='py-1 px-2 text-center'>{hoverText}</div>
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
