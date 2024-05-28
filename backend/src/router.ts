import express from 'express';
import { getAllController, createTaskController } from './controllers/tasksController';
import { validateBody } from './middlewares/tasksMiddleware';

const router = express.Router();

router.get('/tasks', getAllController);
router.post('/tasks', validateBody, createTaskController);

export default router;
