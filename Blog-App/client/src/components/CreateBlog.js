import { useState } from "react";
import { Link } from "react-router-dom";
import { BlogState } from "../context/BlogContext";
import FileBase64 from "react-file-base64";
const CreateBlog = () => {
  const [createPost, setCreatePost] = useState({
    title: "",
    content: "",
    datePublished: new Date().toISOString(),
    author: "",
    tags: "",
    image: "",
    comments: "",
    likes: 0,
  });
  const { dispatch } = BlogState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(createPost);
    dispatch({ type: "CREATE_BLOG", payload: createPost });
    window.alert("Post created successfully");
    window.location.href = "/";
  };

  return (
    <div className="container">
      <h2>Create Post</h2>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={createPost.title}
            className="form-control"
            onChange={(e) =>
              setCreatePost({ ...createPost, title: e.target.value })
            }
          />
        </p>
        <p>
          <textarea
            name="content"
            placeholder="Enter blog description"
            value={createPost.content}
            className="form-control"
            onChange={(e) =>
              setCreatePost({ ...createPost, content: e.target.value })
            }
          ></textarea>
        </p>
        <p>
          <input
            type="text"
            name="author"
            placeholder="Enter author name"
            value={createPost.author}
            className="form-control"
            onChange={(e) =>
              setCreatePost({ ...createPost, author: e.target.value })
            }
          />
        </p>
        <p>
          <input
            type="text"
            name="tags"
            placeholder="Enter tags seperated by comma"
            value={createPost.tags}
            className="form-control"
            onChange={(e) =>
              setCreatePost({ ...createPost, tags: e.target.value.split(",") })
            }
          />
        </p>
        <p>
          <FileBase64
            type="file"
            name="image"
            value={createPost.image}
            className="form-control"
            onDone={({ base64 }) => {
              // console.log(base64);
              setCreatePost({ ...createPost, image: base64 });
            }}
          />
        </p>
        <p>
          <input
            type="number"
            name="likes"
            placeholder="Enter any number"
            value={createPost.likes}
            className="form-control"
            onChange={(e) =>
              setCreatePost({ ...createPost, likes: +e.target.value })
            }
          />
        </p>
        <p>
          <input
            type="text"
            name="comments"
            placeholder="Enter comment"
            // value={createPost.comments}
            className="form-control"
            onChange={(e) =>
              setCreatePost({
                ...createPost,
                comments: [
                  {
                    text: e.target.value,
                    author: createPost.author,
                    date: new Date().toISOString(),
                  },
                ],
              })
            }
          />
        </p>
        <button onClick={handleSubmit} className="btn btn-primary">
          Create
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
};

export default CreateBlog;
