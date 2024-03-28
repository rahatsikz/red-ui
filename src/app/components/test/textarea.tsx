import React from "react";

type TextareaProps = {
  label: string;
  placeholder: string;
  value: string;
  onchange: (value: string) => void;
};

const TextareaComponent = ({
  label,
  placeholder,
  value,
  onchange,
}: TextareaProps) => {
  return (
    <div className='flex gap-1 relative '>
      <textarea
        name={label}
        id={label}
        placeholder={placeholder}
        className='w-full border-2 border-emerald-500 focus:border-emerald-600 rounded-md px-[16px] py-[12px] resize-x bg-transparent focus:outline-none placeholder:text-sm'
        value={value}
        onChange={(e) => onchange(e.target.value)}
        rows={2}
        required={false}
      ></textarea>
      <label
        htmlFor={label}
        className='text-slate-500 text-sm block absolute -top-2 bg-white left-4 px-2 space-x-2'
      >
        <span>{label}</span>
        <span className='hidden'>*</span>
      </label>
    </div>
  );
};

export default TextareaComponent;
