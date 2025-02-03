import React, { useState, useEffect } from "react";
import "./backtotop.css";
import { BsArrowUpCircle } from "react-icons/bs";
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
   <BsArrowUpCircle size={40} />
    </button>
  );
};

export default BackToTopButton;
