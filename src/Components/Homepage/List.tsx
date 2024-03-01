import { ComponentsArr } from "@/constant/ComponentArr";
import React from "react";

const List = () => {
  return (
    <div className='container mx-auto my-8'>
      <h1 className='text-3xl font-bold text-center text-primary'>
        Our Components
      </h1>
      <p className='text-center mt-2 text-secondary max-w-lg mx-auto'>
        Numerous different component provides all round abilty to build your UI
        from scratch
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-4 lg:px-0'>
        {ComponentsArr.map((component) => (
          <div
            className='h-28 text-xl text-center bg-red-50 p-8 rounded-xl hover:bg-gradient-to-l hover:from-red-100 to-red-50 transition-colors duration-1000 ease-in-out'
            key={component.name}
          >
            {component.name}
            {!component.path && (
              <p className='text-red-500 text-sm'>Under Development</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
