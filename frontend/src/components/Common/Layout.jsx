// frontend/src/components/Common/Layout.jsx

import React from "react";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar";
import ChatArea from "../Chat/ChatArea";

export default function Layout({
 ownedServers,
 joinedServers,
 selectedServer,
 onServerSelect,
 selectedChannel,
 onChannelSelect,
 messages,
 onSendMessage,
}) {
 return (
  <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
   {/* Navbar Component */}
   <Navbar />

   <div className="flex flex-1 overflow-hidden">
    {/* Sidebar Component */}
    <Sidebar
     ownedServers={ownedServers}
     joinedServers={joinedServers}
     selectedServer={selectedServer}
     onServerSelect={onServerSelect}
     selectedChannel={selectedChannel}
     onChannelSelect={onChannelSelect}
    />

    {/* Main Chat Area */}
    <ChatArea
     selectedChannel={selectedChannel}
     messages={messages[selectedChannel.id] || []}
     onSendMessage={onSendMessage}
    />
   </div>
  </div>
 );
}
