"use client";
import React, { useEffect, useRef, useState } from "react";

const Select = ({ options, onChange, value, label }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const inputRef = useRef<any>(null);
  const selectRef = useRef<any>(null);
  const handleSelect = (option: any) => {
    onChange(option);
    setIsOpen(false);
    setIsArrowRotated(false);
  };

  const handleOpen = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setIsArrowRotated(!isArrowRotated);
    // if (!isOpen && inputRef.current) {
    //   inputRef.current.focus();
    // }
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

  // useEffect(() => {}, []);

  const filteredOptions = options.filter((option: any) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='relative lg:w-full w-96 ' ref={selectRef}>
      <label className='block text-gray-400 text-xs  mb-2 absolute -top-2 left-2 bg-white px-2'>
        {label}
      </label>
      <button
        onClick={handleOpen}
        className='text-left w-full flex justify-between items-center border border-slate-200 rounded px-4 py-[9px] text-sm bg-white text-gray-700 focus:border-primary'
      >
        {value?.label || options[0].label}
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
                className='px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-100'
              >
                {option.colorCode && (
                  <div
                    style={{ backgroundColor: option.colorCode }}
                    className='w-4 h-4 rounded-full'
                  ></div>
                )}
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
