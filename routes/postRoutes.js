import express from 'express';
import * as postController from '../controllers/PostController.js';
const router = express.Router();


// Tüm kullanıcıları çekmek için GET endpoint'i
router.get('/', postController.getAllPosts);

// Diğer route endpoint'lerini eklemeyi unutmayın

export default router;
