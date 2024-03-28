"use client";
import Form from "../../components/Form";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const UpdatePost = ({ params }) => {
  const router = useRouter();

  const [post, setPost] = useState({
    title: "",
    description: "",
    tags: "",
  });
  const [submitting, isSetSubmitting] = useState(false);
  useEffect(() => {
    async function getPost() {
      const res = await fetch(`/api/post/${params?.id}`, {
        method: "GET",
      });
      const data = await res.json();
      setPost(data);
    }
    getPost();
  }, []);
  const updatePost = async (e) => {
    e.preventDefault();
    isSetSubmitting(true);
    try {
      const response = await fetch(`/api/post/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({
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
      type="Update"
      submitting={submitting}
      post={post}
      setPost={setPost}
      handleSubmit={updatePost}
    />
  );
};

export default UpdatePost;
