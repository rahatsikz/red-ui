"use client";
import Input from "@/Components/ui/Input";

import React, { useEffect, useState } from "react";
// import SelectComponent from "./select";
import AccordionComponent from "./accordion";
import SelectComponent from "./select";
import ButtonComponent from "./button";
import CardComponent from "./card";
import CheckboxComponent from "./checkbox";
import RadioComponent from "./radio";
import ToggleComponent from "./toggle";
import LoaderComponent from "./loader";
import ProgressBarComponent from "./progress";
import TooltipComponent from "./tooltip";
import InputComponent from "./input";
import TextareaComponent from "./textarea";
import ToastComponent from "./toast";
import SliderComponent from "./slider";
import CarouselComponent from "./carousel";

/* const HowToUseButton = () => {
  return (
    <ButtonComponent type='button' onClick={() => console.log("clicked")}>
      Submit Form
    </ButtonComponent>
  );
}; */

/* const HowToUseAccordion = () => {
  const header = "What do you need to know?";
  const description =
    "Introducing our versatile Accordion component, designed to elevate your user interface. Crafted for seamless integration into any project, our accordions offer unparalleled flexibility and style.";
  return (
    <div>
      <AccordionComponent
        header={header}
        description={description}
        isOpen={true}
      />
    </div>
  );
}; */

/* const HowToUseSelect = () => {
  const [value, setValue] = useState<any>("");

  const handleChange = (option: any) => {
    setValue(option);
  };

  const foodOptions = [
    {
      value: "pizza",
      label: "Pizza",
    },
    {
      value: "burger",
      label: "Burger",
    },
    {
      value: "pasta",
      label: "Pasta",
    },
    {
      value: "fries",
      label: "Fries",
    },
  ];

  const labelText = "Select Food";

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <SelectComponent
        onSelectChange={handleChange}
        value={value}
        options={foodOptions}
        labelText={labelText}
      />
    </div>
  );
}; */

const HowToUseCard = () => {
  const title = "This is Title";
  const subTitle = "Sub-title";
  const description =
    "Introducing our sleek and versatile card component, designed to elevate your user interface with minimal effort. Crafted for seamless integration into any project, our cards offer unparalleled flexibility and style.";
  const image =
    "https://i.ibb.co/Jkct5BL/430610643-822176203269811-5837933321810083409-n.jpg";

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

const HowToUseCheckbox = () => {
  const [isChecked, setIsChecked] = useState(true);
  const label = "Accept Company Terms and condition";
  return (
    <div>
      <CheckboxComponent
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        label={label}
      />
    </div>
  );
};

const HowToUseRadio = () => {
  const radioData = [
    {
      label: "Option One",
      value: "radio1",
    },
    {
      label: "Option Two",
      value: "radio2",
    },
  ];

  const name = "radioFoorti";

  const [selectedOption, setSelectedOption] = useState(radioData[0].value);

  return (
    <div className='flex gap-4 flex-row items-center'>
      {radioData.map((data, index) => (
        <RadioComponent
          key={index}
          label={data.label}
          name={name}
          value={data.value}
          onChange={() => setSelectedOption(data.value)}
          checked={selectedOption === data.value}
        />
      ))}
    </div>
  );
};

const HowToUseToggle = () => {
  const [isChecked, setIsChecked] = useState(true);
  const label = "Toggle me";
  return (
    <div>
      <ToggleComponent
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        label={label}
      />
    </div>
  );
};

const HowToUseLoader = () => {
  return (
    <div>
      <LoaderComponent />
    </div>
  );
};

const HowToUseProgressBar = () => {
  const label = "HTML";
  const percentage = 70;
  const label1 = "JavaScript";
  const percentage1 = 60;

  return (
    <div className='space-y-6'>
      <ProgressBarComponent label={label} percentage={percentage} />
      <ProgressBarComponent label={label1} percentage={percentage1} />
    </div>
  );
};

const HowToUseTooltip = () => {
  const tooltipText = "Hey... Thanks for hovering me";
  const hoverableText = "Hover me";
  return (
    <div>
      <TooltipComponent
        tooltipText={tooltipText}
        hoverableText={hoverableText}
      />
    </div>
  );
};

const HowToUseInput = () => {
  const label = "First Name";
  const placeholder = "Enter your name";

  const [value, setValue] = useState<any>("");

  const handleChange = (value: any) => {
    setValue(value);
  };
  const label2 = "Email";
  const placeholder2 = "Enter your email";

  const [value2, setValue2] = useState<any>("");

  const handleChange2 = (value: any) => {
    setValue2(value);
  };

  return (
    <div className='grid lg:grid-cols-2 gap-x-4'>
      <InputComponent
        inputType='text'
        label={label}
        placeholder={placeholder}
        value={value}
        onchange={handleChange}
      />
      <InputComponent
        inputType='email'
        label={label2}
        placeholder={placeholder2}
        value={value2}
        onchange={handleChange2}
      />
    </div>
  );
};

// useEffect(() => {
//   console.log(value);
// }, [value]);

const HowToUseTextarea = () => {
  const label = "Address";
  const placeholder = "Enter your address";

  const [value, setValue] = useState<any>("");

  const handleChange = (value: any) => {
    setValue(value);
  };

  return (
    <div>
      <TextareaComponent
        label={label}
        placeholder={placeholder}
        value={value}
        onchange={handleChange}
      />
    </div>
  );
};

const HowToUseToast = () => {
  const [toastQueue, setToastQueue] = useState<any>([]);

  const handleShowToast = (message: string, type = "success") => {
    setToastQueue((prevQueue: any) => [...prevQueue, { message, type }]);
  };
  const message = "Post has some error";

  const handleAddToast = () => {
    fetch("https://jsonplaceholder.typicode.com/nonexistent-endpoint", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
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
        handleShowToast(message, "warning");
      });
  };
  return (
    <>
      {toastQueue.length > 0 && (
        <ToastComponent
          message={toastQueue[0].message}
          type={toastQueue[0].type}
          onDismiss={() =>
            setToastQueue((prevQueue: any) => prevQueue.slice(1))
          }
        />
      )}

      <button
        onClick={handleAddToast}
        className='rounded-full px-[26px] py-[6px] bg-gray-900 text-white'
      >
        Click to Show Toast
      </button>
    </>
  );
};

