import React, { ChangeEvent } from "react";

type ToggleProps = {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
};

const ToggleComponent = ({ label, onChange, checked }: ToggleProps) => {
  return (
    <div className='relative flex gap-4 items-center w-fit'>
      <label className='text-base text-gray-500' htmlFor='toggle'>
        {label}
      </label>
      <input
        type='checkbox'
        id='toggle'
        checked={checked}
        onChange={onChange}
        className='absolute w-full h-full peer appearance-none cursor-pointer'
      />
      <span className='flex items-center rounded-full duration-300 ease-in-out h-6 w-12 after:h-6 after:w-6 bg-gray-300 after:bg-white after:rounded-full after:shadow after:duration-300 peer-checked:bg-cyan-500 peer-checked:after:translate-x-[calc(100%+.05rem)]'></span>
    </div>
  );
};

export default ToggleComponent;
