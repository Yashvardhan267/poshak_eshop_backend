import Order from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  const newOrder = new Order({ ...req.body, user: req.user._id });
  const saved = await newOrder.save();
  res.json(saved);
};

export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate("products.product");
  res.json(orders);
};