// const HowToUseSlider = () => {
//   const image1 = "https://i.ibb.co/FVrFLBm/1.jpg";
//   const image2 = "https://i.ibb.co/09WJJS6/2.jpg";
//   const image3 = "https://i.ibb.co/jZb1k8s/3.jpg";
//   const image4 = "https://i.ibb.co/Q8vPqGv/4.jpg";
//   const image5 = "https://i.ibb.co/6g0nTNW/5.jpg";
//   const image6 = "https://i.ibb.co/vBz0nJt/6.png";

//   const allImageUrls = [image1, image2, image3, image4, image5, image6];

//   const carouselData = [
//     {
//       image: image1,
//       header: "Fly like a bird",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec varius lorem. Etiam at varius nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//     },
//     {
//       image: image3,
//       header: "Rise like a sun",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec varius lorem. Etiam at varius nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//     },
//     {
//       image: image4,
//       header: "Grow like a tree",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec varius lorem. Etiam at varius nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//     },
//   ];

//   return (
//     <div className='container mx-auto w-full aspect-[10/4]'>
//       <SliderComponent images={allImageUrls} />
//     </div>
//   );
// };

const HowToUseSlider = () => {
  const image1 = "https://i.ibb.co/FVrFLBm/1.jpg";
  const image2 = "https://i.ibb.co/09WJJS6/2.jpg";
  const image3 = "https://i.ibb.co/jZb1k8s/3.jpg";
  const image4 = "https://i.ibb.co/Q8vPqGv/4.jpg";
  const image5 = "https://i.ibb.co/6g0nTNW/5.jpg";
  const image6 = "https://i.ibb.co/vBz0nJt/6.png";

  const allImageUrls = [image1, image2, image3, image4, image5, image6];

  return (
    <div className='w-full aspect-[10/3]'>
      <SliderComponent images={allImageUrls} />
    </div>
  );
};

const HowToUseCarousel = () => {
  const image1 = "https://i.ibb.co/FVrFLBm/1.jpg";
  const image2 = "https://i.ibb.co/jZb1k8s/3.jpg";
  const image3 = "https://i.ibb.co/Q8vPqGv/4.jpg";

  const carouselData = [
    {
      image: image1,
      header: "Fly like a bird",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec varius lorem. Etiam at varius nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      image: image2,
      header: "Rise like a sun",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec varius lorem. Etiam at varius nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      image: image3,
      header: "Grow like a tree",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec varius lorem. Etiam at varius nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
  ];

  return (
    <div className='w-full aspect-[10/3]'>
      <CarouselComponent data={carouselData} />
    </div>
  );
};

const TestPage = () => {
  return (
    <div className='h-[calc(100vh-5.6rem)] bg-red-50 '>
      <HowToUseSlider />
      {/* <HowToUseCarousel /> */}

      {/* <div className=' bg-red-100 h-full mx-auto py-8 px-8 '> */}
      {/* test */}

      {/* <div className='bg-white w-full h-full mx-auto px-8 py-8'> */}
      {/*  */}
      {/* <HowToUseAccordion /> */}

      {/* <HowToUseSelect /> */}
      {/* <HowToUseButton /> */}
      {/* <HowToUseCard></HowToUseCard>
          <HowToUseCard></HowToUseCard>
          <HowToUseCard></HowToUseCard> */}
      {/* <HowToUseCheckbox /> */}
      {/* <HowToUseRadio /> */}
      {/* <HowToUseToggle /> */}
      {/* <HowToUseLoader /> */}
      {/* <HowToUseProgressBar /> */}
      {/* <HowToUseTooltip /> */}
      {/* <HowToUseInput /> */}
      {/* <HowToUseTextarea /> */}
      {/* <HowToUseToast /> */}

      {/*  */}
      {/* </div> */}

      {/*  */}
      {/* </div> */}
    </div>
  );
};

export default TestPage;
