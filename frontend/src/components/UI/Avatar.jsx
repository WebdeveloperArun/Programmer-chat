// frontend/src/components/UI/Avatar.jsx

import React from "react";

export default function Avatar({ src, alt, fallback }) {
 return (
  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
   {src ? (
    <img src={src} alt={alt} className="w-full h-full object-cover" />
   ) : (
    <span className="text-white text-sm font-semibold">{fallback}</span>
   )}
  </div>
 );
}
