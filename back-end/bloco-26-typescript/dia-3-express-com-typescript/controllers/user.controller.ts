import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';

class UserController {
  constructor(private userService = new UserService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(StatusCodes.OK).json(users);
  };

  public getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.userService.getUserById(Number(id));
    res.status(StatusCodes.OK).json(user);
  };

  public create = async (req: Request, res: Response) => {
    const userCreated = await this.userService.create(req.body);
    res.status(StatusCodes.CREATED).json(userCreated);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userUpdated = await this.userService.update(Number(id), req.body);
    res.status(StatusCodes.OK).json(userUpdated);
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.userService.delete(Number(id));
    res.status(StatusCodes.NO_CONTENT).end();
  };
}

export default UserController;