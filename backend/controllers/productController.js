import asyncHandler from "../middleware/asyncHandler.js";
import Products from "../models/productModel.js";

// @descriptiop Fetch all products 
// @route api/product
// @access Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Products.find({});
  res.json(products);
});

// @descriptiop Fetch  a signe product
// @route api/product/:id
// @access Public

const getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if(product)res.json(product);
  else {
    res.status(404);
    throw new Eroor ('Product not found');
  }

});

export  {getProducts,getSingleProduct}