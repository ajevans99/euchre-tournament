import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Modal;
