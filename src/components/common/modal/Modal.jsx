import { Questrial, Rubik } from "next/font/google";
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const rubik = Rubik({
  subsets: ["latin"],
});

const Modal = ({ onClose, title, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[350px] sm:w-[448px] p-6 lg:p-8 relative"
        onClick={handleModalClick}
      >
        <button
          className="absolute top-3 right-3 text-primary"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>

        <h2 className="text-3xl font-rubik font-semibold text-primary mb-5 text-center">
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
};

export default Modal;
