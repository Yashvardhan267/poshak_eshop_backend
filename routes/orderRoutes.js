import express from "express";
import { createOrder, getUserOrders } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order creation and retrieval for users
 */


/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order (User must be logged in)
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     product:
 *                       type: string
 *                     qty:
 *                       type: number
 *               totalPrice:
 *                 type: number
 *               paymentInfo:
 *                 type: object
 *     responses:
 *       200:
 *         description: Order created successfully
 *       401:
 *         description: Unauthorized (no or invalid token)
 */
router.post("/", protect, createOrder);

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get logged-in user's orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of user’s orders
 *       401:
 *         description: Unauthorized (no or invalid token)
 */
router.get("/", protect, getUserOrders);

export default router;
