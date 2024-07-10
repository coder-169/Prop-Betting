import React from "react";

type InputProps = {
  id: string;
  value: string;
  hint: string;
  type: string;
  classes?: string;
  handler: (e: any) => void;
};

const Input = ({ id, type, value, handler, hint, classes }: InputProps) => {
  return (
    <input
      id={id}
      name={id}
      value={value}
      type={type}
      onChange={handler}
      className={`bg-transparent px-6 py-3 placeholder:text-gray-600 rounded-full outline-none ${classes}`}
      autoComplete="off"
      placeholder={hint}
    />
  );
};

export default Input;
