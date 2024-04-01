import React, { useEffect, useState } from "react";
type CarouselProps = {
  data: {
    image: string;
    header: string;
    description?: string;
  }[];
};

const CarouselComponent = ({ data }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [data]);

  return (
    <section className='w-full h-full relative'>
      <div className='w-full h-full flex overflow-hidden'>
        {data.map((singleData, index) => (
          <div
            key={index}
            style={{
              translate: activeIndex * -100 + "%",
              backgroundImage: "url(" + singleData.image + ")",
            }}
            className='w-full h-full object-cover block shrink-0 grow-0 transition-all duration-1000 ease-in-out bg-cover bg-center bg-no-repeat relative'
          >
            <div className='w-full h-full bg-black/50 flex items-center justify-center'>
              <div className='text-white px-16 max-w-2xl text-center space-y-1 md:space-y-4'>
                <h1 className='md:text-5xl text-3xl font-bold'>
                  {singleData.header}
                </h1>
                <p className='text-sm line-clamp-2 md:line-clamp-none'>
                  {singleData.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarouselComponent;
