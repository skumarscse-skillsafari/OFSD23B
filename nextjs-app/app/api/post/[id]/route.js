import Post from "@/app/models/postModel";
import { connectDB } from "@/utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const post = await Post.findById(params.id);
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};

export const PUT = async (req, { params }) => {
  const { author, title, description, tags } = await req.json();
  try {
    await connectDB();

    const updatePost = await Post.findByIdAndUpdate(
      params.id,
      {
        $set: {
          title,
          description,
          tags,
        },
      },
      { new: true }
    );
    return new Response(JSON.stringify(updatePost), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectDB();

    await Post.findByIdAndDelete(params.id);
    return new Response("Post deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};
