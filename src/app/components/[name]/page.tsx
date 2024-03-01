import React from "react";
import ButtonContent from "./ButtonContent";
import InputContent from "./InputContent";
import TextareaContent from "./TextareaContent";
import SelectContent from "./SelectContent";
import RadioContent from "./RadioContent";
import CheckboxContent from "./CheckboxContent";
import ToggleContent from "./ToggleContent";

const AllComponentPage = ({ params }: { params: { name: string } }) => {
  return (
    <>
      {params.name === "button" && <ButtonContent />}
      {params.name === "input" && <InputContent />}
      {params.name === "textarea" && <TextareaContent />}
      {params.name === "select" && <SelectContent />}
      {params.name === "radio" && <RadioContent />}
      {params.name === "checkbox" && <CheckboxContent />}
      {params.name === "toggle" && <ToggleContent />}
    </>
  );
};

export default AllComponentPage;
