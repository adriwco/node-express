import { Task } from '../types/Task';
import { ResultSetHeader } from 'mysql2';
import connectionMysql from './connection';

const getAllModel = async (): Promise<Task[]> => {
  const [tasks] = await connectionMysql.execute('SELECT * FROM tasks');
  return tasks as Task[];
};

const createTask = async (task: Task): Promise<Task> => {
  const title = task.title;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';
  const [result] = await connectionMysql.execute<ResultSetHeader>(query, [title, 'pendente', dateUTC]);

  // Return details of the created task
  const createdTask: Task = {
    id: result.insertId,
    title,
    status: 'pendente',
    created_at: dateUTC
  };

  return createdTask;
};

export {
  getAllModel,
  createTask
};
