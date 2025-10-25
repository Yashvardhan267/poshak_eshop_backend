import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        qty: Number,
      },
    ],
    totalPrice: Number,
    paymentInfo: Object,
    orderStatus: { type: String, default: "Processing" },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
