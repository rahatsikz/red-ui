"use client";
import Button from "@/Components/ui/Button";
import CopyToClipboardButton from "@/Components/ui/CopyToClipboard";
import Input from "@/Components/ui/Input";
import Select from "@/Components/ui/Select";
import React, { useEffect, useRef, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalClosingType: any;
  modalPlacementType: any;
};

const ModalComponent = ({
  isOpen,
  onClose,
  children,
  modalClosingType,
  modalPlacementType,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        event.target instanceof Node &&
        !modalRef.current.contains(event.target)
      ) {
        modalClosingType.value !== "x" && onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose, modalClosingType]);

  return (
    <>
      {isOpen ? (
        <div
          className={`fixed top-0 left-0 z-10 flex ${modalPlacementType.class} justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm`}
        >
          <div
            ref={modalRef}
            className='relative flex flex-col gap-4 max-h-[70vh] w-11/12 max-w-xl overflow-hidden rounded-md bg-white py-6 px-8 text-slate-700 shadow-xl shadow-gray-500/20'
          >
            <div className='absolute top-2 right-2'>
              {modalClosingType.value !== "outside" && (
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
              )}
            </div>
            {/* Modal content */}
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

const ModalContent = () => {
  const [code, setCode] = useState<any>("");
  const [componentCode, setComponentCode] = useState<any>("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalClosingOptions = [
    {
      label: "Close on Clicking Outside",
      value: "outside",
    },
    {
      label: "Close on clicking X",
      value: "x",
    },
    {
      label: "Both",
      value: "both",
    },
  ];

  const [modalClosingType, setModalClosingType] = useState(
    modalClosingOptions[0]
  );

  const handleClosingChange = (value: any) => {
    setModalClosingType(value);
  };

  const modalPlacementOptions = [
    {
      label: "Top",
      value: "top",
      class: "items-start pt-[7rem]",
    },
    {
      label: "Center",
      value: "center",
      class: "items-center",
    },
  ];

  const [modalPlacementType, setModalPlacementType] = useState(
    modalPlacementOptions[1]
  );

  const handlePlacementChange = (value: any) => {
    setModalPlacementType(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (modalClosingType.value === "outside") {
      setCode(`
import React, { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
      
const ModalComponent = ({ isOpen, onClose, children }: ModalProps) => {
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
        <div className='fixed top-0 left-0 z-10 flex ${modalPlacementType.class} justify-center w-screen h-screen bg-slate-300/20  backdrop-blur-sm'>
          <div
            ref={modalRef}
            className='relative flex flex-col gap-4 max-h-[70vh] w-11/12 max-w-xl overflow-hidden rounded-md bg-white py-6 px-8 text-slate-700 shadow-xl shadow-gray-500/20'
          >
            {/* Modal content */}
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalComponent;
      `);
    } else if (modalClosingType.value === "x") {
      setCode(`
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
      
const ModalComponent = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <>
      {isOpen ? (
        <div className='fixed top-0 left-0 z-10 flex ${modalPlacementType.class} justify-center w-screen h-screen bg-slate-300/20  backdrop-blur-sm'>
          <div className='relative flex flex-col gap-4 max-h-[70vh] w-11/12 max-w-xl overflow-hidden rounded-md bg-white py-6 px-8 text-slate-700 shadow-xl shadow-gray-500/20'>
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
            {/* Modal content */}
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalComponent;
      `);
    } else {
      setCode(`
import React, { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
      
const ModalComponent = ({ isOpen, onClose, children }: ModalProps) => {
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
        <div className='fixed top-0 left-0 z-10 flex ${modalPlacementType.class} justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm'>
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
            {/* Modal content */}
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalComponent;
      
      `);
    }

    setComponentCode(`
const HowToUseModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        className='rounded-full px-5 py-1 bg-slate-700 text-white'
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {/* Give any type of modal content */}
        <h2 className='text-xl font-semibold'>
          This is the Header of the modal
        </h2>
        <p>
          The air is filled with the rich scent of freshly brewed coffee and the
          soft murmur of conversations. Patrons sit nestled in cozy corners,
          lost in the pages of books or lost in thought. It is a haven amidst
          the chaos, a sanctuary for those seeking solace in a fast-paced world
        </p>
      </ModalComponent>
    </div>
  );
};
    `);
  };

  useEffect(() => {
    setCode("");
  }, [modalClosingType, modalPlacementType]);

  return (
    <section>
      <div className='xl:grid grid-cols-12 flex flex-col gap-16 lg:h-[calc(100vh-5.6rem)] h-full'>
        <div className='xl:col-span-8 '>
          <form
            className='xl:w-11/12 mx-auto px-4 mt-8'
            onSubmit={handleSubmit}
          >
            <div className='grid lg:grid-cols-2 gap-8'>
              <Select
                label='Modal Closing Type'
                options={modalClosingOptions}
                onChange={handleClosingChange}
                value={modalClosingType}
              />
              <Select
                label='Modal Placement'
                options={modalPlacementOptions}
                onChange={handlePlacementChange}
                value={modalPlacementType}
              />
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
        <div className='bg-red-50 xl:col-span-4 md:w-full w-11/12 mx-auto py-12 flex items-center justify-center px-12'>
          <div
            className={`bg-white py-32 w-full mx-auto px-6 flex items-center justify-center`}
          >
            {/*  */}

            <div>
              <button
                className='rounded-full px-5 py-1 bg-slate-700 text-white'
                onClick={() => setIsModalOpen(true)}
              >
                Open Modal
              </button>
              <ModalComponent
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                modalClosingType={modalClosingType}
                modalPlacementType={modalPlacementType}
              >
                <h2 className='text-xl font-semibold'>
                  This is the Header of the modal
                </h2>
                <p>
                  The air is filled with the rich scent of freshly brewed coffee
                  and the soft murmur of conversations. Patrons sit nestled in
                  cozy corners, lost in the pages of books or lost in thought.
                  It is a haven amidst the chaos, a sanctuary for those seeking
                  solace in a fast-paced world
                </p>
              </ModalComponent>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalContent;
