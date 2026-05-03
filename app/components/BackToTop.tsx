"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="cursor-pointer fixed bottom-12 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-white text-[#C7AD5D] transition-all duration-300 hover:bg-[#C7AD5D] hover:text-white active:bg-[#A98F4E] focus:outline-none focus:ring-2 focus:ring-[#C7AD5D]"
    >
      <FaArrowUp className="w-5 h-5 transition-colors duration-300 animate-bounce" />
    </button>
  );
}

export default BackToTop;
