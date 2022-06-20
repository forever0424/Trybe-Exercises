import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validationUser from '../middlewares/user.middleware';

const router = Router();

const userController = new UserController();

router.get('/users', userController.getAll);

router.get('/users/:id', userController.getUserById);

router.post('/users', validationUser, userController.create);

router.put('/users/:id', userController.update);

router.delete('/users/:id', userController.delete);

export default router;