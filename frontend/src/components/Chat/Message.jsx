// frontend/src/components/Chat/Message.jsx

import React from "react";

export default function Message({ message }) {
 return (
  <div className="mb-4">
   {/* Message User */}
   <div className="font-semibold text-gray-600">{message.user}</div>
   {/* Message Content */}
   <div className="text-gray-900">{message.content}</div>
   {/* Message Timestamp */}
   <div className="text-xs text-gray-500">
    {new Date(message.timestamp).toLocaleString()}
   </div>
  </div>
 );
}
