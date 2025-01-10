import React from "react";

const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles = "";
  const variants = {
    primary: "",
    secondary: "",
    danger: "",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
