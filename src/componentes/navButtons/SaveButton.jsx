import React, { useState, useEffect } from "react";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function SaveButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected: ${option}`);
    closePopup();
  };

  const options = [
    "save as project",
    "save as image",
  ];

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closePopup();
    };
    if (isPopupOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isPopupOpen]);

  return (
    <div className="relative">
      {/* Three Dots Button */}
      <button
        onClick={togglePopup}
        className="text-xl md:text-2xl p-2 rounded-md hover:bg-blue-600 transition-all duration-200 text-white"
      >
        <IoSaveSharp />
      </button>
      {/* Popup Content */}
      {isPopupOpen && (
        <div className="absolute left-3 sm:right-0 top-11 bg-[#efefef] rounded-none z-50 w-[9rem] sm:w-[10rem] border-l border-gray-300 animate-fadeIn shadow-2xl">
          {/* Options List */}
          <div className="py-0 overflow-y-auto max-h-[300px]">
            <div className="min-h-max">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-300 transition-colors duration-150 text-gray-800 border-b border-gray-300 last:border-b-0"
                >
                  <span className="text-base font-normal">{option}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Background overlay for mobile */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={closePopup}
        ></div>
      )}
    </div>
  );
}

export default SaveButton;
