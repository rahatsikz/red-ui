"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import Slider from "@/Components/ui/Slide";
import { colorOptions } from "@/constant/ColorData";
import React, { useEffect, useState } from "react";
const CheckboxContent = () => {
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
      class: "transition-all duration-300",
    },
    {
      label: "No",
      value: false,
      class: "",
    },
  ];

  const [animation, setAnimation] = useState(AnimationOption[0]);

  const handleAnimationChange = (option: any) => {
    setAnimation(option);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setClassNames(`
    <div className='relative flex flex-wrap items-center'>
      <input
      className='w-${size} h-${size} cursor-pointer appearance-none rounded border-2 peer focus:outline-none transition-colors border-gray-300 bg-white ${
      checkboxTypes.class
    }'
      type='checkbox'
      id='one'
      />
      <label
      className="cursor-pointer ${fontSize.class} ${labelColor.text} pl-2"
      htmlFor='one'
      >
      ${label}
      </label>
      <svg
      className="pointer-events-none w-${size} h-${size} absolute ${
      size === 4 ? (fontSize.label === "Small" ? "2px" : "4px") : "0px"
    } left-0 -rotate-90 ${animation.class} ${
      checkboxTypes.svg
    } opacity-0  peer-checked:rotate-0 peer-checked:opacity-100"
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      aria-labelledby='title-1 description-1'
      role='graphics-symbol'
      >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z'
      />
      </svg>
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
                className='cursor-pointer appearance-none rounded border-2 peer focus:outline-none transition-colors 
                border-gray-300 bg-white'
                type='checkbox'
                checked={checked}
                onChange={() => setChecked(!checked)}
                id='one'
                style={{
                  width: size * 4 + "px",
                  height: size * 4 + "px",
                  borderColor: checked ? checkColor.colorCode : "#d1d5db",
                  backgroundColor:
                    (checked &&
                      checkboxTypes.value === "primary" &&
                      checkColor.colorCode) ||
                    "#fff",
                }}
              />
              <label
                className={`cursor-pointer ${fontSize.class} pl-2`}
                htmlFor='one'
                style={{
                  color: labelColor.colorCode,
                }}
              >
                {label}
              </label>
              <svg
                className={`pointer-events-none absolute left-0 -rotate-90 ${animation.class} opacity-0  peer-checked:rotate-0 peer-checked:opacity-100`}
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                aria-labelledby='title-1 description-1'
                role='graphics-symbol'
                style={{
                  width: size * 4 + "px",
                  height: size * 4 + "px",
                  top:
                    size === 4
                      ? fontSize.label === "Small"
                        ? "2px"
                        : "4px"
                      : "0px",
                  fill:
                    (checked && checkboxTypes.value === "primary" && "#fff") ||
                    (checked &&
                      checkboxTypes.value === "outline" &&
                      checkColor.colorCode) ||
                    "",
                  stroke:
                    (checked && checkboxTypes.value === "primary" && "#fff") ||
                    (checked &&
                      checkboxTypes.value === "outline" &&
                      checkColor.colorCode) ||
                    "",
                }}
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z'
                />
              </svg>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckboxContent;
