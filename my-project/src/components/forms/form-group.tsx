import FormLabel from "./form-label";
import React from "react";

interface IFormGroupProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const FormGroup = ({ title, id, children }: IFormGroupProps) => {
  return (
    <div className="mb-6 mx-auto w-full">
      <FormLabel id={id} title={title} />
      {children}
    </div>
  );
};

export default FormGroup;
