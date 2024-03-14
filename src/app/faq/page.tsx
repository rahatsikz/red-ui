import React from "react";

const FAQPage = () => {
  const FAQdata = [
    {
      header: "What is Red UI?",
      description:
        "Red UI is a versatile component library built on top of React and Tailwind CSS. It empowers developers to quickly create beautiful user interfaces by offering a wide range of customizable components. With Red UI, developers can effortlessly build interactive web applications with consistent design patterns and responsive layouts.",
    },
    {
      header: "Dependency of using Red UI?",
      description:
        "Red UI has no external dependencies apart from React and Tailwind CSS. It's designed to seamlessly integrate into any React project, allowing developers to leverage its components without worrying about compatibility issues or additional setup requirements.",
    },
    {
      header: "Achieving Desired Components",
      description:
        "Red UI provides a flexible and modular architecture that enables users to achieve their desired components through customizable options and configurations. Whether it's buttons, input fields, accordions, or complex layouts, developers can tailor each component to suit their specific needs and preferences.",
    },
    {
      header: "Compatibility with Any React Project",
      description:
        "Red UI is designed to be lightweight and highly compatible, making it suitable for use in any React project. Whether you're working on a small personal website or a large-scale enterprise application, Red UI offers the flexibility and scalability to meet your project requirements. With its simple integration process and extensive documentation, getting started with Red UI is quick and effortless.",
    },
  ];

  return (
    <section className='container mx-auto my-8 px-4 xl:px-0'>
      <p className='text-2xl text-center border-b-2 w-fit mx-auto px-8 pb-1 border-primary'>
        Frequently Asked Questions
      </p>
      <div className='xl:w-9/12 mx-auto divide-y'>
        {FAQdata.map((data, index) => (
          <details
            className='p-4 group w-full'
            open={index === 0 && true}
            key={index}
          >
            <summary className='flex items-center justify-between w-full font-medium tracking-wide list-none cursor-pointer focus-visible:outline-none py-4 px-4 rounded bg-white text-slate-700'>
              {data.header}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className=' w-4 h-4 transition-transform duration-300 shrink-0 group-open:rotate-45'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 4v16m8-8H4'
                />
              </svg>
            </summary>
            <p className='mt-2 px-4 text-slate-500'>{data.description}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
