import React from 'react';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed top-50 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Alert</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default CustomAlert;
