import Post from "@/app/models/postModel";
import { connectDB } from "@/utils/database";
export const GET = async (req, res) => {
  try {
    await connectDB();
    const posts = await Post.find();

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 200 });
  }
};
