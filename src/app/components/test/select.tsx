"use client";
import React, { useState, useEffect, useRef } from "react";

type Option = {
  value: string;
  label: string;
};

type SelectComponentProps = {
  onChange: (value: Option) => void;
  value: Option;
  options: Option[];
  labelText: string;
};

const SelectComponent = ({
  onChange,
  value,
  options,
  labelText,
}: SelectComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const inputRef = useRef<any>(null);
  const selectRef = useRef<any>(null);
  const handleSelect = (option: any) => {
    console.log("Selected option:", option);
    onChange(option);
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
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='relative w-[60%]' ref={selectRef}>
      <label className='block absolute -top-6 text-smbg-white text-gray-400'>
        {labelText}
      </label>
      <button
        onClick={handleOpen}
        className='text-left outline-none w-full flex justify-between items-center  px-4 py-[9px] text-sm bg-white text-gray-700 border-2 border-cyan-500 rounded'
      >
        {value?.label || options[0].label}
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
          <input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            ref={inputRef}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='block w-full border-b border-gray-300 py-2 px-3 focus:outline-none'
          />

          <div className='max-h-60 h-fit overflow-y-auto'>
            {filteredOptions.map((option: any) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className='px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-50'
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
