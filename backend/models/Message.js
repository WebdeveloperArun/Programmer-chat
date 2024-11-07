import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
 {
  channel: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "Channel",
   required: true,
  },
  user: {
   type: String,
   required: true,
  },
  content: {
   type: String,
   required: [true, "Please add message content"],
  },
  file: {
   type: String, // URL of the uploaded file
   default: "",
  },
  timestamp: {
   type: Date,
   default: Date.now,
  },
 },
 { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
