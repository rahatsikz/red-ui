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
  const [classNames, setClassNames] = useState<any>("");

  const [selectedOption, setSelectedOption] = useState(null);

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

    setClassNames(`
    <div className="flex gap-4 ${direction.class}">
        <div className='relative flex items-center'>
            <input className= "w-${size} h-${size} ${radioTypes.class} transition-colors bg-white border-2 rounded-full appearance-none cursor-pointe peer border-slate-500 focus:outline-none"
                type='radio'
                value='one'
                id='one'
                name='${nameText}'
            />
            <label
                className="pl-2 ${labelColor.text} ${fontSize.class} cursor-pointer"
                htmlFor='one'
            >
                Option One
            </label>
            <svg
                className="absolute w-${size} h-${size} ${radioTypes.svg} left-0 scale-50 opacity-0 pointer-events-none peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-labelledby='title-1 description-1'
                role='graphics-symbol'
            >
                <circle cx='8' cy='8' r='4' />
            </svg>
        </div>
        <div className='relative flex items-center'>
            <input className="w-${size} h-${size} ${radioTypes.class} bg-white transition-colors  border-2 rounded-full appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 focus:outline-none"
                type='radio'
                value='two'
                id='two'
                name='${nameText}'
            />
            <label
                className="pl-2 ${labelColor.text} ${fontSize.class} cursor-pointer"
                htmlFor='two'
            >
                  Option Two
            </label>
            <svg
                className="absolute w-${size} h-${size} ${radioTypes.svg} left-0 scale-50 opacity-0 pointer-events-none peer-checked:scale-100 peer-checked:opacity-100   peer-disabled:cursor-not-allowed"
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-labelledby='title-03 description-03'
                role='graphics-symbol'
            >
                <circle cx='8' cy='8' r='4' />
            </svg>
        </div>
    </div>
    `);
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
            className={`w-11/12 mx-auto mt-8 ${
              classNames.length > 0 ? "" : "hidden"
            }`}
          >
            <div className='bg-red-50 pl-4'>
              <CopyToClipboardButton text={classNames} />
            </div>
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
                      selectedOption === "one"
                        ? radioTypes.value === "inset"
                          ? radioColor.colorCode
                          : radioColor.colorCode
                        : "",
                    backgroundColor:
                      selectedOption === "one"
                        ? radioTypes.value === "inset"
                          ? "#fff"
                          : radioColor.colorCode
                        : "",
                  }}
                  type='radio'
                  value='one'
                  id='one'
                  name={nameText}
                />
                <label
                  className={`pl-2 ${fontSize.class} cursor-pointer `}
                  style={{
                    color: labelColor.colorCode,
                  }}
                  htmlFor='one'
                >
                  Option One
                </label>
                <svg
                  className={`absolute left-0   scale-50 opacity-0 pointer-events-none peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed`}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-labelledby='title-1 description-1'
                  role='graphics-symbol'
                  style={{
                    width: size * 4 + "px",
                    height: size * 4 + "px",
                    fill:
                      selectedOption === "one"
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
                  value='two'
                  id='two'
                  name={nameText}
                  onChange={onValueChange}
                  style={{
                    width: size * 4 + "px",
                    height: size * 4 + "px",
                    borderColor:
                      selectedOption === "two"
                        ? radioTypes.value === "inset"
                          ? radioColor.colorCode
                          : radioColor.colorCode
                        : "",
                    backgroundColor:
                      selectedOption === "two"
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
                  htmlFor='two'
                >
                  Option Two
                </label>
                <svg
                  className={`absolute left-0 scale-50 opacity-0 pointer-events-none peer-checked:scale-100 peer-checked:opacity-100   peer-disabled:cursor-not-allowed`}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-labelledby='title-03 description-03'
                  role='graphics-symbol'
                  style={{
                    width: size * 4 + "px",
                    height: size * 4 + "px",
                    fill:
                      selectedOption === "two"
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
