import { Request, Response } from "express";
import { createUserService, getUserbyIdService, getUsersService } from "../services/usersService";
import IUser from "../interfaces/IUser";
import { validateCredentialService } from "../services/credentialsService";

export const getAllUsers = async (req: Request, res: Response) => {
    const users: IUser[] = await getUsersService();
     res.status(200).json(users);
}

export const getUserbyId = async (req: Request, res: Response) => {
    const user: IUser | void = await getUserbyIdService(req.body);
     res.status(200).json(user);
}

export const createUser = async (req: Request, res: Response) => {
    const answer: void = await createUserService(req.body);
     res.status(200).json(answer);
}

export const login = async (req: Request, res: Response) => {
    const answer: number | null = await validateCredentialService(req.body);
     res.status(200).json(answer);
}