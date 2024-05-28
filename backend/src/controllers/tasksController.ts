import { Request, Response } from 'express';
import { getAllModel, createTask } from '../models/tasksModel';

const getAllController = async (_req: Request, res: Response) => {
  try {
    const tasks = await getAllModel();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createTaskController = async (req: Request, res: Response) => {
  try {
    const createdTask = await createTask(req.body);
    return res.status(201).json(createdTask);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export {
  getAllController,
  createTaskController,
};
