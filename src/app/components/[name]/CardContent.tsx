"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import ImageInput from "@/Components/ui/ImageInput";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import { colorOptions } from "@/constant/ColorData";
import React, { useState } from "react";

const CardContent = () => {
  const [classNames, setClassNames] = useState<any>("");

  const [imgUpload, setImgUpload] = useState<any>(null);

  const imgbbApi = process.env.NEXT_PUBLIC_IMGBB_Key;
  const handleImgUpload = (value: any) => {
    setImgUpload(value);
    // console.log(value);
    // console.log(imgbbApi, "apikey");
    const formdata = new FormData();
    formdata.append("image", value);
    console.log(formdata);

    fetch(`https://api.imgbb.com/1/upload?key=${imgbbApi}`, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          console.log(data.data.url);
        }
      });
  };

  // const [containerColor, setContainerColor] = useState({
  //   value: "red-200",
  //   colorCode: "#fecaca",
  //   label: "red-200",
  //   bg: "bg-red-200",
  //   text: "text-red-200",
  //   border: "border-red-200",
  // });

  // const handleContainerColorChange = (option: any) => {
  //   setContainerColor(option);
  // };

  const SizeOptions = [
    {
      label: "Small",
      value: 4,
      class: "h-4 w-8 after:h-4 after:w-4",
    },
    {
      label: "Medium",
      value: 6,
      class: "h-6 w-12 after:h-6 after:w-6",
    },
    {
      label: "Large",
      value: 8,
      class: "h-8 w-16 after:h-8 after:w-8",
    },
  ];

  const [title, setTitle] = useState("This is Title");

  const handleTitleChange = (value: any) => {
    setTitle(value);
  };
  const [subTitle, setSubTitle] = useState("Sub-title");

  const handleSubTitleChange = (value: any) => {
    setSubTitle(value);
  };

  const dummyDesc =
    "Introducing our sleek and versatile card component, designed to elevate your user interface with minimal effort. Crafted for seamless integration into any project, our cards offer unparalleled flexibility and style.";

  const [desc, setDesc] = useState(dummyDesc);

  const handleDescChange = (value: any) => {
    setDesc(value);
  };

  const cardTypesArr = [
    {
      label: "Empty",
      value: "empty",
    },
    {
      label: "Title and text",
      value: "textonly",
    },
    {
      label: "Text With Image",
      value: "textwithimage",
    },
  ];

  const [cardType, setCardType] = useState(cardTypesArr[0]);
  const handleCardTypeChange = (option: any) => {
    setCardType(option);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setClassNames(`
    `);
  };
  return (
    <section>
      <div className='lg:grid grid-cols-12 flex flex-col gap-16 lg:h-[90.6vh] h-full'>
        <div className='lg:col-span-8 '>
          <form
            className='xl:w-11/12 mx-auto px-4 mt-8'
            onSubmit={handleSubmit}
          >
            <div className='grid lg:grid-cols-2 gap-8'>
              <Select
                label='Card Type'
                options={cardTypesArr}
                onChange={handleCardTypeChange}
                value={cardType}
              />
              {cardType.label !== "Empty" && (
                <>
                  <Input
                    name='title'
                    label='Card Title'
                    value={title}
                    type='text'
                    handleChange={handleTitleChange}
                    defaultValue=''
                  />
                  <Input
                    name='subtitle'
                    label='Card sub Title'
                    value={subTitle}
                    type='text'
                    handleChange={handleSubTitleChange}
                    defaultValue=''
                  />
                  <Input
                    name='desc'
                    label='Description'
                    value={desc}
                    type='text'
                    handleChange={handleDescChange}
                    defaultValue=''
                  />
                </>
              )}
              {cardType.value === "textwithimage" && (
                <>
                  <ImageInput
                    label='Image Upload'
                    name='image'
                    handleChange={handleImgUpload}
                    value={imgUpload}
                  />
                </>
              )}

              {/* <Select
                label='Label Color'
                options={colorOptions}
                onChange={handleLabelColorChange}
                value={labelColor}
              />

              <Select
                label='Label Size'
                options={FontSizeOption}
                onChange={handleFontSizeChange}
                value={fontSize}
              />

              <Select
                label='Toggle Size'
                options={SizeOptions}
                onChange={handleSizeChange}
                value={size}
              /> */}

              {/* <Select
                label='Toggle Color'
                options={colorOptions}
                onChange={handleToggleColorChange}
                value={toggleColor}
              /> */}
            </div>
            <div className='mt-8 flex justify-center'>
              <Button type='submit' className='px-24'>
                Generate Code
              </Button>
            </div>
          </form>
          <div
            className={`w-11/12 mx-auto mt-8 ${
              classNames.length > 0 ? "" : "hidden"
            }`}
          >
            <div className='bg-red-50 pl-4'>
              <CopyToClipboardButton text={classNames} />
            </div>
          </div>
        </div>
        <div className='bg-red-50 lg:col-span-4 md:w-full w-11/12 mx-auto py-12 flex items-center justify-center px-12'>
          {/* <div className='bg-white py-32 w-full mx-auto pl-6 pr-4'> */}
          {/*  */}
          <div className='overflow-hidden min-w-80 min-h-52 bg-white rounded shadow-md'>
            <div className='p-6'>
              {cardType.label !== "Empty" && (
                <>
                  <h2 className='text-xl text-slate-800'>{title}</h2>
                  <p className='text-slate-500 text-xs tracking-wider'>
                    {subTitle}
                  </p>
                  <p className='text-slate-500 mt-4 text-sm'>{desc}</p>
                </>
              )}
            </div>
          </div>
          {/*  */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default CardContent;
