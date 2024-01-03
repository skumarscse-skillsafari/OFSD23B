import { BlogState } from "../context/BlogContext";

const Blogs = () => {
  const { state, dispatch } = BlogState();
  // console.log(state);
  return (
    <div className="App-header">
      <h2>Blogs Component</h2>
    </div>
  );
};

export default Blogs;
