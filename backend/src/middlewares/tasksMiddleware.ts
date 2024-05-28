import { Request, Response, NextFunction } from 'express';

const validateBody = (req: Request, res: Response, next: NextFunction) => {
  const { title } = req.body;

  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'O campo "title" é obrigatório e deve ser uma string não vazia.' });
  }

  next();
};

export { validateBody };
