import NotFoundSVG from "@/assets/svg/NotFoundSVG";
import React from "react";

const NotFoundPage = () => {
  return (
    <section className='container mx-auto flex flex-col gap-4 items-center justify-center h-[calc(100vh-20.5rem)] '>
      <NotFoundSVG />
      <h3 className='text-3xl font-semibold text-center text-primary tracking-wider'>
        Are You Lost?
      </h3>
    </section>
  );
};

export default NotFoundPage;
