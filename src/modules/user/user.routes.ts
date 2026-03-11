import { Router } from "express";
import { userController } from "./user.controller";
import { auth, isAdmin } from "../../middleware/auth.middleware";

const router = Router();

router.post("/users", userController.createUserController);

router.post('/login', userController.loginUserController);

router.get("/get-me", auth, userController.getMeController);

router.put("/update-profile",auth, isAdmin, userController.updateUserController);

router.put("/change-password", auth, isAdmin, userController.updatePasswordController);

// verify otp 
router.post("/forgot-password", userController.forgotPasswordController);
router.post("/verify-otp", userController.verifyOTPController);
router.put("/reset-password", userController.resetPasswordController);

export const userRouters = router;