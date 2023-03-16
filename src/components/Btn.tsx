import React from "react";

interface BtnProps {
  title: string;
  className?: string;
}

const Btn: React.FC<BtnProps> = ({title, className}) => {
  return (
    <button
      className={`${className} p-2 rounded shadow-lg border-2 border-solid border-orange hover:border-sky-500 ease-in-out`}
    >
      {title}
    </button>
  );
};

export default Btn;
