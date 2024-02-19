import React from "react";

interface IFormLabelProps {
  title: string;
  id: string;
}
const FormLabel = ({title,id}:IFormLabelProps) => {
  return (
    <label htmlFor={id} >
      {title}
    </label>
  );
};

export default FormLabel;
