// frontend/src/components/Chat/ChatArea.jsx

import React from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";

export default function ChatArea({ selectedChannel, messages, onSendMessage }) {
 return (
  <div className="flex-1 flex flex-col bg-gray-300">
   {/* Channel Header */}
   <div className="p-4 border-b border-gray-400">
    <h2 className="font-semibold text-gray-600">#{selectedChannel?.name}</h2>
   </div>

   {/* Messages */}
   <div className="flex-1 p-4 overflow-y-auto">
    {messages.map((message) => (
     <Message key={message.id} message={message} />
    ))}
   </div>

   {/* Chat Input */}
   <ChatInput onSendMessage={onSendMessage} selectedChannel={selectedChannel} />
  </div>
 );
}
