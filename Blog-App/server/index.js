import express from "express";
import blogRoute from "./routes/blogRoute.js";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
const app = express();

app.use(cors());
app.use(express.urlencoded({ limit: "5mb", extended: true }));
app.use(express.json());
app.use("/api/v1/blog", blogRoute);
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Blog Application</h1>");
});

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running in http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
