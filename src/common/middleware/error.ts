import { Request, Response } from 'express';
import { Error } from '../../../types/declarations';

export default function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars, @typescript-eslint/ban-types
  next: Function
) {
  const errors = [{ message: err.message }];
  return res.status(err.status || 500).json({ errors });
}
