import { Request, Response } from "express";
import ITurns from "../interfaces/ITurns";
import { getTurnsService, getTurnbyIdService, cancelTurnService, createTurnService } from "../services/turnsService";


export const getAllTurns = async (req: Request, res: Response) => {
    const turns: ITurns[] = await getTurnsService();
     res.status(200).json(turns);
}

export const getTurnbyId = async (req: Request, res: Response) => {
    const turn: ITurns | void = await getTurnbyIdService(req.body);
     res.status(200).json(turn);
}

export const createTurn = async (req: Request, res: Response) => {
    const answer: void = await createTurnService(req.body);
         res.status(200).json(answer);
}

export const cancelTurn = async (req: Request, res: Response) => {
    const answer: void = await cancelTurnService(req.body);
         res.status(200).json(answer);
}