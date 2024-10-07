import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { SlArrowUp } from "react-icons/sl";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {showTopBtn && (
        <IoIosArrowUp
          className="text-white bg-primary border-2 rounded-md cursor-pointer
           text-5xl fixed bottom-10 right-6 z-50 p-1.5"
          onClick={goToTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
