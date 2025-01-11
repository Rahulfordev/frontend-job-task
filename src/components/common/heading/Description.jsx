import React from "react";

const Description = ({ children, className = "", ...props }) => {
  return (
    <p
      className={`text-xs sm:text-sm font-normal text-secondary font-questrial max-w-[448px] ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Description;
