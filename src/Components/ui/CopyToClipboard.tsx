import React from "react";
import toast from "react-hot-toast";

const CopyToClipboardButton = ({ text }: any) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        toast.success("Copied to clipboard!", {
          position: "bottom-center",
        });
        // Optionally, you can show a success message or perform other actions
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
        // Handle errors, such as browser support, permissions, etc.
      });
  };

  return (
    <div className='!text-left lg:flex grid items-end lg:h-fit h-64 overflow-y-auto gap-12 py-8 px-8 lg:px-0 lg:py-0'>
      <div className='lg:ml-12 py-8'>{text}</div>
      <button
        onClick={copyToClipboard}
        className='bg-primary text-white lg:h-12 h-8 px-4'
      >
        Copy
      </button>
    </div>
  );
};

export default CopyToClipboardButton;
