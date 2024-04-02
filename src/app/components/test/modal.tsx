import React, { useEffect, useRef, useState } from "react";

const ModalComponent = ({ isOpen, onClose, children }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        event.target instanceof Node &&
        !modalRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen ? (
        <div className='fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm'>
          <div
            ref={modalRef}
            className='relative flex flex-col gap-4 max-h-[70vh] w-11/12 max-w-xl overflow-hidden rounded-md bg-white py-6 px-8 text-slate-700 shadow-xl shadow-gray-500/20'
          >
            <div className='absolute top-2 right-2'>
              <button
                onClick={onClose}
                className=' bg-slate-700 rounded-full p-2'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='16'
                  viewBox='0 -960 960 960'
                  width='16'
                  className='fill-white'
                >
                  <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
                </svg>
              </button>
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalComponent;
