import express from "express";
const app = express();
const PORT = 5000;

app.use(express.static("./Course-Website"));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Course Website</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
