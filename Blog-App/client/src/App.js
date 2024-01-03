import logo from "./logo.svg";
import "./App.css";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import CreateBlog from "./components/CreateBlog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
