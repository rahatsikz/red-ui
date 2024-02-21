import Link from "next/link";
import React from "react";

const ComponentPage = () => {
  const componentsArr = [
    {
      name: "Button",
      path: "/components/button",
    },
    {
      name: "Navbar",
      path: "/components/navbar",
    },
    {
      name: "Input",
      path: "/components/input",
    },
    {
      name: "Textarea",
      path: "/components/textarea",
    },
    {
      name: "Card",
      path: "/components/card",
    },
    {
      name: "Select",
      path: "/components/select",
    },
  ];

  return (
    <div className='container mx-auto my-8'>
      <p className='text-2xl text-center border-b-2 w-fit mx-auto px-8 pb-1 border-primary'>
        Components List
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
        {componentsArr.map((component) => (
          <Link
            className='text-xl text-center bg-red-50 p-8 rounded-lg hover:shadow-md'
            href={component.path}
            key={component.name}
          >
            {component.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComponentPage;
