import React, { ChangeEvent } from "react";

type CheckboxProps = {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

const CheckboxComponent = ({ checked, onChange, label }: CheckboxProps) => {
  return (
    <div className='flex items-center'>
      <div className='relative flex items-center'>
        <input
          className='cursor-pointer size-8 appearance-none rounded border-2 border-gray-300 peer focus:outline-none transition-colors bg-white checked:border-indigo-400 checked:bg-indigo-400'
          type='checkbox'
          checked={checked}
          onChange={onChange}
          id='AcceptCompanyTermsandcondition'
        />
        <svg
          className='pointer-events-none size-8 top-1.5 p-0 absolute m-auto transition-all duration-300 -rotate-90 peer-checked:rotate-0 fill-white stroke-white opacity-0 stroke-0 peer-checked:opacity-100'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          role='graphics-symbol'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12.6716 3.5786C13.0631 3.18711 13.0631 2.55437 12.6716 2.16288C12.2801 1.7714 11.6474 1.7714 11.2559 2.16288L7.49996 5.91883L5.74486 4.16373C5.35337 3.77224 4.72063 3.77224 4.32914 4.16373C3.93766 4.55521 3.93766 5.18795 4.32914 5.57944L6.91557 8.16587C7.10035 8.35065 7.34545 8.44604 7.59055 8.44604C7.83566 8.44604 8.08076 8.35065 8.26554 8.16587L12.6716 3.75983C13.0631 3.36835 13.0631 3.02715 12.6716 3.5786Z'
          />
        </svg>
      </div>
      <label
        className='cursor-pointer text-sm text-slate-500 pl-2'
        htmlFor='AcceptCompanyTermsandcondition'
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxComponent;
