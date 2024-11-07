import express from "express";
import {
 registerUser,
 authUser,
 getUserProfile,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Register User
router.post("/signup", upload.single("profileImage"), registerUser);

// Authenticate User
router.post("/login", authUser);

// Get User Profile
router.get("/profile", protect, getUserProfile);

export default router;
