import { Router } from 'express';
import UserController from '../controllers/User';

const router = Router();

router.post('/registration', UserController.createUser);

export default router;
