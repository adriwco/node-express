import express from 'express';
import { getAllController, createTaskController } from './controllers/tasksController';

const router = express.Router();

router.get('/tasks', getAllController);
router.post('/tasks', createTaskController);

export default router;
