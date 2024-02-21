"use client";
import React, { useState } from "react";

const Select = ({ options, onChange, value, label }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelect = (option: any) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleOpen = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const filteredOptions = options.filter((option: any) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='relative'>
      <label className='block text-gray-400 text-xs  mb-2 absolute -top-2 left-2 bg-white px-2'>
        {label}
      </label>
      <button
        onClick={handleOpen}
        className='text-left w-full border border-slate-200 rounded px-3 py-[9px] text-sm bg-white text-gray-700 focus:border-primary'
      >
        {value?.label || options[0].label}
      </button>
      {isOpen && (
        <div className='absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg'>
          <input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='block w-full border-b border-gray-300 py-2 px-3 focus:outline-none'
          />
          {filteredOptions.map((option: any) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className='px-4 py-2 cursor-pointer hover:bg-gray-100'
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
