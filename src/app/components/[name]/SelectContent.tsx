"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import { BorderOptions } from "@/constant/Border";
import { BorderRadiusOptions } from "@/constant/BorderRadius";
import { colorOptions } from "@/constant/ColorData";
import { WidthOptions } from "@/constant/Width";
import React, { useEffect, useRef, useState } from "react";

const SelectContent = () => {
  const [classNames, setClassNames] = useState<any>("");

  const [radius, setRadius] = useState(BorderRadiusOptions[1]);

  const handleRadiusChange = (option: any) => {
    setRadius(option);
  };

  const FontSizeOption = [
    {
      label: "Extra Small",
      value: "12px",
      class: "text-xs",
    },
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

  const [labelText, setLabelText] = useState("Select Food");

  const handleLabelTextChange = (value: any) => {
    setLabelText(value);
  };

  const [label, setLabel] = useState({
    label: "Label at Top",
    value: "top",
    class: "absolute -top-7 pl-2",
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
      class: "absolute -top-6",
    },

    {
      label: "Absolute",
      value: "absolute",
      class: "absolute -top-2.5 bg-white left-4 px-2",
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
    value: "slate-200",
    colorCode: "#e2e8f0",
    label: "Slate 200",
    bg: "bg-slate-200",
    text: "text-slate-200",
    border: "border-slate-200",
  });

  const handleBorderColorChange = (option: any) => {
    setBorderColor(option);
  };

  const [onHoverOptionsColor, setOnHoverOptionsColor] = useState({
    value: "slate-50",
    colorCode: "#f8fafc",
    label: "Slate 50",
    bg: "bg-slate-50",
    text: "text-slate-50",
    border: "border-slate-50",
  });

  const handleOnHoverOptionsColorChange = (option: any) => {
    setOnHoverOptionsColor(option);
  };

  const [width, setWidth] = useState({
    label: "Medium",
    value: "60%",
    class: "w-[60%]",
  });

  const handleWidthChange = (option: any) => {
    setWidth(option);
  };

  const searchableOptions = [
    {
      label: "Yes",
      value: true,
    },
    {
      label: "No",
      value: false,
    },
  ];

  const [isSearchable, setIsSearchable] = useState(searchableOptions[0]);

  const handleIsSearchableChange = (option: any) => {
    setIsSearchable(option);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState<any>("");
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const inputRef = useRef<any>(null);
  const selectRef = useRef<any>(null);
  const handleSelect = (option: any) => {
    console.log("Selected option:", option);
    setSelectedOption(option);
    setIsOpen(false);
    setIsArrowRotated(false);
  };

  const handleOpen = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setIsArrowRotated(!isArrowRotated);
  };
  useEffect(() => {
    // Focus on the input field when the dropdown is opened
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsArrowRotated(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const options = [
    {
      value: "pizza",
      label: "Pizza",
    },
    {
      value: "burger",
      label: "Burger",
    },
    {
      value: "pasta",
      label: "Pasta",
    },
    {
      value: "fries",
      label: "Fries",
    },
  ];

  const filteredOptions = options.filter((option: any) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isSearchable.value) {
      setClassNames(`
"use client";
import React, { useState, useEffect, useRef } from "react";

const SelectComponent = ({onChange, value, options, labelText}:any) => {
  
  //options = {value, label}, onChange, value, labelText -> can be parameter

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState<any>("");
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const inputRef = useRef<any>(null);
  const selectRef = useRef<any>(null);
  const handleSelect = (option: any) => {
    console.log("Selected option:", option);
    onChange(option);
    setSelectedOption(option);
    setIsOpen(false);
    setIsArrowRotated(false);
  };

  const handleOpen = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setIsArrowRotated(!isArrowRotated);
  };
  useEffect(() => {
    // Focus on the input field when the dropdown is opened
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsArrowRotated(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


  const filteredOptions = options.filter((option: any) =>
  option.label.toLowerCase().includes(searchQuery.toLowerCase()));

  
  
return (
  <div className='relative ${width.class}' ref={selectRef}>
    <label className="block ${label.class} ${fontSize.class}bg-white ${
        labelColor.text
      }">
      {labelText}
    </label>
    <button 
      onClick={handleOpen}
      className="text-left outline-none w-full flex justify-between items-center  px-4 py-[9px] text-sm bg-white text-gray-700 ${
        borderType.class
      } ${borderColor.border} ${radius.class}">
      {selectedOption.label || options[0].label}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className="h-3 w-3  transition-transform ${
          isArrowRotated ? "transform rotate-180" : ""
        }"
        viewBox='0 0 20 20'
        fill='none'
        stroke='#B3B8C2'
      >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M19 9l-7 7-7-7'
      />
      </svg>
    </button>
  {
    isOpen && (
      <div className='absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg'>
      
        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          ref={inputRef}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='block w-full border-b border-gray-300 py-2 px-3 focus:outline-none'
        />
          
      
        <div className='max-h-60 h-fit overflow-y-auto'>
          {
            filteredOptions.map((option: any) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className='px-4 py-2 flex items-center gap-2 cursor-pointer hover:${
                  onHoverOptionsColor.bg
                }'
              >
                {option.label}
              </div>
            ))}
        </div>
      </div>
    )
  }
  </div>
    
  );
};
  
export default SelectComponent;
// Follow below code use it as dynamic component
/* const HowToUseSelect = () => {
  const [value, setValue] = useState("");

  const handleChange = (option: any) => {
    setValue(option);
  };

  const foodOptions = [
    {
      value: "pizza",
      label: "Pizza",
    },
    {
      value: "burger",
      label: "Burger",
    },
    {
      value: "pasta",
      label: "Pasta",
    },
    {
      value: "fries",
      label: "Fries",
    },
  ];

  const labelText = "${labelText}";

  return (
    <div>
      <SelectComponent onChange={handleChange} value={value} options={foodOptions} labelText={labelText} />
    </div>
  );
};

export default HowToUseSelect; */
    `);
    } else {
      setClassNames(`
"use client";
import React, { useState, useEffect, useRef } from "react";

const SelectComponent = ({onChange, value, options, labelText}:any) => {
  
  //options = {value, label}, onChange, value, labelText -> can be parameter

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>("");
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const inputRef = useRef<any>(null);
  const selectRef = useRef<any>(null);
  const handleSelect = (option: any) => {
    console.log("Selected option:", option);
    onChange(option);
    setSelectedOption(option);
    setIsOpen(false);
    setIsArrowRotated(false);
  };

  const handleOpen = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setIsArrowRotated(!isArrowRotated);
  };
  useEffect(() => {
    // Focus on the input field when the dropdown is opened
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsArrowRotated(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


   
return (
  <div className='relative ${width.class}' ref={selectRef}>
    <label className="block ${label.class} ${fontSize.class}bg-white ${
        labelColor.text
      }">
      {labelText}
    </label>
    <button 
      onClick={handleOpen}
      className="text-left outline-none w-full flex justify-between items-center  px-4 py-[9px] text-sm bg-white text-gray-700 ${
        borderType.class
      } ${borderColor.border} ${radius.class}">
      {selectedOption.label || options[0].label}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className="h-3 w-3  transition-transform ${
          isArrowRotated ? "transform rotate-180" : ""
        }"
        viewBox='0 0 20 20'
        fill='none'
        stroke='#B3B8C2'
      >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M19 9l-7 7-7-7'
      />
      </svg>
    </button>
  {
    isOpen && (
      <div className='absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg'>
        <div className='max-h-60 h-fit overflow-y-auto'>
          {
            options.map((option: any) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className='px-4 py-2 flex items-center gap-2 cursor-pointer hover:${
                  onHoverOptionsColor.bg
                }'
              >
                {option.label}
              </div>
            ))}
        </div>
      </div>
    )
  }
  </div>
    
  );
};
  
export default SelectComponent
// Follow below code use it as dynamic component

/* const HowToUseSelect = () => {
  const [value, setValue] = useState("");

  const handleChange = (option: any) => {
    setValue(option);
  };

  const foodOptions = [
    {
      value: "pizza",
      label: "Pizza",
    },
    {
      value: "burger",
      label: "Burger",
    },
    {
      value: "pasta",
      label: "Pasta",
    },
    {
      value: "fries",
      label: "Fries",
    },
  ];

  const labelText = "${labelText}";

  return (
    <div>
      <SelectComponent onChange={handleChange} value={value} options={foodOptions} labelText={labelText} />
    </div>
  );
};

export default HowToUseSelect; */
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
                label='Hover on Options'
                options={colorOptions}
                onChange={handleOnHoverOptionsColorChange}
                value={onHoverOptionsColor}
              />
              <Select
                label='Select Width'
                options={WidthOptions}
                onChange={handleWidthChange}
                value={width}
              />
              <Select
                label='Options Searchable'
                options={searchableOptions}
                onChange={handleIsSearchableChange}
                value={isSearchable}
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
          <div className='bg-white h-96 pt-16 flex justify-center w-full mx-auto px-6'>
            {/*  */}
            <div
              className='relative'
              ref={selectRef}
              style={{ width: width.value }}
            >
              <label
                className={`block ${label.class} ${fontSize.class} bg-white`}
                style={{
                  color: labelColor.colorCode,
                }}
              >
                {labelText}
              </label>
              <button
                onClick={handleOpen}
                className={`text-left outline-none w-full flex justify-between items-center  px-4 py-[9px] text-sm bg-white text-gray-700 ${borderType.class}  ${radius.class} `}
                style={{
                  borderColor: borderColor.colorCode,
                }}
              >
                {selectedOption.label || options[0].label}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={`h-3 w-3  transition-transform ${
                    isArrowRotated ? "transform rotate-180" : ""
                  }`}
                  viewBox='0 0 20 20'
                  fill='none'
                  stroke='#B3B8C2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
              {isOpen && (
                <div className='absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg '>
                  {isSearchable.value && (
                    <input
                      type='text'
                      placeholder='Search...'
                      value={searchQuery}
                      ref={inputRef}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className='block w-full border-b border-gray-300 py-2 px-3 focus:outline-none'
                    />
                  )}
                  <div className='max-h-60 h-fit overflow-y-auto'>
                    {isSearchable.value
                      ? filteredOptions.map((option: any) => (
                          <div
                            key={option.value}
                            onClick={() => handleSelect(option)}
                            onMouseEnter={(e: any) =>
                              (e.target.style.backgroundColor =
                                onHoverOptionsColor.colorCode)
                            }
                            onMouseLeave={(e: any) =>
                              (e.target.style.backgroundColor = "transparent")
                            }
                            className='px-4 py-2 flex items-center gap-2 cursor-pointer'
                          >
                            {option.label}
                          </div>
                        ))
                      : options.map((option: any) => (
                          <div
                            key={option.value}
                            onClick={() => handleSelect(option)}
                            onMouseEnter={(e: any) =>
                              (e.target.style.backgroundColor =
                                onHoverOptionsColor.colorCode)
                            }
                            onMouseLeave={(e: any) =>
                              (e.target.style.backgroundColor = "transparent")
                            }
                            className='px-4 py-2 flex items-center gap-2 cursor-pointer'
                          >
                            {option.label}
                          </div>
                        ))}
                  </div>
                </div>
              )}
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectContent;
