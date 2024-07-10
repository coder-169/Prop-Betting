import React from "react";

type InputProps = {
  id: string;
  value: string;
  hint: string;
  classes?: string;
  handler: (e: any) => void;
};

const Input = ({ id, value, handler, hint, classes }: InputProps) => {
  return (
    <input
      id={id}
      name={id}
      value={value}
      onChange={handler}
      className={`bg-transparent px-6 py-3 placeholder:text-gray-600 rounded-full outline-none ${classes}`}
      placeholder={hint}
    />
  );
};

export default Input;
