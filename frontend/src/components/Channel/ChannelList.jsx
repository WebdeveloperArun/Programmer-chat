// frontend/src/components/Channel/ChannelList.jsx

import React from "react";
import ChannelButton from "./ChannelButton";

export default function ChannelList({
 channels,
 selectedChannel,
 onChannelSelect,
 isOwned,
}) {
 return (
  <div className="flex flex-col">
   {/* List of Channels */}
   {channels.map((channel) => (
    <ChannelButton
     key={channel.id}
     channel={channel}
     isSelected={channel.id === selectedChannel?.id}
     onClick={() => onChannelSelect(channel)}
    />
   ))}

   {/* Channel Management Buttons */}
   {isOwned && (
    <div className="mt-4 flex space-x-2">
     {/* Add Channel Button */}
     <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded">
      {/* Plus Icon */}
      <svg
       className="h-4 w-4 mr-1"
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
      Add
     </button>
     {/* Delete Channel Button */}
     <button className="flex items-center bg-red-300 hover:bg-red-400 text-gray-800 px-2 py-1 rounded">
      {/* Trash Icon */}
      <svg
       className="h-4 w-4 mr-1"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3"
       />
      </svg>
      Delete
     </button>
    </div>
   )}
  </div>
 );
}
