import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/users", userController.createUserController);

export const userRouters = router;