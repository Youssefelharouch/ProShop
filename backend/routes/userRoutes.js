import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userControllers.js';
import { protect,admin } from '../middleware/authModdleware.js';

const router = express.Router();


router.route('/').post(registerUser).get(protect,admin,getUsers);
router.post('/auth', authUser);

//protected
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);

//admin
router.route('/:id').delete(protect,admin,deleteUser).get(protect,admin,getUserById).put(protect,admin,updateUser);

export default router;