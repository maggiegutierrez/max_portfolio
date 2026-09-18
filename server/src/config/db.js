import mongoose from "mongoose";

let cachedConnection = null;

export async function connectDB() {
  if (cachedConnection) return cachedConnection;

  cachedConnection = await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected");
  return cachedConnection;
}
