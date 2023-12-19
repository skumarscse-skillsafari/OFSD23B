import express from "express";
import productsRouter from "./routes/productsRoute.js";
import usersRouter from "./routes/userRoutes.js";
const app = express();
const PORT = 5000;

app.use(express.static("./Client"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
