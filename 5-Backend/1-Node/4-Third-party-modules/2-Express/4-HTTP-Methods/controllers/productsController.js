import { products } from "../data.js";

export const getAllProducts = (req, res) => {
  res.status(200).json({ success: true, data: products });
};

export const getSingleProduct = (req, res) => {
  const { id } = req.params;
  const findProduct = products.find((product) => product.id === Number(id));
  if (!findProduct) {
    res
      .status(200)
      .json({ success: true, message: `Product with the id: ${id} not found` });
  } else {
    res.status(200).json({ success: true, data: findProduct });
  }
};

export const createProduct = (req, res) => {
  // console.log(req.body);
  const id = Math.random().toString(16).slice(2);
  const newProducts = {
    id,
    ...req.body,
  };
  // console.log(newProducts);
  res.status(201).json({
    success: true,
    message: `Product added successfully and the id is ${id}`,
    data: newProducts,
  });
};

export const updateProduct = (req, res) => {
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
    let updatedProducts = products.map((product) => {
      if (product.id === Number(id)) {
        return {
          id: product.id,
          title: newProduct.title,
          description: newProduct.description,
          price: newProduct.price,
          category: newProduct.category,
          image: newProduct.image,
        };
      } else {
        return product;
      }
    });
    // console.log(updatedProducts);
    res
      .status(200)
      .json({ success: true, message: "Product updated successfully" });
  }
};

export const deleteProduct = (req, res) => {
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
};
