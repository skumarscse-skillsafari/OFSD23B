import Post from "@/app/models/postModel";
import { connectDB } from "@/utils/database";

export const POST = async (req, res) => {
  const { author, title, description, tags } = await req.json();
  try {
    await connectDB();
    const newPost = await new Post({ author, title, description, tags });
    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};
