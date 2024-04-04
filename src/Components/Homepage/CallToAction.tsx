"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "../ui/Button";

const CallToAction = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/components");
  };
  return (
    <div className='px-4 xl:px-0 container mx-auto my-12'>
      <div className='bg-gradient-to-l from-red-100 to-red-50 flex flex-col items-center rounded-xl py-12'>
        <div className='text-center '>
          <h2 className='text-3xl font-bold mb-4 capitalize text-primary'>
            Transform Your Interface
          </h2>
          <p className='mb-8 max-w-2xl mx-auto px-2 xl:px-0'>
            Comprehensive collection of crafted React components designed to
            streamline your development workflow and enhance the visual appeal
            of your projects
          </p>
        </div>
        <Button variant='solid' onClick={handleNavigate} className=' '>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
