"use client";
import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import Slider from "@/Components/ui/Slide";
import { BorderRadiusOptions } from "@/constant/BorderRadius";
import { colorOptions } from "@/constant/ColorData";
import { FontSizeOption } from "@/constant/FontSize";
import { LetterSpacingOption } from "@/constant/LetterSpacing";
import React, { useState } from "react";

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
    {
      value: "gradient",
      label: "Gradient",
    },
  ];
  const handleSelectChange = (option: any) => {
    setSelectedOption(option);
  };

  const [color, setColor] = useState({
    value: "gray-900",
    label: "gray-900",
    colorCode: "#111827",
    bg: "bg-gray-900",
    text: "text-gray-900",
    border: "border-gray-900",
  });

  const handleColorChange = (option: any) => {
    setColor(option);
  };
  const [hoverColor, setHoverColor] = useState({
    value: "gray-900",
    label: "gray-900",
    colorCode: "#111827",
    bg: "bg-gray-900",
    text: "text-gray-900",
    border: "border-gray-900",
  });

  const handleHoverColorChange = (option: any) => {
    setHoverColor(option);
  };

  const [startColor, setStartColor] = useState({
    value: "pink-500",
    colorCode: "#ec4899",
    label: "pink-500",
    bg: "bg-pink-500",
    text: "text-pink-500",
    border: "border-pink-500",
  });

  const handleStartColorChange = (option: any) => {
    setStartColor(option);
  };
  const [endColor, setEndColor] = useState({
    value: "red-500",
    colorCode: "#ef4444",
    label: "red-500",
    bg: "bg-red-500",
    text: "text-red-500",
    border: "border-red-500",
  });

  const handleEndColorChange = (option: any) => {
    setEndColor(option);
  };

  const GradientTypes = [
    { value: "linear-gradient", label: "Linear" },
    { value: "radial-gradient", label: "Radial" },
  ];

  const [gradTypes, setGradTypes] = useState({
    value: "linear-gradient",
    label: "Linear",
  });

  const handleGradChange = (option: any) => {
    setGradTypes(option);
  };

  const linearOptions = [
    { value: "to right", label: "to right", class: "bg-gradient-to-r" },
    { value: "to left", label: "to left", class: "bg-gradient-to-l" },
    { value: "to top", label: "to top", class: "bg-gradient-to-t" },
    { value: "to bottom", label: "to bottom", class: "bg-gradient-to-b" },
    {
      value: "to top right",
      label: "to top right",
      class: "bg-gradient-to-tr	",
    },
    { value: "to top left", label: "to top left", class: "bg-gradient-to-tl" },
    {
      value: "to bottom right",
      label: "to bottom right",
      class: "bg-gradient-to-br",
    },
    {
      value: "to bottom left",
      label: "to bottom left",
      class: "bg-gradient-to-bl",
    },
  ];

  const [linear, setLinear] = useState({
    value: "to right",
    label: "to right",
    class: "bg-gradient-to-r",
  });

  const handleLinearChange = (option: any) => {
    setLinear(option);
  };

  const radialOptions = [{ value: "circle", label: "circle" }];

  const [radial, setRadial] = useState({
    value: "circle",
    label: "circle",
  });

  const handleRadialChange = (option: any) => {
    setRadial(option);
  };

  const [radius, setRadius] = useState({
    label: "None",
    value: "0",
    class: "rounded-none",
  });

  const handleRadiusChange = (option: any) => {
    setRadius(option);
  };

  const [xPadding, setXPadding] = useState(10);
  const [yPadding, setYPadding] = useState(4);

  const handleXChange = (e: any) => {
    setXPadding(parseInt(e.target.value));
  };
  const handleYChange = (e: any) => {
    setYPadding(parseInt(e.target.value));
  };

  const widthOptions = [
    {
      label: "Full Width",
      value: "100%",
      class: "w-full",
    },
    {
      label: "Fit Content",
      value: "fit-content",
      class: "w-fit",
    },
  ];

  const [width, setWidth] = useState({
    label: "Fit Content",
    value: "fit-content",
    class: "w-fit",
  });

  const handleWidthChange = (option: any) => {
    setWidth(option);
  };

  const [fontSize, setFontSize] = useState({
    label: "Base",
    value: "16px",
    class: "text-base",
  });

  const handleFontSizeChange = (option: any) => {
    setFontSize(option);
  };

  const [letterSpacing, setLetterSpacing] = useState({
    label: "wider",
    value: "0.05em",
    class: "tracking-wider",
  });

  const handleLetterSpacingChange = (option: any) => {
    setLetterSpacing(option);
  };

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
    // console.log("ty");
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const [classNames, setClassNames] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let data = `${width.class} ${fontSize.class} ${letterSpacing.class} ${
      radius.class
    } ${xPadding % 4 === 0 ? `px-${xPadding / 4}` : `px-[${xPadding}px]`} ${
      yPadding % 4 === 0 ? `py-${yPadding / 4}` : `py-[${yPadding}px]`
    }`;

    if (selectedOption.value === "solid") {
      data += ` ${color.bg} text-white border-2 border-transparent hover:${hoverColor.bg} transition-colors duration-300`;
    } else if (selectedOption.value === "outline") {
      data += ` text-${color.label} border-2 border-${color.label} bg-transparent hover:${hoverColor.bg} hover:border-transparent hover:text-white transition-colors duration-300`;
    } else if (
      selectedOption.value === "gradient" &&
      gradTypes.value === "linear-gradient"
    ) {
      data += ` ${linear.class} from-${startColor.label} to-${endColor.label} text-white`;
    } else if (
      selectedOption.value === "gradient" &&
      gradTypes.value === "radial-gradient"
    ) {
      data += ` bg-[radial-gradient(circle,${startColor.colorCode}_0%,${endColor.colorCode}_100%)] text-white`;
    }

    setClassNames(`<button className="${data.trim()}">${buttonText}</button>`);
  };

  return (
    <section>
      <div className='xl:grid grid-cols-12 flex flex-col gap-16 lg:h-[90.6vh] h-full'>
        <div className='xl:col-span-8 '>
          <form className='w-11/12 mx-auto px-4 mt-8' onSubmit={handleSubmit}>
            <div className='grid lg:grid-cols-2 gap-8'>
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
              {selectedOption.value === "solid" ||
              selectedOption.value === "outline" ? (
                <>
                  <Select
                    label='Button Color'
                    options={colorOptions}
                    onChange={handleColorChange}
                    value={color}
                  />
                  <Select
                    label='Hover Color'
                    options={colorOptions}
                    onChange={handleHoverColorChange}
                    value={hoverColor}
                  />
                </>
              ) : (
                <>
                  <Select
                    label='Start Color'
                    options={colorOptions}
                    onChange={handleStartColorChange}
                    value={startColor}
                  />
                  <Select
                    label='End Color'
                    options={colorOptions}
                    onChange={handleEndColorChange}
                    value={endColor}
                  />
                  <Select
                    label='Gradient Type'
                    options={GradientTypes}
                    onChange={handleGradChange}
                    value={gradTypes}
                  />
                  <Select
                    label='Gradient Direction'
                    options={
                      gradTypes.label === "Linear"
                        ? linearOptions
                        : radialOptions
                    }
                    onChange={
                      gradTypes.label === "Linear"
                        ? handleLinearChange
                        : handleRadialChange
                    }
                    value={gradTypes.label === "Linear" ? linear : radial}
                  />
                </>
              )}

              <Slider
                value={xPadding}
                handleChange={handleXChange}
                label='Padding - X'
                max={60}
              />
              <Slider
                value={yPadding}
                handleChange={handleYChange}
                label='Padding - Y'
                max={20}
              />

              <Select
                label='Border Radius'
                options={BorderRadiusOptions}
                onChange={handleRadiusChange}
                value={radius}
              />

              <Select
                label='Button Width'
                options={widthOptions}
                onChange={handleWidthChange}
                value={width}
              />

              <Select
                label='Font Size'
                options={FontSizeOption}
                onChange={handleFontSizeChange}
                value={fontSize}
              />

              <Select
                label='Letter Spacing'
                options={LetterSpacingOption}
                onChange={handleLetterSpacingChange}
                value={letterSpacing}
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
          <button
            className='bg-[radial-gradient(circle, #fff, #000)]'
            style={{
              width: width.value,
              fontSize: fontSize.value,
              letterSpacing: letterSpacing.value,
              backgroundColor:
                (selectedOption.value === "solid" &&
                  !hover &&
                  color.colorCode) ||
                (selectedOption.value === "solid" &&
                  hover &&
                  hoverColor.colorCode) ||
                (selectedOption.value === "outline" &&
                  hover &&
                  hoverColor.colorCode) ||
                (selectedOption.value === "gradient" && "#fff") ||
                "transparent",

              color:
                (selectedOption.value === "solid" && "#fff") ||
                (selectedOption.value === "gradient" && "#fff") ||
                (selectedOption.value === "outline" &&
                  !hover &&
                  color.colorCode) ||
                (selectedOption.value === "outline" && hover && "#fff") ||
                color.colorCode,
              border:
                selectedOption.value !== "gradient" ? "2px solid " : "none",
              borderColor:
                selectedOption.value === "solid"
                  ? "transparent"
                  : hover
                  ? hoverColor.colorCode
                  : color.colorCode,
              borderRadius: radius.value,
              padding: `${yPadding}px  ${xPadding}px`,
              transition:
                "background-color 0.3s, color 0.3s, background-image 0.3s",
              backgroundImage:
                selectedOption.value === "gradient"
                  ? `${gradTypes.value}(${
                      gradTypes.label !== "Linear" ? radial.value : linear.value
                    }, ${startColor.colorCode} 0%, ${endColor.colorCode} 100%)`
                  : "none",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ButtonContent;
