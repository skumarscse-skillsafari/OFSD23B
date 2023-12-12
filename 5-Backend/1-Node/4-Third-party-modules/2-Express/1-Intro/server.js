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

app.get("*", (req, res) => {
  res.status(404).send(`
    <h2>Page not found</h2>
    <a href="/">Back to home page</a>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
