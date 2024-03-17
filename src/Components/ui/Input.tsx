"use client";
import React from "react";

type InputProps = {
  name: string;
  handleChange: any;
  label: string;
  type: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string;
};

const Input = ({
  name,
  handleChange,
  type,
  label,
  placeholder,
  defaultValue,
  value,
}: InputProps) => {
  return (
    <div className='relative '>
      <input
        id={name}
        type={type}
        name={name}
        min={type === "number" ? 0 : undefined}
        max={type === "number" ? 100 : undefined}
        // defaultValue={defaultValue}
        placeholder={placeholder}
        value={value}
        className='peer relative h-10 lg:w-full w-full   rounded border border-slate-200 px-4 text-sm text-gray-700 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-red-500 focus:outline-none '
        onChange={(e) => handleChange(e.target.value)}
      />
      <label
        htmlFor={name}
        className='absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all '
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
