import { Request, Response } from 'express';
import { userService } from './user.service';

const createUserController = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const result = await userService.createUser(userData);

        res.status(201).json({
            success: true,
            message: "User created successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Something went wrong",
        });
    }
};

// loin user 
const loginUserController = async (req: Request, res: Response) => {
    try {
        const loginData = req.body;
        const result = await userService.loginUser(loginData);

        res.status(200).json({
            success: true,
            message: "Login successful!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Login failed!",
        });
    }
};

export const userController = {
    createUserController,
    loginUserController,
};