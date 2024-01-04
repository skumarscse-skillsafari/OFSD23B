import { useState } from "react";
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
  };

  return (
    <>
      <h2>Create Blog</h2>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={createPost.title}
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
        <button onClick={handleSubmit}>Create</button> <button>Clear</button>{" "}
        <button>Cancel</button>
      </form>
    </>
  );
};

export default CreateBlog;
