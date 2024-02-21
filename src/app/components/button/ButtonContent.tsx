"use client";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import SelectComponent from "@/Components/ui/Select";
import Slider from "@/Components/ui/Slide";
import { colorOptions } from "@/constant/ColorData";
import React, { useState } from "react";

const ButtonOptions = [
  {
    label: "Solid",
    value: "solid",
  },
  {
    label: "Outline",
    value: "outline",
  },
];

const ButtonContent = () => {
  const [buttonText, setButtonText] = useState("Button");

  // console.log(buttonText);

  const handleButtonTextChange = (value: any) => {
    setButtonText(value);
    console.log(buttonText);
  };

  const [selectedOption, setSelectedOption] = useState<any>({
    value: "solid",
    label: "Solid",
  });

  const options = [
    { value: "solid", label: "Solid" },
    { value: "outline", label: "Outline" },
  ];
  const handleSelectChange = (option: any) => {
    setSelectedOption(option);
  };

  const [color, setColor] = useState({
    value: "gray-900",
    label: "gray-900",
    colorCode: "#111827",
    bg: "bg-gray-900",
    text: "text-gray-200",
    border: "border-gray-500",
  });

  const handleColorChange = (option: any) => {
    setColor(option);
  };

  const [xPadding, setXPadding] = useState(2);
  const [yPadding, setYPadding] = useState(2);

  const handleXChange = (e: any) => {
    setXPadding(parseInt(e.target.value));
  };
  const handleYChange = (e: any) => {
    setYPadding(parseInt(e.target.value));
  };

  return (
    <section>
      <div className='grid grid-cols-12 lg:h-[90.6vh]'>
        <div className='col-span-8'>
          <form className='w-11/12 mx-auto grid grid-cols-2 gap-8 mt-8'>
            <Input
              name='ButtonText'
              label='Button Text'
              value={buttonText}
              type='text'
              handleChange={handleButtonTextChange}
              defaultValue='Button'
            />
            <Select
              label='Button Type'
              options={options}
              onChange={handleSelectChange}
              value={selectedOption}
            />
            <Select
              label='Button Color'
              options={colorOptions}
              onChange={handleColorChange}
              value={color}
            />
            <div></div>
            <Slider
              value={xPadding}
              handleChange={handleXChange}
              label='Padding - X'
            />
            <Slider
              value={yPadding}
              handleChange={handleYChange}
              label='Padding - Y'
            />
          </form>
        </div>
        <div className='bg-red-50 col-span-4 flex items-center justify-center'>
          <button
            style={{
              backgroundColor:
                selectedOption.value === "solid"
                  ? color.colorCode
                  : "transparent",

              color:
                selectedOption.value === "solid" ? "#fff" : color.colorCode,
              border: "1px solid ",
              borderColor:
                selectedOption.value === "solid"
                  ? "transparent"
                  : color.colorCode,
              padding: `${yPadding}px  ${xPadding}px`,
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ButtonContent;
