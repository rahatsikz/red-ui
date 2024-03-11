import React from "react";

type ImageInputProps = {
  name: string;
  handleChange: any;
  label: string;
  value?: string;
};

const ImageInput = ({ name, handleChange, label, value }: ImageInputProps) => {
  return (
    <div className=' relative'>
      <input
        id={name}
        name={name}
        // value={value}
        type='file'
        className='w-full h-10 py-2  border border-slate-200 text-slate-500 rounded-md text-sm file:mr-4 file:rounded-md file:border-0 file:bg-transparent file:text-primary   file:px-4 file:text-sm file:font-semibold  focus:outline-none disabled:pointer-events-none disabled:opacity-60'
        onChange={(e: any) => handleChange(e.target.files[0])}
        accept='image/*'
      />
      <label
        htmlFor={name}
        className='mb-1 block absolute -top-2 left-3 text-xs font-medium text-slate-400 bg-white px-2'
      >
        {label}
      </label>
    </div>
  );
};

export default ImageInput;
