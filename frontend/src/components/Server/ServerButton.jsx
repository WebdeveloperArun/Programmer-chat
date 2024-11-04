// frontend/src/components/Server/ServerButton.jsx

import React from "react";

export default function ServerButton({ server, isSelected, onClick }) {
 return (
  <button
   className={`w-full p-2 rounded ${
    isSelected ? "bg-blue-200" : "bg-gray-100 hover:bg-gray-200"
   } focus:outline-none`}
   onClick={onClick}
  >
   {/* Server Icon Placeholder */}
   <div className="w-6 h-6 bg-gray-300 rounded-full mx-auto">
    {/* TODO: Replace with server profile image */}
   </div>
  </button>
 );
}
