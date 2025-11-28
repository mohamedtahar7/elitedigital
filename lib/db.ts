import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URL!;

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  const db = await mongoose.connect(MONGODB_URI);
  isConnected = db.connections[0].readyState === 1;
}
