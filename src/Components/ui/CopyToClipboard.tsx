"use client";
import ClipBoardSVG from "@/assets/svg/ClipBoardSVG";
import TickMarkSVG from "@/assets/svg/TickMarkSVG";
import React, { useState } from "react";
import toast from "react-hot-toast";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CopyToClipboardButton = ({ text, height = 300, component = "" }: any) => {
  // const copyToClipboard = () => {
  //   navigator.clipboard
  //     .writeText(text)
  //     .then(() => {
  //       console.log("Text copied to clipboard:", text);
  //       toast.success("Copied to clipboard!", {
  //         position: "bottom-center",
  //       });
  //       // Optionally, you can show a success message or perform other actions
  //     })
  //     .catch((error) => {
  //       console.error("Error copying text to clipboard:", error);
  //       // Handle errors, such as browser support, permissions, etc.
  //     });
  // };

  const [copied, setCopied] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div className='!text-left lg:flex grid items-end lg:h-fit h-96 overflow-y-auto gap-12 py-8 px-8 lg:px-0 lg:py-0 mb-6'>
      {/* <div className='lg:ml-12 py-8'>{text}</div> */}

      <div className='w-full  bg-[#31404d] rounded-md overflow-hidden'>
        <div className='flex justify-between px-4 text-xs text-center text-white items-center'>
          <p className={`py-2 hidden md:block`}>Generated Code</p>
          <div>
            <div className='relative flex gap-2 md:gap-4 items-center'>
              <label
                className={`text-xs ${
                  !checked ? "text-white" : "text-gray-400"
                }`}
                htmlFor='toggle'
              >
                Code
              </label>
              <input
                type='checkbox'
                id='toggle'
                className='absolute w-full h-full peer appearance-none rounded-md cursor-pointer'
                onChange={() => setChecked(!checked)}
                checked={checked}
              />
              <span className='flex items-center rounded-full duration-300 ease-in-out h-3 w-6 after:h-3 after:w-3 bg-gray-500 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:bg-red-400 peer-checked:after:translate-x-full'></span>
              <label
                className={`text-xs ${
                  checked ? "text-white" : "text-gray-400"
                }`}
                htmlFor='toggle'
              >
                Component
              </label>
            </div>
          </div>
          {copied ? (
            <button className='py-2 inline-flex items-center gap-1 flex-row-reverse'>
              Copied
              <TickMarkSVG />
            </button>
          ) : (
            <button
              className='py-2 inline-flex items-center gap-1 flex-row-reverse'
              onClick={() => {
                navigator.clipboard.writeText(checked ? component : text);
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
              }}
            >
              Copy Code
              <ClipBoardSVG />
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language='typescript'
          style={dracula}
          customStyle={{
            padding: "0px 20px 16px",
            overflowX: "hidden",
            overflowY: "auto",
            maxHeight: height + "px",
          }}
          wrapLongLines={true}
        >
          {checked ? component : text}
        </SyntaxHighlighter>
      </div>

      {/* <button
        onClick={copyToClipboard}
        className='bg-primary text-white lg:h-12 h-8 px-4'
      >
        Copy
      </button> */}
    </div>
  );
};

export default CopyToClipboardButton;
