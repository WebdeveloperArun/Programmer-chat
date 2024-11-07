import asyncHandler from "express-async-handler";
import Channel from "../models/Channel.js";
import Server from "../models/Server.js";

// @desc    Create a new channel in a server
// @route   POST /api/servers/:serverId/channels
// @access  Private
const createChannel = asyncHandler(async (req, res) => {
 const { name } = req.body;
 const server = await Server.findById(req.params.serverId);

 if (server) {
  const channel = await Channel.create({
   name,
   server: server._id,
  });

  server.channels.push(channel._id);
  await server.save();

  res.status(201).json(channel);
 } else {
  res.status(404);
  throw new Error("Server not found");
 }
});

// @desc    Get all channels in a server
// @route   GET /api/servers/:serverId/channels
// @access  Private
const getChannels = asyncHandler(async (req, res) => {
 const server = await Server.findById(req.params.serverId).populate("channels");

 if (server) {
  res.json(server.channels);
 } else {
  res.status(404);
  throw new Error("Server not found");
 }
});

// Additional channel-related controllers can be added here (e.g., deleteChannel)

export { createChannel, getChannels };
