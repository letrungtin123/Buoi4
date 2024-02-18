import React from "react";

interface IFormInputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string | number;
  handleChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
  className?:string;
}
const FormInput = ({
  type = "text",
  placeholder,
  name,
  value,
  handleChange,
  className,
}: IFormInputProps) => {
  return (
    <input
      type={type}
      className= {` border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400 ${className !== undefined ? className :''}`}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => handleChange && handleChange(e)}
    />
  );
};

export default FormInput;
