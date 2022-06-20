import { NextFunction, Request, Response } from 'express';

class errorHandler extends Error {
  status?: number;
}

export default (err: errorHandler, _req: Request, res: Response, next: NextFunction) => {
  if (err.status) return res.status(err.status).json({ message: err.message });

  return res.status(500).json({ message: err.message });
};