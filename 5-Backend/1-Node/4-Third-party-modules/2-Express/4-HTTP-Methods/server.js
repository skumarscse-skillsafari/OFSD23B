import express from "express";
import products from "./data.js";
const app = express();
const PORT = 5000;

app.use(express.json());

// http://localhost:5000
app.get("/", (req, res) => {
  res.status(200).send(`
        <h2>Welcome to products page</h2>
        <a href="/api/v1/products">Go to products</a>
    `);
});

// GET
// http://localhost:5000/api/v1/products
app.get("/api/v1/products", (req, res) => {
  res.status(200).json({ success: true, data: products });
});
// GET
// http://localhost:5000/api/v1/products/:id
app.get("/api/v1/products/:id", (req, res) => {
  const { id } = req.params;
  const findProduct = products.find((product) => product.id === Number(id));
  if (!findProduct) {
    res
      .status(200)
      .json({ success: true, message: `Product with the id: ${id} not found` });
  } else {
    res.status(200).json({ success: true, data: findProduct });
  }
});

// POST
// http://loclhost:5000/api/v1/products/create
app.post("/api/v1/products/create", (req, res) => {
  const id = Math.random().toString(16).slice(2);
  const newProducts = {
    id,
    ...req.body,
  };
  //   console.log(newProducts);
  res.status(201).json({
    success: true,
    message: `Product added successfully and the id is ${id}`,
  });
});

// PUT
// id
// updatedData
// http://localhost:5000/api/v1/products/:id
app.put("/api/v1/products/:id", (req, res) => {
  const { id } = req.params;
  const findProduct = products.find((product) => product.id === Number(id));
  if (!findProduct) {
    res
      .status(200)
      .json({ success: true, message: `Product with the id: ${id} not found` });
  } else {
    const newProduct = {
      id: findProduct.id,
      ...req.body,
    };
    // console.log(newProduct);
    const findindex = products.findIndex(
      (product) => product.id === Number(id)
    );
    // console.log(findindex);
    const updatedProducts = products.splice(findindex, 1, newProduct);
    console.log(updatedProducts);
    // res
    //   .status(200)
    //   .json({ success: true, message: "Product updated successfully" });
  }
});

// Delete
// id
// http://localhost:5000/api/v1/products/:id
app.delete("/api/v1/products/:id", (req, res) => {
  const { id } = req.params;
  const findProduct = products.find((product) => product.id === Number(id));
  if (!findProduct) {
    res
      .status(200)
      .json({ success: true, message: `Product with the id: ${id} not found` });
  } else {
    const updatedProducts = products.filter(
      (product) => product.id !== Number(id)
    );
    console.log(updatedProducts);
    res.status(200).json({
      success: true,
      message: `Product with the id: ${id} deleted successfully`,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
