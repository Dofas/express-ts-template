import { Router } from 'express';
import UserController from '../controllers/User';
import { checkUserData } from '../middleware/user';

const router = Router();

router.post('/create', checkUserData, UserController.createUser);

export default router;
