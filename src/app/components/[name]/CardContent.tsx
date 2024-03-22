/* eslint-disable @next/next/no-img-element */
"use client";

import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import ImageInput from "@/Components/ui/ImageInput";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import { colorOptions } from "@/constant/ColorData";
import { WidthOptions } from "@/constant/Width";
import React, { useEffect, useState } from "react";

const CardContent = () => {
  const [code, setCode] = useState<any>("");
  const [componentCode, setComponentCode] = useState<any>("");

  const [imgUpload, setImgUpload] = useState<any>(
    "https://i.ibb.co/Jkct5BL/430610643-822176203269811-5837933321810083409-n.jpg"
  );

  const imgbbApi = process.env.NEXT_PUBLIC_IMGBB_Key;
  const handleImgUpload = (value: any) => {
    // setImgUpload(value);
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
          setImgUpload(data.data.url);
        }
      });
  };

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

  const imageDirectionArr = [
    {
      label: "Left",
      value: "left",
      class: "grid-cols-2",
    },
    {
      label: "Top",
      value: "top",
      class: "",
    },
  ];

  const [imageDirectionValue, setImageDirectionValue] = useState(
    imageDirectionArr[1]
  );

  const handleImageDirectionChange = (option: any) => {
    setImageDirectionValue(option);
  };

  const borderRadiusArr = [
    {
      label: "None",
      value: "0",
      class: "rounded-none",
    },
    {
      label: "Small",
      value: "4px",
      class: "rounded",
    },
    {
      label: "Medium",
      value: "6px",
      class: "rounded-md",
    },
    {
      label: "Large",
      value: "12px",
      class: "rounded-xl",
    },
  ];

  const [borderRadiusValue, setBorderRadiusValue] = useState(
    borderRadiusArr[1]
  );

  const handleBorderRadiusChange = (option: any) => {
    setBorderRadiusValue(option);
  };

  const maxWidthOptions = [
    {
      label: "Small",
      value: "60%",
      class: "w-[60%]",
    },
    {
      label: "Medium",
      value: "70%",
      class: "w-[70%]",
    },
    {
      label: "Large",
      value: "80%",
      class: "w-[80%]",
    },
    {
      label: "Full",
      value: "100%",
      class: "w-full",
    },
  ];

  const [maxWidthValue, setMaxWidthValue] = useState(maxWidthOptions[0]);

  const handleMaxWidthChange = (option: any) => {
    setMaxWidthValue(option);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (cardType.value === "textwithimage") {
      setCode(`
import React from "react";

type CardProps = {
  title: string;
  subTitle?: string;
  description: string;
  image: string;
};
const CardComponent = ({ title, subTitle, description, image }: CardProps) => {
  return (
    <div className='overflow-hidden min-w-80 h-fit bg-white shadow-md ${borderRadiusValue.class} ${maxWidthValue.class}'>
      <div className='p-6'>
        <div className='grid gap-6 ${imageDirectionValue.class}'>
          <img
            src={image}
            alt='card image'
            className='aspect-video w-full h-full object-cover ${borderRadiusValue.class}'
          />
          <div className='w-full'>
            <h2 className='text-xl text-slate-800 font-semibold'>{title}</h2>
            <p className='text-slate-500 text-xs tracking-wider mt-1'>
              {subTitle}
            </p>
            <p className='text-slate-500 mt-4 text-sm line-clamp-5'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
      
      `);

      setComponentCode(`
const HowToUseCard = () => {
  const title = "${title}";
  const subTitle = "${subTitle}";
  const description = "${desc}";
  const image = "${imgUpload}" ;

  return (
    <div>
      <CardComponent
        title={title}
        subTitle={subTitle}
        description={description}
        image={image}
      />
    </div>
  );
};
            
      `);
    } else if (cardType.value === "empty") {
      setCode(`
import React, { ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
};
const CardComponent = ({ children }: CardProps) => {
  return (
    <div className='overflow-hidden min-w-80 min-h-52 bg-white shadow-md ${borderRadiusValue.class} ${maxWidthValue.class}'>
      <div className='p-6'>{children}</div>
    </div>
  );
};

export default CardComponent;
      `);
      setComponentCode(`
const HowToUseCard = () => {
  return (
    <div>
      <CardComponent>{/* enter your content here */}</CardComponent>
    </div>
  );
};
`);
    } else if (cardType.value === "textonly") {
      setCode(`
import React from "react";

type CardProps = {
  title: string;
  subTitle?: string;
  description: string;
};
const CardComponent = ({ title, subTitle, description }: CardProps) => {
  return (
    <div className='overflow-hidden min-w-80 h-fit bg-white shadow-md ${borderRadiusValue.class} ${maxWidthValue.class}'>
      <div className='p-6'>
        <div className='grid gap-6'>
          <div className='w-full'>
            <h2 className='text-xl text-slate-800 font-semibold'>{title}</h2>
            <p className='text-slate-500 text-xs tracking-wider mt-1'>
              {subTitle}
            </p>
            <p className='text-slate-500 mt-4 text-sm line-clamp-5'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
      
`);
      setComponentCode(`
const HowToUseCard = () => {
  const title = "${title}";
  const subTitle = "${subTitle}";
  const description = "${desc}";

  return (
    <div>
      <CardComponent
        title={title}
        subTitle={subTitle}
        description={description}
      />
    </div>
  );
};
      `);
    }
  };

  useEffect(() => {
    setCode("");
  }, [
    cardType,
    borderRadiusValue,
    maxWidthValue,
    title,
    subTitle,
    desc,
    imgUpload,
    imageDirectionValue,
  ]);

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
                label='Card Type'
                options={cardTypesArr}
                onChange={handleCardTypeChange}
                value={cardType}
              />
              <Select
                label='Card and Image Radius'
                options={borderRadiusArr}
                onChange={handleBorderRadiusChange}
                value={borderRadiusValue}
              />
              <Select
                label='Max Width'
                options={maxWidthOptions}
                onChange={handleMaxWidthChange}
                value={maxWidthValue}
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
                  <Select
                    label='Image Placement'
                    options={imageDirectionArr}
                    onChange={handleImageDirectionChange}
                    value={imageDirectionValue}
                  />
                </>
              )}
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
          {/*  */}
          <div
            className={`overflow-hidden min-w-80 ${
              cardType.value === "empty" ? "min-h-52" : "h-fit"
            } bg-white shadow-md ${borderRadiusValue.class}`}
            style={{ width: maxWidthValue.value }}
          >
            <div className='p-6'>
              {cardType.label !== "Empty" ? (
                <div
                  className={`grid gap-6 ${
                    cardType.value === "textwithimage" &&
                    imageDirectionValue.class
                  } `}
                >
                  {cardType.value === "textwithimage" && (
                    <img
                      src={imgUpload}
                      alt='card image'
                      className={`aspect-video w-full h-full object-cover ${borderRadiusValue.class} `}
                    />
                  )}
                  {cardType.label !== "Empty" && (
                    <div className='w-full'>
                      <h2 className='text-xl text-slate-800 font-semibold'>
                        {title}
                      </h2>
                      <p className='text-slate-500 text-xs tracking-wider mt-1'>
                        {subTitle}
                      </p>
                      <p className='text-slate-500 mt-4 text-sm line-clamp-5'>
                        {desc}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default CardContent;
