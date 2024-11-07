import express from "express";
import {
 createServer,
 getServers,
 joinServer,
} from "../controllers/serverController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Get all servers for the authenticated user
router.get("/", protect, getServers);

// Create a new server
router.post("/", protect, upload.single("profileImage"), createServer);

// Join a server
router.post("/:id/join", protect, joinServer);

export default router;
