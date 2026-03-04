import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/users", userController.createUserController);

router.post('/login', userController.loginUserController);

export const userRouters = router;