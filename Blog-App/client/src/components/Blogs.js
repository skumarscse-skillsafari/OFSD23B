import { BlogState } from "../context/BlogContext";

const Blogs = () => {
  const { state, dispatch } = BlogState();
  console.log(state);
  return <h2>Blogs Component</h2>;
};

export default Blogs;
