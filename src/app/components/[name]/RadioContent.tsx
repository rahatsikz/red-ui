"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import Slider from "@/Components/ui/Slide";
import { colorOptions } from "@/constant/ColorData";
import { FontSizeOption } from "@/constant/FontSize";
import React, { useEffect, useState } from "react";

const RadioContent = () => {
  const [code, setCode] = useState<any>("");
  const [componentCode, setComponentCode] = useState<any>("");

  const [selectedOption, setSelectedOption] = useState("radio1");

  const onValueChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const [radioColor, setRadioColor] = useState({
    value: "red-400",
    colorCode: "#f87171",
    label: "red-400",
    bg: "bg-red-400",
    text: "text-red-400",
    border: "border-red-400",
  });

  const handleRadioColorChange = (option: any) => {
    setRadioColor(option);
  };

  const RadioOptions = [
    {
      label: "Inset",
      value: "inset",
      class: `checked:${radioColor.border}`,
      svg: `fill-${radioColor.value}`,
    },
    {
      label: "Outset",
      value: "outset",
      class: `checked:${radioColor.border} checked:${radioColor.bg}`,
      svg: "fill-white",
    },
  ];

  const [radioTypes, setRadioTypes] = useState(RadioOptions[0]);
  const handleRadioChange = (option: any) => {
    setRadioTypes(option);
  };

  useEffect(() => {
    const updatedRadioOptions = [
      {
        label: "Inset",
        value: "inset",
        class: `checked:${radioColor.border}`,
        svg: `fill-${radioColor.value}`,
      },
      {
        label: "Outset",
        value: "outset",
        class: `checked:${radioColor.border} checked:${radioColor.bg}`,
        svg: "fill-white",
      },
    ];

    // Check if the currently selected radioTypes match any option in the updatedRadioOptions
    const currentOptionIndex = updatedRadioOptions.findIndex(
      (option) => option.label === radioTypes.label
    );

    // If the current radio type is not found in the updated options, reset it to the first option
    if (currentOptionIndex === -1) {
      setRadioTypes(updatedRadioOptions[0]);
    } else {
      setRadioTypes(updatedRadioOptions[currentOptionIndex]);
    }
  }, [radioColor, radioTypes.label]); // Run this effect whenever radioColor changes

  const [size, setSize] = useState(6);

  const handleSizeChange = (e: any) => {
    setSize(parseInt(e.target.value));
  };

  const [fontSize, setFontSize] = useState({
    label: "Small",
    value: "14px",
    class: "text-sm",
  });

  const handleFontSizeChange = (option: any) => {
    setFontSize(option);
  };

  const [nameText, setNameText] = useState("name");

  const handleNameTextChange = (value: any) => {
    setNameText(value);
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

  const DirectionOptions = [
    {
      label: "Horizontal",
      value: "row",
      class: "flex-row items-center",
    },
    {
      label: "Vertical",
      value: "column",
      class: "flex-col",
    },
  ];

  const [direction, setDirection] = useState(DirectionOptions[0]);

  const handleDirectionChange = (option: any) => {
    setDirection(option);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setCode(`
import React from "react";

type RadioProps = {
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  checked?: boolean;
};
    
const RadioComponent = ({
  name,
  label,
  onChange,
  value,
  checked,
}: RadioProps) => {


  return (
    <div className='relative flex items-center'>
      <input
        className='size-${size} ${radioTypes.class} transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 focus:outline-none'
        type='radio'
        value={value}
        id={value.replace(/\\s/g, "")}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <label
        className='pl-2 ${labelColor.text} ${fontSize.class} cursor-pointer'
        htmlFor={value.replace(/\\s/g, "")}
      >
        {label}
      </label>
      <svg
        className='absolute size-${size} ${radioTypes.svg} left-0 scale-50 opacity-0 pointer-events-none peer-checked:scale-100 peer-checked:opacity-100'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        role='graphics-symbol'
      >
        <circle cx='8' cy='8' r='4' />
      </svg>
    </div>
  );
};

export default RadioComponent;
    
    `);

    setComponentCode(`
const HowToUseRadio = () => {
  const radioData = [
    {
      label: "Option One",
      value: "radio1",
    },
    {
      label: "Option Two",
      value: "radio2",
    },
  ];

  const name = "${nameText}"; ;

  const [selectedOption, setSelectedOption] = useState(radioData[0].value);

  return (
    <div className='flex gap-4 ${direction.class}'>
      {radioData.map((data, index) => (
        <RadioComponent
          key={index}
          label={data.label}
          name={name}
          value={data.value}
          onChange={() => setSelectedOption(data.value)}
          checked={selectedOption === data.value}
        />
      ))}
    </div>
  );
};
    `);
  };

  useEffect(() => {
    setCode("");
  }, [radioColor, labelColor, fontSize, radioTypes, size, nameText, direction]);

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
                label='Radio Button Types'
                options={RadioOptions}
                onChange={handleRadioChange}
                value={radioTypes}
              />

              <Select
                label='Radio Color'
                options={colorOptions}
                onChange={handleRadioColorChange}
                value={radioColor}
              />

              <Slider
                value={size}
                handleChange={handleSizeChange}
                label='Size'
                max={10}
              />

              <Input
                name='NameText'
                label='Name Text'
                value={nameText}
                type='text'
                handleChange={handleNameTextChange}
                defaultValue=''
              />

              <Select
                label='Direction'
                options={DirectionOptions}
                onChange={handleDirectionChange}
                value={direction}
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
          <div className='bg-white py-32 w-full mx-auto pl-6 pr-4'>
            {/*  */}
            <div className={`flex gap-4 ${direction.class}`}>
              <div className='relative flex items-center'>
                <input
                  className={` transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer 
                  peer border-slate-500  focus:outline-none`}
                  onChange={onValueChange}
                  style={{
                    width: size * 4 + "px",
                    height: size * 4 + "px",
                    borderColor:
                      selectedOption === "radio1"
                        ? radioTypes.value === "inset"
                          ? radioColor.colorCode
                          : radioColor.colorCode
                        : "",
                    backgroundColor:
                      selectedOption === "radio1"
                        ? radioTypes.value === "inset"
                          ? "#fff"
                          : radioColor.colorCode
                        : "",
                  }}
                  type='radio'
                  value='radio1'
                  id='radio1'
                  name={nameText}
                  checked={selectedOption === "radio1"}
                />
                <label
                  className={`pl-2 ${fontSize.class} cursor-pointer `}
                  style={{
                    color: labelColor.colorCode,
                  }}
                  htmlFor='radio1'
                >
                  Option One
                </label>
                <svg
                  className={`absolute left-0 scale-50 opacity-0 pointer-events-none peer-checked:scale-100 peer-checked:opacity-100 `}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  role='graphics-symbol'
                  style={{
                    width: size * 4 + "px",
                    height: size * 4 + "px",
                    fill:
                      selectedOption === "radio1"
                        ? radioTypes.value === "inset"
                          ? radioColor.colorCode
                          : "#fff"
                        : "",
                  }}
                >
                  <circle cx='8' cy='8' r='4' />
                </svg>
              </div>

              <div className='relative flex items-center'>
                <input
                  className={` transition-colors  border-2 rounded-full appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 focus:outline-none`}
                  type='radio'
                  value='radio2'
                  id='radio2'
                  name={nameText}
                  onChange={onValueChange}
                  style={{
                    width: size * 4 + "px",
                    height: size * 4 + "px",
                    borderColor:
                      selectedOption === "radio2"
                        ? radioTypes.value === "inset"
                          ? radioColor.colorCode
                          : radioColor.colorCode
                        : "",
                    backgroundColor:
                      selectedOption === "radio2"
                        ? radioTypes.value === "inset"
                          ? "#fff"
                          : radioColor.colorCode
                        : "",
                  }}
                />
                <label
                  className={`pl-2 ${fontSize.class} cursor-pointer `}
                  style={{
                    color: labelColor.colorCode,
                  }}
                  htmlFor='radio2'
                >
                  Option Two
                </label>
                <svg
                  className={`absolute left-0 scale-50 opacity-0 pointer-events-none peer-checked:scale-100 peer-checked:opacity-100   peer-disabled:cursor-not-allowed`}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  role='graphics-symbol'
                  style={{
                    width: size * 4 + "px",
                    height: size * 4 + "px",
                    fill:
                      selectedOption === "radio2"
                        ? radioTypes.value === "inset"
                          ? radioColor.colorCode
                          : "#fff"
                        : "",
                  }}
                >
                  <circle cx='8' cy='8' r='4' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadioContent;
