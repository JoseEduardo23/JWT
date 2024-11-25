import { Router } from 'express';
import { loginUserController, registerUserController } from '../controllers/userController.js';

const router = Router();

// Rutas públicas
router.post('/users/register', registerUserController);
router.post('/users/login', loginUserController);

// Exportación por defecto
export default router;