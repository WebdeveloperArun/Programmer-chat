// frontend/src/components/Server/ServerList.jsx

import React from "react";
import ServerButton from "./ServerButton";

export default function ServerList({
 ownedServers,
 joinedServers,
 selectedServer,
 onServerSelect,
}) {
 return (
  <div className="flex flex-col items-center space-y-2 w-full">
   {/* Owned Servers */}
   <div className="mb-4 w-full">
    <h3 className="text-xs text-gray-400 mb-2 text-center">Your Servers</h3>
    {ownedServers.map((server) => (
     <ServerButton
      key={server.id}
      server={server}
      isSelected={server.id === selectedServer?.id}
      onClick={() => onServerSelect(server, true)}
     />
    ))}
   </div>

   {/* Separator */}
   <div className="w-full border-t border-gray-600 my-2"></div>

   {/* Joined Servers */}
   <div className="w-full">
    <h3 className="text-xs text-gray-400 mb-2 text-center">Joined Servers</h3>
    {joinedServers.map((server) => (
     <ServerButton
      key={server.id}
      server={server}
      isSelected={server.id === selectedServer?.id}
      onClick={() => onServerSelect(server, false)}
     />
    ))}
   </div>
  </div>
 );
}
