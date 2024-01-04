import axios from "axios";
const blogReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      // console.log(action);
      return action.payload.data;
    case "CREATE_BLOG":
      axios.post("http://localhost:5000/api/v1/blog", action.payload);
      return [...state, action.payload];
    case "UPDATE_BLOG":
      axios.put(
        `http://localhost:5000/api/v1/blog/${action.payload._id}`,
        action.payload
      );
      return state.map((blog) =>
        blog._id === action.payload._id ? action.payload : blog
      );
    case "DELETE_BLOG":
      axios.delete(
        `http://localhost:5000/api/v1/blog/${action.payload}`,
        action.payload
      );
      return state.filter((blog) => blog._id !== action.payload);

    default:
      return state;
  }
};

export default blogReducer;
