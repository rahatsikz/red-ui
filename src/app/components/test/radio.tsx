import React from "react";

type RadioProps = {
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  checked?: boolean;
};

const RadioComponent = ({
  name,
  label,
  onChange,
  value,
  checked,
}: RadioProps) => {
  return (
    <div className='relative flex items-center'>
      <input
        className='size-8 checked:border-blue-400 checked:bg-blue-400 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 focus:outline-none'
        type='radio'
        value={value}
        id={value.replace(/\s/g, "")}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <label
        className='pl-2 text-slate-700 text-base cursor-pointer'
        htmlFor={value.replace(/\s/g, "")}
      >
        {label}
      </label>
      <svg
        className='absolute size-8 fill-white left-0 scale-50 opacity-0 pointer-events-none peer-checked:scale-100 peer-checked:opacity-100'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        role='graphics-symbol'
      >
        <circle cx='8' cy='8' r='4' />
      </svg>
    </div>
  );
};

export default RadioComponent;
