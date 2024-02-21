import React, { ReactNode } from "react";

type ButtonProps = {
  variant?: "solid" | "transparent";
  onClick?: any;
  loading?: boolean;
  type?: "submit" | "reset" | "button";
  children?: ReactNode;
  className?: string;
};

const Button = ({
  variant = "solid",
  onClick,
  loading,
  type = "button",
  children,
  className,
}: ButtonProps) => {
  const baseClasses = "rounded-small h-fit w-fit rounded";

  const variantClasses: any = {
    solid: "bg-primary border text-white border-transparent",
    transparent: "bg-transparent text-primary border border-primary",
  };

  const sizeClasses = "py-2 px-5";

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses} ${
        (loading && "cursor-not-allowed opacity-60") || ""
      } flex items-center justify-center gap-1.5 rounded ${className}`}
    >
      {loading && (
        <>
          <span className='mr-1'>{children}</span>
          <span className='border-l-white border-t-white flex h-5 w-5 animate-spin items-center justify-center rounded-[50%] border-2 border-b-transparent border-r-transparent will-change-transform'></span>
        </>
      )}

      {!loading && children}
    </button>
  );
};

export default Button;
