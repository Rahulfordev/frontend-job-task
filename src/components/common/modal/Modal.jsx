"use client";
import React from "react"; 

const Modal = ({ children, isOpen = true }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md mx-auto p-6 rounded-lg shadow-lg relative">
        {children}
      </div>
    </div>
  );
};

export default Modal;
