"use client";
import { ComponentsArr } from "@/constant/ComponentArr";
import React, { useEffect, useState } from "react";

const List = () => {
  const [randomIndices, setRandomIndices] = useState<any>([]);

  useEffect(() => {
    const getRandomIndices = () => {
      const indices: any = [];
      while (indices.length < 3) {
        const randomIndex = Math.floor(Math.random() * ComponentsArr.length);
        if (!indices.includes(randomIndex)) {
          indices.push(randomIndex);
        }
      }
      return indices;
    };

    setRandomIndices(getRandomIndices());
  }, []);
  return (
    <div className='container mx-auto my-12'>
      <h1 className='text-3xl font-bold text-center text-primary capitalize'>
        Our most popular components
      </h1>
      <p className='text-center mt-2 text-secondary max-w-lg mx-auto'>
        Numerous different component provides all round abilty to build your UI
        from scratch
      </p>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 px-4 2xl:px-0'>
        {randomIndices.map((index: any) => {
          const component = ComponentsArr[index];
          return (
            <div
              className='h-28 text-xl text-center bg-red-50 p-8 rounded-xl hover:bg-gradient-to-l hover:from-red-100 to-red-50 transition-colors duration-1000 ease-in-out'
              key={component.name}
            >
              {component.name}
              {!component.path && (
                <p className='text-red-500 text-sm'>Under Development</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
