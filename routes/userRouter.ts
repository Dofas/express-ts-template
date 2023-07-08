import { Router } from 'express';
import UserController from '../controllers/user/User';
import { checkUserData } from '../middleware/user';

const router = Router();

router.post('/create', checkUserData, UserController.createUser);
router.get('/get/:email', UserController.getUserByEmail);

export default router;
