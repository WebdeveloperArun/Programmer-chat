import asyncHandler from "express-async-handler";
import Server from "../models/Server.js";
import Channel from "../models/Channel.js";
import cloudinary from "../config/cloudinary.js";

// @desc    Create a new server
// @route   POST /api/servers
// @access  Private
const createServer = asyncHandler(async (req, res) => {
 const { name } = req.body;

 // Handle profile image upload
 let profileImage = "";
 if (req.file) {
  const result = await cloudinary.uploader.upload(req.file.path, {
   folder: "serverImages",
   width: 300,
   crop: "scale",
  });
  profileImage = result.secure_url;
 }

 const server = await Server.create({
  name,
  owner: req.user._id,
  profileImage,
  followers: 1, // Owner is the first follower
 });

 res.status(201).json(server);
});

// @desc    Get all servers
// @route   GET /api/servers
// @access  Private
const getServers = asyncHandler(async (req, res) => {
 const ownedServers = await Server.find({ owner: req.user._id });
 const joinedServers = await Server.find({
  followers: { $gte: 1 },
  owner: { $ne: req.user._id },
 });

 res.json({ ownedServers, joinedServers });
});

// @desc    Join a server
// @route   POST /api/servers/:id/join
// @access  Private
const joinServer = asyncHandler(async (req, res) => {
 const server = await Server.findById(req.params.id);

 if (server) {
  server.followers += 1;
  await server.save();
  res.json({ message: "Joined the server successfully" });
 } else {
  res.status(404);
  throw new Error("Server not found");
 }
});

// Additional server-related controllers can be added here (e.g., deleteServer)

export { createServer, getServers, joinServer };
