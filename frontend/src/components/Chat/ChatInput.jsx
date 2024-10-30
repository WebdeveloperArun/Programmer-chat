// frontend/src/components/Chat/ChatInput.jsx

import React from "react";

export default function ChatInput({ onSendMessage, selectedChannel }) {
 return (
  <form
   onSubmit={onSendMessage}
   className="p-4 border-t border-gray-600 flex items-center"
  >
   {/* Message Input */}
   <input
    type="text"
    name="message"
    placeholder={`Message #${selectedChannel.name}`}
    className="flex-grow bg-gray-600 text-gray-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-500"
    // TODO: Add onChange handler if needed
   />
   {/* File Upload Button */}
   <label htmlFor="file-upload" className="cursor-pointer ml-2">
    <input id="file-upload" type="file" className="hidden" />
    {/* Image Icon */}
    <svg
     className="h-5 w-5 text-gray-300 hover:text-gray-100"
     xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke="currentColor"
    >
     <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7a2 2 0 012-2h3.586a2 2 0 011.414.586L12 9.172l2.586-2.586a2 2 0 011.414-.586H19a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
     />
    </svg>
   </label>
   {/* Send Message Button */}
   <button
    type="submit"
    className="ml-2 bg-gray-600 hover:bg-gray-500 text-gray-100 p-2 rounded"
   >
    {/* Send Icon */}
    <svg
     className="h-5 w-5"
     xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke="currentColor"
    >
     <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7-7 7M5 12h16"
     />
    </svg>
   </button>
  </form>
 );
}
