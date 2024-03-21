import React from "react";

type AccordionProps = {
  header: string;
  description: string;
  isOpen?: boolean;
};

const AccordionComponent = ({
  header,
  description,
  isOpen = false,
}: AccordionProps) => {
  return (
    <details className='p-4 group w-full' open={isOpen}>
      <summary className='flex items-center justify-between w-full font-medium tracking-wide list-none cursor-pointer focus-visible:outline-none py-4 px-4 rounded bg-slate-100 text-black'>
        {header}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-4 h-4 group-open:rotate-180 transition-transform duration-300'
        >
          <path
            fillRule='evenodd'
            d='M10 13.707l-6.646-6.647a1 1 0 00-1.414 1.414l7.354 7.353a1 1 0 001.414 0l7.354-7.353a1 1 0 00-1.414-1.414L10 13.707z'
            clipRule='evenodd'
          />
        </svg>
      </summary>
      <p className='mt-2 px-4 text-slate-700'>{description}</p>
    </details>
  );
};

export default AccordionComponent;
