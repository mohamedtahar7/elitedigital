import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URL!;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      family: 4, // Forces the driver to use IPv4
    });
    console.log("MongoDB Connected...");
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};
