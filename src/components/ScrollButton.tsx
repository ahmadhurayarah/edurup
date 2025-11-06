"use state";

import { useState, useEffect } from "react";

export function ScrollButton() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollVisibility = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);

  return (
    <>
      {showScrollButton && (
        <button
          className="fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-full shadow-md focus:outline-none"
          onClick={handleScroll}
        >
          Scroll Up
        </button>
      )}
    </>
  );
}
