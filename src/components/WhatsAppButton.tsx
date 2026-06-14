"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917401608989"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 p-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.5)] transition-all hover:scale-110 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
      title="Contact on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
