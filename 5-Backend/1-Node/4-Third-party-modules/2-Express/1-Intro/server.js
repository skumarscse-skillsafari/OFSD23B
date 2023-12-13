// Import
// const express = require("express");
import express from "express";
import products from "./data.js";
// Initialize
const app = express();
const PORT = 5000;

// Route
/*
    app.httpMethodName("reqUrl", (req, res) => {
        // response
    })
    httpMethods => GET, POST, PUT, PATCH, DELETE
    app.get("/", (req, res) => {
        // response
    })
*/
// http://localhost:5000
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Express.js</h1>");
});
// http://localhost:5000/about
app.get("/about", (req, res) => {
  res.status(200).send("<h1>This is About Page</h1>");
});

// http://localhost:5000/products => Getting all the products
app.get("/products", (req, res) => {
  let newProducts = products.map(({ id, title, description, price }) => {
    return {
      id,
      title,
      description,
      price,
    };
  });
  //   console.log(newProducts);
  res.status(200).json({ success: true, data: newProducts });
});

// http://localhost:5000/products/:id => Getting single product
// Multiple params
// app.get("/products/:id/review/:reviewid", (req, res) => {
//   console.log(req.params);
// });

// Single params
// http://localhost:5000/products/:id => Getting single product
app.get("/products/:id", (req, res) => {
  // console.log(req.params); // {id: "1"}
  const { id } = req.params;
  let singleProduct = products.find((product) => product.id === Number(id));
  if (!singleProduct) {
    res
      .status(400)
      .json({ success: true, message: `Product with id: ${id} not found` });
  } else {
    res.status(200).json({ success: true, data: singleProduct });
  }
});

// query
// key=value
// http://localhost:5000/products?catagory=value&limit=number
// http://localhost:5000/products?catagory=mens&limit=3
app.get("/products/api/query", (req, res) => {
  // console.log(req.query);
  const { category, limit } = req.query;
  let newProducts = [...products];
  // console.log(newProducts)
  let filteredProducts = newProducts.filter((product) =>
    product.category.startsWith(category)
  );
  // console.log(filteredProducts);
  if (filteredProducts.length <= 0) {
    res.status(200).json({
      success: true,
      message: `No products found for the search query: ${category}`,
    });
  } else {
    if (filteredProducts.length > limit) {
      let limitedProducts = filteredProducts.slice(0, limit);
      res.status(200).json({ success: true, data: limitedProducts });
    } else {
      res.status(200).json({ success: true, data: filteredProducts });
    }
  }
});

app.get("*", (req, res) => {
  res.status(404).send(`
    <h2>Page not found</h2>
    <a href="/">Back to home page</a>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
