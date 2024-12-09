import express from "express";
import { createOrder, getOrderByEmail } from "../controller/orderController.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/email/:email", getOrderByEmail);

export default router;
