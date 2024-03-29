"use client";
import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import React, { useEffect, useState } from "react";

const ToastComponent = ({ message, type, onDismiss }: any) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onDismiss();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, onDismiss]);

  // Define styles based on the type
  const toastStyles: any = {
    success: "bg-green-500",
    error: "bg-red-400",
    warning: "bg-orange-300",
    // Add more types as needed
  };

  return visible ? (
    <div
      className={`fixed bottom-16 left-1/2 -translate-x-1/2 z-30 text-white px-4 py-2 rounded-md ${toastStyles[type]}`}
    >
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          {type === "success" ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
              fill='white'
            >
              <path d='m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
            </svg>
          ) : type === "error" ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
              fill='white'
            >
              <path d='m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
              fill='white'
            >
              <path d='M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
            </svg>
          )}
          <p className='text-sm'>{message}</p>
        </div>
      </div>
    </div>
  ) : null;
};

const ToastContent = () => {
  const [code, setCode] = useState<any>("");
  const [componentCode, setComponentCode] = useState<any>("");

  const toastTypeOptions = [
    {
      label: "Success",
      value: "success",
    },
    {
      label: "Warning",
      value: "warning",
    },
    {
      label: "Error",
      value: "error",
    },
  ];

  const [toastType, setToastType] = useState<any>(toastTypeOptions[0]);

  const handleToastTypeChange = (value: any) => {
    setToastType(value);
  };

  const [message, setMessage] = useState<any>("Here is the toast message");

  const handleMessageChange = (value: any) => {
    setMessage(value);
  };

  const [toastQueue, setToastQueue] = useState<any>([]);

  const handleShowToast = (message: any, type = "success") => {
    setToastQueue((prevQueue: any) => [...prevQueue, { message, type }]);
  };

  const handleAdd = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/${
        toastType.value === "success" ? "posts" : "nonexistent-endpoint"
      }`,
      {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create post");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        handleShowToast(message, "success");
      })
      .catch((err) => {
        console.log(err);
        if (toastType.value === "warning") {
          handleShowToast(message, "warning");
        } else if (toastType.value === "error") {
          handleShowToast(message, "error");
        }
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
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
                label='Toast Type'
                options={toastTypeOptions}
                onChange={handleToastTypeChange}
                value={toastType}
              />
              <Input
                name='toastMessage'
                label='Toast Messsage'
                value={message}
                type='text'
                handleChange={handleMessageChange}
                defaultValue=''
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
          <div
            className={`bg-white py-32 w-full mx-auto px-6 flex items-center md:justify-center 2xl:justify-center`}
          >
            {/*  */}

            {toastQueue.length > 0 && (
              <ToastComponent
                message={toastQueue[0].message}
                type={toastQueue[0].type}
                onDismiss={() =>
                  setToastQueue((prevQueue: any) => prevQueue.slice(1))
                }
              />
            )}

            {/* <button onClick={handleAdd}>Click to Show Toast</button> */}
            <button
              onClick={handleAdd}
              className='rounded-full px-[26px] py-[6px] bg-gray-900 text-white'
            >
              Click to Show Toast
            </button>

            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToastContent;
