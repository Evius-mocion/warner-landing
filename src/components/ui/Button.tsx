import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  style = {},
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`mt-4 px-8 py-3 text-base md:px-12 md:py-5 md:text-xl text-white font-semibold rounded-full transition-all duration-300 hover:opacity-90 hover:cursor-pointer hover:scale-110 hover:shadow-lg transform w-full ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};
