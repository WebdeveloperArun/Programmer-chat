// frontend/src/components/UI/Input.jsx

import React from "react";

export default function Input({
 placeholder,
 value,
 onChange,
 className,
 ...props
}) {
 return (
  <input
   type="text"
   placeholder={placeholder}
   value={value}
   onChange={onChange}
   className={`bg-gray-200 text-gray-900 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 ${className}`}
   {...props}
  />
 );
}
