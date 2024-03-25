"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Select from "@/Components/ui/Select";
import { colorOptions } from "@/constant/ColorData";
import React, { useEffect, useState } from "react";

const LoaderContent = () => {
  const [code, setCode] = useState<any>("");
  const [componentCode, setComponentCode] = useState<any>("");

  const loaderTypeOptions = [
    {
      value: "one",
      label: "Variant One",
    },
    {
      value: "two",
      label: "Variant Two",
    },
    {
      value: "three",
      label: "Variant Three",
    },
    {
      value: "four",
      label: "Variant Four",
    },
    {
      value: "five",
      label: "Variant Five",
    },
  ];

  const [loaderType, setLoaderType] = useState(loaderTypeOptions[0]);

  const handleLoaderTypeChange = (option: any) => {
    setLoaderType(option);
  };

  const [loaderColor, setLoaderColor] = useState({
    value: "red-400",
    colorCode: "#f87171",
    label: "red-400",
    bg: "bg-red-400",
    text: "text-red-400",
    border: "border-red-400",
  });

  const handleLoaderColorChange = (option: any) => {
    setLoaderColor(option);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    switch (loaderType.value) {
      case "one":
        setCode(
          `
import React from "react";

const LoaderComponent = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 ${loaderColor.border}'></div>
    </div>
  );
};

export default LoaderComponent;
          
`
        );
        break;
      case "two":
        setCode(
          `
import React from "react";

const LoaderComponent = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid ${loaderColor.border} border-e-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]'></div>
    </div>
  );
};

export default LoaderComponent;
          
    `
        );
        break;

      case "three":
        setCode(
          `
import React from "react";

const LoaderComponent = () => {
  return (
    <div className='relative flex justify-center items-center'>
      <span className='animate-ping h-10 w-10 duration-700 absolute inline-flex rounded-full opacity-75 
      ${loaderColor.bg}'></span>
      <span className='relative inline-flex rounded-full h-10 w-10 ${loaderColor.bg}'></span>
    </div>
  );
};

export default LoaderComponent;
          
              `
        );
        break;

      case "four":
        setCode(
          `
import React from "react";

const LoaderComponent = () => {
  return (
    <div className='flex justify-center items-center'>
      <svg
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12 animate-spin'
      >
        <circle
          cx='12'
          cy='12'
          r='10'
          className='stroke-slate-200'
          strokeWidth='4'
        />

        <path
          d='M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2'
          className='stroke-${loaderColor.value}'
          strokeWidth='4'
        />
      </svg>
    </div>
  );
};

export default LoaderComponent;
          
                `
        );
        break;

      case "five":
        setCode(
          `
import React from "react";

const LoaderComponent = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
      <div className='flex'>
        <div
          className='w-6 h-6 rounded-full animate-bounce ${loaderColor.bg}'
          style={{ animationDelay: "200ms" }}
        ></div>
      </div>

      <div className='flex'>
        <div
          className='w-6 h-6 rounded-full animate-bounce ${loaderColor.bg}'
          style={{ animationDelay: "500ms" }}
        ></div>
      </div>

      <div className='flex'>
        <div
          className='w-6 h-6 rounded-full animate-bounce ${loaderColor.bg}'
          style={{ animationDelay: "700ms" }}
        ></div>
      </div>
    </div>
  );
};

export default LoaderComponent;
          
              `
        );

      default:
        break;
    }
    setComponentCode(
      `
const HowToUseLoader = () => {
  return (
    <div>
      <LoaderComponent />
    </div>
  );
};
      `
    );
  };

  useEffect(() => {
    setCode("");
  }, [loaderColor, loaderType]);

  return (
    <section>
      <div className='xl:grid grid-cols-12 flex flex-col gap-16 lg:h-[calc(100vh-5.6rem)] h-full'>
        <div className='xl:col-span-8 '>
          <form
            className='xl:w-11/12 mx-auto px-4 mt-8'
            onSubmit={handleSubmit}
          >
            <div className='grid lg:grid-cols-2 gap-8'>
              <Select
                label='Loader Type'
                options={loaderTypeOptions}
                onChange={handleLoaderTypeChange}
                value={loaderType}
              />

              <Select
                label='Loader Color'
                options={colorOptions}
                onChange={handleLoaderColorChange}
                value={loaderColor}
              />
            </div>
            <div className='mt-8 flex justify-center'>
              <Button type='submit' className='px-24'>
                Generate Code
              </Button>
            </div>
          </form>
          <div
            className={`w-11/12 mx-auto mt-8 transition-opacity duration-700 ${
              code.length > 0 ? "" : "opacity-0 hidden lg:block"
            }`}
          >
            <CopyToClipboardButton text={code} component={componentCode} />
          </div>
        </div>
        <div className='bg-red-50 xl:col-span-4 md:w-full w-11/12 mx-auto py-12 flex items-center justify-center px-12'>
          <div className='bg-white py-32 w-full mx-auto px-6'>
            {/*  */}
            {loaderType.value === "one" && (
              <div className='flex justify-center items-center'>
                <div
                  className='animate-spin rounded-full h-14 w-14 border-t-2 border-b-2'
                  style={{ borderColor: loaderColor.colorCode }}
                ></div>
              </div>
            )}
            {loaderType.value === "two" && (
              <div className='flex justify-center items-center'>
                <div
                  style={{
                    borderTopColor: loaderColor.colorCode,
                    borderRightColor: loaderColor.colorCode,
                    borderBottomColor: loaderColor.colorCode,
                    borderLeftColor: "transparent",
                  }}
                  className='inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-e-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]'
                ></div>
              </div>
            )}
            {loaderType.value === "three" && (
              <div className='relative flex justify-center items-center'>
                <span
                  className='animate-ping h-10 w-10 duration-700 absolute inline-flex rounded-full opacity-75'
                  style={{ backgroundColor: loaderColor.colorCode }}
                ></span>
                <span
                  className='relative inline-flex rounded-full h-10 w-10'
                  style={{ backgroundColor: loaderColor.colorCode }}
                ></span>
              </div>
            )}
            {loaderType.value === "four" && (
              <div className='flex justify-center items-center'>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-12 w-12 animate-spin'
                >
                  <circle
                    cx='12'
                    cy='12'
                    r='10'
                    className='stroke-slate-200'
                    strokeWidth='4'
                  />
                  <path
                    d='M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2'
                    // className='stroke-primary'
                    strokeWidth='4'
                    style={{ stroke: loaderColor.colorCode }}
                  />
                </svg>
              </div>
            )}

            {loaderType.value === "five" && (
              <div className='flex justify-center items-center gap-2'>
                <div className='flex'>
                  <div
                    className='w-6 h-6 rounded-full animate-bounce'
                    style={{
                      animationDelay: "200ms",
                      backgroundColor: loaderColor.colorCode,
                    }}
                  ></div>
                </div>
                <div className='flex'>
                  <div
                    className='w-6 h-6 rounded-full animate-bounce'
                    style={{
                      animationDelay: "500ms",
                      backgroundColor: loaderColor.colorCode,
                    }}
                  ></div>
                </div>
                <div className='flex'>
                  <div
                    className='w-6 h-6 rounded-full animate-bounce'
                    style={{
                      animationDelay: "700ms",
                      backgroundColor: loaderColor.colorCode,
                    }}
                  ></div>
                </div>
              </div>
            )}

            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoaderContent;
