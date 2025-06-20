// routes/productsRoutes.js

import express from "express";
import {
  getProductStats,
  getAllProducts,
  getProducts,
  postProducts,
  putProducts,
  deleteProducts,
} from "../controllers/productsControllers.js";

import validateProduct from "../middleware/validateProduct.js";

const router = express.Router();

router.post("/", validateProduct, postProducts);
router.put("/:id", validateProduct, putProducts);
router.get("/stats", getProductStats);
router.get("/", getAllProducts);
router.get("/:id", getProducts);
router.delete("/:id", deleteProducts);

export default router;
