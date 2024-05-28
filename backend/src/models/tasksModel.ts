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

  const createdTask: Task = {
    id: result.insertId,
    title,
    status: 'pendente',
    created_at: dateUTC,
  };

  return createdTask;
};

const updateTask = async (id: number, task: Task): Promise<number> => {
  const { title, status } = task;
  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
  const [result] = await connectionMysql.execute<ResultSetHeader>(query, [title, status, id]);
  return result.affectedRows;
};

const deleteTask = async (id: number): Promise<number> => {
  const query = 'DELETE FROM tasks WHERE id = ?';
  const [result] = await connectionMysql.execute<ResultSetHeader>(query, [id]);
  return result.affectedRows;
};

export {
  getAllModel,
  createTask,
  updateTask,
  deleteTask,
};
