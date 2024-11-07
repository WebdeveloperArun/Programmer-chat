import mongoose from "mongoose";

const serverSchema = new mongoose.Schema(
 {
  name: {
   type: String,
   required: [true, "Please add a server name"],
  },
  owner: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "User",
   required: true,
  },
  profileImage: {
   type: String,
   default: "",
  },
  channels: [
   {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Channel",
   },
  ],
  followers: {
   type: Number,
   default: 0,
  },
 },
 { timestamps: true }
);

const Server = mongoose.model("Server", serverSchema);

export default Server;
