import express from 'express';
import { getAllController, createTaskController, updateTaskController, deleteTaskController } from './controllers/tasksController';
import { validateBody } from './middlewares/tasksMiddleware';

const router = express.Router();

router.get('/tasks', getAllController);
router.post('/tasks', validateBody, createTaskController);
router.put('/tasks/:id', validateBody, updateTaskController);
router.delete('/tasks/:id', deleteTaskController);

export default router;
