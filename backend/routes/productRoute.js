import  express  from "express";
// import products from '../data/products.js'
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Products from "../models/productModel.js";


router.get("/",asyncHandler (async (req, res) => {
  const products = await Products.find({});
  res.json(products);
}));

router.get("/:id",asyncHandler (async (req, res) => {
  const product = await Products.findById(req.params.id);
  if(product)res.json(product);
  res.status(404).json({message:"Product not found"});  
}));



export default router