import React from "react";
import ButtonContent from "./ButtonContent";
import InputContent from "./InputContent";
import TextareaContent from "./TextareaContent";
import SelectContent from "./SelectContent";
import RadioContent from "./RadioContent";
import CheckboxContent from "./CheckboxContent";
import ToggleContent from "./ToggleContent";
import CardContent from "./CardContent";
import AccordionContent from "./AccordionContent";
import NotFoundPage from "@/app/not-found";
import ProgressContent from "./ProgressContent";
import LoaderContent from "./LoaderContent";
import TooltipContent from "./TooltipContent";
import ToastContent from "./ToastContent";
import SliderContent from "./SliderContent";
import ModalContent from "./ModalContent";

const ComponentPage = ({ params }: { params: { name: string } }) => {
  let component;

  switch (params.name) {
    case "button":
      component = <ButtonContent />;
      break;
    case "input":
      component = <InputContent />;
      break;
    case "textarea":
      component = <TextareaContent />;
      break;
    case "select":
      component = <SelectContent />;
      break;
    case "radio":
      component = <RadioContent />;
      break;
    case "checkbox":
      component = <CheckboxContent />;
      break;
    case "toggle":
      component = <ToggleContent />;
      break;
    case "card":
      component = <CardContent />;
      break;
    case "accordion":
      component = <AccordionContent />;
      break;
    case "progressbar":
      component = <ProgressContent />;
      break;
    case "loader":
      component = <LoaderContent />;
      break;
    case "tooltip":
      component = <TooltipContent />;
      break;
    case "toast":
      component = <ToastContent />;
      break;
    case "slider":
      component = <SliderContent />;
      break;
    case "modal":
      component = <ModalContent />;
      break;
    default:
      component = <NotFoundPage />;
      break;
  }

  return <>{component}</>;
};

export default ComponentPage;
