import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export default async function connectDB() {
    try {
       const conn = await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}
