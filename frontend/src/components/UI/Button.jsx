// frontend/src/components/UI/Button.jsx

import React from "react";

export default function Button({
 children,
 onClick,
 className,
 type = "button",
}) {
 return (
  <button
   type={type}
   className={`flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded ${className}`}
   onClick={onClick}
  >
   {children}
  </button>
 );
}
