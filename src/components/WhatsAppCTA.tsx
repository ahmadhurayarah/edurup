// components/WhatsAppCTA.tsx

"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = FaWhatsapp as unknown as React.ComponentType<{ className?: string }>;

const WhatsAppCTA = () => {
  const phoneNumber = "919964150039"; 
  const message = "Hi, I'm interested in learning more about your courses!"; 

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
        aria-label="Message us on WhatsApp"
      >
        <span className="text-sm font-medium whitespace-nowrap">
          Message us on
        </span>
        <WhatsAppIcon className="text-xl flex-shrink-0" />
        <span className="text-sm font-medium whitespace-nowrap">
          WhatsApp
        </span>
      </button>
    </div>
  );
};

export default WhatsAppCTA;