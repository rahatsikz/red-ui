import Footer from "@/Components/ui/Footer";
import { ComponentsArr } from "@/constant/ComponentArr";
import Link from "next/link";
import React from "react";

const ComponentPage = () => {
  return (
    <div className='flex flex-col justify-between h-[90.6vh]'>
      <div className='container mx-auto my-8'>
        {/* <p className='text-2xl text-center border-b-2 w-fit mx-auto px-8 pb-1 border-primary'>
          Components List
        </p> */}
        <h1 className='text-2xl font-medium mx-auto text-center px-8 leading-tight mb-2 pb-2 relative w-fit'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-600 tracking-wider'>
            Components List
          </span>
          <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-600 to-primary rounded-full'></span>
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 px-4 2xl:px-0'>
          {ComponentsArr.sort((a, b) => a.name.localeCompare(b.name)).map(
            (component) => (
              <Link
                className='h-28 text-xl flex flex-col text-center border-2 border-red-100 p-8 rounded-lg hover:bg-red-50 group'
                href={component.path}
                key={component.name}
              >
                <span className='font-medium text-[#1e293b] tracking-wide'>
                  {component.name}
                </span>
                <span className='text-sm mt-1 text-primary tracking-wide opacity-0 group-hover:opacity-100 '>
                  Create Now
                </span>
                {!component.path && (
                  <p className='text-red-500 text-sm'>Under Development</p>
                )}
              </Link>
            )
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ComponentPage;
