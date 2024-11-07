import asyncHandler from "express-async-handler";
import Message from "../models/Message.js";
import Channel from "../models/Channel.js";
import cloudinary from "../config/cloudinary.js";

// @desc    Send a message in a channel
// @route   POST /api/channels/:channelId/messages
// @access  Private
const sendMessage = asyncHandler(async (req, res) => {
 const { content } = req.body;
 const channel = await Channel.findById(req.params.channelId);

 if (channel) {
  // Handle file upload if exists
  let fileUrl = "";
  if (req.file) {
   const result = await cloudinary.uploader.upload(req.file.path, {
    folder: "messageFiles",
    resource_type: "auto",
   });
   fileUrl = result.secure_url;
  }

  const message = await Message.create({
   channel: channel._id,
   user: req.user.name,
   content,
   file: fileUrl,
  });

  channel.messages.push(message._id);
  await channel.save();

  res.status(201).json(message);
 } else {
  res.status(404);
  throw new Error("Channel not found");
 }
});

// @desc    Get all messages in a channel
// @route   GET /api/channels/:channelId/messages
// @access  Private
const getMessages = asyncHandler(async (req, res) => {
 const channel = await Channel.findById(req.params.channelId).populate(
  "messages"
 );

 if (channel) {
  res.json(channel.messages);
 } else {
  res.status(404);
  throw new Error("Channel not found");
 }
});

// Additional message-related controllers can be added here (e.g., deleteMessage)

export { sendMessage, getMessages };
