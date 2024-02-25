import Footer from "@/Components/ui/Footer";
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
      path: "",
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
      path: "",
    },
    {
      name: "Select",
      path: "/components/select",
    },
  ];

  return (
    <div className='flex flex-col justify-between h-[90.6vh]'>
      <div className='container mx-auto my-8'>
        <p className='text-2xl text-center border-b-2 w-fit mx-auto px-8 pb-1 border-primary'>
          Components List
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-4 lg:px-0'>
          {componentsArr.map((component) => (
            <Link
              className='text-xl text-center bg-red-50 p-8 rounded-lg hover:shadow-md'
              href={component.path}
              key={component.name}
            >
              {component.name}
              {!component.path && (
                <p className='text-red-500 text-sm'>Under Development</p>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ComponentPage;
