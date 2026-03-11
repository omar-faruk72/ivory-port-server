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

const getMeController = async (req: Request, res: Response) => {
    try {
        const email = (req as any).user.email; // মিডলওয়্যার থেকে পাওয়া ইমেইল
        const result = await userService.getMe(email);

        res.status(200).json({
            success: true,
            message: "User fetched successfully!",
            data: result,
          });
    } catch (err: any) {
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
};

const updateUserController = async (req: Request, res: Response) => {
    try {
        const email = (req as any).user.email; // টোকেন থেকে নেওয়া
        const updateData = req.body;
        
        const result = await userService.updateUserByEmail(email, updateData);

        res.status(200).json({
            success: true,
            message: "Profile updated successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Could not update profile",
        });
    }
};

const updatePasswordController = async (req: Request, res: Response) => {
    try {
        const email = (req as any).user.email;
        const result = await userService.updatePassword(email, req.body);

        res.status(200).json({
            success: true,
            message: "Password updated successfully!",
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Failed to update password",
        });
    }
};


// veryfiy otp 
const forgotPasswordController = async (req: Request, res: Response) => {
    try {
        await userService.forgotPassword(req.body.email);
        res.status(200).json({ success: true, message: "OTP sent to your email!" });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({ success: false, message: err.message });
    }
};

const verifyOTPController = async (req: Request, res: Response) => {
    try {
        const { email, otp } = req.body;
        await userService.verifyOTP(email, otp);
        res.status(200).json({ success: true, message: "OTP verified!" });
    } catch (err: any) {
        res.status(err.statusCode || 400).json({ success: false, message: err.message });
    }
};

const resetPasswordController = async (req: Request, res: Response) => {
    try {
        const { email, newPassword } = req.body;
        
        // পাসওয়ার্ড আপডেট করার সার্ভিস কল
        await userService.resetPassword(email, newPassword);

        res.status(200).json({
            success: true,
            message: "Password reset successfully! You can now login.",
        });
    } catch (err: any) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Could not reset password",
        });
    }
};
export const userController = {
    createUserController,
    loginUserController,
    getMeController,
    updateUserController,
    updatePasswordController,
    forgotPasswordController,
    verifyOTPController,
    resetPasswordController,
};