import { CreateUserController } from "./../modules/users/useCases/createUser/CreateUserController";
import { Router } from "express";

const createUserController = new CreateUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);

export { userRoutes };
