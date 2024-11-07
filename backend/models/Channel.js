import mongoose from "mongoose";

const channelSchema = new mongoose.Schema(
 {
  name: {
   type: String,
   required: [true, "Please add a channel name"],
  },
  server: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "Server",
   required: true,
  },
  messages: [
   {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
   },
  ],
 },
 { timestamps: true }
);

const Channel = mongoose.model("Channel", channelSchema);

export default Channel;
