import { BlogState } from "../context/BlogContext";
import FileBase64 from "react-file-base64";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UpdateBlog() {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/blog/${id}`)
      .then((res) => setupdateBlog(res?.data?.data));
  }, []);
  const [updateBlog, setupdateBlog] = useState({
    title: "",
    content: "",
    datePublished: "",
    author: "",
    tags: "",
    image: "",
    comments: "",
    likes: 0,
  });
  console.log(updateBlog);

  const { dispatch } = BlogState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updateBlog);
    if (window.confirm("Are you sure to update the post")) {
      dispatch({ type: "UPDATE_BLOG", payload: updateBlog });
      window.alert("Post updated successfully");
      window.location.href = "/";
    }
  };
  return (
    <div className="container">
      <h2 className="display-3 text-center mb-4">Update Post</h2>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={updateBlog?.title}
            className="form-control"
            onChange={(e) =>
              setupdateBlog({ ...updateBlog, title: e.target.value })
            }
          />
        </p>
        <p>
          <textarea
            name="content"
            placeholder="Enter blog description"
            value={updateBlog?.content}
            className="form-control"
            onChange={(e) =>
              setupdateBlog({ ...updateBlog, content: e.target.value })
            }
          ></textarea>
        </p>
        <p>
          <input
            type="text"
            name="author"
            placeholder="Enter author name"
            value={updateBlog?.author}
            className="form-control"
            onChange={(e) =>
              setupdateBlog({ ...updateBlog, author: e.target.value })
            }
          />
        </p>
        <p>
          <input
            type="text"
            name="tags"
            placeholder="Enter tags seperated by comma"
            value={updateBlog?.tags}
            className="form-control"
            onChange={(e) =>
              setupdateBlog({ ...updateBlog, tags: e.target.value.split(",") })
            }
          />
        </p>
        <p>
          <FileBase64
            type="file"
            name="image"
            value={updateBlog?.image}
            className="form-control"
            onDone={({ base64 }) => {
              // console.log(base64);
              setupdateBlog({ ...updateBlog, image: base64 });
            }}
          />
        </p>
        <p>
          <input
            type="number"
            name="likes"
            placeholder="Enter any number"
            value={updateBlog?.likes}
            className="form-control"
            onChange={(e) =>
              setupdateBlog({ ...updateBlog, likes: +e.target.value })
            }
          />
        </p>
        <p>
          <input
            type="text"
            name="comments"
            placeholder="Enter comment"
            value={updateBlog?.comments[0]?.text}
            className="form-control"
            onChange={(e) =>
              setupdateBlog({
                ...updateBlog,
                comments: [
                  {
                    text: e.target.value,
                    author: updateBlog.author,
                    date: new Date().toISOString(),
                  },
                ],
              })
            }
          />
        </p>
        <button onClick={handleSubmit} className="btn btn-primary">
          Update
        </button>{" "}
        <button className="btn btn-danger">Clear</button>{" "}
        <Link className="btn btn-success" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
          </svg>
        </Link>
      </form>
    </div>
  );
}

export default UpdateBlog;
