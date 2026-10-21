import React from 'react'
import { motion } from "motion/react";
const WhatsappButton = () => {

    const phoneNumber = "2347012682225";

  const message =
    "Hello ARS STRUCTURES LTD, I visited your website and would like to make an enquiry about your construction services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ARS Structures on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg md:bottom-8 md:right-8"
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M16 .8A15.2 15.2 0 0 0 2.9 23.7L.8 31.2l7.7-2A15.2 15.2 0 1 0 16 .8Zm0 27.6a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-4.6 1.2 1.2-4.5-.3-.5a12.4 12.4 0 1 1 10.5 5.8Zm6.8-9.3c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7l-1.2-2.9c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.2 2.5 3.8 6 5.3.8.4 1.4.6 1.9.7.8.3 1.6.2 2.2.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z" />
      </svg>

      {/* Hover Tooltip */}
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-md bg-[#171717] px-4 py-2 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 md:block">
        Chat with us on WhatsApp
      </span>
    </motion.a>
  );
  
}

export default WhatsappButton