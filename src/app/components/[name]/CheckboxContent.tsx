"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import Slider from "@/Components/ui/Slide";
import { colorOptions } from "@/constant/ColorData";
import React, { useEffect, useState } from "react";
const CheckboxContent = () => {
  const [code, setCode] = useState<any>("");
  const [componentCode, setComponentCode] = useState<any>("");

  const [checked, setChecked] = useState(true);

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
      class: `checked:${checkColor.border} checked:${checkColor.bg} `,
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
        class: `checked:${checkColor.border} checked:${checkColor.bg}`,
        svg: `fill-white stroke-white`,
      },
      {
        label: "Outline",
        value: "outline",
        class: `checked:${checkColor.border} checked:bg-white`,
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

  const [label, setLabel] = useState("Accept Terms");

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

  const AnimationOption = [
    {
      label: "Yes",
      value: true,
      class: "transition-all duration-300 -rotate-90 peer-checked:rotate-0",
    },
    {
      label: "No",
      value: false,
      class: "-rotate-90 peer-checked:rotate-0",
    },
  ];

  const [animation, setAnimation] = useState(AnimationOption[0]);

  const handleAnimationChange = (option: any) => {
    setAnimation(option);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setCode(`
import React, { ChangeEvent } from "react";

type CheckboxProps = {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
};
    
const CheckboxComponent = ({ checked, onChange, label }: CheckboxProps) => {
  return (
    <div className='flex items-center'>
      <div className='relative flex items-center'>
        <input
          className='cursor-pointer size-${size} appearance-none rounded border-2 border-gray-300 peer focus:outline-none transition-colors bg-white ${
      checkboxTypes.class
    }'
          type='checkbox'
          checked={checked}
          onChange={onChange}
          id='${label.replace(/\s/g, "")}'
        />
        <svg
          className='pointer-events-none size-${size} ${
      size === 4 ? "top-0.5" : size === 6 ? "top-1" : "top-1.5"
    } ${size === 4 ? "px-[1px]" : "p-0"} absolute m-auto ${animation.class} ${
      checkboxTypes.svg
    } opacity-0 stroke-0 peer-checked:opacity-100'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          role='graphics-symbol'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12.6716 3.5786C13.0631 3.18711 13.0631 2.55437 12.6716 2.16288C12.2801 1.7714 11.6474 1.7714 11.2559 2.16288L7.49996 5.91883L5.74486 4.16373C5.35337 3.77224 4.72063 3.77224 4.32914 4.16373C3.93766 4.55521 3.93766 5.18795 4.32914 5.57944L6.91557 8.16587C7.10035 8.35065 7.34545 8.44604 7.59055 8.44604C7.83566 8.44604 8.08076 8.35065 8.26554 8.16587L12.6716 3.75983C13.0631 3.36835 13.0631 3.02715 12.6716 3.5786Z'
          />
        </svg>
      </div>
      <label
        className='cursor-pointer ${fontSize.class} ${labelColor.text} pl-2'
        htmlFor='${label.replace(/\s/g, "")}'
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxComponent;
    
    
    `);

    setComponentCode(`
const HowToUseCheckbox = () => {
  const [isChecked, setIsChecked] = useState(true);
  const label = "${label}"
  return (
    <div>
      <CheckboxComponent
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        label={label}
      />
    </div>
  );
};
    `);
  };

  useEffect(() => {
    setCode("");
  }, [label, labelColor, size, animation, checkboxTypes, fontSize, checkColor]);

  return (
    <section>
      <div className='xl:grid grid-cols-12 flex flex-col gap-16 lg:h-[calc(100vh-5.6rem)] h-full'>
        <div className='xl:col-span-8 '>
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

              <Select
                label='Animation'
                options={AnimationOption}
                onChange={handleAnimationChange}
                value={animation}
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
          <div className='bg-white py-32 w-full mx-auto px-6'>
            {/*  */}

            <div className='flex items-center'>
              <div className='relative flex items-center'>
                <input
                  className='cursor-pointer appearance-none rounded border-2 border-gray-300 peer focus:outline-none transition-colors 
                bg-white'
                  type='checkbox'
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  id='one'
                  style={{
                    width: size * 4 + "px",
                    height: size * 4 + "px",
                    borderColor: checked ? checkColor.colorCode : "#d1d5db",
                    backgroundColor: checked
                      ? (checkboxTypes.value === "primary" &&
                          checkColor.colorCode) ||
                        "#fff"
                      : "#fff",
                  }}
                />
                <svg
                  className={`pointer-events-none absolute m-auto -rotate-90 ${animation.class} opacity-0 stroke-0 peer-checked:rotate-0 peer-checked:opacity-100`}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  role='graphics-symbol'
                  style={{
                    width: `${size * 4}px`,
                    height: `${size * 4}px`,
                    top: size === 4 ? "2px" : size === 6 ? "4px" : "6px",
                    padding: size === 4 ? "0 1px" : "0px",
                    fill: checked
                      ? (checkboxTypes.value === "primary" && "#fff") ||
                        checkColor.colorCode
                      : "",
                    stroke: checked
                      ? (checkboxTypes.value === "primary" && "#fff") ||
                        checkColor.colorCode
                      : "",
                  }}
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12.6716 3.5786C13.0631 3.18711 13.0631 2.55437 12.6716 2.16288C12.2801 1.7714 11.6474 1.7714 11.2559 2.16288L7.49996 5.91883L5.74486 4.16373C5.35337 3.77224 4.72063 3.77224 4.32914 4.16373C3.93766 4.55521 3.93766 5.18795 4.32914 5.57944L6.91557 8.16587C7.10035 8.35065 7.34545 8.44604 7.59055 8.44604C7.83566 8.44604 8.08076 8.35065 8.26554 8.16587L12.6716 3.75983C13.0631 3.36835 13.0631 3.02715 12.6716 3.5786Z'
                  />
                </svg>
              </div>
              <label
                className={`cursor-pointer ${fontSize.class} pl-2`}
                htmlFor='one'
                style={{
                  color: labelColor.colorCode,
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

export default CheckboxContent;
