import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from "./components/Blogs";
import NavCom from "./components/Navbar";
import CreateBlog from "./components/CreateBlog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import UpdateBlog from "./components/UpdateBlog";

function App() {
  return (
    <div className="App">
      <Router>
        <NavCom />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/:id" element={<Blog />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/update/:id" element={<UpdateBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
