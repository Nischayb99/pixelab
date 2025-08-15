import React, { useState, useEffect } from "react";
import { MdShare } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiGoogle } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { AiOutlineDropbox } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

function ShareButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closePopup();
    };
    if (isPopupOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isPopupOpen]);

  return (
    <div className="relative">
      {/* Share Button */}
      <button
        onClick={togglePopup}
        className="text-xl md:text-2xl p-2 rounded-md hover:bg-blue-600 transition-all duration-200 text-white"
      >
        <MdShare />
      </button>
      {/* Popup Content */}
      {isPopupOpen && (
        <div className="absolute right-1/2 top-10 bg-[#efefef] rounded-none z-50 w-[13rem] sm:w-[17rem] border-l border-gray-300 animate-fadeIn shadow-2xl">
          {/* Quick Share Options */}
          <div className="m-3">
            <h3 className="text-[#e84343]">Quick share</h3>
            <div className="w-[80%] h-[1.5px] bg-[#e84343]"></div>
            <div className="py-0 overflow-x-auto max-w-[500px]">
              <div className="min-w-max flex gap-2 p-2">
                <span className="mr-2 bg-blue-700 rounded-full p-2 text-xl">
                  <FaFacebookF />
                </span>
                <span className="mr-2 bg-blue-700 rounded-full p-2 text-xl">
                  <FaXTwitter />
                </span>
                <span className="mr-2 bg-blue-700 rounded-full p-2 text-xl">
                  <TfiGoogle />
                </span>
                <span className="mr-2 bg-blue-700 rounded-full p-2 text-xl">
                  <FaWhatsapp />
                </span>
                <span className="mr-2 bg-blue-700 rounded-full p-2 text-xl">
                  <ImInstagram />
                </span>
                <span className="mr-2 bg-blue-700 rounded-full p-2 text-xl">
                  <FaTelegramPlane />
                </span>
                <span className="mr-2 bg-blue-700 rounded-full p-2 text-xl">
                  <AiOutlineDropbox />
                </span>
              </div>
            </div>
          </div>
          {/* Format Options */}
          <div className="m-3">
            <h3 className="text-[#e84343]">Format options</h3>
            <div className="w-[80%] h-[1.5px] bg-[#e84343]"></div>
            <p className="text-[#777]">
              format : <span className="text-[#000]">jpg(no transparency)</span>
            </p>
          </div>
          {/* Quality Options */}
          <div className="m-3">
            <h3 className="text-[#e84343]">Quality options</h3>
            <div className="w-[80%] h-[1.5px] bg-[#e84343]"></div>
            <p className="text-[#777]">
              dimensions : <span className="text-[#000]">default</span>
            </p>
          </div>
          {/* Export Options */}
          <div className="m-3">
            <h3 className="text-[#e84343]">Export image</h3>
            <div className="w-[80%] h-[1.5px] bg-[#e84343] mb-2"></div>
            <div className="flex gap-2">
              <button className="text-[#fff] bg-[#0eec97] py-2 px-4">
                SAVE TO GALLERY
              </button>
              <button className="text-[#fff] bg-[#0eec97] py-2 px-4">
                SHARE
              </button>
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

export default ShareButton;
