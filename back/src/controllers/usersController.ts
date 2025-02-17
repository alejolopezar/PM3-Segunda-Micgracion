import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
     res.send(console.log("Listado de ususarios"));
}

export const getUserbyId = async (req: Request, res: Response) => {
    res.send(console.log("Usuario por Id"));
}

export const createUser = async (req: Request, res: Response) => {
    res.send(console.log("registro de un nuevo usuario"));
}

export const login = async (req: Request, res: Response) => {
    res.send(console.log("Login del usuario a la aplicacion"));
}