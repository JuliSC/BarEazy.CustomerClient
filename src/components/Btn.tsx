import React from "react";

interface BtnProps {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const enabledClasses =
  "bg-orange border-orange hover:border-sky-500 text-white";
const disabledClasses = "bg-gray-500 text-gray-200";

const Btn: React.FC<BtnProps> = ({
  title,
  className,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded shadow-lg ease-in-out border-2 border-solid  ${
        disabled ? disabledClasses : enabledClasses
      } ${className}`}
    >
      {title}
    </button>
  );
};

export default Btn;
