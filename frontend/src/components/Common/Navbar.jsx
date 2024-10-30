// frontend/src/components/Common/Navbar.jsx

import React from "react";

export default function Navbar() {
 return (
  <nav className="bg-gray-800 p-4 flex items-center justify-between">
   {/* Logo or Title */}
   <div className="flex items-center space-x-4">
    <h1 className="text-xl font-bold text-white">ProgrammerChat</h1>
    {/* Search Bar */}
    <div className="relative">
     {/* Search Icon */}
     <svg
      className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
     >
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       d="M21 21l-4.35-4.35M16.65 16.65A7 7 0 111 8a7 7 0 0115.65 8.65z"
      />
     </svg>
     {/* Search Input */}
     <input
      type="text"
      placeholder="Search servers"
      className="pl-10 pr-4 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      // TODO: Add onChange handler for search functionality
     />
    </div>
   </div>
   {/* Action Buttons */}
   <div className="flex items-center space-x-4">
    {/* Create Server Button */}
    <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-gray-100 px-3 py-2 rounded">
     {/* Plus Icon */}
     <svg
      className="h-4 w-4 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
     >
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       d="M12 4v16m8-8H4"
      />
     </svg>
     Create Server
    </button>
    {/* Logout Button */}
    <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-gray-100 px-3 py-2 rounded">
     {/* Logout Icon */}
     <svg
      className="h-4 w-4 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
     >
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
      />
     </svg>
     Logout
    </button>
   </div>
  </nav>
 );
}
