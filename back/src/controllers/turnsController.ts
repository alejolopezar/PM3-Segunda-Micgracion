import { Request, Response } from "express";

export const getAllTurns = async (req: Request, res: Response) => {
    res.send(console.log("Listado de todos los turno de todos los ususarios"));
}

export const getTurnbyId = async (req: Request, res: Response) => {
    res.send(console.log("obtenre el detalle de un turno por Id"));
}

export const createTurn = async (req: Request, res: Response) => {
    res.send(console.log("registro de un nuevo turno"));
}

export const cancelTurn = async (req: Request, res: Response) => {
    res.send(console.log("Cancelar un turno"));
}