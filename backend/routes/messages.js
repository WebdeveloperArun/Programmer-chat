import express from "express";
import { sendMessage, getMessages } from "../controllers/messageController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router({ mergeParams: true });

// Get all messages in a channel
router.get("/", protect, getMessages);

// Send a new message in a channel
router.post("/", protect, upload.single("file"), sendMessage);

export default router;
