import express from 'express';
import * as userController from '../controllers/UserController.js';
const router = express.Router();


// Tüm kullanıcıları çekmek için GET endpoint'i
router.get('/', userController.getAllUsers);

// Kullanıcı oluşturmak için POST endpoint'i
router.post('/register', userController.registerUser);

router.post('/login', function(req, res) {
        userController.login
}
    );

// Diğer route endpoint'lerini eklemeyi unutmayın

export default router;
