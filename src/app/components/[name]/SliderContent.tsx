/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import React, { useEffect, useState } from "react";

type SliderProps = {
  images: string[];
  autoplay?: boolean;
  displayButton?: boolean;
};

const SliderComponent = ({
  images,
  autoplay = true,
  displayButton = true,
}: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => clearInterval(interval);
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [images]);

  return (
    <section className='w-full h-full relative'>
      <div className='w-full h-full flex overflow-hidden'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slider image ${index + 1}`}
            aria-hidden={index !== activeIndex}
            className='w-full h-full object-cover block shrink-0 grow-0 transition-all duration-1000 ease-in-out'
            style={{
              translate: `-${activeIndex * 100}% `,
            }}
          />
        ))}
      </div>

      {displayButton && (
        <>
          <button
            className='absolute top-0 bottom-0 left-0 px-6 group hover:bg-black/15 focus-visible:bg-black/15 transition-colors duration-150 ease-in-out focus:outline-none'
            aria-label='previous image'
            onClick={() =>
              setActiveIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
              )
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 -960 960 960'
              aria-hidden
              className='size-8 fill-white group-hover:fill-white/80'
            >
              <path d='M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z' />
            </svg>
          </button>
          <button
            className='absolute top-0 bottom-0 right-0 px-6 group hover:bg-black/15 focus-visible:bg-black/15 transition-colors duration-150 ease-in-out focus:outline-none'
            aria-label='next image'
            onClick={() =>
              setActiveIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
              )
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 -960 960 960'
              aria-hidden
              className='size-8 fill-white group-hover:fill-white/80'
            >
              <path d='m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z' />
            </svg>
          </button>
        </>
      )}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-white ${
          displayButton ? "flex gap-2" : "hidden"
        }`}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`image ${index + 1}`}
            className='block size-4 hover:scale-125 focus-visible:scale-125 transition-all duration-150 ease-in-out focus:outline-none'
          >
            {activeIndex === index ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 -960 960 960'
                aria-hidden
                className='fill-white/60 w-full h-full'
              >
                <path d='M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 280q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 -960 960 960'
                aria-hidden
                className='fill-white/60 w-full h-full'
              >
                <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
              </svg>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

type CarouselProps = {
  data: {
    image: string;
    header: string;
    description?: string;
  }[];
  autoplay?: boolean;
  displayButton?: boolean;
};

const CarouselComponent = ({
  data,
  autoplay = true,
  displayButton = true,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

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
              translate: `-${activeIndex * 100}% `,
              backgroundImage: `url(${singleData.image})`,
            }}
            className={`w-full h-full object-cover block shrink-0 grow-0 transition-all duration-1000 ease-in-out bg-cover bg-center bg-no-repeat relative`}
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

      {displayButton && (
        <>
          <button
            className='absolute top-0 bottom-0 left-0 px-6 group hover:bg-black/15 focus-visible:bg-black/15 transition-colors duration-150 ease-in-out focus:outline-none'
            aria-label='previous image'
            onClick={() =>
              setActiveIndex((prevIndex) =>
                prevIndex === 0 ? data.length - 1 : prevIndex - 1
              )
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 -960 960 960'
              aria-hidden
              className='size-8 fill-white group-hover:fill-white/80'
            >
              <path d='M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z' />
            </svg>
          </button>
          <button
            className='absolute top-0 bottom-0 right-0 px-6 group hover:bg-black/15 focus-visible:bg-black/15 transition-colors duration-150 ease-in-out focus:outline-none'
            aria-label='next image'
            onClick={() =>
              setActiveIndex((prevIndex) =>
                prevIndex === data.length - 1 ? 0 : prevIndex + 1
              )
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 -960 960 960'
              aria-hidden
              className='size-8 fill-white group-hover:fill-white/80'
            >
              <path d='m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z' />
            </svg>
          </button>
        </>
      )}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-white ${
          displayButton ? "flex gap-2" : "hidden"
        } `}
      >
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`image ${index + 1}`}
            className='block size-4 hover:scale-125 focus-visible:scale-125 transition-all duration-150 ease-in-out focus:outline-none'
          >
            {activeIndex === index ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 -960 960 960'
                aria-hidden
                className='fill-white/60 w-full h-full'
              >
                <path d='M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 280q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 -960 960 960'
                aria-hidden
                className='fill-white/60 w-full h-full'
              >
                <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
              </svg>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

const SliderContent = () => {
  const [code, setCode] = useState<any>("");
  const [componentCode, setComponentCode] = useState<any>("");

  const image1 = "https://i.ibb.co/FVrFLBm/1.jpg";
  const image2 = "https://i.ibb.co/09WJJS6/2.jpg";
  const image3 = "https://i.ibb.co/jZb1k8s/3.jpg";
  const image4 = "https://i.ibb.co/Q8vPqGv/4.jpg";
  const image5 = "https://i.ibb.co/6g0nTNW/5.jpg";
  const image6 = "https://i.ibb.co/vBz0nJt/6.png";

  const allImageUrls = [image1, image2, image3, image4, image5, image6];

  const carouselData = [
    {
      image: image1,
      header: "Fly like a bird",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec varius lorem. Etiam at varius nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      image: image3,
      header: "Rise like a sun",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec varius lorem. Etiam at varius nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      image: image4,
      header: "Grow like a tree",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec varius lorem. Etiam at varius nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
  ];

  const SliderTypeOptions = [
    {
      label: "Image Slider",
      value: "imgslider",
    },
    {
      label: "Carousel",
      value: "carousel",
    },
  ];

  const [sliderType, setSliderType] = useState(SliderTypeOptions[0]);

  const handleSliderTypeChange = (option: any) => {
    setSliderType(option);
  };

  const autoplayOptions = [
    {
      label: "On",
      value: true,
    },
    {
      label: "Off",
      value: false,
    },
  ];

  const [autoplay, setAutoplay] = useState(autoplayOptions[0]);

  const handleAutoplayChange = (option: any) => {
    setAutoplay(option);
  };

  const buttonOptions = [
    {
      label: "Show",
      value: true,
    },
    {
      label: "Hide",
      value: false,
    },
  ];

  const [displayButton, setDisplayButton] = useState(buttonOptions[0]);

  const handleButtonChange = (option: any) => {
    setDisplayButton(option);
  };

  const widthOptions = [
    {
      label: "Full Width",
      value: "full",
      class: "w-full",
    },
    {
      label: "Container Width",
      value: "container",
      class: "container mx-auto",
    },
  ];

  const [width, setWidth] = useState(widthOptions[1]);

  const handleWidthChange = (option: any) => {
    setWidth(option);
  };

  const aspectRatioOptions = [
    {
      label: "Ultra Wide",
      value: "ultrawide",
      class: "aspect-[10/3]",
    },
    {
      label: "Standard",
      value: "standard",
      class: "aspect-[10/4]",
    },
    {
      label: "Wide",
      value: "wide",
      class: "aspect-[10/5]",
    },
  ];

  const [aspectRatio, setAspectRatio] = useState(aspectRatioOptions[1]);

  const handleAspectRatioChange = (option: any) => {
    setAspectRatio(option);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (sliderType.value === "imgslider") {
      if (displayButton.value === true && autoplay.value === true) {
        setCode(`
import React, { useEffect, useState } from "react";

type SliderProps = {
  images: string[];
};
        
const SliderComponent = ({ images }: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    };
    document.body.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [images]);
        
  return (
    <section className='w-full h-full relative'>
      <div className='w-full h-full flex overflow-hidden'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt='slider image'
            aria-hidden={index !== activeIndex}
            className='w-full h-full object-cover block shrink-0 grow-0 transition-all duration-1000 ease-in-out'
            style={{
              translate: activeIndex * -100 + "%",
            }}
          />
        ))}
      </div>
      <button
        className='absolute top-0 bottom-0 left-0 px-6 group hover:bg-black/15 focus-visible:bg-black/15 transition-colors duration-150 ease-in-out focus:outline-none'
        aria-label='previous image'
        onClick={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          )
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 -960 960 960'
          aria-hidden
          className='size-8 fill-white group-hover:fill-white/80'
        >
          <path d='M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z' />
        </svg>
      </button>
      <button
        className='absolute top-0 bottom-0 right-0 px-6 group hover:bg-black/15 focus-visible:bg-black/15 transition-colors duration-150 ease-in-out focus:outline-none'
        aria-label='next image'
        onClick={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          )
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 -960 960 960'
          aria-hidden
          className='size-8 fill-white group-hover:fill-white/80'
        >
          <path d='m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z' />
        </svg>
      </button>
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-white flex gap-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className='block size-4 hover:scale-125 focus-visible:scale-125 transition-all duration-150 ease-in-out focus:outline-none'
          >
            {activeIndex === index ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 -960 960 960'
                aria-hidden
                className='fill-white/60 w-full h-full'
              >
                <path d='M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 280q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 -960 960 960'
                aria-hidden
                className='fill-white/60 w-full h-full'
              >
                <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
              </svg>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SliderComponent;
        
          `);
      } else if (displayButton.value === true && autoplay.value === false) {
        setCode(`
import React, { useEffect, useState } from "react";

type SliderProps = {
  images: string[];
};
        
const SliderComponent = ({ images }: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    };
    document.body.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [images]);
        
  return (
    <section className='w-full h-full relative'>
      <div className='w-full h-full flex overflow-hidden'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt='slider image'
            aria-hidden={index !== activeIndex}
            className='w-full h-full object-cover block shrink-0 grow-0 transition-all duration-1000 ease-in-out'
            style={{
              translate: activeIndex * -100 + "%",
            }}
          />
        ))}
      </div>

      <button
        className='absolute top-0 bottom-0 left-0 px-6 group hover:bg-black/15 focus-visible:bg-black/15 transition-colors duration-150 ease-in-out focus:outline-none'
        aria-label='previous image'
        onClick={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          )
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 -960 960 960'
          aria-hidden
          className='size-8 fill-white group-hover:fill-white/80'
        >
          <path d='M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z' />
        </svg>
      </button>
      <button
        className='absolute top-0 bottom-0 right-0 px-6 group hover:bg-black/15 focus-visible:bg-black/15 transition-colors duration-150 ease-in-out focus:outline-none'
        aria-label='next image'
        onClick={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          )
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 -960 960 960'
          aria-hidden
          className='size-8 fill-white group-hover:fill-white/80'
        >
          <path d='m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z' />
        </svg>
      </button>

      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-white flex gap-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className='block size-4 hover:scale-125 focus-visible:scale-125 transition-all duration-150 ease-in-out focus:outline-none'
          >
            {activeIndex === index ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 -960 960 960'
                aria-hidden
                className='fill-white/60 w-full h-full'
              >
                <path d='M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 280q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 -960 960 960'
                aria-hidden
                className='fill-white/60 w-full h-full'
              >
                <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
              </svg>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SliderComponent;
        
        `);
      } else if (displayButton.value === false && autoplay.value === true) {
        setCode(`
import React, { useEffect, useState } from "react";

type SliderProps = {
  images: string[];
};
        
const SliderComponent = ({ images }: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [images]);

  return (
    <section className='w-full h-full relative'>
      <div className='w-full h-full flex overflow-hidden'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt='slider image'
            aria-hidden={index !== activeIndex}
            className='w-full h-full object-cover block shrink-0 grow-0 transition-all duration-1000 ease-in-out'
            style={{
              translate: activeIndex * -100 + "%",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SliderComponent;
        
        `);
      } else if (displayButton.value === false && autoplay.value === false) {
        setCode(`
import React, { useEffect, useState } from "react";

type SliderProps = {
  images: string[];
};
        
const SliderComponent = ({ images }: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [images]);

  return (
    <section className='w-full h-full relative'>
      <div className='w-full h-full flex overflow-hidden'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt='slider image'
            aria-hidden={index !== activeIndex}
            className='w-full h-full object-cover block shrink-0 grow-0 transition-all duration-1000 ease-in-out'
            style={{
              translate: activeIndex * -100 + "%",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SliderComponent;
        `);
      }

      setComponentCode(`
const HowToUseSlider = () => {
  const image1 = "https://i.ibb.co/FVrFLBm/1.jpg";
  const image2 = "https://i.ibb.co/09WJJS6/2.jpg";
  const image3 = "https://i.ibb.co/jZb1k8s/3.jpg";
  const image4 = "https://i.ibb.co/Q8vPqGv/4.jpg";
  const image5 = "https://i.ibb.co/6g0nTNW/5.jpg";
  const image6 = "https://i.ibb.co/vBz0nJt/6.png";

  const allImageUrls = [image1, image2, image3, image4, image5, image6];

  return (
    <div className='${width.class} ${aspectRatio.class}'>
      <SliderComponent images={allImageUrls} />
    </div>
  );
};
      `);
    } else if (sliderType.value === "carousel") {
      if (displayButton.value === true && autoplay.value === true) {
        setCode(`
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

      <button
        className='absolute top-0 bottom-0 left-0 px-6 group hover:bg-black/15 focus-visible:bg-black/15 transition-colors duration-150 ease-in-out focus:outline-none'
        aria-label='previous image'
        onClick={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
          )
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 -960 960 960'
          aria-hidden
          className='size-8 fill-white group-hover:fill-white/80'
        >
          <path d='M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z' />
        </svg>
      </button>
      <button
        className='absolute top-0 bottom-0 right-0 px-6 group hover:bg-black/15 focus-visible:bg-black/15 transition-colors duration-150 ease-in-out focus:outline-none'
        aria-label='next image'
        onClick={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
          )
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 -960 960 960'
          aria-hidden
          className='size-8 fill-white group-hover:fill-white/80'
        >
          <path d='m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z' />
        </svg>
      </button>

      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-white flex gap-2'>
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className='block size-4 hover:scale-125 focus-visible:scale-125 transition-all duration-150 ease-in-out focus:outline-none'
          >
            {activeIndex === index ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 -960 960 960'
                aria-hidden
                className='fill-white/60 w-full h-full'
              >
                <path d='M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 280q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 -960 960 960'
                aria-hidden
                className='fill-white/60 w-full h-full'
              >
                <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
              </svg>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CarouselComponent;
        
            `);
      } else if (displayButton.value === true && autoplay.value === false) {
        setCode(`
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

      <button
        className='absolute top-0 bottom-0 left-0 px-6 group hover:bg-black/15 focus-visible:bg-black/15 transition-colors duration-150 ease-in-out focus:outline-none'
        aria-label='previous image'
        onClick={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
          )
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 -960 960 960'
          aria-hidden
          className='size-8 fill-white group-hover:fill-white/80'
        >
          <path d='M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z' />
        </svg>
      </button>
      <button
        className='absolute top-0 bottom-0 right-0 px-6 group hover:bg-black/15 focus-visible:bg-black/15 transition-colors duration-150 ease-in-out focus:outline-none'
        aria-label='next image'
        onClick={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
          )
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 -960 960 960'
          aria-hidden
          className='size-8 fill-white group-hover:fill-white/80'
        >
          <path d='m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z' />
        </svg>
      </button>

      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-white flex gap-2'>
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className='block size-4 hover:scale-125 focus-visible:scale-125 transition-all duration-150 ease-in-out focus:outline-none'
          >
            {activeIndex === index ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 -960 960 960'
                aria-hidden
                className='fill-white/60 w-full h-full'
              >
                <path d='M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 280q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 -960 960 960'
                aria-hidden
                className='fill-white/60 w-full h-full'
              >
                <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
              </svg>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CarouselComponent;
        
        `);
      } else if (displayButton.value === false && autoplay.value === true) {
        setCode(`
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
        
        `);
      } else if (displayButton.value === false && autoplay.value === false) {
        setCode(`
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
        
        `);
      }

      setComponentCode(`
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
    <div className='${width.class} ${aspectRatio.class}'>
      <CarouselComponent data={carouselData} />
    </div>
  );
};
      `);
    }
  };

  useEffect(() => {
    setCode("");
  }, [sliderType, autoplay, displayButton, width, aspectRatio]);

  return (
    <section>
      <div className='flex flex-col gap-16 lg:h-[calc(100vh-5.6rem)] h-full'>
        <div className=''>
          <form
            className='xl:w-11/12 mx-auto px-4 mt-8'
            onSubmit={handleSubmit}
          >
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
              <Select
                label='Slider Type'
                options={SliderTypeOptions}
                onChange={handleSliderTypeChange}
                value={sliderType}
              />
              <Select
                label='Autoplay'
                options={autoplayOptions}
                onChange={handleAutoplayChange}
                value={autoplay}
              />

              <Select
                label='Display Buttons'
                options={buttonOptions}
                onChange={handleButtonChange}
                value={displayButton}
              />
              <Select
                label='Width'
                options={widthOptions}
                onChange={handleWidthChange}
                value={width}
              />
              <Select
                label='Aspect Ratio'
                options={aspectRatioOptions}
                onChange={handleAspectRatioChange}
                value={aspectRatio}
              />

              {/* <Input
            name='toastMessage'
            label='Toast Messsage'
            value={message}
            type='text'
            handleChange={handleMessageChange}
            defaultValue=''
          />
          <Select
            label='Toast Placement'
            options={toastPlacementOptions}
            onChange={handleToastPlacementChange}
            value={toastPlacement}
          /> */}
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
        <div className='bg-red-50  h-full w-full mx-auto py-12 flex items-center justify-center '>
          {/* <div
            className={`bg-white py-32 w-full mx-auto px-6 flex items-center md:justify-center 2xl:justify-center`}
          > */}
          {/*  */}

          <div className={`${width.class} ${aspectRatio.class} `}>
            {sliderType.value === "imgslider" ? (
              <SliderComponent
                images={allImageUrls}
                autoplay={autoplay.value}
                displayButton={displayButton.value}
              />
            ) : (
              <CarouselComponent
                data={carouselData}
                autoplay={autoplay.value}
                displayButton={displayButton.value}
              />
            )}
          </div>

          {/*  */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default SliderContent;
