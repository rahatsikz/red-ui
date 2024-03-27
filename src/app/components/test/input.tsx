import React from "react";

type InputProps = {
  label: string;
  placeholder: string;
  value: string | number;
  onchange: (value: string | number) => void;
  inputType: "text" | "number" | "email" | "password";
};

const InputComponent = ({
  label,
  placeholder,
  value,
  onchange,
  inputType,
}: InputProps) => {
  return (
    <div className='flex gap-1 relative '>
      <input
        type={inputType}
        name={label}
        id={label}
        placeholder={placeholder}
        className='w-full border-2 border-emerald-500 focus:border-emerald-700 px-4 py-[10px] rounded bg-transparent focus:outline-none placeholder:text-sm'
        value={value}
        onChange={(e: any) => onchange(e.target.value)}
        required={true}
      />
      <label
        htmlFor={label}
        className='text-slate-500 text-sm absolute -top-2 bg-white left-4 px-2 space-x-2 block'
      >
        <span>{label}</span>
        <span className='visible'>*</span>
      </label>
    </div>
  );
};

export default InputComponent;
