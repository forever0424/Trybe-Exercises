import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import UsersRoutes from './routes/user.routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(UsersRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});