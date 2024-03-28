"use client";
import Form from "../components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const CreatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [post, setPost] = useState({
    title: "",
    description: "",
    tags: "",
  });
  const [submitting, isSetSubmitting] = useState(false);

  const createPost = async (e) => {
    e.preventDefault();
    isSetSubmitting(true);
    try {
      const response = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          author: session?.user.id,
          title: post.title,
          description: post.description,
          tags: post.tags.split(",").map((tag) => tag.trim()),
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      isSetSubmitting(false);
    }
  };
  return (
    <Form
      type="Create"
      submitting={submitting}
      post={post}
      setPost={setPost}
      handleSubmit={createPost}
    />
  );
};

export default CreatePost;
