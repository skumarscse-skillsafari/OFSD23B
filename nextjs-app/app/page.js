"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchAllPosts() {
      const res = await fetch("/api/post");
      const data = await res.json();
      setPosts(data);
    }
    fetchAllPosts();
  }, []);
  const handleDelete = async (e) => {
    e.preventDefault();
    if (confirm("Are you sure to delete the post?")) {
      const { id } = e.target;
      const response = await fetch(`/api/post/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Post deleted successfully");
        window.location.reload();
      } else {
        alert("Something went wrong");
      }
    }
  };
  return (
    <div className="container">
      <h2 className="display-3 text-center mt-3">Posts Component</h2>
      {posts.map((post) => {
        return (
          <Card style={{ width: "18rem" }} key={post._id}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.description}</Card.Text>
              <Card.Text>Tags: {post.tags.join(",")}</Card.Text>
              <Link
                href={`/update-post/${post?._id}`}
                className="btn btn-primary"
              >
                Update
              </Link>{" "}
              <Button variant="danger" onClick={handleDelete} id={post._id}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
