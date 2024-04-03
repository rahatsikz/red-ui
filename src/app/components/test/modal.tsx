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
        <div className='fixed top-0 left-0 z-10 flex items-start pt-[7rem] justify-center w-screen h-screen bg-slate-300/20  backdrop-blur-sm'>
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
