import  express  from "express";
const router = express.Router();
import {getProducts,getSingleProduct,createProduct} from '../controllers/productController.js';
import { protect,admin } from '../middleware/authModdleware.js';


router.route('/').get(getProducts);
router.route('/:id').get(getSingleProduct);
router.route('/').get(getProducts).post(protect, admin, createProduct);



export default router