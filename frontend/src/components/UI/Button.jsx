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
   className={`flex items-center bg-gray-700 hover:bg-gray-600 text-gray-100 px-3 py-2 rounded ${className}`}
   onClick={onClick}
  >
   {children}
  </button>
 );
}
