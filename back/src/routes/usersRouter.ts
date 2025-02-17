import { Router } from "express";
import { getUserbyId, getAllUsers, createUser, login } from "../controllers/usersController";

const usersRouter: Router = Router();

usersRouter.get("", getAllUsers);

usersRouter.get("/:id", getUserbyId);

usersRouter.post("/register", createUser)

usersRouter.post("/login", login)

export  default usersRouter;