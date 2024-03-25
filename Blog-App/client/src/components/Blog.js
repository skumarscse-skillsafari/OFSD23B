import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Blog() {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/blog/${id}`)
      .then((res) => setBlog(res?.data?.data));
  }, []);
  const [blog, setBlog] = useState();
  console.log(blog);
  return (
    <div className="container">
      <h2 className="display-3 text-center mb-4">Blog Component</h2>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <img src={blog?.image} alt="blog-image" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{blog?.title}</h5>
              <p className="card-text">{blog?.content}</p>
              <p className="card-text">Tags: {blog?.tags?.join(", ")}</p>
              <p className="card-text">Author: {blog?.author}</p>
              <p className="card-text">
                Date Published:{" "}
                {new Date(blog?.datePublished).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <h2 className="display-5 text-center mt-4">Comments</h2>
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                {" "}
                <u>
                  <i>{blog?.comments[0]?.author} Says:</i>
                </u>
              </p>
              <h5 className="card-title">{blog?.comments[0]?.text}</h5>

              <p className="card-text">
                Comment date:{" "}
                {new Date(blog?.comments[0]?.date).toLocaleDateString()}
              </p>
              <hr />
              <textarea
                className="form-control"
                placeholder="Add new comments..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
