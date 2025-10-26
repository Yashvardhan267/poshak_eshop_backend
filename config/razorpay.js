import Razorpay from "razorpay";

export const razorpayInstance = (process.env.ENABLE_RAZOR_PAY == true)
  ? new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    }) 
  : null;
