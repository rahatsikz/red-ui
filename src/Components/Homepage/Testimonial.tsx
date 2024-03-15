import QuoteSVG from "@/assets/svg/QuoteSVG";
import React from "react";

const Testimonial = () => {
  const testimonialData = [
    {
      name: "Ruman Islam",
      description:
        "Red UI made building my React app a breeze! With its intuitive interface and customizable components, I was able to create a stunning user interface in no time. ",
      role: "Frontend Developer",
    },
    {
      name: "Abu Talha",
      description:
        "Using Red UI for my project was a game-changer. Not only did it save me countless hours of coding, but its extensive component library also allowed me to achieve the exact look and feel I envisioned.",
      role: "Full Stack Developer",
    },
  ];

  return (
    <section className='container mx-auto my-12 px-4 2xl:px-0'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-center text-primary'>
          Our Reviews
        </h1>
        <p className='text-center mt-2 text-secondary max-w-lg mx-auto'>
          Here are some of the reviews from the fellow developers of the
          Development communtiy
        </p>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
        {testimonialData.map((data, index) => (
          <div
            key={index}
            className='overflow-hidden bg-white rounded-md shadow-lg text-slate-500 shadow-slate-200'
          >
            <div className='relative px-6 py-10'>
              <figure className='relative z-10'>
                <blockquote className='p-6 text-lg leading-relaxed'>
                  <p>{data.description}</p>
                </blockquote>
                <figcaption className='flex items-center gap-4 p-6 pt-2 text-sm text-primary'>
                  <div className='flex flex-col gap-1'>
                    <span className='font-bold uppercase'> {data.name} </span>
                    <cite className='not-italic'> {data.role} </cite>
                  </div>
                </figcaption>
              </figure>
              <div className='absolute z-0 left-4 top-2'>
                <QuoteSVG />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
