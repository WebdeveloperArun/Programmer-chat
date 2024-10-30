// frontend/src/components/Channel/ChannelButton.jsx

import React from "react";

export default function ChannelButton({ channel, isSelected, onClick }) {
 return (
  <button
   className={`flex items-center w-full px-3 py-2 rounded-tl-lg rounded-bl-lg ${
    isSelected ? "bg-blue-600" : "hover:bg-gray-700"
   } focus:outline-none`}
   onClick={onClick}
  >
   {/* Hash Icon */}
   <svg
    className="h-4 w-4 mr-2 text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
   >
    <path
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={2}
     d="M20 12H4"
    />
   </svg>
   <span>{channel.name}</span>
  </button>
 );
}
