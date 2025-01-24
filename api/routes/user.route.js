import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// Define the test route
router.get('/test', test);

// Update route with dynamic parameter
router.post('/update/:id', verifyToken, updateUser);

export default router;
