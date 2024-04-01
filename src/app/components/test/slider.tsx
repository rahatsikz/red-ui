/* eslint-disable @next/next/no-img-element */

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
