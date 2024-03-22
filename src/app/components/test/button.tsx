import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
};

const ButtonComponent = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className='w-fit text-base tracking-normal rounded-xl px-[22px] py-2 bg-gradient-to-tr from-emerald-400 to-cyan-500 text-white'
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
