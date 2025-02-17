import { Router } from "express";
import { getTurnbyId, getAllTurns, cancelTurn, createTurn } from "../controllers/turnsController";

const turnsRouter: Router = Router();

turnsRouter.get("", getAllTurns)

turnsRouter.get("/:id", getTurnbyId)

turnsRouter.post("/schedule", createTurn)

turnsRouter.put("/cancel", cancelTurn)

export  default turnsRouter;