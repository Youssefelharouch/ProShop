import express from "express";
const router = express.Router();
import {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authModdleware.js";
import checkObjectId from "../middleware/checkObjectId.js";

router.route("/").get(getProducts);
router.get('/top', getTopProducts);
router
  .route("/:id")
  .get(checkObjectId,getSingleProduct)
  .put(protect, admin,checkObjectId ,updateProduct)
  .delete(protect, admin,checkObjectId ,deleteProduct);
  
router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect,checkObjectId ,createProductReview);


export default router;
