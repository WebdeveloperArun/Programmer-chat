// frontend/src/components/Common/Sidebar.jsx

import React from "react";
import ServerList from "../Server/ServerList";
import ChannelList from "../Channel/ChannelList";

export default function Sidebar({
 ownedServers,
 joinedServers,
 selectedServer,
 onServerSelect,
 selectedChannel,
 onChannelSelect,
}) {
 return (
  <div className="flex flex-row">
   {/* Server Sidebar */}
   <div className="w-20 bg-gray-200 p-3 flex flex-col items-center overflow-y-auto">
    {/* Server List */}
    <ServerList
     ownedServers={ownedServers}
     joinedServers={joinedServers}
     selectedServer={selectedServer}
     onServerSelect={onServerSelect}
    />
   </div>

   {/* Channel Sidebar */}
   <div className="w-64 bg-gray-200 p-4 flex flex-col">
    {/* Server Name */}
    <h2 className="font-semibold mb-4 text-gray-600">{selectedServer?.name}</h2>

    {/* Channel Search */}
    <div className="relative mb-4">
     {/* Search Icon */}
     <svg
      className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
     >
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       d="M8 7l4-4m0 0l4 4m-4-4v18"
      />
     </svg>
     {/* Channel Search Input */}
     <input
      type="text"
      placeholder="Search channels"
      className="pl-10 pr-4 py-2 rounded bg-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      // TODO: Add onChange handler for channel search
     />
    </div>

    {/* Channel List */}
    <ChannelList
     channels={selectedServer?.channels || []}
     selectedChannel={selectedChannel}
     onChannelSelect={onChannelSelect}
     isOwned={selectedServer?.isOwned}
    />

    {/* TODO: Add Channel Management Buttons (Add/Delete) based on ownership */}
   </div>
  </div>
 );
}
