// frontend/src/components/Server/ServerButton.jsx

import React from "react";

export default function ServerButton({ server, isSelected, onClick }) {
 return (
  <button
   className={`w-full p-2 rounded ${
    isSelected ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
   } focus:outline-none`}
   onClick={onClick}
  >
   {/* Server Icon Placeholder */}
   <div className="w-6 h-6 bg-gray-500 rounded-full mx-auto">
    {/* TODO: Replace with server profile image */}
   </div>
  </button>
 );
}
