"use client";
import React, { useState, useEffect, useRef } from "react";

const SelectComponent = ({ onChange, value, options, labelText }: any) => {
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
    <div className='relative w-[80%]' ref={selectRef}>
      <label className='block absolute -top-7 pl-2 text-smbg-white text-gray-400'>
        {labelText}
      </label>
      <button
        onClick={handleOpen}
        className='text-left outline-none w-full flex justify-between items-center  px-4 py-[9px] text-sm bg-white text-gray-700 border-2 border-red-400 rounded'
      >
        {selectedOption.label || options[0].label}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-3 w-3  transition-transform '
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
        <div className='absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg'>
          <div className='max-h-60 h-fit overflow-y-auto'>
            {options.map((option: any) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className='px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-red-50'
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
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

  const labelText = "Select Food";

  return (
    <div>
      <SelectComponent onChange={handleChange} value={value} options={foodOptions} labelText={labelText} />
    </div>
  );
};

export default HowToUseSelect; */
