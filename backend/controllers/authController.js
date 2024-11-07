import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import cloudinary from "../config/cloudinary.js";

// @desc    Register a new user
// @route   POST /api/auth/signup
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
 const { name, email, password } = req.body;

 // Check if user exists
 const userExists = await User.findOne({ email });

 if (userExists) {
  res.status(400);
  throw new Error("User already exists");
 }

 // Handle profile image upload
 let profileImage = "";
 if (req.file) {
  const result = await cloudinary.uploader.upload(req.file.path, {
   folder: "profileImages",
   width: 150,
   crop: "scale",
  });
  profileImage = result.secure_url;
 }

 // Create user
 const user = await User.create({
  name,
  email,
  password,
  profileImage,
 });

 if (user) {
  res.status(201).json({
   _id: user.id,
   name: user.name,
   email: user.email,
   profileImage: user.profileImage,
   token: generateToken(user._id),
  });
 } else {
  res.status(400);
  throw new Error("Invalid user data");
 }
});

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
 const { email, password } = req.body;

 // Find user by email
 const user = await User.findOne({ email }).select("+password");

 if (user && (await user.matchPassword(password))) {
  res.json({
   _id: user.id,
   name: user.name,
   email: user.email,
   profileImage: user.profileImage,
   token: generateToken(user._id),
  });
 } else {
  res.status(401);
  throw new Error("Invalid email or password");
 }
});

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
 const user = await User.findById(req.user._id);

 if (user) {
  res.json({
   _id: user.id,
   name: user.name,
   email: user.email,
   profileImage: user.profileImage,
  });
 } else {
  res.status(404);
  throw new Error("User not found");
 }
});

export { registerUser, authUser, getUserProfile };
