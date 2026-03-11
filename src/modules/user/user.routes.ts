import { Router } from "express";
import { userController } from "./user.controller";
import { auth } from "../../middleware/auth.middleware";

const router = Router();

router.post("/users", userController.createUserController);

router.post('/login', userController.loginUserController);

router.get("/get-me", auth, userController.getMeController);

router.put("/update-profile",auth, userController.updateUserController);

router.put("/change-password", auth, userController.updatePasswordController);

export const userRouters = router;