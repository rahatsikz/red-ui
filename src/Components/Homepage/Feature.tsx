import Responsive from "@/assets/svg/Responsive";
import WebBuilding from "@/assets/svg/WebBuilding";
import React from "react";

const Feature = () => {
  const featureData = [
    {
      title: "Customizable Components",
      description:
        "Build beautiful UIs with ease using our customizable components. Tailor each component to fit your design needs with our extensive library of Tailwind CSS classes. our components offer the flexibility and versatility you need to bring your vision to life",
      image: <WebBuilding />,
    },
    {
      title: " Responsive Design",
      description:
        "Ensure your application looks great on all devices with Red UI's responsive design features. Our components are designed to adapt seamlessly to different screen sizes, providing a consistent user experience across desktops, tablets, and mobile devices",
      image: <Responsive />,
    },
  ];
  return (
    <div className='container mx-auto my-12'>
      <div className='mb-8' data-aos='fade-up'>
        <h1 className='text-3xl font-bold text-center text-primary'>
          Our Features
        </h1>
        <p className='text-center mt-2 text-secondary max-w-lg mx-auto'>
          Explore a comprehensive suite of powerful component building system to
          elevate your development experience
        </p>
      </div>
      <div className='grid gap-8 px-4 xl:px-0'>
        {featureData.map((feature, index) => (
          <div
            key={index}
            data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"}
            data-aos-duration='2000'
            data-aos-delay='300'
            className={`xl:px-12 xl:py-6 px-4 py-8  rounded-xl ${
              index % 2 !== 0 ? "bg-gradient-to-l " : " bg-gradient-to-r"
            }  from-red-100 to-red-50 `}
          >
            <div
              className={`flex flex-col justify-center ${
                index % 2 !== 0 ? "xl:flex-row" : "xl:flex-row-reverse"
              } items-center gap-2 xl:gap-40`}
            >
              <div>{feature.image}</div>
              <div
                className={`grid gap-6 text-center ${
                  index % 2 !== 0 ? "xl:text-right" : "xl:text-left"
                } xl:w-1/2 `}
              >
                <h1 className='text-2xl font-bold text-black'>
                  {feature.title}
                </h1>
                <p className=''>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
