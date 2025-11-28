"use server";

import { connectDB } from "@/lib/db";
import Message from "@/models/Message";
import Review from "@/models/Review";

export async function createMessage(
  name: string,
  email: string,
  message: string
) {
  await connectDB();

  const msg = await Message.create({
    name: name,
    email: email,
    message: message,
  });

  return JSON.parse(JSON.stringify(msg));
}
export async function createReview(name: string, content: string) {
  await connectDB();

  const review = await Review.create({
    name: name,
    content: content,
  });

  return JSON.parse(JSON.stringify(review));
}
export async function getReviews() {
  await connectDB();

  const reviews = await Review.find().sort({ createdAt: -1 }).lean();

  return JSON.parse(JSON.stringify(reviews));
}
