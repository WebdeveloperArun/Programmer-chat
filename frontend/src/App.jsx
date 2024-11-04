// frontend/src/App.jsx

"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "./components/Common/Layout";
import Navbar from "./components/Common/Navbar.jsx";

export default function App() {
 // Initial State Setup (Design Only)
 const [ownedServers, setOwnedServers] = useState([
  {
   id: "1",
   name: "Coding Hub",
   channels: [
    { id: "1", name: "frontend" },
    { id: "2", name: "backend" },
    { id: "3", name: "devops" },
   ],
   followers: 120,
   profileImage: "/placeholder.svg",
  },
 ]);
 const [joinedServers, setJoinedServers] = useState([
  {
   id: "2",
   name: "Algorithm Masters",
   channels: [
    { id: "4", name: "dynamic-programming" },
    { id: "5", name: "graphs" },
    { id: "6", name: "sorting" },
   ],
   followers: 85,
   profileImage: "/placeholder.svg",
  },
 ]);
 const [allServers, setAllServers] = useState([
  ...ownedServers,
  ...joinedServers,
  {
   id: "3",
   name: "Web Dev Community",
   channels: [
    { id: "7", name: "html-css" },
    { id: "8", name: "javascript" },
    { id: "9", name: "react" },
   ],
   followers: 250,
   profileImage: "/placeholder.svg",
  },
  {
   id: "4",
   name: "Data Science Hub",
   channels: [
    { id: "10", name: "machine-learning" },
    { id: "11", name: "data-visualization" },
    { id: "12", name: "statistics" },
   ],
   followers: 180,
   profileImage: "/placeholder.svg",
  },
 ]);
 const [selectedServer, setSelectedServer] = useState(null);
 const [selectedChannel, setSelectedChannel] = useState(null);
 const [messages, setMessages] = useState({
  1: [
   {
    id: "1",
    user: "Alice",
    content: "Hey, has anyone used the new React 18 features?",
    timestamp: "2023-05-20T10:00:00Z",
   },
   {
    id: "2",
    user: "Bob",
    content: "Yes, the new concurrent rendering is amazing!",
    timestamp: "2023-05-20T10:05:00Z",
   },
  ],
  2: [
   {
    id: "1",
    user: "Charlie",
    content: "What's the best way to handle authentication in a Node.js app?",
    timestamp: "2023-05-20T11:00:00Z",
   },
  ],
  // Additional channels...
 });
 const [searchQuery, setSearchQuery] = useState("");
 const [showSearchResults, setShowSearchResults] = useState(false);

 const { serverId, channelId } = useParams();
 const navigate = useNavigate();

 useEffect(() => {
  const server = allServers.find((s) => s.id === serverId);
  if (server) {
   setSelectedServer(server);
   const channel = server.channels.find((c) => c.id === channelId);
   if (channel) {
    setSelectedChannel(channel);
   } else if (server.channels.length > 0) {
    setSelectedChannel(server.channels[0]);
    navigate(`/servers/${server.id}/channels/${server.channels[0].id}`);
   }
  } else if (allServers.length > 0) {
   const firstServer = allServers[0];
   setSelectedServer(firstServer);
   setSelectedChannel(firstServer.channels[0]);
   navigate(`/servers/${firstServer.id}/channels/${firstServer.channels[0].id}`);
  }
 }, [serverId, channelId, allServers, navigate]);

 // Event Handlers (Design Only)
 const handleServerSelect = (server, isOwned) => {
  setSelectedServer(server);
  if (server.channels.length > 0) {
   setSelectedChannel(server.channels[0]);
   navigate(`/servers/${server.id}/channels/${server.channels[0].id}`);
  } else {
   navigate(`/servers/${server.id}/channels/`);
  }
 };

 const handleChannelSelect = (channel) => {
  setSelectedChannel(channel);
  if (selectedServer) {
   navigate(`/servers/${selectedServer.id}/channels/${channel.id}`);
  }
 };

 const handleSendMessage = (e) => {
  e.preventDefault();
  // TODO: Implement message sending functionality
 };

 return (
  <Layout
   ownedServers={ownedServers}
   joinedServers={joinedServers}
   selectedServer={selectedServer}
   onServerSelect={handleServerSelect}
   selectedChannel={selectedChannel}
   onChannelSelect={handleChannelSelect}
   messages={messages}
   onSendMessage={handleSendMessage}
  />
 );
}
