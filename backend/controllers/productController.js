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
    throw new Error('Product not found');
  }

});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Products({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});


export  {getProducts,getSingleProduct,createProduct}