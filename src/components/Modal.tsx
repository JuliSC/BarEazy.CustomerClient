import React, {useState} from "react";
import Btn from "./Btn";

interface ModalProps {
  activator: React.ReactNode;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <span onClick={handleClick}>{props.activator}</span>
      {isOpen && (
        <div
          onClick={handleClick}
          className="flex items-center justify-center h-screen w-screen absolute left-0 top-0 bg-black bg-opacity-50"
        >
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Modal;
