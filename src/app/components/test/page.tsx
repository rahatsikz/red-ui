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

const TestPage = () => {
  return (
    <div className='h-[calc(100vh-5.6rem)] flex items-center justify-center bg-red-50 '>
      <div className='w-7/12 bg-red-100 h-full mx-auto py-8 px-8 '>
        {/* test */}

        <div className='bg-white w-full h-fit  py-10 mx-auto px-8 '>
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
          <HowToUseProgressBar />
          {/*  */}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TestPage;
