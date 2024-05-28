import { Request, Response } from 'express';
import { getAllModel, createTask, updateTask, deleteTask } from '../models/tasksModel';

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

const updateTaskController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const affectedRows = await updateTask(Number(id), req.body);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteTaskController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const affectedRows = await deleteTask(Number(id));
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export {
  getAllController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
};
