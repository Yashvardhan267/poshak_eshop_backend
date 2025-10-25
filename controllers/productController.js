import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  product ? res.json(product) : res.status(404).json({ message: "Product not found" });
};

export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  const saved = await newProduct.save();
  res.json(saved);
};
