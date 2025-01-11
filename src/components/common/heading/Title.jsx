import React from "react";

const Title = ({ children, className = "", ...props }) => {
  return (
    <h3
      className={`text-[32px] sm:text-5xl font-medium text-primary ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export default Title;
