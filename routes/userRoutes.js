import express from 'express';
import * as userController from '../controllers/UserController.js';
const router = express.Router();


// Tüm kullanıcıları çekmek için GET endpoint'i
router.get('/', userController.getAllUsers);

// Diğer route endpoint'lerini eklemeyi unutmayın

export default router;
