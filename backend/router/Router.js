import { Router } from 'express';
import * as controllers from '../server/controllers.js';

export const usersRouter = Router();

usersRouter.get('/login', controllers.getAllUsersController);
usersRouter.post('/login', controllers.createUserController);
// usersRouter.put('/login', controllers.getAllUsersController);
usersRouter.delete('/login/:id', controllers.deleteUserController);

// usersRouter.get('/register',
//     controllers.
// );
