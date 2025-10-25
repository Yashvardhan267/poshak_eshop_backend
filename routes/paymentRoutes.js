import express from "express";
import { createOrder, verifyPayment } from "../controllers/paymentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: payments
 *   description: Payment processing with Razorpay
 */


/**
 * @swagger
 * /api/payment/order:
 *   post:
 *     summary: Create a Razorpay payment order
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 150000
 *     responses:
 *       200:
 *         description: Razorpay order created successfully
 */
router.post("/order", protect, createOrder);       // Create payment order

/** 
 * @swagger
 * /api/payment/verify:
 *   post:
 *     summary: Verify Razorpay payment signature
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Payment verified successfully
 */
router.post("/verify", protect, verifyPayment);   // Verify payment signature

export default router;
