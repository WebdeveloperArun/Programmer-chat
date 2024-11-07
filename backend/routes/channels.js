import express from "express";
import {
 createChannel,
 getChannels,
} from "../controllers/channelController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router({ mergeParams: true });

// Get all channels in a server
router.get("/", protect, getChannels);

// Create a new channel in a server
router.post("/", protect, createChannel);

export default router;
