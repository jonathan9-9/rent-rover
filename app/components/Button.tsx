"use client";

import { useState } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  // const [hovered, setHovered] = useState(false);
  // const onHover = (hover: boolean) => {
  //   if (hover) {
  //     setHovered(hover);
  //   }
  // };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
  relative
  disabled:opacity-70
  disabled:cursor-not-allowed
  rounded-lg
  w-full
  transition
  hover:bg-black hover:text-white bg-white text-black
  ${outline ? "bg-white" : "bg-black"}
  ${outline ? "border-black" : "bg-white"}
  ${outline ? "text-black" : "text-white"}
  ${small ? "py-1" : "py-3"}
  ${small ? "font-light" : "font-semibold"}
  ${small ? "border-[1px]" : "border-2"}

  `}
      // onMouseEnter={() => {
      //   onHover(true);
      // }}
      // onMouseLeave={() => {
      //   onHover(false);
      // }}
    >
      {Icon && (
        <Icon
          size={24}
          className="
        absolute
        left-4
        top-3
        "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
