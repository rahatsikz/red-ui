"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import Slider from "@/Components/ui/Slide";
import { BorderOptions } from "@/constant/Border";
import { BorderRadiusOptions } from "@/constant/BorderRadius";
import { colorOptions } from "@/constant/ColorData";
import { FontSizeOption } from "@/constant/FontSize";
import { WidthOptions } from "@/constant/Width";
import React, { useState } from "react";

const InputContent = () => {
  const [classNames, setClassNames] = useState<any>("");

  const [xPadding, setXPadding] = useState(10);
  const [yPadding, setYPadding] = useState(4);

  const handleXChange = (e: any) => {
    setXPadding(parseInt(e.target.value));
  };
  const handleYChange = (e: any) => {
    setYPadding(parseInt(e.target.value));
  };

  const [radius, setRadius] = useState({
    label: "None",
    value: "0",
    class: "rounded-none",
  });

  const handleRadiusChange = (option: any) => {
    setRadius(option);
  };

  const [fontSize, setFontSize] = useState({
    label: "Small",
    value: "14px",
    class: "text-sm",
  });

  const handleFontSizeChange = (option: any) => {
    setFontSize(option);
  };

  const [labelText, setLabelText] = useState("Text");

  const handleLabelTextChange = (value: any) => {
    setLabelText(value);
  };

  const [label, setLabel] = useState({
    label: "Label at Top",
    value: "top",
    class: "flex-col-reverse",
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
      class: "flex-col-reverse",
    },
    {
      label: "Label at Bottom",
      value: "bottom",
      class: "flex-col",
    },
    {
      label: "Absolute",
      value: "absolute",
      class: "absolute -top-2 bg-white left-4 px-2",
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

  const [placeholderText, setPlaceholderText] = useState("Enter Something");

  const handlePlaceholderChange = (value: any) => {
    setPlaceholderText(value);
  };

  const [width, setWidth] = useState({
    label: "Medium",
    value: "60%",
    class: "w-[60%]",
  });

  const handleWidthChange = (option: any) => {
    setWidth(option);
  };

  const InputTypeOptions = [
    {
      label: "Text",
      value: "text",
    },
    {
      label: "Number",
      value: "number",
    },
    {
      label: "Email",
      value: "email",
    },
    {
      label: "Password",
      value: "password",
    },
  ];

  const [inputType, setInputType] = useState({
    label: "Text",
    value: "text",
  });

  const handleInputTypeChange = (option: any) => {
    setInputType(option);
  };

  const RequiredOptions = [
    {
      label: "No",
      value: false,
    },
    {
      label: "Yes",
      value: true,
    },
  ];

  const [required, setRequired] = useState({
    label: "No",
    value: false,
  });

  const handleRequiredChange = (option: any) => {
    setRequired(option);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setClassNames(`
<div className= "flex ${
      label.value === "top" || label.value === "bottom" ? label.class : ""
    } gap-1 relative">
  <input type="${
    inputType.value
  }" name="${labelText}" id="${labelText}" placeholder="${placeholderText}"
  className="${width.class} ${borderType.class} ${borderColor.border} focus:${
      focusBorderColor.border
    } ${xPadding % 4 === 0 ? `px-${xPadding / 4}` : `px-[${xPadding}px]`} ${
      yPadding % 4 === 0 ? `py-${yPadding / 4}` : `py-[${yPadding}px]`
    } ${radius.class} bg-transparent focus:outline-none placeholder:text-sm"
  required={${required.label === "Yes" ? true : false}}/>
<label htmlFor="${labelText}"
  className="${labelColor.text} ${fontSize.class} ${
      label.value === "none" ? label.class : ""
    } block ${label.value === "absolute" ? label.class : "pl-2"}">
    ${labelText}
  </label>
</div>`);
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

              <Slider
                value={xPadding}
                handleChange={handleXChange}
                label='Padding - X'
                max={30}
              />
              <Slider
                value={yPadding}
                handleChange={handleYChange}
                label='Padding - Y'
                max={18}
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
                label='Input Width'
                options={WidthOptions}
                onChange={handleWidthChange}
                value={width}
              />
              <Select
                label='Input Type'
                options={InputTypeOptions}
                onChange={handleInputTypeChange}
                value={inputType}
              />
              <Select
                label='Input Required'
                options={RequiredOptions}
                onChange={handleRequiredChange}
                value={required}
              />
              <Input
                name='placeholder'
                label='Placeholder'
                value={placeholderText}
                type='text'
                handleChange={handlePlaceholderChange}
                defaultValue=''
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
            <CopyToClipboardButton text={classNames} height={"200"} />
          </div>
        </div>
        <div className='bg-red-50 xl:col-span-4 md:w-full w-11/12 mx-auto py-12 flex items-center justify-center px-12'>
          <div className='bg-white py-32 w-full mx-auto pl-6 pr-4'>
            <div
              className={`flex ${
                (label.value === "top" || label.value === "bottom") &&
                label.class
              } gap-1 relative`}
            >
              <input
                type={inputType.value}
                name={labelText}
                id={labelText}
                placeholder={placeholderText}
                className={`${borderType.class} focus:border-[${focusBorderColor.colorCode}] bg-transparent focus:outline-none placeholder:text-sm`}
                style={{
                  padding: `${yPadding}px ${xPadding}px`,
                  borderRadius: `${radius.value}`,
                  borderColor: isFocused
                    ? focusBorderColor.colorCode
                    : borderColor.colorCode,
                  width: `${width.value}`,
                }}
                required={required.value}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label
                htmlFor={labelText}
                style={{
                  color: labelColor.colorCode,
                  fontSize: fontSize.value,
                }}
                className={`text-sm ${
                  label.value === "none" ? label.class : ""
                } block ${label.value === "absolute" ? label.class : "pl-2"} `}
              >
                {labelText}
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputContent;
