"use client";
import React from "react";
import * as animationData from "@/assets/lottie/banner.json";
import Lottie from "react-lottie";

const HeroSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      //   preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className='bg-red-50'>
      <div className='flex  flex-col lg:flex-row container lg:mx-auto py-8'>
        <div className='lg:w-1/2 lg:mt-24 text-center lg:text-left px-4 xl:px-0'>
          <h1 className='text-2xl font-semibold text-primary'>
            Unleash Your Coding Power
          </h1>
          <p className='mt-4 max-w-lg max-lg:mx-auto'>
            Red UI is a Tailwind CSS component builder that allows you to
            rapidly build modern and beautiful user interfaces. With its
            extensive set of utility classes and responsive design features, you
            can create stunning UIs with ease.
          </p>
        </div>
        <div className='lg:w-1/2'>
          <Lottie options={defaultOptions} height={400} width={370} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
