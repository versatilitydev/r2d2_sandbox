// Button.js
import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
};

const Button = ({
  type = "button",
  onClick,
  children,
  disabled,
  onMouseEnter,
  className = "",
  title,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`mb-4 text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-full ${className}`}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      title={title}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
