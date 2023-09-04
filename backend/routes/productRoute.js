import express from "express";
const router = express.Router();
import {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authModdleware.js";

router.route("/").get(getProducts);
router
  .route("/:id")
  .get(getSingleProduct)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
  
router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);


export default router;
