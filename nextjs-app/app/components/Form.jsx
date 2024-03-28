"use client";

import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <div className="container">
      <h2 className="display-3 text-center my-3">{type} Form</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            className="form-control"
            type="text"
            required
            value={post.title}
            placeholder="Enter title"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </p>
        <p>
          <textarea
            className="form-control"
            value={post.description}
            required
            placeholder="Enter description"
            onChange={(e) => setPost({ ...post, description: e.target.value })}
          ></textarea>
        </p>
        <p>
          <input
            className="form-control"
            type="text"
            required
            value={post.tags}
            placeholder="Enter tags (seperated by comma)"
            onChange={(e) => setPost({ ...post, tags: e.target.value })}
          />
        </p>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? `${type}ing...` : type}
        </button>{" "}
        <Link href="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default Form;
