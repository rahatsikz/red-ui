import React from "react";

type CardProps = {
  title: string;
  subTitle?: string;
  description: string;
  image: string;
};
const CardComponent = ({ title, subTitle, description, image }: CardProps) => {
  return (
    <div className='overflow-hidden min-w-80 h-fit bg-white shadow-md rounded w-[60%]'>
      <div className='p-6'>
        <div className='grid gap-6 '>
          <img
            src={image}
            alt='card image'
            className='aspect-video w-full h-full object-cover rounded'
          />
          <div className='w-full'>
            <h2 className='text-xl text-slate-800 font-semibold'>{title}</h2>
            <p className='text-slate-500 text-xs tracking-wider mt-1'>
              {subTitle}
            </p>
            <p className='text-slate-500 mt-4 text-sm line-clamp-5'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
