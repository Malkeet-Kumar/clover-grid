import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  const uri = process.env.MONGO_DB_URI as string;
  if (!uri) throw new Error("MONGO_URI not set in environment");

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error", err);
    throw err;
  }
}
