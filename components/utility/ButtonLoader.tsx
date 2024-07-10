import React from "react";

const ButtonLoader = ({ extras }: { extras?: string }) => {
  return <span className={`btn-loader ${extras}`}></span>;
};

export default ButtonLoader;
