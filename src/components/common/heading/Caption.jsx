import React from "react";

const Caption = ({ children, className = "", ...props }) => {
  return (
    <p
      className={`text-sm sm:text-xl font-medium text-accent px-3 py-1 bg-[#749B3F1A] rounded-lg w-fit ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Caption;
